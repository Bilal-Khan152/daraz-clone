export const sortingOptions = {
  BestMacth: "Best Match",
  PriceLowToHigh: "price low to high",
  PriceHighToLow: "price high to low",
};

export const sortingFunctions = {
  [sortingOptions.BestMacth]: (a, b) => 0,
  [sortingOptions.PriceLowToHigh]: (a, b) => a.price - b.price,
  [sortingOptions.PriceHighToLow]: (a, b) => b.price - a.price,
};
