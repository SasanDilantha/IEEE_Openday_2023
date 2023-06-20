import React from "react";
import OpenDayLogo from "../images/logo-2023.png";

const Gallery = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../images/IMG_Gallery/openday_2022/", false, /\.jpg/)
  );

  return (
    <React.Fragment>
      <div
        className="fixed top-0 -z-50 h-screen w-screen bg-slate-900 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 7, 27, 0.8) 0%, rgba(54, 57, 66, 0.6)) , " +
            `url(${OpenDayLogo})`,
        }}
      ></div>
      <div className="pt-10 text-center">
        <h2 className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent md:text-5xl">
          OPENDAY - 2022
        </h2>
      </div>

      <div className="mx-5 my-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {(() => {
          const options = [];

          for (let i = 1; i <= 57; i++) {
            options.push(
              <img
                src={images[i + ".jpg"]}
                alt={i}
                key={i}
                className="rounded-md"
              />
            );
          }

          return options;
        })()}
      </div>
    </React.Fragment>
  );
};

export default Gallery;
