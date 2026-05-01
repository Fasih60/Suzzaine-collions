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
  genre: string[];
  characters: { name: string; description: string }[];
  facts: string[];
  rating: number;
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
    quote: "May the odds be ever in your favor.",
    genre: ["Dystopian", "Science Fiction", "Young Adult", "Action"],
    characters: [
      { name: "Katniss Everdeen", description: "The resourceful and pragmatic tribute from District 12." },
      { name: "Peeta Mellark", description: "The baker's son and the male tribute from District 12." },
      { name: "Haymitch Abernathy", description: "The cynical and drunken mentor to District 12's tributes." }
    ],
    facts: [
      "Inspired by the myth of Theseus and the Minotaur.",
      "Spent over 100 consecutive weeks on the New York Times bestseller list.",
      "The Mockingjay pin originally belonged to Madge Undersee in the book."
    ],
    rating: 4.8,
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
    quote: "Remember who the real enemy is.",
    genre: ["Dystopian", "Science Fiction", "Young Adult", "Action"],
    characters: [
      { name: "Finnick Odair", description: "A charismatic previous victor from District 4." },
      { name: "Johanna Mason", description: "A fierce and angry victor from District 7." },
      { name: "President Snow", description: "The ruthless, tyrannical leader of Panem." }
    ],
    facts: [
      "Introduced the concept of the Quarter Quell, a special Hunger Games every 25 years.",
      "The arena was designed like a clock face with a new terror every hour.",
      "Won the Children's Choice Book Award for Teen Choice Book of the Year."
    ],
    rating: 4.9,
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
    quote: "It takes ten times as long to put yourself back together as it does to fall apart.",
    genre: ["Dystopian", "Science Fiction", "Young Adult", "War"],
    characters: [
      { name: "President Coin", description: "The calculating leader of District 13's rebellion." },
      { name: "Gale Hawthorne", description: "Katniss's best friend and a fierce rebel soldier." },
      { name: "Primrose Everdeen", description: "Katniss's gentle and compassionate younger sister." }
    ],
    facts: [
      "Explores the realities of war and the effects of trauma.",
      "The book's ending was highly controversial among fans.",
      "Sold over 450,000 copies in its first week of release."
    ],
    rating: 4.6,
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
    quote: "Snow lands on top.",
    genre: ["Dystopian", "Science Fiction", "Young Adult", "Psychological"],
    characters: [
      { name: "Coriolanus Snow", description: "An ambitious 18-year-old seeking to restore his family's honor." },
      { name: "Lucy Gray Baird", description: "The charismatic, musically talented tribute from District 12." },
      { name: "Sejanus Plinth", description: "A wealthy Capitol citizen who sympathizes with the districts." }
    ],
    facts: [
      "Set during the 10th Hunger Games, 64 years before Katniss's story.",
      "Reveals the origin of the Hanging Tree song.",
      "Explores the philosophical justifications for the Hunger Games."
    ],
    rating: 4.5,
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
    genre: ["Dystopian", "Science Fiction", "Young Adult"],
    characters: [
      { name: "Haymitch Abernathy", description: "The protagonist, participating in the 50th Hunger Games." }
    ],
    facts: [
      "Focuses on the Second Quarter Quell.",
      "Announced by Suzanne Collins as an exploration of propaganda and narrative control.",
      "A film adaptation was announced alongside the book."
    ],
    rating: 0,
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
    quote: "You have to be a little crazy to be a warrior.",
    genre: ["Fantasy", "Children's Literature", "Adventure"],
    characters: [
      { name: "Gregor", description: "An 11-year-old boy who becomes the 'Warrior' of a prophecy." },
      { name: "Boots", description: "Gregor's toddler sister, revered as the 'Princess'." },
      { name: "Ares", description: "A giant black bat who bonds with Gregor." }
    ],
    facts: [
      "Inspired by Collins thinking about Alice in Wonderland set in an urban environment like a manhole.",
      "The series features giant talking bats, cockroaches, spiders, and rats.",
      "Explores themes of war and biological warfare for a younger audience."
    ],
    rating: 4.7,
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
