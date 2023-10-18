const Brands = () => {
  return (
    <div className="w-[90%] mx-auto py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        All of our Brands{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl flex flex-col justify-between items-center">
          <img
            className="w-[120px] -mt-6"
            src="https://i.ibb.co/8B6BJcL/google-5968863.png"
            alt="google brand"
          />
          <h2 className="text-lg -mt-6">Google</h2>
        </div>
        <div className="bg-white p-6 rounded-xl flex flex-col justify-between items-center">
          <img
            className="w-[120px] -mt-6"
            src="https://i.ibb.co/ftz0Gwz/samsung-882747.png"
            alt="samsung brand"
          />
          <h2 className="text-lg -mt-6">Samsung</h2>
        </div>
        <div className="bg-white p-6 rounded-xl flex flex-col justify-between items-center">
          <img
            className="w-[50px]"
            src="https://i.ibb.co/PYBKZ2t/apple-logo-747.png"
            alt="Apple brand"
          />
          <h2 className="text-lg mt-4 ml-4">Apple</h2>
        </div>
        <div className="bg-white p-6 rounded-xl flex flex-col justify-between items-center">
          <img
            className="w-[100px] -mt-6"
            src="https://i.ibb.co/6sK9xNC/sony-588337.png"
            alt="Sonny brand"
          />
          <h2 className="text-lg -mt-6">Sonny</h2>
        </div>
        <div className="bg-white p-6 rounded-xl flex flex-col justify-between items-center">
          <img
            className="w-[80px]"
            src="https://i.ibb.co/DCbvBLV/intel.png"
            alt="intel brand"
          />
          <h2 className="text-lg mt-4 ">Intel</h2>
        </div>
        <div className="bg-white p-6 rounded-xl flex flex-col justify-between items-center">
          <img
            className="w-[120px] mt-4"
            src="https://i.ibb.co/Qpyjs4k/A4tech.png"
            alt="A4 tech"
          />
          <h2 className="text-lg mt-4">A4Tech</h2>
        </div>
      </div>
    </div>
  );
};

export default Brands;
