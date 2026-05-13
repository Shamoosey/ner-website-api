import { ShowItem } from "prisma/generated/prisma";
import prisma from "../../../../prisma/client";

export const fetchAllShows = async (): Promise<ShowItem[]> => {
  const data = await prisma.showItem.findMany();
  return data;
};
