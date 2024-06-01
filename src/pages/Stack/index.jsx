import icons from "../../utilities/stackIcons.js";

const Stack = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="grid grid-cols-3 md:grid-cols-8 gap-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:invert transition-all duration-100 ease-in-out cursor-pointer text-gray-600"
          >
            <img src={icon.src} alt={icon.name} className="h-12 w-12" />
            <span className="mt-2">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
