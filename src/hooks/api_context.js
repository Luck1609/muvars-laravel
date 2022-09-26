import { useEffect, useState } from 'react'
import axios from 'axios';
import HttpReq from 'helpers/axios'
import { toast } from 'react-toastify'
import { useSWRConfig } from 'swr'
import { useRouter } from 'next/router';

const http = new HttpReq();

export default function useAPIContext() {
  const [info, setInfo] = useState(null);
  const { mutate } = useSWRConfig();
  // const { pathname } = useRouter();

  useEffect(() => {

    if (info?.url) {
      const fetchData = async ({ method, url, payload, options = null, action = null, mutation = null }) => {
        const toast_id = toast.loading("Processing request, please wait...")

        try {
          await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`);
          const { message } = await http[method](`${process.env.NEXT_PUBLIC_BACKEND_URL}/mouvers${url}`, payload, options);

          mutate(mutation) 
          
          if (toast_id) toast.update(toast_id, {
            render: message ?? 'Action successful',
            type: "success",
            isLoading: false,
            autoClose: true
          });
          
          setInfo(null);
          if (action) action();
          // if (url === 'login') window.location.href = '/dashboard';
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


  // const makeRequest = (data) => alert('Make request fired')
  const makeRequest = (data) => setInfo(data)

  return {makeRequest}
}
