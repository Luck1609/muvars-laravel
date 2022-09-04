import Input from "components/widgets/input"

export default function DestinationModifier() {
  return (
    <>
      <div className="col-span-2 w-full flex items-center">
        <Input 
          name="origin"
          label="From"
          className="w-full"
          disabled
        />

        <div className="bus-separator"></div>

        <Input 
          name="origin"
          label="To"
          options={[]}
          className="w-full"
        />
      </div>
    </>
  )
}
