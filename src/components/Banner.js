import Button from "./Button";
export default function Banner({ title, description }) {
  return (
    <div className="w-full grid bg-gold px-8 py-16 md:grid-cols-2 md:gap-4 md:py-24 lg:gap-10 lg:px-40 xl:px-60">
      <h5 className="font-gin text-3xl leading-none mb-6">{title}</h5>
      <div className="md:relative">
        <p className="font-libre_franklin">{description}</p>
        <div className="mt-7 md:absolute md:top-15">
          <Button
            button_class="secondary"
            title="Get Mature"
            type="link"
            src="#"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}
