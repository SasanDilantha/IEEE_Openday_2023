import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Committees = lazy(() => import("./pages/Committees"));
const Register = lazy(() => import("./pages/Register"));
const Membership = lazy(() => import("./pages/Membership"));
const Committee23 = lazy(() => import("./pages/Committee23"));
const Committee22 = lazy(() => import("./pages/Committee22"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Error = lazy(() => import("./pages/Error"));

const registrationClose = () => {
  const count = new Date("June 24, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  return count - now > 0 ? false : true;
};

const membershipOpen = () => {
  const count = new Date("June 25, 2023 08:00:00").getTime();
  const now = new Date().getTime();
  return count - now > 0 ? false : true;
};

const linkArray = {
  "/": <Home />,
  "/about": <About />,
  "/committees": <Committees />,
  "/register": !registrationClose() ? <Register /> : <Error />,
  "/membership": membershipOpen() ? <Membership /> : <Error />,
  "/committee23": <Committee23 />,
  "/committee22": <Committee22 />,
  "/gallery": <Gallery />,
};

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Suspense
          fallback={
            <p className="flex h-screen items-center justify-center text-lg italic">
              Loading please wait...
            </p>
          }
        >
          <Routes>
            {Object.keys(linkArray).map((key) => {
              return <Route key={key} path={key} element={linkArray[key]} />;
            })}
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
