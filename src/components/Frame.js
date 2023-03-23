import HeaderNav from "./HeaderNav";
export default function Frame() {
  return (
    <>
      <HeaderNav />
      <div className="fixed top-0 bg-no-repeat h-full w-full z-0 bg-cover bg-[url('../img/distressed-texture.jpg')]"></div>
    </>
  );
}
