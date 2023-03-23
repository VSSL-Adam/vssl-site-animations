import Layer_1 from "../img/components/crew/crew-1.jpg";
import Layer_2 from "../img/components/crew/crew-2.jpg";
import Layer_3 from "../img/components/crew/crew-3.jpg";
import Layer_4 from "../img/components/crew/crew-4.jpg";
import Layer_5 from "../img/components/crew/crew-5.jpg";
// import Layer_6 from "../img/components/crew/crew-6.jpg";
// import Layer_7 from '../img/cube/layer-7.svg';
// import Layer_8 from '../img/cube/layer-8.svg';

const CrewPortrait = () => {
  const layers = [
    { id: "layer-2", scrollLocation: 500, level: Layer_2 },
    { id: "layer-3", scrollLocation: 1000, level: Layer_3 },
    { id: "layer-4", scrollLocation: 1500, level: Layer_4 },
    { id: "layer-5", scrollLocation: 2000, level: Layer_5 },
    // { id: "layer-6", scrollLocation: 2500, level: Layer_6 },
    // { id: "layer-7", scrollLocation: 3000, level: Layer_7 },
    // { id: "layer-8", scrollLocation: 3500, level: Layer_8 },
  ];
  window.addEventListener("scroll", () => {
    const scrollLocation = window.scrollY;
    layers.forEach((layer, index) => {
      const currentLayer = document.getElementById(layer.id);
      const nextLayer =
        index < layers.length
          ? document.getElementById(layers[index].id)
          : null;

      if (scrollLocation > layer.scrollLocation) {
        currentLayer.classList.add("hide-layer");
        if (nextLayer) {
          nextLayer.classList.remove("hide-layer");
        }
      }
      if (scrollLocation < layer.scrollLocation) {
        nextLayer.classList.add("hide-layer");
      }
    });
  });

  return (
    <div id="cube">
      <img
        src={Layer_1}
        alt="Default cube"
        className="cube-layer"
        id="layer-1"
      />
      {layers.map((layer, index) => {
        return (
          <img
            src={layer.level}
            id={layer.id}
            key={layer.id}
            className="cube-layer hide-layer"
            alt={`Layer ${index + 2} of cube`}
          />
        );
      })}
    </div>
  );
};

export default CrewPortrait;
