import { IoPeopleOutline, IoRocketOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

const cards = [
  {
    icon: <IoPeopleOutline className="text-5xl" />,
    title: "Senior Engineers",
    description: "Top 5% vetted developers with real production experience.",
    gradient: "from-[#c44cff] to-[#8f00ff]",
    color: "text-[#c44cff]",
    glow: "shadow-[0_0_40px_#c44cff22]",
  },
  {
    icon: <IoRocketOutline className="text-5xl" />,
    title: "Fast Delivery",
    description: "Quick onboarding and rapid execution to meet your deadlines.",
    gradient: "from-[#4c8dff] to-[#2563eb]",
    color: "text-[#4c8dff]",
    glow: "shadow-[0_0_40px_#4c8dff22]",
  },
  {
    icon: <IoPeopleOutline className="text-5xl" />,
    title: "Scalable Teams",
    description: "Easily scale up or down based on your project requirements.",
    gradient: "from-[#22d3ee] to-[#06b6d4]",
    color: "text-[#22d3ee]",
    glow: "shadow-[0_0_40px_#22d3ee22]",
  },
  {
    icon: <IoShieldCheckmarkOutline className="text-5xl" />,
    title: "Secure by Design",
    description: "Security-first development to protect your data and users.",
    gradient: "from-[#ec4899] to-[#d946ef]",
    color: "text-[#ec4899]",
    glow: "shadow-[0_0_40px_#ec489922]",
  },
];

const Card = ({ icon, title, description, gradient, color, glow }) => (
  <div className={`text-white rounded-xl bg-gradient-to-r ${gradient} ${glow} h-96 p-[1px]`}>
    <div className="rounded-xl bg-[#050023] px-6 py-10 h-full">
      <div className={`mx-auto w-24 h-24 rounded-xl bg-gradient-to-r ${gradient} ${glow} p-[1px]`}>
        <div className="rounded-xl bg-[#050023] px-6 py-1.5 h-full flex items-center justify-center">
          <div className={color}>{icon}</div>
        </div>
      </div>

      <h2 className="mt-3 text-lg font-semibold">{title}</h2>

      <div className={`mt-5 mx-auto w-16 rounded-xl h-1 bg-gradient-to-r ${gradient}`} />

      <p className="mt-5 text-gray-400 text-md">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto relative px-4 py-20 lg:py-32 text-center">
      <div className="inline-flex rounded-xl bg-gradient-to-r from-[#9f04be] to-[#5b76ff] p-[1px]">
        <div className="rounded-xl bg-[#050023] px-6 py-1.5">
          <h2 className="text-white uppercase">Why Choose Us</h2>
        </div>
      </div>

      <div>
        <h2 className="mt-5 text-white text-5xl font-semibold">
          Why Companies{" "}
          <span className="bg-gradient-to-r from-[#9f04be] to-[#5b76ff] text-transparent bg-clip-text">
            Choose Us
          </span>
        </h2>

        <p className="mt-5 text-gray-500 text-lg">
          We deliver scalable secure and future ready solutions.
        </p>

        <div className="mt-7 mx-auto w-48 rounded-xl h-2 bg-gradient-to-r from-[#9f04be] to-[#5b76ff]" />
      </div>

      <div className="mt-20 grid grid-cols-4 space-x-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="mt-8">
        <AnchorLink
          href="#contact"
          offset="100"
          className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#6318F1] to-[#d400b5] px-7 py-3 text-white shadow-lg transition hover:scale-105"
        >
          Start Your Project <span aria-hidden="true">→</span>
        </AnchorLink>
        <p className="mt-3 text-sm text-gray-500">
          Let&apos;s build something amazing together.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
