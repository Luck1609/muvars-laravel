import Btn from 'components/widgets/Btn'

export default function Actions({ dataView, setView }) {
  return (
    <div className="w-full py-5 md:p-5">
      <ul className="lg:w-96 mx-auto grid grid-cols-3 gap-3">
        <li className="">
          <Btn
            content="General"
            className={`w-full h-10 inline-block rounded-xl ${dataView === 'general' ? 'bg-primary text-white' : 'bg-focus text-primary  hover:bg-primary hover:bg-opacity-30'}`}
            click={() => setView('general')}
          />
        </li>
        <li className="">
          <Btn
            content="Branch"
            className={`w-full h-10 inline-block rounded-xl ${dataView === 'branch' ? 'bg-primary text-white' : 'bg-focus text-primary  hover:bg-primary hover:bg-opacity-30'}`}
            click={() => setView('branch')}
          />
        </li>
        <li className="">
          <Btn
            content="POS"
            className={`w-full h-10 inline-block rounded-xl hover:text-white ${dataView === 'pos' ? 'bg-primary text-white' : 'bg-focus text-primary  hover:bg-primary hover:bg-opacity-30'}`}
            click={() => setView('pos')}
          />
        </li>
      </ul>
    </div>
  )
}
 