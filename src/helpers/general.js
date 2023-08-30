import moment from "moment";

export const convertTime = (created_at) => {
  const formatDate = created_at;
  const formattedDate = moment(formatDate).fromNow();

  return formattedDate;
};

export const numberFormat = (data) => {
  let followCount = 0;
  if (data > 999 && data < 1000000) {
    const solveCount = data / 1000;
    followCount = +Math.floor(solveCount * 100) / 100 + "K";
  } else if (data > 999999 && data < 1000000000) {
    const solveCount = data / 1000000;
    followCount = Math.floor(solveCount * 100) / 100 + "M";
  } else if (data > 999999999) {
    const solveCount = data / 1000000000;
    followCount = Math.floor(solveCount * 100) / 100 + "B";
  } else {
    return (followCount = data);
  }
  return followCount;
};
