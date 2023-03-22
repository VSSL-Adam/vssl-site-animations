export default function ServiceCard({
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
          ? "bg-dark_gray mx-auto my-2 p-6 w-full"
          : "bg-none mx-auto my-2 p-6 w-full"
      }
    >
      <div className="border border-light_gray flex flex-col justify-between">
        <h5 className="p-4 border-b font-gin text-lg sm:text-xl  border-light_gray">
          {title}
        </h5>
        <div className="grid gap-0 lg:gap-4 grid-cols-1 lg:grid-cols-2 divide-x border-b border-light_gray">
          <p className="p-4 font-libre_franklin">{description}</p>
          <ul className="p-4 font-libre_franklin leading-loose border-none">
            {bullets.map((bullet) => {
              // 🚨 Add in your unique key prop below 🚨
              return <li>{bullet}</li>;
            })}
          </ul>
        </div>
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
