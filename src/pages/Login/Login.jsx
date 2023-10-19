import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill, BsGithub } from "react-icons/bs";
import { useState } from "react";
const Login = () => {
    const [show, setShow] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    const handleShow = () => {
        setShow(!show);
      }
  return (
    <div>
      <section className="relative overflow-hidden h-[120vh]">
        <div className="z-10 relative flex flex-col h-full justify-center items-center overflow-hidden">
          <div className=" p-12 rounded-lg border-[pink] border text-sm min-w-[300px] md:w-[400px] max-w-[600px] mx-auto bg-transparent shadow-2xl shadow-green-2 border-l-[pink]">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center text-blue-800 mb-6 font-bold">
                Login
              </h2>
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
              <div className="flex items-center">
                <input
                  className=" w-full text-base  bg-transparent text-white placeholder:text-gray-700 rounded-xl px-5 py-2 outline-0  block border border-blue-800"
                  type={show ? 'text' : "password"}
                  placeholder="Enter your pass"
                  name="password"
                  id="password"
                />
                <span className="-ml-8 text-xl font-medium cursor-pointer" onClick={handleShow}>{
                    !show? <BsFillEyeFill></BsFillEyeFill>: <BsFillEyeSlashFill></BsFillEyeSlashFill>
                }</span>
              </div>
              <a className="text-blue-800 underline mt-4 inline-block">
                Forgotten password?
              </a>
              <div className="flex flex-col">
                <input
                  className="text-lg font-bold text-white border rounded-lg p-1 border-blue-800 mt-3 bg-blue-800"
                  type="submit"
                  value={"Log In"}
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

export default Login;
