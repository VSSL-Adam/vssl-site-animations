export default function Button({
  button_class,
  type = "link",
  title,
  src,
  target = "_blank",
  click_function,
}) {
  if (type === "link") {
    if (button_class === "primary") {
      return (
        <a href={src} target={target} className="btn primary-btn">
          <span className="btn-text">{title}</span>
        </a>
      );
    } else if (button_class === "secondary") {
      return (
        <a href={src} target={target} className="btn secondary-btn">
          <span className="btn-text">{title}</span>
        </a>
      );
    }
  } else if (type === "button") {
    if (button_class === "primary") {
      return (
        <button className="btn primary-btn">
          <span className="btn-text" onClick={click_function}>
            {title}
          </span>
        </button>
      );
    } else if (button_class === "secondary") {
      return (
        <button className="btn secondary-btn">
          <span className="btn-text" onClick={click_function}>
            {title}
          </span>
        </button>
      );
    }
  }
}
