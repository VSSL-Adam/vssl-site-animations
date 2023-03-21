import Social from "./Social";

export default function BlogHero({ img, alt, date, author, tags, title }) {
  return (
    <div className="bg-dark_gray p-6 w-full">
      <div className="flex flex-col lg:flex-row justify-between relative">
        <img
          src={img}
          alt={alt}
          className="lg:absolute lg:-left-20 lg:-top-24 lg:w-[230px]"
        />
        <div className="lg:w-2/12 flex justify-start items-end lg:ml-12 relative">
          <div className="absolute left-0 lg:-left-28">
            <Social social={["LinkedIn", "Twitter", "Facebook"]} />
          </div>
        </div>
        <div className="lg:w-12/12 xl:w-full border border-light_gray ">
          <div className="grid grid-cols-4 border-b border-light_gray">
            <p className="p-4 uppercase font-rift font-bold text-sm sm:text-lg text-light_gray border-r border-light_gray ">
              {date}
            </p>
            <p className="p-4 uppercase font-rift font-bold text-sm sm:text-lg text-light_gray border-r border-light_gray ">
              {author}
            </p>
            <p className="p-4 uppercase font-rift font-bold text-sm sm:text-lg text-gold flex justify-start gap-5">
              {tags.map((tag) => {
                return <span>{tag}</span>;
              })}
            </p>
          </div>
          <h1 className="p-4 font-gin text-4xl sm:text-6xl">{title}</h1>
        </div>
      </div>
    </div>
  );
}
