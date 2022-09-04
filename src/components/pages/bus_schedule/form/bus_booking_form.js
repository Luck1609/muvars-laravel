import Input from 'components/widgets/input'
import PhoneNumberInput from 'components/widgets/phone_number_input'

export default function BusBookingForm() {
  return (
    <>
      <Input 
        name="name"
        label="Enter your name"
      />
      
      <div className="w-full">
        <PhoneNumberInput 
          name="phone"
          label="Enter your phone number"
          className="h-14 w-full rounded-[4px]"
        />
      </div>

      <Input 
        name="emergency_contact_name"
        label="Name of emergency contact"
      />

      <div className="w-full">
        <PhoneNumberInput 
          name="emergency_contact_phone"
          label="Name of emergency contact"
          className="h-14 w-full rounded-[4px]"
        />
      </div>
    </>
  )
}
