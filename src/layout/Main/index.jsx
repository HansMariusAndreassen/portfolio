import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main className="max-w-screen-xl flex mt-10 justify-center mb-10">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
