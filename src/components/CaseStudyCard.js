export default function CaseStudyCard({ client, tags, title }) {
  return (
    <div className="bg-dark_gray mx-auto my-16 w-10/12 p-6 sm:p-8 lg:p-12">
      <div className="border border-light_gray">
        <div className="flex flex-col lg:flex-row border-b border-light_gray">
          <p className="lg:border-r border-light_gray p-6 uppercase font-rift font-bold text-sm sm:text-lg text-light_gray">
            Client: {client}
          </p>
          <p className="p-6 uppercase font-rift font-bold border-t border-light_gray lg:border-none text-sm sm:text-lg text-light_gray">
            Services:
            {tags.map((tag, index) => {
              if (index === 0 || index !== tags.length - 1) {
                return ` ${tag}, `;
              } else {
                return tag;
              }
            })}
          </p>
        </div>
        <div className="flex p-6">
          <h1 className="font-gin text-4xl sm:text-6xl">{title}</h1>
        </div>
      </div>
    </div>
  );
}
