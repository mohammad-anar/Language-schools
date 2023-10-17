const Banner = () => {
  return (
    <div className="min-h-screen banner">
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between px-12 h-screen">
        <div className="text-white sm:flex-1 text-center sm:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Welcome! to Digital-store.
          </h2>
          <p className="text-base mb-4 md:w-full text-justify">
            Digital Store is your one-stop destination for all things digital.
            Explore a wide range of digital products, from software and apps to
            e-books and multimedia content, all at your fingertips.
          </p>
          <button className="btn btn-md btn-outline text-red-600 hover:bg-transparent border-red-600 hover:border-white">
            Learn more
          </button>
        </div>
        <div className="sm:flex-1 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Banner;
