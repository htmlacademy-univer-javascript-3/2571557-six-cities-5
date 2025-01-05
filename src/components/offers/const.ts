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

export const PARAMS_BY_BLOCK_NAME = {
  'place-card__bookmark': {
    width:18,
    height:19
  },
  'offer__bookmark': {
    width:31,
    height:33
  }
};

export const RATING_LENGTH = 20;

export type BlockType = keyof typeof SIZE_BY_BLOCKS;
export type ParamBlockType = keyof typeof PARAMS_BY_BLOCK_NAME;
