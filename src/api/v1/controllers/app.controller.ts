import "reflect-metadata";
import { Request, Response } from "express";
import * as AppService from "../services/app.service";
import { Controller, Get, Post, Req, Res } from "routing-controllers";
import { successResponse } from "../models/responseModel";
import { deleteCache } from "../services/app.service";
import { CacheItem } from "../types/CacheItem";

@Controller()
export class AppController {
  @Get("/shows")
  async getShows(@Req() req: Request, @Res() res: Response) {
    try {
      const shows = await AppService.fetchAllShows();
      return res.status(200).json(successResponse(shows, "Shows retrieved successfully"));
    } catch (error) {
      throw error;
    }
  }

  @Get("/linktree")
  async getLinkTree(@Req() req: Request, @Res() res: Response) {
    try {
      const links = await AppService.fetchLinkTree();
      return res.status(200).json(successResponse(links, "LinkTree retrieved successfully"));
    } catch (error) {
      throw error;
    }
  }

  @Post("/refreshCache")
  async refreshCache(@Req() req: Request, @Res() res: Response) {
    if (req.headers["x_admin_key"] !== process.env.ADMIN_KEY) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    deleteCache(CacheItem.LinkTree);
    deleteCache(CacheItem.UpcomingShows);
    return res.status(200).send({ message: "Cache refreshed" });
  }
}
