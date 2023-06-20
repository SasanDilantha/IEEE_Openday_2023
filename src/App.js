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
const Gallery = lazy(() => import("./pages/Gallery"));
const Error = lazy(() => import("./pages/Error"));

const linkArray = {
  "/": <Home />,
  "/about": <About />,
  "/committees": <Committees />,
  "/register": <Register />,
  "/membership": <Membership />,
  "/committee23": <Committee23 />,
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
