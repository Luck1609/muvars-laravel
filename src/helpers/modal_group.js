import EventForm1 from "components/pages/admin/events/event_form";
import EventForm2 from "components/pages/admin/events/event_form_2";
import EventPreview from "components/pages/admin/events/event_preview";
import Login from "components/pages/auth/login";
import Register from "components/pages/auth/register";
import ScheduleForm from "components/pages/management/settings/pages/schedule/form";
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
    // ]
  },
  login: {
    forms: Login,
    validation: V.login_validation
  },
  register: {
    forms: Register,
    validation: V.registration_validation
  },
  ticket_user: TicketUserForm,
  add_user: AddUserForm,
  schedule: ScheduleForm
}