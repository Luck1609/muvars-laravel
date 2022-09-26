import { useAuth } from 'hooks/auth';
import React from 'react'
import useSWR from 'swr'
import LogoUploadForm from './avatar_form'
import OtherInfo from './other_info';

export default function AgencyInfoComponent() {
  const {user} = useAuth({middleware: ''})
  const { data: agency } = useSWR(`/agency/${user?.agency_id}`);

  return (
    <>
      <LogoUploadForm office={agency?.data} />

      <OtherInfo office={agency?.data} />
    </>
  )
}
