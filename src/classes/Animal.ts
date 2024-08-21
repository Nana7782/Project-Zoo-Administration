import IAnimal from "../interfaces/IAnimal";
import Continent from "./Continent";
import EnclosureId from "./EnclosureID";
import SpecialNeedsId from "./SpecialNeedsId";

class Animal implements IAnimal {
  _emoji: string;
  _name: string;
  _yearOfBirth: number;
  _continents: Continent;
  _specialNeeds: SpecialNeedsId;
  _enclosureId: EnclosureId;

  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId,
    enclorsureId: EnclosureId
  ) {
    this._emoji = emoji;
    this._name = name;
    this._yearOfBirth = yearOfBirth;
    this._continents = continents;
    this._specialNeeds = specialNeeds;
    this._enclosureId = enclorsureId;
  }
}
