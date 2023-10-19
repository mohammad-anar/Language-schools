import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill, BsGithub } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser } = useContext(AuthContext);
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=\-[\]{};:'",.<>/?\\|]).{6,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const name = firstname + " " + lastname;
    console.log(name, email, password, photo);

    const user = {
      name,
      email,
      password,
      photo,
    };

    const isPass = regex.test(password);
    if (!isPass) {
      return toast.warn(
        "Password must have at least six character, one capital letter, and a special character",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User successfully created", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetch("http://localhost:5001/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("User added successfully on database", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message , {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      });
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <section className="relative overflow-hidden h-[180vh] md:h-[150vh] xl:h-[130vh]">
        <div className="z-10 relative flex flex-col h-full justify-center items-center overflow-hidden">
          <div className=" p-12 rounded-lg border-[pink] border text-sm min-w-[300px] md:w-[500px] max-w-[600px] mx-auto bg-transparent shadow-2xl shadow-green-2 border-l-[pink]">
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
                htmlFor="lastname"
              >
                Photo URL
              </label>
              <input
                className=" w-full text-base  bg-transparent text-white rounded-xl px-5 py-2 placeholder:text-gray-700 outline-0 block border border-blue-800"
                type="text"
                placeholder="Enter last name"
                name="photo"
                id="photo"
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
                Password:
              </label>
              <div className="flex items-center">
                <input
                  className=" w-full text-base  bg-transparent text-white placeholder:text-gray-700 rounded-xl px-5 py-2 outline-0  block border border-blue-800"
                  type={show ? "text" : "password"}
                  placeholder="Enter your pass"
                  name="password"
                  id="password"
                />
                <span
                  className="-ml-8 text-xl font-medium cursor-pointer"
                  onClick={handleShow}
                >
                  {!show ? (
                    <BsFillEyeFill></BsFillEyeFill>
                  ) : (
                    <BsFillEyeSlashFill></BsFillEyeSlashFill>
                  )}
                </span>
              </div>
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
              <div className="flex gap-4 mt-5 flex-col md:flex-row text-center">
                <button className="p-2 justify-center flex items-center text-blue-600 bg-white rounded-lg gap-1 text-base">
                  <FcGoogle></FcGoogle> google
                </button>
                <button className="p-2 justify-center flex items-center text-blue-600 bg-white rounded-lg gap-1 text-base">
                  <FaTwitter></FaTwitter> twitter
                </button>
                <button className="p-2 justify-center flex items-center text-blue-600 bg-white rounded-lg gap-1 text-base">
                  <BsGithub></BsGithub> github
                </button>
              </div>
              <p className="text-base mt-4">Already have an account? Please <Link to={'/login'} className="text-lg font-bold text-blue-800 underline ml-2 cursor-pointer">Log In</Link></p>
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
