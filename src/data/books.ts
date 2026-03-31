import hungerGamesImg from "@/assets/hunger-games.jpg";
import catchingFireImg from "@/assets/catching-fire.jpg";
import mockingjayImg from "@/assets/mockingjay.jpg";
import balladImg from "@/assets/ballad-of-songbirds.jpg";
import sunriseImg from "@/assets/sunrise-reaping.jpg";
import gregorImg from "@/assets/gregor-overland.jpg";

export interface Book {
  id: string;
  title: string;
  series: string;
  seriesNumber?: number;
  year: number;
  cover: string;
  description: string;
  quote?: string;
}

export const books: Book[] = [
  {
    id: "hunger-games",
    title: "The Hunger Games",
    series: "The Hunger Games",
    seriesNumber: 1,
    year: 2008,
    cover: hungerGamesImg,
    description:
      "In a dystopian future, sixteen-year-old Katniss Everdeen volunteers to take her sister's place in a televised fight to the death.",
    quote: "A superb opening salvo in a trilogy.",
  },
  {
    id: "catching-fire",
    title: "Catching Fire",
    series: "The Hunger Games",
    seriesNumber: 2,
    year: 2009,
    cover: catchingFireImg,
    description:
      "Katniss and Peeta's victory sparks a rebellion as they face a terrifying new arena in the Quarter Quell.",
    quote: "Suspenseful, powerful, and unforgettable.",
  },
  {
    id: "mockingjay",
    title: "Mockingjay",
    series: "The Hunger Games",
    seriesNumber: 3,
    year: 2010,
    cover: mockingjayImg,
    description:
      "Katniss becomes the symbol of a revolution and must decide the future of an entire nation.",
    quote: "A fitting end to an electrifying trilogy.",
  },
  {
    id: "ballad-of-songbirds",
    title: "The Ballad of Songbirds and Snakes",
    series: "The Hunger Games",
    seriesNumber: 0,

    year: 2020,
    cover: balladImg,
    description:
      "A prequel set decades before the original trilogy, exploring the origins of a young Coriolanus Snow.",
    quote: "A gripping, dark origin story.",
  },
  {
    id: "sunrise-reaping",
    title: "Sunrise on the Reaping",
    series: "The Hunger Games",
    seriesNumber: 0.5,
    year: 2025,
    cover: sunriseImg,
    description:
      "The highly anticipated new novel set in the world of Panem, revealing untold stories from decades past.",
  },
  {
    id: "gregor-overland",
    title: "Gregor the Overlander",
    series: "The Underland Chronicles",
    seriesNumber: 1,
    year: 2003,
    cover: gregorImg,
    description:
      "When eleven-year-old Gregor falls through a grate in his basement, he discovers a hidden underground world filled with extraordinary creatures.",
    quote: "An unforgettable adventure beneath New York City.",
  },
];

export const seriesNames = [
  "All",
  "The Hunger Games",
  "The Underland Chronicles",
];

export const newsItems = [
  {
    id: 1,
    title: "Sunrise on the Reaping — Coming 2025",
    date: "2024",
    description:
      "The latest novel set in the world of Panem has been announced, with a release date set for 2025. A companion film is also in development.",
    category: "Announcement",
  },
  {
    id: 2,
    title: "Astrid Lindgren Memorial Award Nomination",
    date: "2024",
    description:
      "Suzanne Collins has been nominated for the prestigious Astrid Lindgren Memorial Award, recognizing her outstanding contribution to children's and young adult literature.",
    category: "Award",
  },
  {
    id: 3,
    title: "The Ballad of Songbirds & Snakes Film Release",
    date: "2023",
    description:
      "The prequel film adaptation premiered to worldwide audiences, bringing the story of young Coriolanus Snow to the big screen.",
    category: "Film",
  },
  {
    id: 4,
    title: "The Hunger Games — A Cultural Phenomenon",
    date: "2023",
    description:
      "Over a decade after the original trilogy, The Hunger Games continues to be one of the most influential YA series ever published, with over 100 million copies sold worldwide.",
    category: "Milestone",
  },
];
