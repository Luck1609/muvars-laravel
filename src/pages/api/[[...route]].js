import DB from "src/backend/connection";
import UserController from "src/backend/controllers/UserController";
import AgencyController from "backend/controllers/AgencyController";
import AgentController from "backend/controllers/AgencyUserController";
import BusController from "backend/controllers/BusController";
import DestinationController from "backend/controllers/DestinationController";
import ParcelController from "backend/controllers/ParcelController";
import ScheduleController from "backend/controllers/ScheduleController";
import TerminalController from "backend/controllers/TerminalController";
import TicketController from "backend/controllers/TicketController";


DB.sync();

export default async function handler(req, res) {
  const  {route}  = req.query;

  const base_url = route[0];
  const id = route[1];
  let data;

  console.log('Parameter id', id)

  switch (base_url) {
    case 'users':
      data = await new UserController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
    
    case 'agencies':
      try {
        data = await new AgencyController({method: req.method, payload: req.body, id});
        return res.status(data.code).send({data: data.data, message: data.message})
      } catch({message}) {
        console.log('Error message', message)
        return res.status(422).send({message: message ?? 'Unkown error occured'})
      }
      
    
    case 'agents':
      data = await new AgentController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
    
    case 'buses':
      data = await new BusController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
    
    case 'destinations':
      data = await new DestinationController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
    
    case 'parcels':
      data = await new ParcelController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
    
    case 'schedules':
      data = await new ScheduleController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
    
    case 'terminals':
      data = await new TerminalController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
    
    case 'tickets':
      data = await new TicketController({method: req.method, payload: req.body, id});
      return res.status(data.code).send({data: data.data, message: data.message})
  
    default:
      break;
  }
}
