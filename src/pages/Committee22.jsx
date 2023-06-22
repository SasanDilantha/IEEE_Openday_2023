import React from "react";
import OpenDayLogo from "../images/logo-2023.png";
import Ashani from "../images/OC22/Ashani_Fonseka.jpg";
import OCPOsition from "../components/OCPosition";

const Committee22 = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const program = importAll(
    require.context("../images/OC22/Program_Team/", false, /.(png|jpe?g|svg)$/)
  );

  const design = importAll(
    require.context("../images/OC22/Design_Team/", false, /.(png|jpe?g|svg)$/)
  );

  const publicity = importAll(
    require.context(
      "../images/OC22/Publicity_Team/",
      false,
      /.(png|jpe?g|svg)$/
    )
  );

  const secretary = importAll(
    require.context(
      "../images/OC22/Secretary_Team/",
      false,
      /.(png|jpe?g|svg)$/
    )
  );

  const treasurer = importAll(
    require.context("../images/OC22/Treasurer/", false, /.(png|jpe?g|svg)$/)
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
          Members Of Our OC - 2022
        </h2>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Project-Chair
        </h3>
        <div className="my-10 flex justify-center">
          <OCPOsition
            image={Ashani}
            person={"Ashani Fonseka"}
            position={"Project Chair"}
          />
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Program Team
        </h3>
        <div className="flex justify-center">
          <div className="my-10 grid gap-5 w-fit grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1">
            <OCPOsition
              image={program["Ovindu_Hathnapitiya.jpg"]}
              person={"Ovindu Hathnapitiya"}
              position={"Program Team Lead"}
            />

            <OCPOsition
              image={program["Shashitha_Akalanka.jpg"]}
              person={"Shashitha Akalanka"}
              position={"Program Team Member"}
            />

            <OCPOsition
              image={program["Subhashi_De_Silva.jpg"]}
              person={"Subhashi De Silva"}
              position={"Program Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Treasurer
        </h3>
        <div className="my-10 flex justify-center">
          <OCPOsition
            image={treasurer["Wimansha_Herath.jpg"]}
            person={"Wimansha Herath"}
            position={"Treasurer"}
          />
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Design Team
        </h3>
        <div className="flex justify-center">
          <div className="my-10 grid gap-5 w-fit grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1">
            <OCPOsition
              image={design["Danindu_Perera.jpg"]}
              person={"Danindu Perera"}
              position={"Design Team Lead"}
            />

            <OCPOsition
              image={design["Tharaka_Sandaruwan.jpg"]}
              person={"Tharaka Sandaruwan"}
              position={"Design Team Member"}
            />

            <OCPOsition
              image={design["Pahan_Sithijaya.jpg"]}
              person={"Pahan Sithijaya"}
              position={"Design Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Secretary Team
        </h3>
        <div className="flex justify-center">
          <div className="my-10 grid gap-5 w-fit grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <OCPOsition
              image={secretary["Thilini_Perera.jpg"]}
              person={"Thilini Perera"}
              position={"Secretary Team Lead"}
            />

            <OCPOsition
              image={secretary["Sanjana_Attanayake.jpg"]}
              person={"Sanjana Attanayake"}
              position={"Secretary Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Publicity Team
        </h3>
        <div className="flex justify-center">
          <div className="my-10 grid gap-5 w-fit grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <OCPOsition
              image={publicity["Minidu_Chamikara.jpg"]}
              person={"Minidu Chamikara"}
              position={"Publicity Team Lead"}
            />

            <OCPOsition
              image={publicity["Mahesh_Wijerathna.png"]}
              person={"Mahesh Wijerathna"}
              position={"Publicity Team Member"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Committee22;
