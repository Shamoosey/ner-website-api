import NodeCache from "node-cache";

const isDev = process.env.NODE_ENV == "development";
const cache = new NodeCache({ stdTTL: isDev ? 10 : 300 }); //refresh cache every 5 mins

export default cache;
