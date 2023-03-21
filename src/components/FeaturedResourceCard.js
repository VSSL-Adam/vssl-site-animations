export default function FeaturedResourceCard({
  category,
  img,
  alt,
  date,
  author,
  tags,
  title,
  src,
}) {
  return (
    <a
      href={src}
      className="bg-dark_gray p-6 hover:bg-gold transition-all ease-in-out group w-full"
    >
      <div className="border border-light_gray flex flex-col lg:flex-row justify-between relative group-hover:border-black">
        <p className="absolute -left-10 -top-10 font-rift font-bold text-light_gray text-sm sm:text-lg bg-black p-4 transition-all group-hover:bg-white group-hover:text-black group-hover:-rotate-6">
          {category}
        </p>
        <img src={img} alt={alt} className="lg:w-3/12 max-w-full h-auto" />
        <div className="lg:w-9/12">
          <div className="grid grid-cols-4 border-b border-light_gray group-hover:text-white group-hover:border-black">
            <p className="p-4 uppercase font-rift font-bold text-sm sm:text-lg text-light_gray border-r border-light_gray group-hover:text-white group-hover:border-black">
              {date}
            </p>
            <p className="p-4 uppercase font-rift font-bold text-sm sm:text-lg text-light_gray border-r border-light_gray group-hover:text-white group-hover:border-black">
              {author}
            </p>
            <p className="p-4 uppercase font-rift font-bold text-sm sm:text-lg text-gold flex justify-start gap-5 transition-all group-hover:text-white">
              {tags.map((tag) => {
                return <span>{tag}</span>;
              })}
            </p>
          </div>
          <h1 className="p-4 font-gin text-4xl sm:text-6xl">{title}</h1>
        </div>
      </div>
    </a>
  );
}
