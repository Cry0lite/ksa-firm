import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import BoxReveal from "../ui/box-reveal";
import Image from "next/image";

const reviews = [
  {
    name: "Alfa",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/alpha.jpg",
  },
  {
    name: "iD Medical",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/idmedical.png",
  },
  {
    name: "Krauss Maffei",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/krauss.png",
  },
  {
    name: "Camelot",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/camelot.png",
  },
  {
    name: "Optibelt",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/optibelt.png",
  },
  {
    name: "Romaco",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/romaco.png",
  },
  {
    name: "INTORQ",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/intorq.png",
  },
  {
    name: "TVH",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tvh.jpg",
  },
  {
    name: "GOMO Group",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/gomo.png",
  },
  {
    name: "Direct Wines",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/direct_wines.jpg",
  },
  {
    name: "accops",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/accops.jpg",
  },
  {
    name: "MindTickle!",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/mindtickle.jpg",
  },
  {
    name: "ascentrik",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/ascentric.png",
  },
  {
    name: "SBI",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/sbi.png",
  },
  {
    name: "IntraEdge",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/intraedge.png",
  },
  {
    name: "Jet2Holidays",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/jet2.png",
  },
  {
    name: "Oemeta",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/oemeta.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-48 h-48 cursor-pointer overflow-hidden rounded-xl border p-4 flex items-center justify-center",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        src={img}
        alt=""
        className="object-contain w-full h-full p-2"
        width={128}
        height={128}
      />
    </figure>
  );
};

export function Clients() {
  return (
    <>
      <div className="flex  flex-col justify-center items-center w-full">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[2.5rem] text-center leading-10 font-bold">
            Trusted Partners Across Industries
            <span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[1.2rem] text-[1rem]">
            – See Our Client
            <span className="text-[#5046e6]"> Success Stories</span>
          </h2>
        </BoxReveal>
      </div>

      <div className="relative flex  w-full  flex-col items-center  justify-center overflow-hidden rounded-lg  bg-background">
        <Marquee pauseOnHover className="[--duration:30s] mt-20">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
