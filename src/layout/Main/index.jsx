import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
