import Animal from "./Animal";
import Continent from "./Continent";
import Enclosure from "./Enclosure";
import EnclosureId from "./EnclosureId";
import SpecialNeedsId from "./SpecialNeedsId";

const savannahHab = new Enclosure(
  EnclosureId.SavannahHabitat,
  "Savannenhaus",
  2001
);
console.log(savannahHab);

const lion = new Animal(
  "🦁",
  "Löwe",
  2010,
  Continent.Africa,
  SpecialNeedsId.Meat,
  EnclosureId.SavannahHabitat
);
console.log(lion);
