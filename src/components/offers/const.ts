export const SIZE_BY_BLOCKS = {
  'cities': {
    width:260,
    height:200
  },
  'near-places': {
    width:260,
    height:200
  },
  'favorites': {
    width:150,
    height:110
  },
};

export type BlockType = keyof typeof SIZE_BY_BLOCKS;
