import { getRandomInt } from '../../utils';
import { CharactersName } from '../../enums';
import { DAMAGED_TOWER } from '../../constants';

export class Castle {
  name = CharactersName.Castle;
  citizensAmount = 765;
  towersAmount = 4;
  quartersAmount = 8;
  quartersType = ['townHall', 'candyGrove', 'forge', 'garden', 'barracks', 'royalChambers', 'temple', 'stable'];
  towerComposition = ['foundation', 'middlePart', 'roof'];
  towersComposition: string[][] = [];

  constructor() {
    this.createInitialTowersComposition();
  }

  createInitialTowersComposition(): void {
    for (let i = 0; i < this.towersAmount; i++) {
      if (i === DAMAGED_TOWER - 1) {
        const damagedTower = this.towerComposition.filter((elem) => elem !== 'roof');

        this.towersComposition.push(damagedTower);

        return;
      }

      this.towersComposition.push(this.towerComposition);
    }
  }

  giveQuartersToGiant(): string[] {
    const randomQuarterIndex = getRandomInt(0, this.quartersType.length);
    const randomQuarter = this.quartersType[randomQuarterIndex];

    if (randomQuarter === 'candyGrove') {
      return this.giveQuartersToGiant();
    }

    return ['candyGrove', randomQuarter];
  }
}
