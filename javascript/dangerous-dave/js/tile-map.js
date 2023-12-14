// empyt block = EB -> EB
// Red Blocks = RB-> RB
// Out Blocks = OB -> OB
// Pipe = PI -> PI
// Door = DO -> DO
// Blue Diamond = BD -> BD
// Red Diamond = RD  -> RD
// Trophy = TR -> TR
// Dave = DA -> DA
// Blue Block = 9 -> BB
// Pink block = PB -> PB
// fire = FI -> FI
// water = WA -> WA
// plant = PL -> PL
// Aqua Blocks = RB4 -> AB
// gun = RBBD -> GU
// jet = RBRD  -> JE
// pink pearl = RB7 -> PP
// crown = RB8 -> CR
// ring = RB9 -> RI
// spider = 2EB -> SP
// Pink Spiral = 2RB -> PS
// Red Spiral = 22 -> RS

const TEST_MAP = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
];

const LEVEL_CHANGE_MAP = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["DO", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
];


const LEVEL1_MAP = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RD", "RB", "OB"],
  ["RB", "EB", "EB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "TR", "EB", "EB", "EB", "BD", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "EB", "EB", "RB", "OB"],
  ["RB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "BD", "RB", "OB"],
  ["RB", "RB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "RB", "RB", "RB", "RB", "EB", "EB", "EB", "RB", "RB", "RB", "RB", "RB", "RB", "EB", "RB", "OB"],
  ["RB", "PI", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "DO", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
];

const LEVEL2_MAP1 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB"],
  ["RB", "RD", "EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "PB", "EB", "EB", "PB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "PB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "PB", "PB", "PB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "EB", "PB", "PB", "EB", "EB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "TR", "RB", "EB", "PB", "PB", "PB", "PB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "EB", "PB", "EB", "EB", "RB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "EB", "EB", "EB", "PB", "PB", "PB", "EB", "RD", "RB", "EB", "EB", "EB", "EB", "RB", "EB", "BD", "BD", "BD", "BD"],
  ["RB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "BD", "EB", "EB", "PB", "RB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "FI", "FI", "FI", "FI", "FI", "FI", "RB", "FI", "FI", "FI", "FI", "RB", "WA", "WA", "WA", "WA", "WA"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
];

const LEVEL2_MAP2 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB"],
  ["EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "RB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "RB", "RB", "RB", "RB", "EB", "RB", "RB", "EB", "RB", "RB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "RB", "EB", "EB", "EB", "EB", "EB", "RB", "RB", "EB", "EB", "EB"],
  ["EB", "EB", "DA", "EB", "EB", "EB", "EB", "RB", "RB", "EB", "EB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB"],
  ["EB", "PB", "PB", "PB", "PB", "PB", "EB", "RB", "EB", "EB", "RB", "RB", "EB", "RD", "RB", "EB", "EB", "EB", "EB", "RB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "EB", "RB", "EB", "EB", "EB", "EB", "RB", "EB", "EB", "RB", "EB", "RB"],
  ["EB", "BD", "BD", "BD", "BD", "BD", "EB", "RB", "EB", "RB", "EB", "RB", "RB", "EB", "RB", "EB", "RB", "RB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "BD", "EB", "EB", "EB", "BD", "RB", "EB", "EB"],
  ["WA", "WA", "WA", "WA", "WA", "WA", "WA", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
];

const LEVEL2_MAP3 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB"],
  ["RB", "RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "DO", "RB", "RB"],
  ["RB", "RB", "EB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB"],
  ["RB", "RB", "EB", "EB", "EB", "EB", "EB", "RB", "PL", "PL", "PL", "EB", "EB", "PL", "PL", "EB", "PL", "PL", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "EB", "EB", "RB", "PL", "EB", "PL", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "PL", "EB"],
  ["EB", "EB", "EB", "EB", "RB", "EB", "EB", "RB", "PL", "PL", "PL", "EB", "PL", "EB", "EB", "EB", "PL", "PL", "EB", "EB"],
  ["EB", "EB", "RB", "EB", "RB", "EB", "RB", "RB", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "PL", "EB"],
  ["EB", "RB", "RB", "EB", "EB", "EB", "EB", "RB", "PL", "EB", "EB", "EB", "EB", "PL", "PL", "EB", "PL", "EB", "PL", "EB"],
  ["DA", "EB", "RB", "EB", "EB", "RB", "PP", "RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
];

export { LEVEL1_MAP, LEVEL2_MAP1, LEVEL2_MAP2, LEVEL2_MAP3, TEST_MAP, LEVEL_CHANGE_MAP };

