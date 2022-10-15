"use strict";

import { trigram } from "@drorgl/n-gram";
console.clear();
console.log("--------------------------------");

let iCouldGiveSupport;
let iCouldGetSupport;
let myInterestMatches;

const generalInterests = [
  "Wissenschaft",
  "Technologie",
  "Ingeniurwesen",
  "Mathematik",
  "Robotik",
  "Biotechnologie",
  "Landwirtschaft",
  "Gesundheit und Medizin",
  "Energie",
  "Umwelt und Natur",
];

const data = [
  {
    _id: "634aab65849a8b8d4ed13993",
    firstName: "Mile",
    lastName: "Hollan",
    photo: "https://avatars.dicebear.com/api/human/992.svg",
    email: "milehollan@matrix-ggmbh.de",
    phone: 4916238588897,
    interests: ["Menschzentriertes Design", "Code Patterns"],
    description:
      "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
    activityAreas: ["Düsseldorf"],
    competencies: ["Webentwicklung"],
    offer: ["Digitale Koptenzen"],
    seek: ["Kontakt zu Unternehmen"],
    website: "nash@matrix-ggmbh.de",
    organization: "Matrix gGmbH",
    dateCreated: "2022-10-15T12:45:25.262Z",
    __v: 0,
  },
  {
    _id: "634ab2e51c4f1649e33f9d8d",
    firstName: "Good",
    lastName: "Hero",
    photo: "https://avatars.dicebear.com/api/human/872.svg",
    email: "info@opensenselab.org",
    phone: 49342238588897,
    interests: ["Berufsorientierung", "Gute Praxis"],
    description:
      "Unsere Vision ist eine Zukunft, in der jede:r freien Zugang zu Wissen und exzellenter Bildung hat und sich digital mündig für Klima- und Umweltschutz einsetzt..",
    activityAreas: ["Bundesweit, Münster, Nordrhein-Westfalen"],
    competencies: ["Webentwicklung"],
    offer: ["Digitale Koptenzen", "Dozierendentätigkeiten", "Vernetzung"],
    seek: ["Kontakt zu Unternehmen", "Gute Praxis und Inspirationen für Kurse"],
    website: "https://opensenselab.org/",
    organization: "openSenseLab gmbh",
    dateCreated: "2022-10-15T13:17:25.182Z",
    __v: 0,
  },
  {
    _id: "634ab4d913075ae2b7bbee27",
    firstName: "Paul",
    lastName: "Maier",
    photo: "https://avatars.dicebear.com/api/human/167.svg",
    email: "pauljustus279@gmail.com",
    phone: 4124141312,
    interests: ["Webentwicklung", "IT-Sicherheit", "Mathematik"],
    description:
      "Hallo zusammen, Im April 2022 war ich Praktikant bei MINTvernetzt und konnte dort im Webentwicklungsteam an dieser Plattform mitentwickeln. Mein Beitrag neben der Dokumentation war die Liste an Bundesländern und Landkreisen, aus denen man sein Aktivitätsgebiet wählen kann.",
    activityAreas: ["Breisgau-Hochschwarzwald , Landshut (Landkreis)"],
    competencies: ["Webentwicklung"],
    offer: [
      "Unterstützung im Bereich Webentwicklung",
      "Kontakt zu Schüler:innen",
    ],
    seek: ["Kontakt zu Unternehmen", "Vernetzung", "Kontakt zu Studierenden"],
    website: "https://opensenselab.org/",
    organization: "openSenseLab gmbh",
    dateCreated: "2022-10-15T13:25:45.853Z",
    __v: 0,
  },
  {
    _id: "634ab6ff13075ae2b7bbee29",
    firstName: "Great",
    lastName: "Funke",
    photo: "https://avatars.dicebear.com/api/human/167.svg",
    email: "greatfunke@gmail.com",
    phone: 421415124312,
    interests: ["Webentwicklung", "IT-Sicherheit", "Mathematik"],
    description:
      "In der Gemeinschaftsoffensive Zukunft durch Innovation NRW (kurz: zdi.NRW) bin ich als Teil der Landesgeschäftsstelle für die Betreuung und Beratung unserer zdi-Netzwerke und zdi-Schüler:innenlabore zuständig. Darüber hinaus halten wir immer unsere Augen und Ohren offen, um neue Themen und Zielgruppen für unsere zdi-Arbeit zu erschließen und die MINT-Bildung in Nordrhein-Westfalen langfristig und nachhaltig zu stärken..",
    activityAreas: ["Nordrhein-Westfalen"],
    competencies: ["UX Design"],
    offer: ["Gute Praxis und Inspirationen für Kurse", "Vernetzung"],
    seek: [
      "Gute Praxis und Inspirationen für Kurse",
      "Vernetzung",
      "Vernetzung",
      "Unterstützung im Bereich Community-Management",
    ],
    website: "https://opensenselab.org/",
    organization: "openSenseLab gmbh",
    dateCreated: "2022-10-15T13:34:55.442Z",
    __v: 0,
  },
  {
    _id: "634ab7e413075ae2b7bbee2b",
    firstName: "Leon",
    lastName: "Lane",
    photo: "https://avatars.dicebear.com/api/human/167.svg",
    email: "leonlane@gmail.com",
    phone: 421415124312,
    interests: ["Open Source"],
    description:
      "Ich leite die MINT-Vernetzungsstelle Deutschland, weil ich davon überzeugt bin, dass eine gute MINT-Bildung der Schlüssel zu Chancengerechtigkeit und Teilhabe ist. Bei MINTvernetzt vertrete ich den Verbund nach außen, bin für die strategische Entwicklung zuständig und kümmere mich um die interne Organisation.",
    activityAreas: ["Bundesweit", "Hamburg"],
    competencies: ["UX Design"],
    offer: ["Dozierendentätigkeiten", "Vernetzung"],
    seek: [
      "Gute Praxis und Inspirationen für Kurse",
      "Vernetzung",
      "Kontakt zu Schulen",
      "Unterstützung im Bereich Community-Management",
    ],
    website: "https://cosbygut.org/",
    organization: "CosbyGut gmbh",
    dateCreated: "2022-10-15T13:38:44.139Z",
    __v: 0,
  },
  {
    _id: "634ab85913075ae2b7bbee2d",
    firstName: "Jensen",
    lastName: "Mills",
    photo: "https://avatars.dicebear.com/api/human/167.svg",
    email: "gensenmilles@gmail.com",
    phone: 3123145123,
    interests: ["Innovationen", "Diversität", "Social Impact"],
    description:
      "Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.",
    activityAreas: ["Bundesweit", "Flensburg", "Leipzig"],
    competencies: ["UX Design"],
    offer: ["Kontakt zu Unternehmen", "Kontakt zu Universitäten/Hochschulen"],
    seek: [
      "Gute Praxis und Inspirationen für Kurse",
      "Vernetzung",
      "Kontakt zu Schulen",
      "Gute Praxis und Inspirationen für Kurse",
    ],
    website: "https://jensenmilles.org/",
    organization: "JensenMilles gmbh",
    dateCreated: "2022-10-15T13:40:41.006Z",
    __v: 0,
  },
  {
    _id: "634ab8da13075ae2b7bbee2f",
    firstName: "Taniya",
    lastName: "Hood",
    photo: "https://avatars.dicebear.com/api/human/167.svg",
    email: "taniyahood@gmail.com",
    phone: 4012384213,
    interests: ["Innovationen", "Diversität", "Social Impact"],
    description:
      "upported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls.",
    activityAreas: ["Bundesweit", "Berlin"],
    competencies: ["Softwareentwicklung"],
    offer: [
      "Digitale Kompetenzen",
      "Dozierendentätigkeiten",
      "Kontakt zu Universitäten/Hochschulen",
    ],
    seek: [
      "Gute Praxis und Inspirationen für Kurse",
      "Vernetzung",
      "Kontakt zu Schulen",
      "Gute Praxis und Inspirationen für Kurse",
    ],
    website: "https://taniyahood.org/",
    organization: "TaniyaHood gmbh",
    dateCreated: "2022-10-15T13:42:50.657Z",
    __v: 0,
  },
];

/**
 * Two blank spaces are added at the beginning, and one at the end,
 * and single spaces are replaced by double ones.
 * @param {string} input
 * @returns {string}
 */
const convertString = (input = "") => {
  if (!input || !input.trim()) return "";
  return `  ${input
    .trim()
    .replace(/\s+/g, " ") // replace multiple spaces w/ single spaces
    .replace(/\s/g, "  ")} ` // replace single spaces w/ double spaces
    .toLowerCase();
};

/**
 * Sorting them, and taking out repetitions (via Set)
 * @param {string} input
 * @returns {string}
 */
const generateTrigram = (input = "") => [
  ...new Set( // De-duplication
    trigram(convertString(input)) // Generating trigrams w/ prepared input
      .filter(
        (trigramItem) => !/^[\p{Letter}\p{Mark}0-9]\s\s$/giu.test(trigramItem)
      )
  ),
];

/**
 * Calculate trigram similarity between 2 strings
 * @param {string} input1
 * @param {string} input2
 * @returns {number}
 */
const trigramSimilarity = (input1 = "", input2 = "") => {
  if (input1 && input1.trim() && input1 === input2) return 1;

  const trigrams1 = generateTrigram(input1);
  const trigrams2 = generateTrigram(input2);

  // Total trigrams
  const total = [...new Set([...trigrams1, ...trigrams2])];
  // Trigrams both have in common
  const common = [];
  trigrams1.forEach((trigramItem) => {
    if (trigrams2.includes(trigramItem)) common.push(trigramItem);
  });

  return total.length === 0 ? 0 : common.length / total.length;
};

// Mapping and Matching

data.forEach((user, _, arr) => {
  const provideSupport = [];
  const getSupport = [];
  const interestMatches = [];

  // Mapping
  let userInterests = convertString(
    user.interests.concat(user.competencies).join("")
  );
  let userSeek = convertString(user.seek.join(""));
  let userOffer = convertString(user.offer.concat(user.competencies).join(""));

  // Matching
  arr.find((item) => {
    // User offers matching what other users seeks
    let otherUserSeek = convertString(
      item.offer.concat(item.competencies).join("")
    );
    if (Number(trigramSimilarity(userOffer, otherUserSeek)) > 0.5) {
      provideSupport.push(item._id);
    }

    // User seeking matching what other users offers
    let otherUserOffers = convertString(item.seek.join(""));
    if (Number(trigramSimilarity(userSeek, otherUserOffers)) > 0.5) {
      getSupport.push(item._id);
    }

    // User interest matches other user interests
    let otherUserInterests = convertString(
      item.interests.concat(item.competencies).join("")
    );
    if (Number(trigramSimilarity(userInterests, otherUserInterests)) > 0.5) {
      interestMatches.push(item._id);
    }
  });
  iCouldGiveSupport = [...new Set(provideSupport)];
  iCouldGetSupport = [...new Set(getSupport)];
  myInterestMatches = [...new Set(interestMatches)];
});

console.log("give", iCouldGiveSupport);
console.log("get", iCouldGetSupport);
console.log("interests", myInterestMatches);
