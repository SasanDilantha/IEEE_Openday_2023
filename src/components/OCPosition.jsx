import React from "react";

const OCPOsition = ({ image, position, person }) => {
  return (
    <React.Fragment>
      <div className="flex max-w-xs flex-col overflow-hidden rounded-xl bg-slate-700 shadow-2xl duration-200 ease-in hover:rotate-6 hover:bg-emerald-500 m-4">
        <img src={image} alt="oc cards" />
        <h3 className="px-3 text-xl font-bold text-white">{person}</h3>
        <p className="my-1 px-3 text-lg italic text-white">
          {position}
        </p>
      </div>
    </React.Fragment>
  );
};

export default OCPOsition;
