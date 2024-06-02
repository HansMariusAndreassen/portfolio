import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/pictures/61253_10150249983080372_1604664_n.jpg",
    "/pictures/222365_7783545371_195_n.jpg",
    "/pictures/44626_10150233061680372_1224988_n.jpg",
    "/pictures/46030_10150233053485372_1378230_n.jpg",
    "/pictures/521332_10152611507780372_1183235328_n.jpg",
    "/pictures/793717_10152581480350372_772192067_o.jpg",
    "/pictures/901686_10152767433670372_184850047_o.jpg",
    "/pictures/1230039_10153227156860372_1401816919_n.jpg",
    "/pictures/1910245_18124665371_6528_n.jpg",
    "/pictures/1923549_18059925371_5040_n.jpg",
    "/pictures/10641206_10155642146640372_5289164866933363178_n.jpg",
    "/pictures/13427800_10157144274470372_5848189802937978755_n.jpg",
    "/pictures/66873961_10162213839015372_627779323658502144_n.jpg",
    "/pictures/72322054_10162582928975372_6102197084985753600_n.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex box-border w-full max-w-xl aspect-[3/2] mx-auto relative bg-slateBlue z-0 p-1 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center opacity-0 transition-opacity duration-2000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;
