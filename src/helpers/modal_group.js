import { event_form_handler } from "components/pages/admin/events";
import EventForm1 from "components/pages/admin/events/event_form";
import EventForm2 from "components/pages/admin/events/event_form_2";
import EventPreview from "components/pages/admin/events/event_preview";
import PickupForm from "components/pages/admin/events/pickup_form";
import VerifierForm from "components/pages/admin/events/verifier_form";
import Login from "components/pages/auth/login";
import Register from "components/pages/auth/register";
import { submit_bus_handler } from "components/pages/management/settings/pages/buses";
import BusForm2 from "components/pages/management/settings/pages/buses/bus-form2";
import BusForm from "components/pages/management/settings/pages/buses/bus_form";
import PreviewBus from "components/pages/management/settings/pages/buses/preview-bus";
import RouteForm from "components/pages/management/settings/pages/routes/route_form";
import ScheduleForm from "components/pages/management/settings/pages/schedule/form";
import TerminalForm from "components/pages/management/settings/pages/terminals/terminal_form";
import TicketForm1 from "components/pages/management/tickets/form/ticket_form_1";
import TicketForm2 from "components/pages/management/tickets/form/ticket_form_2";
import PreviewTicketForm from "components/pages/management/tickets/form/ticket_form_preview";
import TicketUserForm from "components/pages/management/tickets/form/ticket_user_form";
import AddUserForm from "components/pages/management/users/form";
import * as V from "components/validations";

export const modals = {
  ticket: {
    forms: [
      TicketForm1,
      TicketForm2,
      PreviewTicketForm
    ],
    validation: [
      V.basic_info_validation,
      V.emergency_contact_validation
    ]
  },
  event: {
    forms: [
      EventForm1,
      EventForm2,
      EventPreview
    ],
    // validation: [
    //   V.event1_validation,
    //   V.event2_validation,
    //   ''
    // ], 
    submit : event_form_handler
  },
  login: {
    forms: Login,
    validation: V.login_validation
  },
  register: {
    forms: Register,
    validation: V.registration_validation
  },
  pickup: {
    forms: PickupForm,
    validation: V.event_pickup_validation
  },
  verifier: {
    forms: VerifierForm,
    validation: V.event_verifier_validation
  },
  verifier: {
    forms: VerifierForm,
    validation: V.event_verifier_validation
  },
  route: {
    forms: RouteForm,
    validation: V.route_validation
  },
  terminal: {
    forms: TerminalForm,
    validation: V.terminal_validation
  },
  schedule: {
    forms: ScheduleForm,
    validation: V.schedule_validation
  },
  bus: {
    forms: [
      BusForm,
      BusForm2,
      PreviewBus
    ],
    validation: [
      V.bus_validation,
      V.bus_validation_2,
      ''
    ],
    submit: submit_bus_handler
  },
  ticket_user: TicketUserForm,
  add_user: AddUserForm,
}