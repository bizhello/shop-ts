// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getPageCount = (totalPages: number, limit: number) => {
  return Math.ceil(totalPages / limit);
};

export default getPageCount;
