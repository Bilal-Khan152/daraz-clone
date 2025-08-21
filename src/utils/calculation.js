
export const getOldPrice = (discountedPrice, discountPercent) => {
  return Math.round(discountedPrice / (1 - discountPercent / 100));
};

export const getTotalReviews = (ratingBreakdown) => {
  return Object.values(ratingBreakdown).reduce((sum, val) => sum + val, 0);
};
