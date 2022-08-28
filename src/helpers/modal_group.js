import ScheduleForm from "components/pages/management/schedule/form";
import TicketForm1 from "components/pages/management/tickets/form/ticket_form_1";
import TicketForm2 from "components/pages/management/tickets/form/ticket_form_2";
import PreviewTicketForm from "components/pages/management/tickets/form/ticket_form_preview";
import TicketUserForm from "components/pages/management/tickets/form/ticket_user_form";
import AddUserForm from "components/pages/management/users/form";

export const modals = {
  ticket: {
    basic_info: TicketForm1,
    emergency_contact: TicketForm2,
    preview: PreviewTicketForm
  },
  ticket_user: TicketUserForm,
  add_user: AddUserForm,
  schedule: ScheduleForm
}