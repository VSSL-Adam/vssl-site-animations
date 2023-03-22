export default function WorkCard({ img, alt, title, description, src }) {
  return (
    <a href={src} className="w-full transition-all group hover:bg-gold">
      <img src={img} alt={alt} />
      <div className="pt-3 pb-4 px-4">
        <p className="font-gin text-xl pb-1">{title}</p>
        <p className="text-gold font-libre_franklin leading-tight group-hover:text-black">
          {description}
        </p>
      </div>
    </a>
  );
}
