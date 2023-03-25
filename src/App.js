import Title from "./components/Title";
import Button from "./components/Button";
import NavLink from "./components/NavLink";
import Salt from "./components/Salt";
import CaseStudyCard from "./components/CaseStudyCard";
import ResourceCard from "./components/ResourceCard";
import FeaturedResourceCard from "./components/FeaturedResourceCard";
import SolutionsCard from "./components/SolutionsCard";
import ServiceCard from "./components/ServiceCard";
import BlogHero from "./components/BlogHero";
import WorkCard from "./components/WorkCard";
import FeaturedWorkCard from "./components/FeaturedWorkCard";
import Crew from "./components/Crew";
import Frame from "./components/Frame";
import Banner from "./components/Banner";
import VisionBanner from "./components/VisionBanner";

// Images
import SEO from "./img/components/seo.jpg";
import Wave from "./img/components/wave.jpg";
import Brand from "./img/components/brand.png";
import MAPP from "./img/components/mapp.jpg";
import Asterra from "./img/components/asterra.jpg";
import Captain from "./img/components/captain.jpg";

const App = () => {
  return (
    <>
      <Frame />
      <Crew />
      <div className="flex items-center justify-center p-12">
        <Title text="Work from the crew" />
      </div>
      <div className="flex items-center justify-center p-12 relative z-40">
        <Salt title="Lock in the strategy and crack off" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center p-12 gap-20 relative z-40">
        <Button
          button_class="primary"
          title="Discovery More"
          type="link"
          src="#"
          target="_blank"
        />
        <Button
          button_class="secondary"
          title="Discovery More"
          type="link"
          src="#"
          target="_blank"
        />
        <NavLink src="/" title="Subnav Link" />
      </div>
      <div className="flex items-center justify-center relative z-40">
        <Banner
          title="How well are we you steering your ship?"
          description="We've created a marketing maturity model so you can plot the current location of your marketing, and set the course for future success."
        />
      </div>
      <div className="flex justify-center p-8 lg:px-32 relative z-40">
        <CaseStudyCard
          client="ASTERRA"
          title="A client's heroic idea and the brand we built to serve it"
          tags={[
            "Brand Strategy & Positioning",
            "Naming",
            "Identity Design",
            "Video",
            "Paid Media",
          ]}
        />
      </div>
      <div className="flex justify-center p-8 lg:px-32 relative z-40">
        <FeaturedWorkCard
          img={MAPP}
          alt="MAPP Website redesign"
          title="MAPP Cloud"
          description="The right way to upgrade a website"
          src="#"
        />
      </div>
      <div className="flex items-center justify-center relative z-40">
        <VisionBanner
          img={Captain}
          title="How we steer the ship"
          vision={[
            {
              id: 1,
              title: "Our Mission",
              description:
                "Our mission is to set the course for our clients, creating bold marketing experiences that propel brands to success.",
            },
            {
              id: 2,
              title: "Our Vision",
              description:
                "We leave the world better than we found it by connecting people: the crew, our clients, and their customers—because collaboration is where cool shit happens.",
            },
          ]}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:px-32 gap-5 lg:gap-16 relative z-40">
        <WorkCard
          img={MAPP}
          alt="MAPP Website redesign"
          title="MAPP Cloud"
          description="The right way to upgrade a website"
          src="#"
        />
        <WorkCard
          img={Asterra}
          alt="ASTERRA rebrand"
          title="ASTERRA"
          description="A client's heroic idea and the brand we built to serve it"
          src="#"
        />
      </div>
      <div className="flex justify-center p-8 lg:px-32 relative z-40">
        <FeaturedResourceCard
          category="Blog"
          img={Brand}
          alt={"Human eye"}
          tags={["Creative", "Strategy"]}
          date="August 23, 2022"
          author="Michael Gauthier"
          title="A Brand Is A Lot More Than You Think"
          src="#"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:px-32 gap-5 lg:gap-16 relative z-40">
        <ResourceCard
          category="Blog"
          img={SEO}
          tags={["SEO", "Strategy"]}
          alt={"Balancing rocks"}
          title="Content and SEO: It's All About Balance"
          src="#"
        />
        <ResourceCard
          category="Press"
          img={Wave}
          tags={["Social Media", "Creative"]}
          alt="Black ink drawing of a wave"
          title="VSSL Agency Partners with Surfrider Foundation"
          src="#"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:px-32 gap-5 lg:gap-16 relative z-40">
        <SolutionsCard
          type="black"
          title="Creative"
          description="Your brand is a story, and our creative team leverages a solid strategy to tell it. We know how to create a cohesive brand experience in order to help your marketing stand out."
          bullets={[
            "Branding",
            "UI/UX",
            "Graphic Design",
            "Copywriting",
            "Campaigns",
          ]}
          src="#"
          link="Get Creative"
        />
        <SolutionsCard
          title="Strategy"
          type="gray"
          description="We work with you to develop a plan to reach the right prospects and turn them into customers. With clear measurable KPIs, we'll chart a course for success together."
          bullets={[
            "Marketing Strategy",
            "Demand / Lead Generation Plans",
            "Segmentation & Persona Development",
            "Customer Journey Mapping",
            "Competitor Research & Analysis",
          ]}
          src="#"
          link="Chart a course"
        />
      </div>
      <div className="flex flex-col justify-between p-8 lg:px-32 gap-5 relative z-40">
        <ServiceCard
          type="gray"
          title="Branding"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est."
          bullets={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
          src="#"
          link="Lorem ipsum case study"
        />
        <ServiceCard
          type=""
          title="Copywriting"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est."
          bullets={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
          src="#"
          link="Lorem ipsum case study"
        />
      </div>
      <div className="flex justify-center p-8 py-20 lg:px-32 relative z-40">
        <BlogHero
          img={Brand}
          alt={"Human eye"}
          tags={["Creative", "Strategy"]}
          date="August 23, 2022"
          author="Michael Gauthier"
          title="A Brand Is A Lot More Than You Think"
        />
      </div>
    </>
  );
};
export default App;
