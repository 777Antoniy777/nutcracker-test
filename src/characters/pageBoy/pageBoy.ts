import { Composition } from '../../types';
import { Person } from '../../entities';

export class PageBoy extends Person {
  pageBoyAmount = 12;
  pageBoyComposition = {
    head: 'pearl',
    body: ['ruby', 'emerald'],
    legs: 'gold',
    accessories: {
      neck: null,
      leftHand: 'torch',
      rightHand: 'torch',
      leftLeg: null,
      rightLeg: null,
    },
  };
  pageBoys: Composition[] = [];

  constructor() {
    super();

    for (let i = 0; i < this.pageBoyAmount; i++) {
      this.pageBoys.push(this.pageBoyComposition);
    }
  }
}
