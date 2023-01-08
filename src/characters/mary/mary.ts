import { Person } from '../../entities';
import { CharactersName } from '../../enums';

export class Mary extends Person {
  name = CharactersName.Mary;
  growth = 150;
  hairColor = 'brown';

  constructor() {
    super();
  }
}
