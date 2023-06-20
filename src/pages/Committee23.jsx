import React from "react";
import OpenDayLogo from "../images/logo-2023.png";
import Milani from "../images/Y_Milani.png";
import OCPOsition from "../components/OCPosition";

const Committee23 = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const program = importAll(
    require.context("../images/Program_Team/", false, /.\png/)
  );

  const logistics = importAll(
    require.context("../images/Logistics_Team/", false, /.\png/)
  );

  const design = importAll(
    require.context("../images/Design_Team/", false, /.\png/)
  );

  const publicity = importAll(
    require.context("../images/Publicity_Team/", false, /.\png/)
  );

  const secretary = importAll(
    require.context("../images/Secretary_Team/", false, /.\png/)
  );

  const web = importAll(require.context("../images/Web_Team/", false, /.\png/));
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
          Members Of Our OC - 2023
        </h2>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Project-Chair
        </h3>
        <div className="my-10 flex justify-center">
          <OCPOsition
            image={Milani}
            person={"Milani"}
            position={"Project Chair"}
          />
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Program Team
        </h3>
        <div className="flex justify-center">
          <div className="gap my-10 grid w-fit grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
            <OCPOsition
              image={program["Achila_Thilakarathna.png"]}
              person={"Achila Thilakarathna<"}
              position={"Program Team Lead"}
            />

            <OCPOsition
              image={program["Lakruwan_Jayathissa.png"]}
              person={"Lakruwan Jayathissa"}
              position={"Program Team Member"}
            />

            <OCPOsition
              image={program["maheesha_dekum.png"]}
              person={"Maheesha Dekum"}
              position={"Program Team Member"}
            />

            <OCPOsition
              image={program["Thilini_Priyangika.png"]}
              person={"Thilini Priyangika"}
              position={"Program Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Design Team
        </h3>
        <div className="flex justify-center">
          <div className="gap my-10 grid w-fit grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
            <OCPOsition
              image={design["Yasith_Eranda.png"]}
              person={"Yasith Eranda"}
              position={"Design Team Lead"}
            />

            <OCPOsition
              image={design["Gihan_Vimukthi.png"]}
              person={"Gihan Vimukt"}
              position={"Design Team Member"}
            />

            <OCPOsition
              image={design["Hansi_Shaneesha.png"]}
              person={"Hansi Shaneesha"}
              position={"Design Team Member"}
            />

            <OCPOsition
              image={design["yeran_lakvidu.png"]}
              person={"Yeran Lakvid"}
              position={"Design Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Secretary Team
        </h3>
        <div className="flex justify-center">
          <div className="gap my-10 grid w-fit grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1">
            <OCPOsition
              image={secretary["Sanuvi_Lokugamage.png"]}
              person={"Sanuvi Lokugamage"}
              position={"Secretary Team Lead"}
            />

            <OCPOsition
              image={secretary["Kasunika_Rathnayaka.png"]}
              person={"Kasunika Rathnayaka"}
              position={"Secretary Team Member"}
            />

            <OCPOsition
              image={secretary["Sewmini_Rathnayaka.png"]}
              person={"Sewmini Rathnayaka"}
              position={"Secretary Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Publicity Team
        </h3>
        <div className="flex justify-center">
          <div className="gap my-10 grid w-fit grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <OCPOsition
              image={publicity["Kavindu Manahara.png"]}
              person={"Kavindu Manahara"}
              position={"Publicity Team Lead"}
            />

            <OCPOsition
              image={publicity["Shashin_Herath.png"]}
              person={"Shashin Herath"}
              position={"Publicity Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Logistics Team
        </h3>
        <div className="flex justify-center">
          <div className="gap my-10 grid w-fit grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-5 xl:grid-rows-1">
            <OCPOsition
              image={logistics["kobi.png"]}
              person={"Kobi Vijayakumar"}
              position={"Logistics Team Lead"}
            />

            <OCPOsition
              image={logistics["Niranga_Lakshan.png"]}
              person={"Niranga Lakshan"}
              position={"Logistics Team Member"}
            />

            <OCPOsition
              image={logistics["Poojitha_Dilshan.png"]}
              person={"Poojitha Dilshan"}
              position={"Logistics Team Member"}
            />

            <OCPOsition
              image={logistics["Senura_Adithya.png"]}
              person={"Senura Adithya"}
              position={"Logistics Team Member"}
            />

            <OCPOsition
              image={logistics["Tharindu_Dilshan.png"]}
              person={"Tharindu Dilshan"}
              position={"Logistics Team Member"}
            />
          </div>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-cyan-400 md:text-3xl">
          Web Team
        </h3>
        <div className="flex justify-center">
          <div className="gap my-10 grid w-fit grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <OCPOsition
              image={web["sasan.png"]}
              person={"Sasan Dilantha"}
              position={"Web Team Lead"}
            />

            <OCPOsition
              image={web["Hashini_Sulakshana.png"]}
              person={"Hashini Sulakshana"}
              position={"Web Team Member"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Committee23;
