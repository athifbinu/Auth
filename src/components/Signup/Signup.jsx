import React, { useEffect, useState } from "react";

import icon from "../../assets/vr-7499157_1280.jpg";
import GoogleIcon from "../../assets/google (1).png";
import GithubIcon from "../../assets/github-sign.png";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../Api/FireaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import { provider } from "../../Api/FireaseConfig";
import { GithubProvider } from "../../Api/FireaseConfig";
import { signInWithPopup } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, SetLoading] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    SetLoading(true);

    try {
      const userCredintial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredintial.user;

      const storageref = ref(storage, `ProfileImages/${Date.now() + name}`);

      const uploadTask = uploadBytesResumable(storageref, file);

      uploadTask.on(
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: name,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "user", user.uid), {
              uid: user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      console.log(user);
      SetLoading(false);
      console.log("account created");
      navigate("/home");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Account Created",
      });
    } catch (error) {
      SetLoading(false);
      console.log("somting is wrong");
      Swal.fire({
        icon: "error",
        title: "error",
        text: "Something Is Wrong",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      SetLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      localStorage.setItem(user);
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    } finally {
      SetLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      SetLoading(true);
      const result = await signInWithPopup(auth, GithubProvider);
      const user = result.user;
      console.log("User signed in:", user);
      localStorage.setItem(user);
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    } finally {
      SetLoading(false);
    }
  };

  return (
    <section className="flex first-line:items-center h-screen p-10 gap-16">
      <div className="hidden  flex-1 lg:flex ">
        <img src={icon} className="w-full rounded-xl" alt="" />
      </div>

      <div className="w-1/2 ">
        <h2 className="text-2xl font-bold mb-3">
          Enter Your detail's detail's{" "}
        </h2>
        <form className="mb-3" onSubmit={signup}>
          <div className="mb-6">
            <label
              htmlFor="Full Name"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              className="w-full text-xl px-2 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-11"
              placeholder="Enter Food Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Email"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full text-xl px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-11"
              placeholder="Enter Food Description"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-10">
            <label
              htmlFor="Mobile Number"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full text-xl px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-11"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className="relative flex items-center justify-center w-full mt-6 border border-t mb-11">
            <div className="absolute px-5 bg-white">Or</div>
          </div>

          <div className="flex justify-between gap-12">
            <motion.div
              onClick={handleGoogleSignIn}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-slate-200 hover:bg-slate-300 px-4 text-2xl rounded-lg font-medium h-11 w-1/2 cursor-pointer"
            >
              <img src={GoogleIcon} className="w-7" alt="" />
            </motion.div>

            <motion.div
              onClick={handleGithubSignIn}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-slate-200 hover:bg-slate-300 px-4 text-2xl rounded-lg font-medium h-11 w-1/2 cursor-pointer"
            >
              <img src={GithubIcon} className="w-7" alt="" />
            </motion.div>
          </div>

          <div className="mt-4">
            <span className=" block text-gray-700 text-2xl font-bold mb-4 ">
              Profile Image:
            </span>
            <input
              type="file"
              className="font-medium "
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-600  text-white px-4 text-2xl rounded-lg font-medium h-11  mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
