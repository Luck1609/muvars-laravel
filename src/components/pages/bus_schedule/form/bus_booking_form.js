import Input from 'components/widgets/input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import RadioOptions from 'components/widgets/radio'

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

      <RadioOptions 
        name="gender"
        label="Gender"
        options={[
          {
            label: 'Male',
            value: 'male'
          },
          {
            label: 'Female',
            value: 'female'
          },
        ]}
      />

      <div className="w-full">
        <PhoneNumberInput 
          name="emergencyContactPhone"
          label="Emergency number"
          className="h-14 w-full rounded-[4px]"
        />
      </div>
    </>
  )
}
