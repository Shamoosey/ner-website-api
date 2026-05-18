import { getRows } from "../sheets/sheets.helper";
import { LinkTree } from "../types/LinkTree";
import { ShowItem } from "../types/ShowItem";

export const fetchAllShows = async (): Promise<ShowItem[]> => {
  const rows = await getRows("UpcomingShows");
  return rows
    .filter(([, , , , , hidden]) => hidden !== "TRUE")
    .map(([title, date, location, featuring, ticketUrl]) => ({
      title,
      date: new Date(date),
      location,
      featuring,
      ticketUrl,
    }));
};

export const fetchLinkTree = async (): Promise<LinkTree[]> => {
  const rows = await getRows("LinkTree");
  return rows.filter(([, , , hidden]) => hidden !== "TRUE").map(([text, url, icon]) => ({ text, url, icon }));
};
