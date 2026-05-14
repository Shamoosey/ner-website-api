import "reflect-metadata";
import { Request, Response } from "express";
import * as AppService from "../services/app.service";
import { Controller, Get, Req, Res } from "routing-controllers";
import { successResponse } from "../models/responseModel";

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
}
