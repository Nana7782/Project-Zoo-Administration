import Continent from "../classes/Continent";
import EnclosureId from "../classes/EnclosureID";
import SpecialNeedsId from "../classes/SpecialNeedsId";

interface IAnimal {
  _emoji: string;
  _name: string;
  _yearOfBirth: number;
  _continents: Continent;
  _specialNeeds: SpecialNeedsId;
  _enclosureId: EnclosureId;
}

export default IAnimal;
