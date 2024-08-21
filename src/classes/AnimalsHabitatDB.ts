import Animal from "./Animal";
import Continent from "./Continent";
import Enclosure from "./Enclosure";
import EnclosureId from "./EnclosureId";
import SpecialNeedsId from "./SpecialNeedsId";

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

class Elephant extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐘",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.SavannahHabitat
    );
  }
}

class Bear extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐻",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.ForestHabitat
    );
  }
}

class Monkey extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦧",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.JungleHabitat
    );
  }
}

class Dolphin extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐬",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}

class Snake extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐍",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.ReptileHouse
    );
  }
}

class Turtle extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐢",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.ReptileHouse
    );
  }
}
class Crocodile extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐊",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.ReptileHouse
    );
  }
}
class Macaw extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦜",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.JungleHabitat
    );
  }
}
class Fish extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐡",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Trout extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐟",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Shark extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦈",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Octopus extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐙",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Squid extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦑",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Frog extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐸",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.ReptileHouse
    );
  }
}
class Lizard extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦎",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.ReptileHouse
    );
  }
}
class Swan extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦢",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Duck extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦆",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Clownfish extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🤡",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Tiger extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐅",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.JungleHabitat
    );
  }
}
class Rhinoceros extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦏",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.SavannahHabitat
    );
  }
}
class Alligator extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐊",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.ReptileHouse
    );
  }
}
class Cockatoo extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦜",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.JungleHabitat
    );
  }
}
class Pufferfish extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐡",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.AquaticHabitat
    );
  }
}
class Panda extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐼",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.JungleHabitat
    );
  }
}
class Camel extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐫",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.SavannahHabitat
    );
  }
}
class Toucan extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🐧",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.SavannahHabitat
    );
  }
}
class Flamingo extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continent,
    specialNeeds: SpecialNeedsId
  ) {
    super(
      "🦩",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      EnclosureId.SavannahHabitat
    );
  }
}
