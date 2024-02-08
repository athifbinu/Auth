import React from "react";
import hero from "../assets/xr-7499160_1280-removebg-preview.png";
import { Link } from "react-router-dom";
import useGetData from "../CustomHook/useGetData";

const Home = () => {
  const { data: usersData, loading } = useGetData("user");

  console.log(usersData);

  return (
    <div>
      <section className="bg-blue-100 py-36">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-5">shopping cart</h2>
            <p className="text-lg mb-6">The Heaven Of Your Dreams</p>
            <button className="bg-primary text-white hover:bg-primary hover:text-white focus:outline-none rounded-md px-4 py-2">
              <Link to="/login">Shop Now</Link>
            </button>
          </div>
          <div className="">
            <img className="h-80 rounded-xl" src={hero} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
