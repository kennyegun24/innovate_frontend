export const wordCount = (word) => {
  const occurence = word
    ?.split("\n")
    .join(" ")
    .split("\t")
    .join(" ")
    .trim()
    .split(" ")
    .filter((word) => word !== "");
  return occurence.length;
};

export const readTime = (data) => {
  let count;
  const initialCount = wordCount(data);
  wordCount(data) > 0 ? (count = initialCount * 0.33) : (count = 0);
  if (count < 3600) {
    const calc = count / 60;
    const calculateMins = Math.ceil(calc);
    const finalCount =
      calculateMins === 1
        ? calculateMins + " minute"
        : calculateMins === 60
        ? 59 + " minutes"
        : calculateMins + " minutes";
    return finalCount;
  } else if (count >= 3600) {
    const calc = count / 3600;
    const remainder = count % 3600;
    const calculateHour = Math.floor(calc);
    const finalHour =
      calculateHour + (calculateHour === 1 ? " hour" : " hours");
    const mins = remainder / 60;
    const calculateMins = Math.round(mins);
    const finalMins =
      calculateMins + (calculateMins === 1 ? " minute" : " minutes");
    const finalCount = finalHour + " " + finalMins;
    return finalCount;
  }
};
