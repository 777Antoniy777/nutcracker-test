import { Person } from '../../entities';
import { CharactersName } from '../../enums';

export class Giant extends Person {
  name = CharactersName.Giant;
  growth = 1539;
  hairColor = null;

  constructor() {
    super();
  }
}
