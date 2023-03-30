import Button from "./Button";
import Roll from "react-reveal/Roll";

// 🚨 Replace with your own data 🚨 //
import Octopus from "../img/components/solutions/octopus-sticker.png";
import Lighthouse from "../img/components/solutions/lighthouse-sticker.png";
import Mermaid from "../img/components/solutions/mermaid-sticker.png";

export default function Solutions() {
  // 🚨 Replace with your own data 🚨 //
  const solutionsArr = [
    {
      id: 1,
      title: "Ownable Positioning",
      sticker: {
        src: Lighthouse,
        alt: "Lighthouse sticker",
      },
      bullets: [
        {
          id: 1,
          description: "Brand positioning and design",
        },
        {
          id: 2,
          description: "Site design and build",
        },
        {
          id: 3,
          description: "SEO and social strategy",
        },
      ],
    },
    {
      id: 2,
      title: "Coordinated Strategy",
      sticker: {
        src: Mermaid,
        alt: "Mermaid sticker",
      },
      bullets: [
        {
          id: 1,
          description: "Go-to-market plan",
        },
        {
          id: 2,
          description: "Paid media and ad management",
        },
        {
          id: 3,
          description: "Account-based marketing",
        },
      ],
    },
    {
      id: 3,
      title: "Sustainted Growth",
      sticker: {
        src: Octopus,
        alt: "Octopus sticker",
      },
      bullets: [
        {
          id: 1,
          description: "Campaign creation",
        },
        {
          id: 2,
          description: "Business intelligence",
        },
        {
          id: 3,
          description: "Reporting and analytics",
        },
      ],
    },
  ];

  return (
    <section className="relative max-w-screen-xl mx-auto lg:h-[2500px] lg:my-40">
      <div className="px-6 max-w-screen-md sm:px-10 lg:sticky lg:top-48 lg:max-w-[550px] lg:z-10">
        <h2 className="font-gin text-7xl mb-6">Services to set the course</h2>
        <p className="font-libre_franklin text-xl leading-normal">
          Building a successful brand is a voyage—but you will never make it
          without a solid strategy. Our crew provides full-funnel marketing
          strategy that creates sustained brand growth.
        </p>
        <div className="mt-7">
          <Button
            button_class="primary"
            title="Go forth"
            type="link"
            src="/our-solutions"
            target=""
          />
        </div>
      </div>
      <div className='bg-no-repeat bg-cover bg-[url("../img/components/solutions/ocean.png")] w-full h-[200px] opacity-40 md:h-[500px] lg:absolute lg:top-96 lg:left-0 lg:z-0'></div>
      <div className='px-6 sm:px-10 bg-no-repeat bg-cover bg-center bg-[url("../img/components/solutions/deep-ocean.png")] w-full lg:bg-bottom lg:relative lg:mt-48 lg:overflow-hidden'>
        {solutionsArr.map((solution) => {
          return (
            <div className="mb-96 flex lg:justify-end" key={solution.id}>
              <div className="lg:min-w-[275px]">
                <p
                  className="text-4xl font-gin text-gold mb-4"
                  dangerouslySetInnerHTML={{
                    __html: solution.title.split(" ").join("<br/>"),
                  }}
                />
                <ul className="list-none">
                  {solution.bullets.map((bullet) => {
                    return (
                      <li className="text-xl mb-3" key={bullet.id}>
                        {bullet.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Roll right>
                <img
                  src={solution.sticker.src}
                  alt={solution.sticker.alt}
                  width={250}
                  height={250}
                  className="mb-5"
                />
              </Roll>
            </div>
          );
        })}
      </div>
    </section>
  );
}
