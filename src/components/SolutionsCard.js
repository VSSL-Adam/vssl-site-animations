export default function SolutionsCard({
  type = "gray",
  title,
  description,
  bullets,
  src,
  link,
}) {
  return (
    <div
      className={
        type.toLowerCase() === "gray"
          ? "bg-dark_gray mx-auto my-16 p-6 w-full"
          : "mx-auto my-16 p-6 w-full"
      }
    >
      <div className="border border-light_gray flex flex-col justify-between">
        <h5 className="p-4 border-b font-gin text-lg sm:text-xl  border-light_gray">
          {title}
        </h5>
        <p className="px-4 pt-4 font-libre_franklin">{description}</p>
        <ul className="p-4 font-libre_franklin border-b border-light_gray leading-loose">
          {bullets.map((bullet) => {
            // 🚨 Add in your unique key prop below 🚨
            return <li>{bullet}</li>;
          })}
        </ul>
        <a
          href={src}
          className="p-4 font-rift font-bold text-sm sm:text-lg transition-all hover:bg-gold hover:text-black"
        >
          {link}
        </a>
      </div>
    </div>
  );
}
