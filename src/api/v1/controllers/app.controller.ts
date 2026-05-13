import "reflect-metadata";
import { Request, Response } from "express";
import * as AppService from "../services/app.service";
import { Controller, Get, Req, Res } from "routing-controllers";
import { successResponse } from "../models/responseModel";

@Controller()
export class AppController {
  @Get("/shows")
  async getAll(@Req() req: Request, @Res() res: Response) {
    try {
      const users = await AppService.fetchAllShows();
      return res.status(200).json(successResponse(users, "Shows retrieved successfully"));
    } catch (error) {
      throw error;
    }
  }
}
