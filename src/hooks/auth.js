import { useCallback, useEffect } from 'react';
import useSWR from 'swr';
import Axios from 'axios';
import useAPIContext from './api_context';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});




export const useAuth = ({ middleware }) => {
  const { makeRequest } = useAPIContext();
  const router = useRouter();

  // Check if user exist in database
  // const { data: user, error, mutate } = useSWR('');
  const { data: user, error, mutate } = useSWR('/user-data');

  const register = async ({ payload }) => {
    makeRequest({
      method: 'post',
      url: 'register',
      payload
    });

    mutate()
  }

  const login = async (payload) => {

    makeRequest({
      method: 'post',
      url: 'login',
      payload,
      action: () => window.location.href = '/dashboard'
    });
  }

  const forgotPassword = async ({ payload }) => {
    makeRequest({
      method: 'post',
      url: 'forgot-password',
      payload
    });
  }

  const resetPassword = async ({ payload }) => {

    makeRequest({
      method: 'post',
      url: 'reset-password',
      // payload: {...payload, token: router.query.token}
    });
  }

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post('/email/verification-notification')
      .then(response => setStatus(response.data.status))
  }

  const logout = useCallback(
    (href) => {
      if (!error) {
        makeRequest({
          method: 'post',
          url: 'logout', 
          action: () => window.location.href = href ?? '/login'
        });
      }
    },
    [error, makeRequest]
  )
  
  // console.log('Auth user agency', user?.data)

  useEffect(() => {
    if (middleware === 'guest' && user) router.push('/dashboard');
    // If user is not authenticated, kick them out
    if (middleware === 'auth' && !user && error) {
      toast.error('Please login to continue')
      !error ? logout() : router.push('/login')
    };
    if (middleware === 'manager' && !user?.data.agency_id && error) {
      toast.error('Access denied, you are not authorized to visit this section')
      router.push('/');
    }
  }, [user, middleware, router, error, logout])

  return {
    user: user?.data,
    error,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}


