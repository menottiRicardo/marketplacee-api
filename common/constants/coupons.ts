export enum DISCOUNT_TYPE {
  PERCENT,
  NUMBER,
}

export type COUPON = {
  [key: string]: string | DISCOUNT_TYPE | number;

  code: string;
  type: DISCOUNT_TYPE;
  /* 
      if DISCOUNT_TYPE.NUMBER expecting to be in cents 
      if DISCOUNT_TYPE.PERCENT expecting as 0.01 = 1%, 0.2 = 20% and so on
    */
  amount: number;
};

export const _CODEZ: COUPON[] = [
  {
    code: 'freerest',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 39840,
  },
  {
    code: 'jude11',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'ashely22',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'riley22',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Amanda201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Tanya201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Monica201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Jackie221',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Emily201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Jackie201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Patricia201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Stephanie201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Gina201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Emily221',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Ariel201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Kristen201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Kathryn201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Sarah201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'kaitlynne201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Michele201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Neda201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Katie201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Brandy201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Jamie201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Abby201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Rachel201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Hayley201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Whitney201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Mary201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Courtney201',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Brooke22',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Liz40',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Julie22',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Jessica22',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'shana22',
    type: DISCOUNT_TYPE.NUMBER,
    amount: 4000,
  },
  {
    code: 'Rest10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },

  {
    code: 'Skim10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'Sovrn10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'DontPayFull10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'CouponBirds10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'Givling10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'Coupert10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'LaraKulpa10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'SimplyCodes10',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.1,
  },
  {
    code: 'help20',
    type: DISCOUNT_TYPE.PERCENT,
    amount: 0.2,
  },
];
