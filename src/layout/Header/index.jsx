import { spookyLogo } from "../../assets/logos/logoExports.js";

const Header = () => {
  return (
    <header className="text-2xl text-black">
      <nav className="w-full">
        <div>
          <img
            className="m-auto opacity-5"
            style={{ height: "auto", maxWidth: "100%" }}
            src={spookyLogo}
            alt="Spooky Logo"
          />
          <h1 className="fonttext-center absolute -mt-24 left-2/4 -translate-x-1/2">
            Hans Marius Andreassen
          </h1>
        </div>
        <div>
          <ul className="flex space-x-4 justify-around">
            <li>
              <a className="" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/connect">Connect</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
