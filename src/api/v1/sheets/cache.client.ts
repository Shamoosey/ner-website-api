import NodeCache from "node-cache";

const isDev = process.env.NODE_ENV == "development";
export const cache = new NodeCache({ stdTTL: isDev ? 5 : 0 });

export const bustCache = (sheetName: string) => {
  cache.del(`sheet:${sheetName}`);
};
