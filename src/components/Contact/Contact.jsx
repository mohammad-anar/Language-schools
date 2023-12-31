import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlScreenSmartphone } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <div className="text-center flex items-center justify-center h-full">
          <div>
            <h2
              data-aos="zoom-out"
              data-aos-offset="100"
              data-aos-delay="80"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-4xl font-bold text-[tomato]"
            >
              Contact Us
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-delay="80"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-3xl font-bold text-teal-600"
            >
              on
            </p>
          </div>
        </div>
      </div>
      <div className=" my-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="border border-blue-800 rounded-xl p-6 text-center"
        >
          <FaMapLocationDot className="text-[tomato] text-4xl mx-auto mb-3"></FaMapLocationDot>
          <h2 className="text-3xl font-bold text-teal-600 mb-2">Address</h2>
          <p className="text-lg">Wahington, NY 10036, United States</p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="border border-blue-800 rounded-xl p-6 text-center"
        >
          <HiOutlineMailOpen className=" text-[tomato] text-4xl mx-auto mb-3"></HiOutlineMailOpen>
          <h2 className="text-3xl font-bold text-teal-600 mb-2">Email</h2>
          <p className="text-lg">digitalstore@gmail.com</p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="80"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="border border-blue-800 rounded-xl p-6 text-center"
        >
          <SlScreenSmartphone className=" text-[tomato] text-4xl mx-auto mb-3"></SlScreenSmartphone>
          <h2 className="text-3xl font-bold text-teal-600 mb-2">Phone</h2>
          <p className="text-lg">09336655412</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 my-6 ">
        <div className="h-full">
          <img
            data-aos="fade-up-right"
            data-aos-offset="100"
            data-aos-delay="80"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className=" order-2 lg:order-1 h-full rounded-xl shadow-lg"
            src="https://i.ibb.co/3zN7TCx/map.webp"
            alt="img"
          />
        </div>
        {/* form  */}
        <div data-aos="fade-up-left"
        data-aos-offset="100"
        data-aos-delay="80"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true" className="relative flex  flex-col bg-blue-800 order-1 lg:order-2 p-12">
          <div>
            <h2 className="text-4xl text-[tomato] font-bold b-2">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Have some suggestions or just want to say hi? Our support team are
              ready to help you 24/7.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-11 w-1/2 ">
                <input className="peer h-full w-full text-white rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none leading-tight text-[tomato] text-sm font-bold transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative h-11 w-1/2 ">
                <input className="peer h-full w-full text-white rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-bold leading-tight text-[tomato] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative h-11 w-1/2 ">
                <input className="peer h-full text-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-bold leading-tight text-[tomato] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Phone
                </label>
              </div>
              <div className="relative h-11 w-1/2 ">
                <input className="peer h-full text-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-smfont-bold leading-tight text-[tomato] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Subject
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <textarea
              className="w-full  resize-none outline-none p-2 mt-4 rounded-lg bg-transparent border text-white"
              name="textarea"
              id="textarea"
              rows="2"
              placeholder="Text here"
            ></textarea>
            <button className="text-xl btn btn-md font-bold hover:bg-transparent hover:text-[tomato] border hover:border-[tomato] border-[tomato] duration-500 text-blue-800 bg-[tomato] mt-4">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
