const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export const bridge2 = [
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { tempo: 7, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { tempo: 4, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { tempo: 4, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { tempo: 7, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: false },
  { tempo: 7, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 2, chain: false },
  { tempo: 7, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { tempo: 3, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { tempo: 9, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { tempo: 4, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { tempo: 8, hold: 0, chain: false, rest: true },

  //////

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { tempo: 4, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { tempo: 7, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: false },
  { tempo: 7, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 2, chain: false },
  { tempo: 7, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { tempo: 3, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { tempo: 9, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { tempo: 8, hold: 0, chain: false, rest: true },

]