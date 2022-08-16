import PhoneNumberInput from 'components/widgets/phone_number_input'

export default function TicketUserForm() {

  return (
    <div className="w-11/12 m-auto px-4">
      <PhoneNumberInput 
        name="phone"
        label="Enter phone number"
        className="rounded-[4px] p-3.5 w-full"
      />
    </div>
  )
}
