import Input from 'components/widgets/input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import RadioOptions from 'components/widgets/radio'

export default function TicketForm2() {

  return (
    <div className="w-11/12 m-auto px-3">
      <div className="grid grid-cols-2 gap-3 gap-y-5">
        <div className="">
          <PhoneNumberInput 
            name="phone"
            label="Enter your phone number"
            className="rounded-[4px] p-3.5 w-full"
          />
        </div>

        <div className="">
          <PhoneNumberInput 
            name="emergency_contact"
            label="Enter emergency contact"
            className="rounded-[4px] p-3.5 w-full"
          />
        </div>

        <RadioOptions 
          name="gender"
          label="Select your gender"
          options={[
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'}
          ]}
        />
      </div>
    </div>
  )
}
