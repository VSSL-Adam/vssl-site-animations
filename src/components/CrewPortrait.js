import Default from "../img/components/crew/adam.jpg";
import Yara from "../img/components/crew/yara.jpg";
import Sparks from "../img/components/crew/sparks.jpg";
import Tim from "../img/components/crew/tim.jpg";
import Lindsey from "../img/components/crew/lindsey.jpg";
import Dwayne from "../img/components/crew/dwayne.jpg";
import Keri from "../img/components/crew/keri.jpg";
import Deck from "../img/components/crew/deck.jpg";
import Beach from "../img/components/crew/beach.jpg";
import Coin from "../img/components/crew/coin.jpg";
import Dock from "../img/components/crew/dock.jpg";
import Phone from "../img/components/crew/phone.jpg";
import Bre from "../img/components/crew/bre.jpg";
import Lisa from "../img/components/crew/lisa.jpg";
import Michael from "../img/components/crew/michael.jpg";
import Dog from "../img/components/crew/dog.jpg";

const CrewPortrait = () => {
  // 🚨 Replace with your own data 🚨 // 
  const imageArr = [
    { id: "Yara Gosula",  src: Yara},
    { id: "Sparks flying off metal",  src: Sparks },
    { id: "Tim Peacock",  src: Tim },
    { id: "Lindsey Sloan",  src: Lindsey },
    { id: "Dwayne Jones",  src: Dwayne },
    { id: "Keri Gerhear",  src: Keri },
    { id: "Deck on water",  src: Deck },
    { id: "Beach bonfire",  src: Beach },
    { id: "VSSL Challenge Coins",  src: Coin },
    { id: "Wooden dock",  src: Dock },
    { id: "Woman holding smartphone",  src: Phone },
    { id: "Bre Arnost",  src: Bre },
    { id: "Lisa Sydes",  src: Lisa },
    { id: "Michael Gauthier",  src: Michael },
    { id: "Dog looking out of window",   src: Dog },
  ];
  window.addEventListener("scroll", () => {
    const scrollLocation = window.scrollY;
    let scrollValue = 250;
    imageArr.forEach((image, index) => {
      const currentImage = document.getElementById(image.id);    
      image.scrollLocation = scrollValue+=50;
      const nextImage =
        index < imageArr.length
          ? document.getElementById(imageArr[index].id)
          : null;
      if (scrollLocation > image.scrollLocation) {
        currentImage.classList.add("opacity-0");
        if (nextImage) {
          nextImage.classList.remove("opacity-0");
        }
      }
      if (scrollLocation < image.scrollLocation) {
        nextImage.classList.add("opacity-0");
      }
    });
  });

  return (
    <div>
      <img
        src={Default}
        alt="VSSL t-shirt"
        className="absolute top-1/2 right-auto bottom-auto left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {imageArr.map((image) => {
        return (
          <img
            src={image.src}
            id={image.id}
            key={image.id}
            className="absolute top-1/2 right-auto bottom-auto left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
            alt={`${image.id}`}
          />
        );
      })}
    </div>
  );
};

export default CrewPortrait;
