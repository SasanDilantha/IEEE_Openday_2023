import React from "react";
import OpenDayLogo from "../images/logo-2023.png";

const About = () => {
  return (
    <React.Fragment>
      <div
        className="-mt-2 h-[180vh] sm:h-[130vh] flex md:h-screen items-center justify-center bg-slate-900 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 7, 27, 0.8) 0%, rgba(54, 57, 66, 0.6)) ," +
            `url(${OpenDayLogo})`,
        }}
      >
        <div className="m-2 font-md max-w-3xl items-center rounded-md bg-purple-600 p-3 text-center font-kumbha text-xl text-white shadow-2xl shadow-purple-500/50 duration-300 ease-in hover:rotate-6 hover:bg-emerald-500 hover:shadow-emerald-500/50 lg:p-8">
          <p>
            UWU IEEE Student Branch is a group of passionate and dedicated
            students who are committed to promoting technology and engineering
            among the student community. The group is affiliated with the IEEE,
            which is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity.
          </p>
          <br />
          <p>
            The event will feature a variety of activities, including technical
            talks, demonstrations that showcase the latest advancements in
            technology and engineering. The event is aimed at students,
            professionals, and the general public who are interested in learning
            more about IEEE and the latest developments in technology.
          </p>
          <br />
          <p>
            Overall, the IEEE Open Day 2023 organized by UWU IEEE Student Branch
            promises to be an exciting and informative event that will provide
            attendees with a unique opportunity to learn more about IEEE, its
            activities, and the latest trends in technology.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
