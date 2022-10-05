import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useSWR from "swr";
import { yupResolver } from "@hookform/resolvers/yup";
import { search_event_user_validation } from "components/validations";
import SearchResult from "./search_result";
import SearchUserForm from "./search_user_form";

export default function SearchUser() {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: user_info } = useSWR(
    token ? `/event-user-details/${token}` : null,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const method = useForm({
    mode: "all",
    resolver: yupResolver(search_event_user_validation),
  });

  const {
    watch,
    reset,
    formState: { isValid, isDirty },
  } = method;

  useEffect(() => {
    reset({
      token: "",
    });

    if (!watch("token")) setToken(null);
  }, [reset, watch]);

  useEffect(() => {
    if (user_info) setIsLoading(false);
  }, [user_info]);

  const submit_handler = () => {
    if (watch("token")) {
      setIsLoading(true);
      setToken(watch("token"));
      reset({ token: "" });
    }
  };



  return (
    <>
      {/* {user_info?.data ? (
        <FormProvider {...method}>
          <SearchResult user={user_info?.data} />
        </FormProvider>
      ) : ( */}
        <FormProvider {...method}>
          <SearchUserForm isLoading={isLoading} submit_handler={submit_handler} />
        </FormProvider>
      {/* )} */}
    </>
  );
}
