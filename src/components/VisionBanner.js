export default function VisionBanner({ img, alt, title, vision }) {
  return (
    <div className="grid bg-gold px-8 py-16 w-full relative">
      <img src={img} alt={alt} className="w-3/4 absolute top-0" />
      <h5 className="font-gin text-3xl leading-none mb-6">{title}</h5>
      {vision.map((visionItem) => {
        return (
          <div key={visionItem.id}>
            <p>{visionItem.title}</p>
            <p>{visionItem.description}</p>
          </div>
        );
      })}
    </div>
  );
}
