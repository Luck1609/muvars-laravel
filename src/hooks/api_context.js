import { useEffect, useState } from 'react'
import HttpReq from 'helpers/axios'
import { toast } from 'react-toastify'
import { useSWRConfig } from 'swr'
import axios from 'axios';

export default function useAPIContext() {
  const [info, setInfo] = useState(null);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    const http = new HttpReq();

    if (info?.url) {
      const fetchData = async ({ method, url, payload, options = null, action = null, mutation = null }) => {
        const toast_id = toast.loading("Processing request, please wait...")

        try {
          const { message } = await http[method](url, payload, options);

          mutate(mutation) 
          
          if (toast_id) toast.update(toast_id, {
            render: message,
            type: "success",
            isLoading: false,
            autoClose: true
          });
          
          // setInfo(null);
          // if (action) action();
        }
        catch ({ message }) {
          toast.update(toast_id, {
            render: message,
            type: "error",
            isLoading: false,
            autoClose: true
          });
        }
      }

      fetchData(info)
    }

  }, [info, mutate]);


  const makeRequest = (data) => setInfo(data)

  return {makeRequest}
}
