import Logo from "../img/vssl-logo.svg";
export default function HeaderNav() {
  return (
    <header className="flex justify-between items-center w-full z-50 fixed top-0">
      <img
        src={Logo}
        alt="VSSL Agency"
        className="w-[150px] lg:w-[250px] animate-fade_up"
      />
      <div className="p-6 lg:p-14 cursor-pointer flex items-end flex-col animate-fade_up group">
        <span className="bg-gold block h-0.5 my-[3px] w-8 transition-all group-hover:w-14 group-hover:bg-white"></span>
        <span className="bg-gold block h-0.5 my-[3px] w-14 transition-all group-hover:w-10 group-hover:bg-white"></span>
        <span className="bg-gold block h-0.5 my-[3px] w-10 transition-all group-hover:w-6 group-hover:bg-white"></span>
      </div>
    </header>
  );
}
