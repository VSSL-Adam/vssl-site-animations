export default function NavLink({ title, src, target = "_blank" }) {
  return (
    <a
      href={src}
      className="font-rift font-bold text-lg text-light_gray transition-all hover:text-white hover:-rotate-[4deg]"
      target={target}
    >
      {title}
    </a>
  );
}
