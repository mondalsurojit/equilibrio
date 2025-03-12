import NotFoundImage from '../assets/images/404error.png';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full p-40 flex flex-col justify-center items-center">
      <img src={NotFoundImage} alt="404 Not Found" width={500} height={500} />
      <h3 className="text-center text-md md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase tracking-wide mb-4 font-mechanism pt-12 border-2">
        The requested page cannot be found!
      </h3>
    </div>
  );
}

export default NotFound;
