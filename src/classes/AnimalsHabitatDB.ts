import Animal from "./Animal";
import Continent from "./Continent";
import Enclosure from "./Enclosure";
import EnclosureId from "./EnclosureID";
import SpecialNeedsId from "./SpecialNeedsId";

const savannahHab = new Enclosure(
  EnclosureId.SavannahHabitat,
  "Savannenhaus",
  2001
);
console.log(savannahHab);

class Lion extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦁",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.SavannahHabitat
    );
  }
}
