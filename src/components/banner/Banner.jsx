const Banner = () => {
  return (
    <div className="min-h-screen banner">
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between px-12 h-screen">
        <div className="text-white sm:flex-1 text-center sm:text-left">
          <h2
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-3xl md:text-5xl font-semibold mb-6"
          >
            Welcome! to Digital-store.
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="60"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-base mb-4 md:w-full text-justify"
          >
            Digital Store is your one-stop destination for all things digital.
            Explore a wide range of digital products, from software and apps to
            e-books and multimedia content, all at your fingertips.
          </p>
          <div data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="80"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            <button className="btn btn-md btn-outline text-[tomato] hover:bg-transparent border-[tomato] hover:border-white">
              Learn more
            </button>
          </div>
        </div>
        <div className="sm:flex-1 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Banner;
