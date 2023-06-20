import React, { useCallback, useState } from "react";
import UniImage from "../images/uni.png";
import axios from "axios";

const Register = () => {
  const [submitted, setSubmitted] = useState(false);
  const membeshipStart = () => {
    const count = new Date("June 25, 2023 08:00:00").getTime();
    const now = new Date().getTime();
    return count - now;
  };

  const form = () => {
    return (
      <div className="mt-10 max-w-5xl rounded-sm bg-[#0f172aaa] px-5 py-10 md:w-2/3">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Registration
        </h1>
        <form
          id="form"
          onSubmit={(e) => onSubmit(e)}
          className="text-white"
        >
          <div className="">
            <div className="my-2 justify-between md:flex">
              <p>
                First Name
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </p>
              <input
                type="text"
                name="First_Name"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex ">
              <span>
                Last Name
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <input
                type="text"
                name="Last_Name"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex">
              <span>
                Email Address{" "}
                <span className="text-xs font-extrabold text-red-600">*</span>
              </span>
              <input
                type="email"
                name="Email_Address"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex">
              <span>
                IEEE Membership ID{" "}
                <small className="italic">( if you have )</small>
              </span>
              <input
                type="text"
                name="Membership_ID"
                id=""
                className="w-full rounded-md bg-slate-600 p-1 focus:outline-none md:w-2/3"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="mb-3">
                <span>Degree Program</span>
                <div className="ms-10">
                  <input
                    type="radio"
                    id="cst"
                    name="Degree_Program"
                    value="CST"
                  />
                  <label htmlFor="CST">&ensp;CST</label>
                  <br />
                  <input
                    type="radio"
                    id="iit"
                    name="Degree_Program"
                    value="IIT"
                  />
                  <label htmlFor="IIT">&ensp;IIT</label>
                  <br />
                  <input
                    type="radio"
                    id="sct"
                    name="Degree_Program"
                    value="SCT"
                  />
                  <label htmlFor="SCT">&ensp;SCT</label>
                  <br />
                  <input
                    type="radio"
                    id="ict"
                    name="Degree_Program"
                    value="ICT"
                  />
                  <label htmlFor="ICT">&ensp;ICT</label>
                  <br />
                </div>
              </div>
              <span>Year</span>
              <div className="">
                <select
                  name="Year"
                  id=""
                  className="rounded-md bg-slate-600 px-4 py-1"
                >
                  <option value="1st_year" defaultValue={true}>
                    1st Year
                  </option>
                  <option value="2nd_year">2nd Year</option>
                  <option value="3rd_year">3rd Year</option>
                </select>
              </div>
            </div>

            <div className="my-5 justify-between md:flex">
              <span>
                Mobile Number <small className="italic">(Whatsapp)</small>
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <input
                type="text"
                name="Mobile_Number"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 focus:outline-none md:w-2/3"
              />
            </div>
          </div>
          <div className="mt-5 w-32">
            <input
              type="submit"
              name=""
              id=""
              value="Join"
              required
              className="w-full cursor-pointer rounded-md  bg-emerald-600 py-1 text-center duration-200 ease-in hover:bg-fuchsia-600"
            />
          </div>
          <div
            className={`mt-3 ${
              membeshipStart() > 0 ? "hidden" : "flex"
            } w-full flex-col items-end`}
          >
            <p className="italic">
              Embark on your IEEE SB journey. Just click on &ensp;
            </p>
            <a
              href="/membership"
              className="mt-3 cursor-pointer rounded-md bg-emerald-600 px-3 py-2 text-center duration-200 ease-in hover:bg-fuchsia-600"
            >
              Get Membership
            </a>
          </div>
        </form>
      </div>
    );
  };
  const confirm = () => {
    return (
      <div className="my-10 max-w-xl items-center rounded-md bg-purple-600 p-3 pb-5 text-center text-white shadow-2xl shadow-purple-500/50 duration-300 ease-in hover:rotate-6 hover:bg-emerald-500 hover:shadow-emerald-500/50 lg:p-8">
        <h3 className="bg-gradient-to-r from-pink-200 to-sky-200 bg-clip-text text-xl text-transparent">
          Your information is safe with us.
        </h3>
        <h1 className="mb-6 mt-4 bg-gradient-to-r from-pink-200 to-sky-200 bg-clip-text text-3xl text-transparent">
          To join our WhatsApp community, click the link below.
        </h1>
        <a
          href="https://chat.whatsapp.com/JsTD0zDQXjyFqGjChBgK6D"
          className="rounded-md bg-[#a3a3a3aa] px-2 py-2"
        >
          Join WhatsApp Group
        </a>
      </div>
    );
  };
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const form = document.getElementById("form");
      const formData = new FormData(form);

      axios
        .post(
          "https://script.google.com/macros/s/AKfycbxsoxE_BmQ9zh5f4sJVrIJYlJQp8wPCNxzhF9r_ef8qxMRRjFvIb_TacfnnqnG5hABoxA/exec",
          formData
        )
        .then((res) => console.log(res))
        .then(setSubmitted(true))
        .catch((err) => console.log(err));
    },
    [setSubmitted]
  );
  return (
    <React.Fragment>
      <div
        className="flex h-[130vh] flex-col items-center justify-center bg-cover px-2 py-5 md:h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 7, 27, 0.8) 0%, rgba(54, 57, 66, 0.6)) , " +
            `url(${UniImage})`,
        }}
      >
        <h2 className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent md:text-5xl">
          {!submitted ? "Join With Us" : "Thank you !"}
        </h2>
        {!submitted ? form() : confirm()}
      </div>
    </React.Fragment>
  );
};

export default Register;
