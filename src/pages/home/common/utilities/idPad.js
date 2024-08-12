export const padId = (id, length = 3) => {
  return id.toString().padStart(length, "0");
};
