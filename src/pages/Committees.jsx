import React from "react";
import Card from "../components/Card";
import Com23 from "../images/b1.jpg";
import Com22 from "../images/b3.jpg";
import OpenDayLogo from "../images/logo-2023.png";

const Committees = () => {
  return (
    <React.Fragment>
      <div
        className="-mt-2 flex h-auto min-h-screen items-center justify-center bg-slate-900 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 7, 27, 0.8) 0%, rgba(54, 57, 66, 0.6)) ," +
            `url(${OpenDayLogo})`,
        }}
      >
        <div className="my-10 grid gap-5 w-fit grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <Card
            image={Com22}
            title={"Our Committee - 2022"}
            content={
              "Unveil the power of our specialized committees igniting technical brilliance and nurturing professional advancement."
            }
            link={"/committee22"}
          />

          <Card
            image={Com23}
            title={"Our Committee - 2023"}
            content={
              "Discover our dedicated committees fostering technical excellence and professional growth."
            }
            link={"/committee23"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Committees;
