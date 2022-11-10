import { CloseOutlined, ContentPaste, EditOutlined, ForumOutlined, RemoveRedEyeOutlined, Replay30Outlined } from '@mui/icons-material';
import Image from 'next/image'
import { buses } from 'assets/img/bus';
import { Btn } from 'components/widgets/btn';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';


export default function PostCard({ data: {title, expiresAt, createdAt, img, slug} }) {
  const images = JSON.parse(img);
  const { push } = useRouter()

   console.log('First image', images[0])

  const goto = (url) => () => push(url)

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 rounded-[3px] overflow-hidden bg-white border hover:shadow-md group">
      {/* <div className="w-full lg:w-full order-1 relative"> */}
        <Image src={images ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]}` : buses.coastal} alt="" height={180} width={180} />
      {/* </div> */}

      <div className="col-span-3 lg:ml-5 p-3 order-3 lg:order-2">
        <div className="flex items-start mb-3">
          <h3 className="text-2xl font-semibold grow">{title}</h3>
        </div>

        <div className="text-sm mb-3">
          <label className={`font-medium ${dayjs().isAfter(expiresAt) ? 'text-red-500' : 'text-green-500'}`}>Status:</label>
          <span className={`${dayjs().isAfter(expiresAt) ? 'text-red-500' : 'text-green-500'} py-1 px-3 bg-green-200 rounded ml-3`}>{ dayjs().isAfter(expiresAt) ? 'Expired' : 'Active' }</span>

          <label className="font-medium ml-6 text-red-500">Expires in:</label>
          <span className="py-1 px-3 bg-red-200 text-red-500 rounded ml-3">{ dayjs(expiresAt).diff(dayjs(), 'day') } days </span>
        </div>

        <div className="text-sm flex items-center">
          <ContentPaste fontSize="small" /><label className="font-semibold ">Posted on:</label>
          <span className="ml-2 ">{dayjs(createdAt).format('DD MMM, YYYY')}</span>
        </div>

        <div className="flex items-center h-12">
          <ul className="mt-5 text-xs flex w-[220px] justify-between">
            <li className="inline-flex items-center justify-center bg-slate-200 rounded p-1 px-3">
              <RemoveRedEyeOutlined className="mr-1" /> Views (19)
            </li>
            <li className="inline-flex items-center justify-center bg-slate-200 rounded p-1 px-3">
              <ForumOutlined className="mr-1" /> Chats (2)
            </li>
          </ul>
        
          {/* <ul className="mt-5 text-sm justify-end grow flex"> */}
          <ul className="mt-5 text-sm justify-end grow hidden group-hover:flex">
            <li className="">
              <Btn 
                content={<span className="flex items-center"><EditOutlined fontSize="small" className="mr-1" /> Edit</span>}
                className="bg-sky-400 hover:bg-sky-500 text-white h-10 btn text-xs"
                click={goto(`/post-ad/${slug}`)}
              />
              
            </li>
            <li className="mx-2">
              <Btn 
                content={<span className="flex items-center"><Replay30Outlined fontSize="small" className="mr-1" /> Re-post</span>}
                className="bg-emerald-400 hover:bg-emerald-500 text-white h-10 btn text-xs"
              />
            </li>
            <li className="">
              <Btn 
                content={<span className="flex items-center"><CloseOutlined fontSize="small" className="mr-1" /> Close Add</span>}
                className="bg-rose-400 hover:bg-rose-500 text-white h-10 btn text-xs"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
