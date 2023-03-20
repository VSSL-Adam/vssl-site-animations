export default function ResourceCard({ category, img, alt, tags, title, src }) {
  return (
    <a
      href={src}
      className="bg-dark_gray mx-auto my-16 p-6 hover:bg-gold transition-all ease-in-out group"
    >
      <div className="border border-light_gray flex flex-col lg:flex-row justify-between relative group-hover:border-black">
        <p className="absolute -left-10 -top-10 font-rift font-bold text-light_gray text-sm sm:text-lg bg-black p-4 transition-all group-hover:bg-white group-hover:text-black group-hover:-rotate-6">
          {category}
        </p>
        <img src={img} alt={alt} className="lg:w-6/12 max-w-full h-auto" />
        <div className="lg:w-6/12">
          <p className="p-4 uppercase font-rift font-bold text-sm sm:text-lg text-gold border-b border-light_gray flex justify-start gap-5 transition-all group-hover:text-white group-hover:border-black">
            {tags.map((tag) => {
              return <span>{tag}</span>;
            })}
          </p>
          <p className="p-4 font-gin text-lg sm:text-xl text-white group-hover:text-black">
            {title}
          </p>
        </div>
      </div>
    </a>
  );
}
