import { Composition } from '../../types';
import { Person } from '../../entities';

export class Worker extends Person {
  workersAmount = 100;
  workerComposition = {
    head: 'cinnamonStick',
    body: 'cinnamonStick',
    legs: 'cinnamonStick',
  };
  workers: Composition[] = [];

  constructor() {
    super();

    for (let i = 0; i < this.workersAmount; i++) {
      this.workers.push(this.workerComposition);
    }
  }

  build(towers: string[][], towerNumber: number): void {
    const currentTower = towers[towerNumber - 1];

    currentTower.push('roof');
  }
}
