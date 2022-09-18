import GuestLayout from 'components/layouts/admin/guest_route';
import { useAuth } from 'hooks/auth';
import { useRouter } from "next/router";

export default function GuestRoutes({ Component, pageProps }) {
  useAuth({middleware: 'guest'});
  const { pathname } = useRouter();

  const match = pathname.startsWith('management', 1) || pathname.startsWith('/admin')

  if (match) return <GuestLayout><Component {...pageProps} /></GuestLayout>
  return <Component {...pageProps} />;
}
