/**
 * Legend
 *
 * 0. Empty Block = EB
 * 1. Red Block = RB
 * 2. Out Block = OB
 * 3. Pipe = PI
 * 4. Door = DO
 * 5. Blue Diamond = BD
 * 6. Red Diamond = RD
 * 7. Trophy = TR
 * 8. Dave = DA
 * 9. Blue Block = BB
 * 10. Pink block = PB
 * 11. Fire = FI
 * 12. Water = WA
 * 13. Plant = PL
 * 14. Aqua Block = AB
 * 15. Gun = GU
 * 16. JetPack = JP
 * 17. Pink Pearl = PP
 * 18. Crown = CR
 * 19. Ring = RI
 * 20. Spider = SP
 * 21. Pink Spiral = PS
 * 22. Red Spiral = RS
 * 23. Star = ST
 */

const TEST_MAP = [[
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "TR", "EB", "EB", "EB", "EB", "EB", "EB", "RS", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "WA", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "JP", "EB", "FI", "EB", "RI", "PP", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "EB", "EB", "DA", "EB", "EB", "GU", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "OB"],
  ["RB", "RB", "RB", "PB", "BB", "OB", "PI", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]];

const START_MAP = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "EB", "OB", "OB", "OB", "OB", "EB", "OB", "EB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "EB", "OB", "CR", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "EB", "OB", "EB", "EB", "OB", "OB", "OB", "EB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "CR", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "EB", "OB", "FI", "OB", "OB", "OB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "FI", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

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


const LEVEL1_MAP = [[
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
]];

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
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "RB", "EB", "EB", "EB", "RB", "BD", "EB", "EB", "EB", "EB", "RB", "EB", "EB"],
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
  ["EB", "EB", "DA", "EB", "RB", "EB", "EB", "RB", "PL", "PL", "PL", "EB", "PL", "EB", "EB", "EB", "PL", "PL", "EB", "EB"],
  ["EB", "EB", "RB", "EB", "RB", "EB", "RB", "RB", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "PL", "EB"],
  ["EB", "RB", "RB", "EB", "EB", "EB", "EB", "RB", "PL", "EB", "EB", "EB", "EB", "PL", "PL", "EB", "PL", "EB", "PL", "EB"],
  ["EB", "EB", "RB", "EB", "EB", "RB", "PP", "RB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["RB", "RB", "RB", "RB", "RB", "RB", "RB", "RB", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
];

const LEVEL2_MAP = [LEVEL2_MAP1, LEVEL2_MAP2, LEVEL2_MAP3];

const LEVEL3_MAP1 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB"],
  ["OB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "GU", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "PI", "DA", "EB", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "PL", "PL", "EB", "EB", "EB", "EB", "PL"],
  ["OB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL3_MAP2 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "SP", "EB"],
  ["EB", "EB", "DA", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "EB"],
  ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL3_MAP3 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB"],
  ["EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "SP", "EB"],
  ["EB", "PL", "EB", "DA", "EB", "PL", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "PL", "EB", "EB", "PL", "EB", "EB"],
  ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL3_MAP4 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "EB"],
  ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB"],
  ["EB", "EB", "PL", "EB", "EB", "EB", "EB", "PL", "PL", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "FI", "FI", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "FI", "FI"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "FI"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL3_MAP5 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "DO", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["AB", "AB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "OB", "OB", "EB", "OB", "EB", "EB", "EB", "EB", "CR", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RI", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["AB", "AB", "FI", "FI", "EB", "EB", "EB", "EB", "EB", "EB", "FI", "FI", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "FI", "FI", "EB", "EB", "EB", "EB", "FI", "FI", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "FI", "FI", "JP", "TR", "FI", "FI", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
]

const LEVEL3_MAP = [LEVEL3_MAP1, LEVEL3_MAP2, LEVEL3_MAP3, LEVEL3_MAP4, LEVEL3_MAP5];

const LEVEL4_MAP1 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["BB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "EB", "BB", "BB", "BB", "BB", "EB", "EB", "EB"],
  ["BB", "PI", "BB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "DA", "BB", "FI", "FI", "BB", "BB", "BB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "EB", "EB", "BB", "BB", "BB", "BD", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "BB"],
  ["BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "BB", "EB", "EB", "EB"],
  ["BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "EB", "BB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
]

const LEVEL4_MAP2 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "EB", "EB", "PS", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "BB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "BB", "BB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "EB", "EB"],
  ["EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "BB", "DA", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "FI", "FI", "FI", "FI", "FI", "FI", "FI"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],

]

const LEVEL4_MAP3 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "BD", "EB", "BB", "RD", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "EB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "BB", "EB", "EB"],
  ["BB", "BB", "EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "BB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "BB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "EB", "BB", "BB", "BB"],
  ["BB", "BB", "BB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "EB", "BB", "EB", "EB", "BB", "EB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["FI", "FI", "FI", "FI", "FI", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL4_MAP4 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["BD", "EB", "BB", "RD", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "BD", "EB", "EB", "BD", "EB", "EB"],
  ["BB", "EB", "BB", "EB", "EB", "WA", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "EB", "EB", "EB", "EB", "BB", "BB", "EB", "EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "WA", "EB", "EB", "EB", "BB", "EB", "EB"],
  ["EB", "EB", "BB", "BB", "BB", "BB", "BB", "EB", "BB", "RD", "EB", "BD", "BB", "WA", "BB", "EB", "EB", "EB", "EB", "BB"],
  ["EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "BB", "WA", "EB", "EB", "BD", "WA", "BB", "EB", "EB", "EB", "EB", "BB"],
  ["EB", "EB", "BB", "EB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "BB", "BB", "BB", "BB", "EB", "EB", "BB", "EB", "EB"],
  ["EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL4_MAP5 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "BB", "EB", "BD", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "BD", "WA", "BB", "BB", "WA", "EB", "BB", "EB", "EB", "BD", "BB", "EB", "BB", "BB"],
  ["EB", "BB", "BB", "BB", "EB", "BB", "BB", "BB", "EB", "EB", "BB", "BD", "BB", "EB", "EB", "BD", "BB", "EB", "BD", "EB"],
  ["EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "TR", "BB", "BD", "BB", "EB", "EB", "BD", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "BB", "BB", "BB", "BD", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "BB", "BB", "EB", "BB", "BB", "EB", "EB", "EB", "BB", "EB", "EB", "BB", "BB", "BB", "PL", "RI"],
  ["EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB"],
  ["EB", "EB", "BB", "DA", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL4_MAP6 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BD", "BB", "EB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "EB"],
  ["BD", "BB", "EB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BD", "BB", "BB", "BB", "BB", "BB", "BD", "EB", "BB", "EB", "BB", "PL", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "BB", "BB", "EB", "BB", "EB", "EB", "BB", "PL", "PL", "PL", "PL", "PL", "PL", "PL", "PL"],
  ["BB", "BB", "BB", "PL", "RI", "BB", "EB", "EB", "BB", "EB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "BB", "BB", "BB", "BB", "EB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL4_MAP7 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "BD", "EB", "BD", "EB", "BD", "CR", "BB", "BB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "DO", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "DA", "EB", "BB", "BB", "BB", "BB", "BB"],
  ["BB", "EB", "EB", "BB", "EB", "BB", "PL", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "EB", "EB", "EB", "EB", "BB", "BB"],
  ["BB", "BB", "EB", "BB", "EB", "EB", "BB", "PL", "PL", "PL", "PL", "PL", "PL", "PL", "PL", "BB", "EB", "EB", "BB", "BB"],
  ["BB", "EB", "EB", "BB", "EB", "EB", "EB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "EB", "BB", "BB"],
  ["BB", "EB", "BB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "EB", "EB", "EB", "EB", "EB", "EB", "BB", "BB", "BB"],
  ["BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB", "BB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]
const LEVEL4_MAP = [LEVEL4_MAP1, LEVEL4_MAP2, LEVEL4_MAP3, LEVEL4_MAP4, LEVEL4_MAP5, LEVEL4_MAP6, LEVEL4_MAP7];

const LEVEL5_MAP1 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "EB", "ST"],
  ["OB", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "ST", "EB", "EB", "ST", "EB", "EB"],
  ["OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "EB", "ST", "EB", "EB", "ST", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "EB", "EB", "EB", "GU", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "ST", "EB", "PP", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RS", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "PI", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

const LEVEL5_MAP2 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "ST", "EB", "EB", "ST", "EB", "EB", "EB", "ST", "EB", "EB", "ST", "EB"],
  ["EB", "EB", "ST", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "EB", "ST", "ST", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "ST", "EB", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RS", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "PP", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB"],
  ["EB", "EB", "DA", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

const LEVEL5_MAP3 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["ST", "EB", "EB", "ST", "EB", "EB", "ST", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "EB", "ST", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "ST", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "PP", "EB", "PP", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "TR", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "OB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB"],
  ["WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

const LEVEL5_MAP4 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "ST", "EB", "EB", "EB", "ST", "EB", "ST", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "ST", "EB", "ST", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "OB", "OB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "RD", "EB", "EB", "EB", "RD", "OB", "OB", "OB", "OB", "OB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "0B", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "RD"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI", "FI"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

const LEVEL5_MAP5 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "EB", "EB", "EB", "BD", "EB", "EB", "BD", "EB", "EB", "BD", "EB", "EB", "EB", "PP", "PI", "PP"],
  ["OB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "DA", "EB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB", "OB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "OB", "EB", "OB", "OB", "EB", "EB", "BD", "EB", "PL", "OB", "OB", "OB", "OB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "OB", "BD", "EB", "OB", "EB", "OB", "OB", "OB", "OB", "OB", "BD", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "EB", "EB", "OB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "PL", "EB", "EB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "RD", "OB", "OB", "WA", "WA", "WA", "OB", "OB", "PL", "EB", "OB", "EB", "PL", "EB", "EB", "EB"],
  ["FI", "FI", "FI", "FI", "FI", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

const LEVEL5_MAP6 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "PI", "PP", "EB", "EB", "EB", "PP", "PI", "PP", "EB", "EB", "EB", "EB", "EB", "RD", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "RD"],
  ["OB", "EB", "EB", "EB", "EB", "PP", "EB", "EB", "EB", "PP", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "BD", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB", "EB", "EB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB"],
  ["EB", "PL", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

const LEVEL5_MAP7 = [
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "PP", "PI", "PP", "EB", "EB", "EB", "EB", "EB", "RD", "EB", "EB", "EB", "EB", "CR", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "DO", "EB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "RD", "EB", "EB", "EB", "EB", "OB"],
  ["PP", "EB", "EB", "EB", "PP", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "OB", "EB", "EB", "EB", "EB", "EB", "OB"],
  ["EB", "EB", "EB", "DA", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "OB", "OB", "OB"],
  ["OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB", "OB"],
  ["EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB", "EB"]
]

const LEVEL5_MAP = [LEVEL5_MAP1, LEVEL5_MAP2, LEVEL5_MAP3, LEVEL5_MAP4, LEVEL5_MAP5, LEVEL5_MAP6, LEVEL5_MAP7];



export { LEVEL1_MAP, LEVEL2_MAP, LEVEL3_MAP, LEVEL4_MAP, LEVEL5_MAP, TEST_MAP, LEVEL_CHANGE_MAP, START_MAP };
