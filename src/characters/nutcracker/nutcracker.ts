import { Person } from '../../entities';
import { CharactersName } from '../../enums';

export class Nutcracker extends Person {
  isBewitched = true;
  name = CharactersName.Nutcracker;
  growth = 180;
  hairColor = null;

  constructor() {
    super();
  }
}
