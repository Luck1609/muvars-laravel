import { appConfig } from "backend/helper";
import * as AgencyController from "backend/controllers/agencyController"
import auth from "backend/middlewares/auth";


const handler = appConfig;

handler.use(auth)
  .get(AgencyController.getAllAgencies)
  .post(AgencyController.createAgency)


export default handler;