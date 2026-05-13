import { ShowItem } from "prisma/generated/prisma";
import prisma from "../../../../prisma/client";

export const fetchAllShows = async (): Promise<ShowItem[]> => {
  return await prisma.showItem.findMany();
};
