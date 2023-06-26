import React, { useCallback, useState } from "react";
import UniImage from "../images/uni.png";
import axios from "axios";

const Membership = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = () => {
    return (
      <div className="mt-10 max-w-5xl rounded-md bg-[#0f172aaa] px-5 py-10 md:w-11/12">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Get Membership
        </h1>
        <form
          id="form"
          method="post"
          onSubmit={onSubmit}
          className="text-white"
        >
          <div className="">
            <div className="my-2 justify-between md:flex">
              <p>
                Full Name
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </p>
              <input
                type="text"
                name="Full_Name"
                placeholder="First name + Middle name + Last name"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex ">
              <span>
                Enrollment Number
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <input
                type="text"
                name="Enrollment_number"
                id=""
                placeholder="UWU/CST/20/001"
                required
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex">
              <span>
                Address
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <input
                type="text"
                name="Address"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex">
              <span>
                Date of Birth
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <input
                type="date"
                name="DOB"
                required
                id=""
                className="w-full rounded-md bg-slate-600 p-1 focus:outline-none md:w-2/3"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="mb-3">
                <span>
                  Degree Program
                  <span className="text-xs font-extrabold text-red-600">
                    {" "}
                    *
                  </span>
                </span>
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
                  <input
                    type="radio"
                    id="e-tech"
                    name="Degree_Program"
                    value="E-TECH"
                  />
                  <label htmlFor="E-TECH">&ensp;E-TECH</label>
                  <br />
                  <input
                    required
                    type="radio"
                    id="others"
                    name="Degree_Program"
                    value="Others"
                  />
                  <label htmlFor="Others">&ensp;Others</label>
                  <br />
                </div>
              </div>
              <div className="mb-3">
                <span>
                  Gender
                  <span className="text-xs font-extrabold text-red-600">
                    {" "}
                    *
                  </span>
                </span>
                <div className="ms-10">
                  <input
                    type="radio"
                    id="male"
                    name="Gender"
                    value="Male"
                    required
                  />
                  <label htmlFor="Male">&ensp;Male</label>
                  <br />
                  <input
                    type="radio"
                    id="female"
                    name="Gender"
                    value="Female"
                  />
                  <label htmlFor="Female">&ensp;Female</label>
                </div>
              </div>
              <span>
                Year
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <div className="">
                <select
                  name="Year"
                  id=""
                  className="rounded-md bg-slate-600 px-4 py-1"
                >
                  <option value="1st year" defaultValue={true}>
                    1st Year
                  </option>
                  <option value="2nd year">2nd Year</option>
                  <option value="3rd year">3rd Year</option>
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
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>

            <div className="my-2 justify-between md:flex">
              <span>
                Email Address
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <input
                type="email"
                name="Email_Address"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex">
              <span>
                IEEE UWU SB Membership ID
                <span className="text-xs font-extrabold text-red-600"> *</span>
              </span>
              <input
                type="text"
                name="Membership_ID"
                id=""
                pattern="[0-9]{9}"
                required
                className="w-full rounded-md bg-slate-600 p-1 focus:outline-none md:w-2/3"
              />
            </div>
          </div>
          <div className="mt-5 flex w-full justify-center">
            <input
              type="submit"
              name=""
              id=""
              value="Submit"
              required
              className="w-32 cursor-pointer rounded-md  bg-emerald-600 py-1 text-center duration-200 ease-in hover:bg-fuchsia-600"
            />
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
          You will be able to Obtain your IEEE Student Branch membership
          IDpromptly and conveniently.
        </h1>
        <a href="/" className="rounded-md bg-[#a3a3a3aa] px-2 py-2">
          Home
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
          "https://script.google.com/macros/s/AKfycbxj9JZNUkZIM-cShIiQcNEZb0ssZ1r-0JvO5hUG5GK-WHOE1xyLBqLoupCDOIjdBN2TRg/exec",
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
        className="flex h-auto min-h-screen flex-col items-center justify-center bg-cover px-2 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 7, 27, 0.8) 0%, rgba(54, 57, 66, 0.6)) , " +
            `url(${UniImage})`,
        }}
      >
        <h2 className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent md:text-5xl">
          {!submitted ? "Membership" : "Thank you !"}
        </h2>
        {!submitted ? form() : confirm()}
      </div>
    </React.Fragment>
  );
};

export default Membership;
