import { useCallback, useEffect } from 'react'
import useSWR from 'swr'
import Axios from 'axios'
import { toast } from 'react-toastify'
import useAPIContext from './api_context'
import { useRouter } from 'next/router'

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});




export const useAuth = ({ middleware }) => {
  const { push } = useRouter()
  const { makeRequest } = useAPIContext();

  // Check if user exist in database
  const { data: user, error, mutate } = useSWR('staff-data');

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
      // payload: {...payload, token: query.token}
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
  

  useEffect(() => {
    if (middleware === 'guest' && user) push('/dashboard');
    // If user is not authenticated, kick them out
    if (middleware === 'auth' && !user && error) {
      toast.error('Please login to continue')
      !error ? logout() : push('/login')
    };
  }, [user, middleware, push, error, logout])

  return {
    user,
    error,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
    // lockAccount
  }
}


