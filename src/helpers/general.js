import moment from "moment";

export const convertTime = (created_at) => {
  const formatDate = created_at;
  const formattedDate = moment(formatDate).fromNow();

  return formattedDate;
};
