export const formatNumber = num => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};
