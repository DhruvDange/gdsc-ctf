import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import LeaderBoard from "./LeaderBoard";
import QuestionTable from "./QuestionTable";
import Navbar from "./Navbar";
import bgImg from "../assets/bg-img.json";
import bgl from "../assets/bg-leaderboard.json";
import moon from "../assets/moon.json";
import haloweenrope from "../assets/haloweenrope.json";

import Lottie from "lottie-react";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <div style={{ position: "relative" }}>
      <Lottie
        animationData={bgImg}
        loop={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Lottie
        animationData={bgl}
        loop={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <Navbar onLogout={handleLogout} />

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">
          ALL CANDYS AVAILABLE HERE 🍬 🍬
        </h2>
        <div className="flex">
          <div className="w-85% pr-2">
            <QuestionTable />
          </div>
          <div className="w-1/2 ml-5">
            <LeaderBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
