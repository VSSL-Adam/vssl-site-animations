import LinkedIn from "../img/components/social/linkedin.svg";
import Twitter from "../img/components/social/twitter.svg";
import Facebook from "../img/components/social/facebook.svg";
import YouTube from "../img/components/social/youtube.svg";
import Instagram from "../img/components/social/instagram.svg";

export default function Social({ social }) {
  return (
    <div className="bg-black p-4 flex justify-between gap-4 lg:gap-6">
      {social.map((platform) => {
        const platform_edited = platform.toLowerCase();
        if (platform_edited === "linkedin") {
          return (
            <a href="/" target="_blank">
              <img src={LinkedIn} alt="LinkedIn" target="_blank" />
            </a>
          );
        } else if (platform_edited === "twitter") {
          return (
            <a href="/" target="_blank">
              <img src={Twitter} alt="Twitter" target="_blank" />
            </a>
          );
        } else if (platform_edited === "facebook") {
          return (
            <a href="/" target="_blank">
              <img src={Facebook} alt="Facebook" target="_blank" />
            </a>
          );
        } else if (platform_edited === "youtube") {
          return (
            <a href="/" target="_blank">
              <img src={YouTube} alt="YouTube" target="_blank" />
            </a>
          );
        } else if (platform_edited === "instagram") {
          return (
            <a href="/" target="_blank">
              <img src={Instagram} alt="Instagram" target="_blank" />
            </a>
          );
        }
        return "";
      })}
    </div>
  );
}
