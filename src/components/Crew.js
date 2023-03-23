import Salt from "./Salt";
import Button from "./Button";
import CrewPortrait from "./CrewPortrait";

import Beach from "../img/components/beach.jpg";
import Adam from "../img/components/adam.jpg";
import Coin from "../img/components/coin.jpg";
import Mates from "../img/components/mates.jpg";
import Ocean from "../img/components/ocean.jpg";

const Crew = () => {
  return (
    <section className="flex flex-col items-center relative">
      <div className="p-10 lg:p-0 lg:w-2/6 flex items-center flex-col text-center mt-16">
        <h2 className="font-gin text-4xl lg:text-5xl leading-none text-white mb-5">
          Who the hell is VSSL?
        </h2>
        <p className="font-libre_franklin">
          We're a crew of brand builders and marketing pros that know how to
          build brands that stand out. We have our sea legs and we know what it
          takes to propel your brand to success. Ready to meet the crew? Happy
          hour is at five.
        </p>
        <Button
          button_class="primary"
          title="Who is VSSL?"
          type="link"
          src="#"
          target="_blank"
        />
      </div>
      <div className="image-row grid">
        <img
          src={Coin}
          alt="VSSL challenge coin"
          className="max-w-full h-auto z-20"
        />
        <img
          src={Beach}
          alt="Salty beach"
          className="max-w-full h-auto beach z-10"
        />
        <div className="salt lg:w-7/12 z-30 lg:z-10">
          <Salt title="The right crew can sink a fleet" />
        </div>
        <div className="crew-members z-10 sticky top-60">
          {/* <img src={Adam} alt="Crew member" className="max-w-full h-auto" /> */}
          <CrewPortrait />
        </div>

        <img
          src={Mates}
          alt="Illustration of crew members"
          className="max-w-full h-auto mates"
        />
        <img
          src={Ocean}
          alt="Sink or swim"
          className="max-w-full h-auto ocean z-20"
        />
      </div>
    </section>
  );
};

export default Crew;
