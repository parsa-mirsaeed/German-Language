import type { GrammarLesson } from "@/content/schema/content-types";

export const placeDirectionLesson = {
  id: "a1-u10-place-direction",
  level: "A1.2",
  unit: 10,
  slug: "place-direction-two-way-prepositions",
  title: { de: "Ort oder Richtung?", en: "Place, direction, and two-way prepositions" },
  purpose:
    "Distinguish location from destination with a small set of common two-way prepositions and choose dative for where something is versus accusative for where it moves to.",
  requires: ["a1-u09-dative", "dative-case", "accusative-case"],
  introduces: ["two-way-prepositions", "location-vs-direction", "wo-wohin"],
  formula: [
    {
      label: "Location",
      pattern: "Wo? + Wechselpräposition + Dativ",
      note: "Use dative when the phrase describes a stable location: in der Küche, auf dem Tisch.",
    },
    {
      label: "Destination",
      pattern: "Wohin? + Wechselpräposition + Akkusativ",
      note: "Use accusative when the phrase gives the destination of movement: in die Küche, auf den Tisch.",
    },
  ],
  meaning: [
    "Some common prepositions—such as in, auf, an, unter, über, vor, hinter, neben, zwischen—can take either dative or accusative.",
    "At A1, the key decision is semantic: location answers Wo? and uses dative; destination/direction answers Wohin? and uses accusative.",
    "Movement by itself does not automatically mean accusative; the phrase must express movement toward a destination.",
  ],
  usage: [
    { title: "Describe where something is", body: "Das Buch liegt auf dem Tisch. The phrase answers Wo? and uses dative." },
    { title: "Describe where something goes", body: "Ich lege das Buch auf den Tisch. The phrase answers Wohin? and names a destination, so it uses accusative." },
    { title: "Talk about rooms and buildings", body: "Ich bin in der Küche. Ich gehe in die Küche. This pair makes the location/destination contrast visible." },
  ],
  recognitionCues: [
    { label: "Wo?", note: "A location answer predicts dative with a two-way preposition." },
    { label: "Wohin?", note: "A destination answer predicts accusative with a two-way preposition." },
    { label: "in · auf · an", note: "These very common two-way prepositions are useful first examples of the pattern." },
  ],
  paradigms: [
    {
      title: "Location versus destination",
      columns: ["Question", "Case", "Masculine", "Feminine", "Neuter"],
      rows: [
        ["Wo?", "Dativ", "auf dem Tisch", "in der Küche", "in dem Zimmer"],
        ["Wohin?", "Akkusativ", "auf den Tisch", "in die Küche", "in das Zimmer"],
      ],
    },
  ],
  examples: [
    { de: "Ich bin in der Küche.", en: "I am in the kitchen.", focusTokens: ["in der Küche"], kind: "affirmative" },
    { de: "Ich gehe in die Küche.", en: "I am going into the kitchen.", focusTokens: ["in die Küche"], kind: "affirmative" },
    { de: "Das Handy liegt auf dem Tisch.", en: "The phone is lying on the table.", focusTokens: ["auf dem Tisch"], kind: "context" },
    { de: "Legst du das Handy auf den Tisch?", en: "Are you putting the phone onto the table?", focusTokens: ["auf den Tisch"], kind: "question" },
    { de: "Der Schlüssel ist nicht in der Tasche.", en: "The key is not in the bag.", focusTokens: ["nicht", "in der Tasche"], kind: "negative" },
    { de: "Ich gehe in der Küche. → Ich gehe in die Küche.", en: "Location case → destination case.", focusTokens: ["in der Küche", "in die Küche"], kind: "correction" },
  ],
  contrasts: [
    {
      left: "Das Bild hängt an der Wand.",
      right: "Ich hänge das Bild an die Wand.",
      explanation: "The first phrase gives the picture's location (dative). The second gives the destination of the hanging action (accusative).",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — ask Wo? or Wohin?",
      body: "Do not teach this as “no movement versus movement.” Train the meaning question instead: stable location (Wo?) versus destination (Wohin?).",
      fa: "این الگو را فقط با «حرکت/بدون حرکت» یاد نگیر. سؤال درست را بپرس: Wo? برای مکان ثابت و Wohin? برای مقصد.",
    },
  ],
  commonMistakes: [
    { wrong: "Ich bin in die Küche.", correct: "Ich bin in der Küche.", explanation: "sein here describes a location, so in takes dative: in der Küche." },
    { wrong: "Ich gehe in der Küche.", correct: "Ich gehe in die Küche.", explanation: "The phrase gives the destination of gehen, so in takes accusative: in die Küche." },
  ],
  speakingPrompts: [
    { prompt: "Say where your phone is.", support: "Mein Handy ist/liegt auf/in ..." },
    { prompt: "Say where you are going now.", support: "Ich gehe in/auf ..." },
    { prompt: "Make a Wo?/Wohin? pair with the same room or object.", support: "Ich bin ... / Ich gehe ..." },
  ],
  exercises: [
    {
      id: "u10-place-01",
      type: "multiple-choice",
      prompt: "Choose the correct phrase: Ich bin ___.",
      options: ["in die Küche", "in der Küche", "auf den Küche"],
      answer: "in der Küche",
      explanation: "Ich bin describes location (Wo?), so the two-way preposition in takes dative: in der Küche.",
    },
  ],
  references: [
    { label: "Repository engineering plan", note: "Unit 10 follows the planned place/direction and two-way-preposition progression." },
    { label: "Duden — grammar knowledge for learners", url: "https://www.duden.de/sprachwissen/fuer-lernende", note: "Grammar cross-check; wording and examples are original." },
  ],
} satisfies GrammarLesson;
