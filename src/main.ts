import Animal from "./classes/Animal";
import Continent from "./classes/Continent";
import Enclosure from "./classes/Enclosure";
import EnclosureId from "./classes/EnclosureId";
import SpecialNeedsId from "./classes/SpecialNeedsId";

const enclosures: Enclosure[] = [
  new Enclosure(EnclosureId.SavannahHabitat, "Savannah Habitat", 2001),
  new Enclosure(EnclosureId.JungleHabitat, "Jungle Habitat", 2005),
  new Enclosure(EnclosureId.AquaticHabitat, "Aquatic Habitat", 2010),
  new Enclosure(EnclosureId.ReptileHouse, "Reptile House", 2018),
];

const allAnimals: Animal[] = [
  new Animal(
    "🦁",
    "Lion",
    2015,
    [Continent.Africa],
    SpecialNeedsId.Meat,
    EnclosureId.SavannahHabitat
  ),
  new Animal(
    "🐘",
    "Elephant",
    2010,
    [Continent.Africa],
    SpecialNeedsId.Plants,
    EnclosureId.SavannahHabitat
  ),
  new Animal(
    "🐬",
    "Dolphin",
    2018,
    [Continent.Australia],
    SpecialNeedsId.Fish,
    EnclosureId.AquaticHabitat
  ),
  new Animal(
    "🐍",
    "Snake",
    2019,
    [Continent.Asia],
    SpecialNeedsId.Meat,
    EnclosureId.ReptileHouse
  ),
  new Animal(
    "🐒",
    "Monkey",
    2014,
    [Continent.Africa],
    SpecialNeedsId.Plants,
    EnclosureId.JungleHabitat
  ),
  new Animal(
    "🐻",
    "Bear",
    2016,
    [Continent.NorthAmerica],
    SpecialNeedsId.Plants,
    EnclosureId.JungleHabitat
  ),
  new Animal(
    "🦅",
    "Eagle",
    2017,
    [Continent.NorthAmerica],
    SpecialNeedsId.Meat,
    EnclosureId.ForestHabitat
  ),
  new Animal(
    "🐢",
    "Turtle",
    2020,
    [Continent.Australia],
    SpecialNeedsId.Plants,
    EnclosureId.AquaticHabitat
  ),
  new Animal(
    "🐊",
    "Crocodile",
    2012,
    [Continent.Australia],
    SpecialNeedsId.Meat,
    EnclosureId.ReptileHouse
  ),
  new Animal(
    "🦜",
    "Macaw",
    2021,
    [Continent.SouthAmerica],
    SpecialNeedsId.Plants,
    EnclosureId.JungleHabitat
  ),
  new Animal(
    "🐟",
    "Trout",
    2022,
    [Continent.NorthAmerica],
    SpecialNeedsId.Fish,
    EnclosureId.AquaticHabitat
  ),
  new Animal(
    "🦈",
    "Shark",
    2019,
    [Continent.Australia],
    SpecialNeedsId.Fish,
    EnclosureId.AquaticHabitat
  ),
  new Animal(
    "🐸",
    "Frog",
    2020,
    [Continent.Australia],
    SpecialNeedsId.Plants,
    EnclosureId.ReptileHouse
  ),
  new Animal(
    "🦏",
    "Rhinoceros",
    2014,
    [Continent.Africa],
    SpecialNeedsId.Plants,
    EnclosureId.SavannahHabitat
  ),
];

function createAnimal() {
  const animalSelect = document.getElementById(
    "animal-select"
  ) as HTMLSelectElement;
  const nameInput = document.getElementById("name-input") as HTMLInputElement;
  const yearInput = document.getElementById("year-input") as HTMLInputElement;
  const needsSelect = document.getElementById(
    "needs-select"
  ) as HTMLSelectElement;
  const continentSelect = document.getElementById(
    "continent-select"
  ) as HTMLSelectElement;
  const enclosureSelect = document.getElementById(
    "enclosure-select"
  ) as HTMLSelectElement;

  const selectedAnimal = animalSelect.value;
  const name = nameInput.value;
  const yearOfBirth = parseInt(yearInput.value);
  const specialNeeds =
    SpecialNeedsId[needsSelect.value as keyof typeof SpecialNeedsId];

  // Kontinente in ein Array von Enum-Werten umwandeln
  const continents: Continent[] = Array.from(
    continentSelect.selectedOptions
  ).map((option) => {
    return Continent[option.value as keyof typeof Continent];
  });

  const enclosureId =
    EnclosureId[enclosureSelect.value as keyof typeof EnclosureId];

  const newAnimal = new Animal(
    selectedAnimal,
    name,
    yearOfBirth,
    continents,
    specialNeeds,
    enclosureId
  );
  allAnimals.push(newAnimal);
}

document.getElementById("animal-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  createAnimal();
  console.log(createAnimal());
});
