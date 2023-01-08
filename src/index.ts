// tsc --build --clean
import { Mary, Nutcracker, Castle, Giant, Worker, PageBoy } from './characters';
import { DAMAGED_TOWER } from './constants';

const mary = new Mary();
const nutcracker = new Nutcracker();
const castle = new Castle();
const giant = new Giant();
const worker = new Worker();
const pageBoy = new PageBoy();

mary.watchAt(castle.name);
const lastPartOfTower = mary.watchAt(castle.towersComposition[DAMAGED_TOWER - 1].at(-1));
const isRoofNotExist = lastPartOfTower !== 'roof';
worker.build(castle.towersComposition, DAMAGED_TOWER - 1);
mary.talkTo(nutcracker.name, '', true);

nutcracker.talkTo(
  mary.name,
  `Недавно этому прекрасному замку грозила очень большая опасность, или, лучше сказать, даже совершенная погибель; великан ${
    giant.name
  }, ${giant.walkTo('nearby')}, ${giant.eat(
    castle.towersComposition[DAMAGED_TOWER - 1].at(-1)
  )} и уж хотел было приняться за купол, да жители успели его умилостивить, поднеся ему, в виде выкупа, ${castle.giveQuartersToGiant()}, ${giant.eat(
    castle.giveQuartersToGiant().toString()
  )} и ${giant.walkTo('far away')}`
);

pageBoy.walkTo(mary.name);
