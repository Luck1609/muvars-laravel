import { useEffect, useState } from "react";
import axios from "axios";
import HttpReq from "helpers/axios";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";

const http = new HttpReq();

export default function useAPIContext() {
  const [info, setInfo] = useState(null);
  const { mutate } = useSWRConfig();
  // const { pathname } = useRouter();

  useEffect(() => {
    if (info?.url) {
      const fetchData = async ({
        method,
        url,
        payload,
        options = null,
        action = null,
        mutation = null,
      }) => {
        const toast_id = toast.loading("Processing request, please wait...");

        try {
          const data = await http[method](
            `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`,
            payload,
            options
          );

// console.log('API request error', data)
          if (data?.error) throw new Error(data.message)
          else {
            mutate(mutation)

            if (toast_id)
              toast.update(toast_id, {
                render: data?.message ?? "Action successful",
                type: "success",
                isLoading: false,
                autoClose: true,
              });

            setInfo(null);
            if (action) action(data);
          }
        } catch ({ message }) {
console.log('Catch error handler', message)

          toast.update(toast_id, {
            render: message,
            type: "error",
            isLoading: false,
            autoClose: true,
          });
        }
      };

      fetchData(info);
    }
  }, [info, mutate]);

  // const makeRequest = (data) => alert('Make request fired')
  const makeRequest = (data) => setInfo(data);

  return { makeRequest };
}
