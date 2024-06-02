import profileImage from "../../assets/profile/selfie_cv.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to my homepage</h1>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          I am an enthusiastic and dedicated person working part-time as a
          student mentor at Noroff, specializing in frontend development.
        </p>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          I hope you find the information here useful and engaging. Feel free to
          explore.
        </p>
      </div>
      <img
        src={profileImage}
        alt="Profile"
        className="mb-8 rounded-sm border-slateBlue border-t-4 border-l-4 shadow-lg"
      />
      <div className="text-center p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Thank you for visiting!</h1>
      </div>
    </div>
  );
};

export default Home;
