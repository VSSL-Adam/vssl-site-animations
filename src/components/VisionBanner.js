import Button from "./Button";
export default function VisionBanner({ img, alt, title, vision }) {
  return (
    <div className="relative bg-gold px-8 py-16 w-full mt-72 min-[400px]:mt-80 min-[500px]:mt-96 sm:flex sm:mt-16 sm:gap-8 sm:py-0 xl:px-40">
      <img
        src={img}
        alt={alt}
        className="w-4/6 absolute top-0 right-1/2 translate-x-1/2 -mt-60 min-[400px]:-mt-80 min-[500px]:-mt-80 sm:static sm:h-full sm:w-1/4 sm:translate-x-0 sm:mt-0 sm:-translate-y-14"
      />
      <div className="flex flex-col gap-5 mb-6 pt-28 sm:pt-0 sm:pb-10">
        <h5 className="font-gin text-4xl leading-none sm:absolute sm:-mt-8 sm:text-5xl">
          {title}
        </h5>
        <div className="sm:flex sm:gap-6 sm:mt-10">
          {vision.map((visionItem) => {
            return (
              // 🚨 Add in your unique key prop below 🚨
              <div className="border border-black mb-6 sm:mb-3">
                <p className="px-4 py-2 border-b border-black font-gin text-black text-xl">
                  {visionItem.title}
                </p>
                <p className="px-4 py-3">{visionItem.description}</p>
              </div>
            );
          })}
        </div>
        <div className="ml-6 sm:absolute sm:-bottom-16 md:top-60">
          <Button
            button_class="secondary"
            title="Discovery More"
            type="link"
            src="#"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}
