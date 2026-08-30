

import distillationFlask from "../assets/images/obj-distillation-flask.webp";
import testTubeRack from "../assets/images/obj-test-tube-rack.webp";
import roundPotionFlask from "../assets/images/obj-round-potion-flask.webp";
import smallVial from "../assets/images/obj-small-vial.webp";
import erlenmeyer from "../assets/images/obj-erlenmeyer.webp";
import apothecaryBottles from "../assets/images/obj-apothecary-bottles.webp";
import tallTubeRack from "../assets/images/obj-tall-tube-rack.webp";
import specimenJar from "../assets/images/obj-specimen-jar.webp";


export type LabObject = {
  id: string;
  name: string;
  kind: string;
  contents: string;
  detail: string;
  image: string;
  /** Hotspot rectangle in percentages of the scene image. */
  area: { left: number; top: number; width: number; height: number };
};

export const labObjects: LabObject[] = [
  {
    id: "distillation-flask",
    name: "Condenser Flask",
    kind: "Round-bottom flask on ring stand",
    contents: "Distilled nightshade essence",
    detail:
      "The workhorse of the bench. Its curved condenser neck returns vapour to the bulb, concentrating the essence over long, patient hours.",
    image: distillationFlask,
    area: { left: 2.5, top: 27, width: 12, height: 45 },
  },
  {
    id: "test-tube-rack",
    name: "Fermenting Trio",
    kind: "Test tubes in a wooden rack",
    contents: "Crimson bloodroot tincture",
    detail:
      "Three tubes of tincture left to settle in their timber cradle. A stray bead of sediment still drifts through each one.",
    image: testTubeRack,
    area: { left: 16, top: 22, width: 14, height: 40 },
  },
  {
    id: "round-potion-flask",
    name: "Voidglass Bulb",
    kind: "Round flask, corked",
    contents: "Concentrated shadow draught",
    detail:
      "A dense, swirling brew that seems to fold light in on itself. Handle by the neck only — the glass runs cold to the touch.",
    image: roundPotionFlask,
    area: { left: 30, top: 20, width: 13, height: 42 },
  },
  {
    id: "small-vial",
    name: "Traveler's Vial",
    kind: "Small corked bottle",
    contents: "Single-dose restorative",
    detail:
      "Compact enough for a coat pocket. A quick pull of the cork and a single measure is all it holds — no more, no less.",
    image: smallVial,
    area: { left: 43, top: 30, width: 9, height: 34 },
  },
  {
    id: "erlenmeyer",
    name: "Frostlight Flask",
    kind: "Erlenmeyer conical flask",
    contents: "Chilled luminous solution",
    detail:
      "Cyan light pools at the base and climbs in slow bubbles. Kept near the window ledge, where it seems to glow brightest at dusk.",
    image: erlenmeyer,
    area: { left: 52, top: 24, width: 13, height: 40 },
  },
  {
    id: "apothecary-bottles",
    name: "Apothecary Row",
    kind: "Three matching corked bottles",
    contents: "Labeled violet remedies",
    detail:
      "A trio of stock bottles, labels worn soft from handling. One cork lies loose in front — the middle bottle's contents are still in use.",
    image: apothecaryBottles,
    area: { left: 65, top: 26, width: 16, height: 40 },
  },
  {
    id: "tall-tube-rack",
    name: "Reagent Line",
    kind: "Five tall tubes in a steel rack",
    contents: "Indigo base reagent",
    detail:
      "Five identical measures, kept uniform for consistency's sake. Used whenever a recipe calls for precise, repeated dosing.",
    image: tallTubeRack,
    area: { left: 80, top: 20, width: 15, height: 38 },
  },
  {
    id: "specimen-jar",
    name: "Preserving Jar",
    kind: "Lidded specimen jar",
    contents: "Suspended magenta culture",
    detail:
      "Sealed tight against the air. Faint motes drift and catch the light inside — best not to open this one indoors.",
    image: specimenJar,
    area: { left: 88, top: 15, width: 11, height: 46 },
  },
];