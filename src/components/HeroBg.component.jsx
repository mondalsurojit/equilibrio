import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const HeroBg = ({ loadStatus }) => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const particleSystemRef = useRef(null);
    const gridRef = useRef(null);
    const animationFrameId = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [webGLSupported, setWebGLSupported] = useState(true);

    // Sync internal isLoaded state with parent component
    useEffect(() => {
        if (isLoaded) {
            loadStatus(true);
        }
    }, [isLoaded, loadStatus]);

    // Check for WebGL support
    useEffect(() => {
        const canvas = document.createElement('canvas');
        const hasWebGL = !!(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );

        setWebGLSupported(hasWebGL);

        // Set loaded state even without WebGL to show content
        if (!hasWebGL) {
            setTimeout(() => setIsLoaded(true), 500);
        }
    }, []);

    // Three.js setup for the main background, only if WebGL is supported
    useEffect(() => {
        // Skip Three.js setup if WebGL is not supported
        if (!webGLSupported) return;

        // Clean up previous scene if it exists
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
        }

        if (mountRef.current && rendererRef.current) {
            try {
                mountRef.current.removeChild(rendererRef.current.domElement);
            } catch (e) {
                console.log("Renderer cleanup");
            }
        }

        // Create renderer with a try/catch to handle failures
        let renderer;
        try {
            // Scene setup
            const scene = new THREE.Scene();
            sceneRef.current = scene;

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
                powerPreference: 'default',
                failIfMajorPerformanceCaveat: false // Allow software rendering
            });
            rendererRef.current = renderer;

            if (!mountRef.current) return;

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x050a18, 1);
            mountRef.current.appendChild(renderer.domElement);

            // Camera position
            camera.position.z = 5;

            // Create particle system with density based on screen size
            const getParticleCount = () => {
                const width = window.innerWidth;
                if (width < 640) return 1000; // sm
                if (width < 768) return 1500; // md
                if (width < 1280) return 2000; // lg and xl
                return 3000; // 2xl
            };

            const particleCount = getParticleCount();
            const particlesGeometry = new THREE.BufferGeometry();

            const particlesPositions = new Float32Array(particleCount * 3);
            const particlesSizes = new Float32Array(particleCount);

            // Scale the particle field based on screen size
            const fieldScale = window.innerWidth < 768 ? 10 : 15;

            for (let i = 0; i < particleCount * 3; i += 3) {
                particlesPositions[i] = (Math.random() - 0.5) * fieldScale;
                particlesPositions[i + 1] = (Math.random() - 0.5) * fieldScale;
                particlesPositions[i + 2] = (Math.random() - 0.5) * fieldScale;
                particlesSizes[i / 3] = Math.random() * 0.06 + 0.01;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
            particlesGeometry.setAttribute('size', new THREE.BufferAttribute(particlesSizes, 1));

            const particlesMaterial = new THREE.PointsMaterial({
                color: 0x4f8ef7,
                size: 0.1,
                transparent: true,
                sizeAttenuation: true,
                opacity: 0.7
            });

            const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
            particleSystemRef.current = particleSystem;
            scene.add(particleSystem);

            // Add grid - scale size based on screen width
            const gridSize = window.innerWidth < 768 ? 15 : 20;
            const gridDivisions = window.innerWidth < 768 ? 30 : 40;
            const grid = new THREE.GridHelper(gridSize, gridDivisions, 0x4f8ef7, 0x162447);
            gridRef.current = grid;
            grid.position.y = -3;
            grid.rotation.x = Math.PI / 6;
            scene.add(grid);

            // Animation loop for background
            const animate = () => {
                if (particleSystemRef.current && gridRef.current) {
                    // Adjust rotation speed based on device (slower on mobile)
                    const rotSpeed = window.innerWidth < 768 ? 0.0005 : 0.001;
                    particleSystemRef.current.rotation.y += rotSpeed;
                    particleSystemRef.current.rotation.z += rotSpeed / 2;
                    gridRef.current.rotation.z += rotSpeed;
                }

                renderer.render(scene, camera);
                animationFrameId.current = requestAnimationFrame(animate);
            };

            // Handle resize with responsive adjustments
            const handleResize = () => {
                // Update camera
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                // Update renderer
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            window.addEventListener('resize', handleResize);
            animate();

            // Set loaded state to enable content fade-in
            setTimeout(() => setIsLoaded(true), 500);

            return () => {
                // Proper cleanup
                if (animationFrameId.current) {
                    cancelAnimationFrame(animationFrameId.current);
                    animationFrameId.current = null;
                }

                // Remove event listener
                window.removeEventListener('resize', handleResize);

                // Dispose geometries and materials
                if (particleSystemRef.current) {
                    particleSystemRef.current.geometry.dispose();
                    particleSystemRef.current.material.dispose();
                    scene.remove(particleSystemRef.current);
                    particleSystemRef.current = null;
                }

                if (gridRef.current) {
                    gridRef.current.geometry.dispose();
                    gridRef.current.material.dispose();
                    scene.remove(gridRef.current);
                    gridRef.current = null;
                }

                // Remove renderer from DOM
                if (mountRef.current && renderer.domElement) {
                    try {
                        mountRef.current.removeChild(renderer.domElement);
                    } catch (e) {
                        console.log("Error removing renderer");
                    }
                }

                // Dispose renderer
                renderer.dispose();
            };
        } catch (error) {
            console.log("WebGL initialization error:", error);
            setWebGLSupported(false);
            // Still set content to loaded even if WebGL fails
            setTimeout(() => setIsLoaded(true), 500);
            return () => { };
        }
    }, [webGLSupported]); // Now depends on webGLSupported check

    return (
        <section className="relative h-full w-full overflow-hidden">
            {/* Three.js background canvas (only if WebGL is supported) */}
            <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full" />

            {/* Fallback background when WebGL isn't available */}
            {!webGLSupported && (
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
                    {/* Static decorative elements as fallback */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-400"></div>
                        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-purple-500"></div>
                        <div className="absolute top-1/3 left-3/4 w-1 h-1 rounded-full bg-cyan-300"></div>
                        <div className="absolute top-2/3 left-1/2 w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                </div>
            )}

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-8 sm:h-12 md:h-16 bg-gradient-to-b from-cyan-500/20 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-slate-900 to-transparent z-20 pointer-events-none"></div>
        </section>
    );
};

export default HeroBg;