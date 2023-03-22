export default function FeaturedWorkCard({
  img,
  alt,
  title,
  description,
  src,
}) {
  return (
    <a href={src} className="relative group">
      <img src={img} alt={alt} className="md:pr-4 md:pb-4" />
      <div className="bg-dark_gray md:absolute bottom-0 right-0 p-4 transition-all group-hover:bg-gold">
        <div className="border flex md:block border-light_gray relative transition-all group-hover:border-black">
          <p className="font-gin px-4 py-2 border-r md:border-none border-light_gray transition-all group-hover:border-black">
            {title}
          </p>
          <p className="font-libre_franklin leading-tight text-gold md:border-t group-hover:border-black border-light_gray px-4 py-2 transition-all group-hover:text-black">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
