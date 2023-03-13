export default function NavLink({ title, src, target = "_blank" }) {
  return (
    <a href={src} className="nav-link" target={target}>
      {title}
    </a>
  );
}
