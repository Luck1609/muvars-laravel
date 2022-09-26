import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as modals from "./redux/modal_reducer";

export default function useDispatcher() {
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (info) {
      if (info.data === 'close') dispatch(window[info.action](info.data))
      else {
        const func = () => alert('YO fish');
        // const func = modals[info.action];
        console.log('Dispatcher data', info.action)
        const fire = () => {
          window[info.action]()
        }
        // dispatch(
        //   window[modals[info.action]]({
        //     method: info.data.method ?? info.data.values.id ? "patch" : "post",
        //     title: info.data.method ?? info.data.values.id ? `Edit ${info.data.title}` : `Create ${info.data.title}`,
        //     url: info.data.url?.override
        //       ? info.data.url
        //       : info.data.values.id
        //       ? `${info.data.url}/${info.data.values.id}`
        //       : info.data.url,
        //     mutation: info.data.mutation ?? info.data.url,
        //     content: info.data.content,
        //     values: {
        //       ...info.data.values,
        //     },
        //   })
        // );

        fire()
      }
    }
  }, [info, dispatch]);

  const dispatch_event = (data) => setInfo(data);

  return { dispatch: dispatch_event };
}
