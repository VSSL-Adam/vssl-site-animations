import Logo from "../img/vssl-logo.svg";
export default function HeaderNav() {
  return (
    <header>
      <img src={Logo} alt="VSSL Agency" className="logo" />
      <div className="hamburger">
        <span className="line top"></span>
        <span className="line middle"></span>
        <span className="line bottom"></span>
      </div>
    </header>
  );
}
