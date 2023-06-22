import React from "react";
import SBLogo from "../images/ieee_sb_logo.png";
import OpenDayLogo from "../images/white_logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center bg-blue-950">
        <div className="grid w-fit grid-cols-1 grid-rows-4 gap-4 pt-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-32">
          <div className="flex flex-col items-center">
            <img src={OpenDayLogo} alt="open day" className="w-28" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-3 text-xl font-bold text-white">Presented by</h2>
            <img
              src={SBLogo}
              alt="UWU Student Branch"
              className="w-32"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="IEEE Uva Wellassa University Student Branch"></p>
          </div>
          <div className="text-center">
            <h2 className="mb-3 text-xl font-bold text-white">Contact Us</h2>
            <p className="text-md mb-3 text-white">ieeesbuwu@gmail.com</p>
          </div>
          <div className="text-center text-white">
            <div>
              <p className="font-bold">
                Ovindu (Chairperson : IEEE UWU SB)
              </p>
              <div className="flex justify-center items-center">
                <p className="">+94 702500806</p>
                <a
                    href="http://linkedin.com/in/ovindujeewangahathnapitiya/"
                    className="mx-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                      }
                      alt={"linkedin"}
                      className="w-4 invert"
                    />
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold mt-2">
                Milani (Project-Chair : IEEE Openday 2023)
              </p>
              <div className="flex justify-center items-center">
                <p className="">+94 769847175</p>
                <a
                    href="https://www.linkedin.com/in/milani-yogeswaran-17491a206/"
                    className="mx-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                      }
                      alt={"linkedin"}
                      className="w-4 invert"
                    />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* social media */}
        <div className="mt-10 flex">
          <a
            href="https://www.linkedin.com/company/uwuieee/"
            className="mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
              }
              alt={"linkedin"}
              className="w-7 invert duration-200 ease-in hover:-translate-y-2"
            />
          </a>

          <a
            href="https://www.facebook.com/uwuieee?mibextid=ZbWKwL"
            className="mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
              }
              alt={"facebook"}
              className="w-7 invert duration-200 ease-in hover:-translate-y-2"
            />
          </a>

          <a
            href="https://instagram.com/ieee_uwu?igshid=YmMyMTA2M2Y="
            className="mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
              }
              alt={"instagram"}
              className="w-7 invert duration-200 ease-in hover:-translate-y-2"
            />
          </a>
        </div>

        <div className="mt-10 w-screen border-t-2 border-t-emerald-600 pb-2 pt-5 text-center text-white">
          &copy; IEEE OPENDAY 2023 - All Rights reserved.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
