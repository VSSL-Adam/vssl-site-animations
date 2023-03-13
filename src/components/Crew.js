import Beach from "../img/components/beach.jpg";
import Adam from "../img/components/adam.jpg";
import Coin from "../img/components/coin.jpg";
import Mates from "../img/components/mates.jpg";
import Ocean from "../img/components/ocean.jpg";

const Crew = () => {
  return (
    <section className="crew">
      <div className="copy-row">
        <h2>Who the hell is VSSL?</h2>
        <p>
          We're a crew of brand builders and marketing pros that know how to
          build brands that stand out. We have our sea legs and we know what it
          takes to propel your brand to success. Ready to meet the crew? Happy
          hour is at five.
        </p>
      </div>
      <div className="image-row">
        <img src={Coin} alt="VSSL challenge coin" className="img-fluid coin" />
        <img src={Beach} alt="Salty beach" className="img-fluid beach" />
        <div className="crew-members">
          <img src={Adam} alt="Crew member" className="img-fluid" />
        </div>
        <img
          src={Mates}
          alt="Illustration of crew members"
          className="img-fluid mates"
        />
        <img src={Ocean} alt="Sink or swim" className="img-fluid ocean" />
      </div>
    </section>
  );
};

export default Crew;
