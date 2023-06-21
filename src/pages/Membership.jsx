import React, { useCallback, useState } from "react";
import UniImage from "../images/uni.png";

const Membership = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = () => {
    return (
      <div className="mt-10 max-w-5xl rounded-sm bg-[#0f172aaa] px-5 py-10 md:w-3/4">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Get Membership
        </h1>
        <iframe
          title="membership"
          name="confromSubmitted"
          id="con{fromSubmitted"
          style={{ display: "none" }}
        ></iframe>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdu5mwdDorhuWqAe_PNqa4WJdd05-SU2yzw6Oyh_1pRugjwIw/formResponse"
          method="post"
          target="confromSubmitted"
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
                name="entry.1705055452"
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
                name="entry.1850360640"
                id=""
                placeholder="UWU/CST/20/001"
                required
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex">
              <span>
                Address{" "}
                <span className="text-xs font-extrabold text-red-600">*</span>
              </span>
              <input
                type="text"
                name="entry.1820933384"
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
                name="entry.190317731"
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
                    name="entry.635035616"
                    value="CST"
                  />
                  <label htmlFor="CST">&ensp;CST</label>
                  <br />
                  <input
                    type="radio"
                    id="iit"
                    name="entry.635035616"
                    value="IIT"
                  />
                  <label htmlFor="IIT">&ensp;IIT</label>
                  <br />
                  <input
                    type="radio"
                    id="sct"
                    name="entry.635035616"
                    value="SCT"
                  />
                  <label htmlFor="SCT">&ensp;SCT</label>
                  <br />
                  <input
                    type="radio"
                    id="ict"
                    name="entry.635035616"
                    value="ICT"
                  />
                  <label htmlFor="ICT">&ensp;ICT</label>
                  <br />
                  <input
                    type="radio"
                    id="e-tech"
                    name="entry.635035616"
                    value="E-TECH"
                  />
                  <label htmlFor="E-TECH">&ensp;E-TECH</label>
                  <br />
                  <input
                    type="radio"
                    id="others"
                    name="entry.635035616"
                    value="Others"
                  />
                  <label htmlFor="Others">&ensp;Others</label>
                  <br />
                </div>
              </div>
              <div className="mb-3">
                <span>Gender</span>
                <div className="ms-10">
                  <input
                    type="radio"
                    id="male"
                    name="entry.927652962"
                    value="Male"
                  />
                  <label htmlFor="Male">&ensp;Male</label>
                  <br />
                  <input
                    type="radio"
                    id="female"
                    name="entry.927652962"
                    value="Female"
                  />
                  <label htmlFor="Female">&ensp;Female</label>
                </div>
              </div>
              <span>Year</span>
              <div className="">
                <select
                  name="entry.1827166823"
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
                name="entry.1226361252"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>

            <div className="my-2 justify-between md:flex">
              <span>
                Email Address{" "}
                <span className="text-xs font-extrabold text-red-600">*</span>
              </span>
              <input
                type="email"
                name="entry.1579684155"
                id=""
                required
                className="w-full rounded-md bg-slate-600 p-1 px-2 focus:outline-none md:w-2/3"
              />
            </div>
            <div className="my-2 justify-between md:flex">
              <span>
                IEEE Membership ID{" "}
                <small className="italic">( if you have )</small>
              </span>
              <input
                type="text"
                name="entry.330262776"
                id=""
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
  const onSubmit = useCallback(() => {
    setSubmitted(true);
  }, [setSubmitted]);
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
          {!submitted ? "Membership" : "Thank you !"}
        </h2>
        {!submitted ? form() : confirm()}
      </div>
    </React.Fragment>
  );
};

export default Membership;
