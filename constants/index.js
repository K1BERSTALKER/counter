import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

export const navLinks = [
  {
    id: 1,
    title: "Counter",
    path: "/",
  },
  {
    id: 2,
    title: "Clock",
    path: "/clock",
  },
  {
    id: 3,
    title: "Timer",
    path: "/timer",
  },
  {
    id: 4,
    title: "Stopwatch",
    path: "/stopwatch",
  },
];

export const counterDetails = [
  {
    id: 1,
    icon: FaReact,
    title: "React",
    link: "https://react.dev/",
  },
  {
    id: 2,
    icon: RiNextjsFill,
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    id: 3,
    icon: SiTailwindcss,
    title: "Tailwind",
    link: "https://tailwindcss.com/",
  },
];

export const counterPackages = [
  {
    id: 1,
    title: "React Slot Counter",
    link: "https://www.npmjs.com/package/react-slot-counter/v/1.9.0",
  },
  {
    id: 2,
    title: "React Icons",
    link: "https://www.npmjs.com/package/react-icons",
  },
  {
    id: 3,
    title: "Skeleton",
    link: "https://www.npmjs.com/package/react-loading-skeleton",
  },
];

export function calculateTimer(action, targetDate) {
  const now = new Date();
  const target = new Date(targetDate);

  const difference =
    action === "hours" ? target - now : target - now - 3600 * 4000;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function parseDateString(dateString) {
  return new Date(dateString);
}

export function formattedDate(date) {
  return date.toISOString().split("T")[0];
}

export const calculateStopWatch = (difference) => {
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
