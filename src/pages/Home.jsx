import React, { lazy, useEffect, useState } from "react";
import HomeImage from "../images/home-page-img.svg";
import UniImage from "../images/uni.png";
import OpenDayLogo from "../images/logo-2023.png";
import Com23 from "../images/b1.jpg";
import Com22 from "../images/b2.jpg";
const Card = lazy(() => import("../components/Card"));
const NeonCard = lazy(() => import("../components/NeonCard"));

const Home = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const time_count = async () => {
    const count = new Date("June 25, 2023 08:00:00").getTime();
    const now = new Date().getTime();
    const gap = count - now;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    // calculating
    setDay(Math.floor(gap / day));
    setHour(Math.floor((gap % day) / hour));
    setMin(Math.floor((gap % hour) / min));
    setSec(Math.floor((gap % min) / sec));
  };
  useEffect(() => {
    setInterval(time_count, 1000);
  });

  return (
    <React.Fragment>
      {/* intro */}
      <div
        className="grid grid-cols-1 grid-rows-2 gap-3 bg-slate-900 bg-cover pt-20 lg:grid-cols-2 lg:grid-rows-1"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 7, 27, 0.8) 0%, rgba(54, 57, 66, 0.6)) ," +
            `url(${OpenDayLogo})`,
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
            IEEE OPENDAY
          </h2>
          <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
            2023
          </h2>
          <h4 className="mt-5 text-center font-kumbha text-xl text-white md:text-2xl">
            For the betterment of evolving technological world explorers.
          </h4>
          <p className=" md:text-md mt-3 px-3 text-center text-sm text-white">
            Haven't registered for Open Day 2023 yet? Don't miss out, secure
            your spot by registering now.
          </p>
          <a
            href="/register"
            className="ms-3 mt-5 w-32 rounded-md bg-orange-600 px-3 py-1 font-semibold text-white duration-300 ease-in hover:bg-teal-600 md:mt-10"
          >
            Register Now
          </a>
        </div>
        <div className="flex justify-center">
          <img src={HomeImage} alt="working man" className=" max-w-xl" />
        </div>
      </div>

      {/* who we are */}
      <div className="bg-gray-800 py-10">
        <h2 className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-4xl">
          Who We Are
        </h2>

        <div className="flex flex-col items-center">
          <div className="mt-10 grid w-fit grid-cols-1 grid-rows-2 place-items-center gap-4 px-5 md:flex lg:grid-cols-2 lg:grid-rows-1">
            <Card
              image={Com23}
              title={"Our Committees"}
              content={
                "We are delighted to introduce a new cohort of IEEE UWU SB Executive Committee and The awe - inspiring Organizing Committee of IEEE Open Day 2023."
              }
              link={"/committees"}
            />

            <Card
              image={Com22}
              title={"About"}
              content={
                "Enhance your awareness of the world's largest technical professional organization..."
              }
              link={"/about"}
            />
          </div>

          <div className="mt-10 flex">
            <div className="mx-3 text-center text-white">
              <h1 className="text-3xl font-bold ">{day}</h1>
              <h3 className="font-bold italic">Day</h3>
            </div>

            <div className="mx-3 text-center text-white">
              <h1 className="text-3xl font-bold ">{hour}</h1>
              <h3 className="font-bold italic">Hour</h3>
            </div>

            <div className="mx-3 text-center text-white">
              <h1 className="text-3xl font-bold ">{min}</h1>
              <h3 className="font-bold italic">Minute</h3>
            </div>

            <div className="mx-3 text-center text-white">
              <h1 className="text-3xl font-bold ">{sec}</h1>
              <h3 className="font-bold italic">Second</h3>
            </div>
          </div>
        </div>
      </div>

      {/* why you should join with us */}
      <div
        id="benefits"
        className="flex h-[180vh] sm:h-[130vh] flex-col items-center justify-center bg-cover px-2 py-5 md:h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 7, 27, 0.8) 0%, rgba(54, 57, 66, 0.6)) , " +
            `url(${UniImage})`,
        }}
      >
        <h2 className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent md:text-4xl">
          Why You Should Join With Us
        </h2>

        <h3 className="mt-10 text-center text-xl font-bold text-white">
          Benefits of having membership inside IEEE Uva Wellassa University
          Student Branch
        </h3>

        <h4 className="mt-5 text-center text-lg text-white">
          The organizing committees of the projects conducted by the student
          branch are only allowed to be applied by the members who have taken up
          student branch membership.
        </h4>

        <div className="mt-5 grid w-fit grid-cols-1 grid-rows-4 gap-3 sm:mx-5 md:mt-10 md:grid-cols-2 md:grid-rows-2">
          
          <NeonCard
            text={
              "Only members who have obtained student branch membership are eligible to apply for positions within the organizing committees of the projects conducted by the student branch."
            }
          />
          <NeonCard
            text={
              "When you join IEEE, you gain access to a wide range of opportunities and events, both at the university level and beyond such as IMPETUS and JamborIEEE."
            }
          />
          <NeonCard
            text={
              "When you start working on your research, past seniors who have worked on topics related to your research area will be connected in order to secure support for you."
            }
          />
          <NeonCard
            text={
              "When you apply for national volunteering, you will be recommended through our student branch."
            }
          />
          <NeonCard
            text={
              "The IEEEXtreme is open for participation to those who have obtained IEEE membership (International), and similarly, obtaining student branch membership enables you to participate in Codify."
            }
          />
          <NeonCard
            text={
              "An E-certificate, including the membership number, will be issued."
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
