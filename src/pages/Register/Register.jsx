import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Register = () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=\-[\]{};:'",.<>/?\\|]).{6,}$/;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const name = firstname + ' ' + lastname
        console.log(name, email, password);

         const isPass = regex.test(password);
         if(!isPass) {
            return alert("password must validate")
         }
    }
    return (
        <div>
            <section className="relative overflow-hidden h-[120vh]">
        <div className="z-10 relative flex flex-col h-full justify-center items-center overflow-hidden">
          <div className=" p-12 rounded-lg border-[pink] border text-sm min-w-[300px] md:w-[400px] max-w-[600px] mx-auto bg-transparent shadow-2xl shadow-green-2 border-l-[pink]">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center text-blue-800 mb-6 font-bold">
                Sign Up
              </h2>
              <label
                className="text-blue-800 inline-block pt-5 pb-1 font-bold"
                htmlFor="firstname"
              >
                First name:
              </label>
              <input
                className=" w-full text-base  bg-transparent text-white rounded-xl px-5 py-2 placeholder:text-gray-700 outline-0 block border border-blue-800"
                type="text"
                placeholder="Enter first name"
                name="firstname"
                id="firstname"
              />
              <label
                className="text-blue-800 inline-block pt-5 pb-1 font-bold"
                htmlFor="lastname"
              >
                Last name:
              </label>
              <input
                className=" w-full text-base  bg-transparent text-white rounded-xl px-5 py-2 placeholder:text-gray-700 outline-0 block border border-blue-800"
                type="text"
                placeholder="Enter last name"
                name="lastname"
                id="lastname"
              />
              <label
                className="text-blue-800 inline-block pt-5 pb-1 font-bold"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className=" w-full text-base text-white bg-transparent rounded-xl px-5 py-2 outline-0  placeholder:text-gray-700 block border border-blue-800"
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
              />
              <label
                className="text-blue-800 inline-block pt-5 pb-1 font-bold "
                htmlFor="password"
              >
                PassWord:
              </label>
              <input
                className=" w-full text-base  bg-transparent text-white placeholder:text-gray-700 rounded-xl px-5 py-2 outline-0  block border border-blue-800"
                type="password"
                placeholder="Enter your pass"
                name="password"
                id="password"
              />
              <div className="flex flex-col">
                <input
                  className="text-lg bg-blue-800 text-white font-bold border rounded-lg p-1 border-blue-800 mt-3 hover:text-white hover:border-white"
                  type="submit"
                  value={"Sign Up"}
                />
              </div>
            </form>
            <div>
              <h2 className="text-base  text-center mt-3 border-b border-blue-800">
                Sing in with
              </h2>
              <div className="flex gap-4 mt-5">
                <button className="p-2 flex items-center text-blue-600 bg-white rounded-lg gap-1 text-base">
                  <FcGoogle></FcGoogle> google
                </button>
                <button className="p-2 flex items-center text-blue-600 bg-white rounded-lg gap-1 text-base">
                  <FaTwitter></FaTwitter> twitter
                </button>
                <button className="p-2 flex items-center text-blue-600 bg-white rounded-lg gap-1 text-base">
                  <BsGithub></BsGithub> github
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="color w-[500px] blur-[200px] h-[500px] bg-red-500 absolute top-[50px] right-[40%] filter"></div>

        <div className="color blur-[200px] w-[500px] h-[500px] bg-green-500 absolute bottom-0 -left-[150px]"></div>
        <div className="color blur-[200px] w-[300px] h-[300px] bg-purple-500 absolute top-[50px]"></div>
        <div className="color blur-[180px] w-[300px] h-[300px] bg-[#b91e9f] relative top-[50%] left-[50%] "></div>
        <div className="color blur-[200px] w-[300px] h-[300px] bg-pink-500 absolute bottom-[0px] right-[0px]"></div>
      </section>
        </div>
    );
};

export default Register;