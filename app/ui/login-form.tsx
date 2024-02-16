'use client'
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import {authenticate} from '@/lib/actions';
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios';
import { useState, useRef, SyntheticEvent, useEffect } from 'react';

export default function LoginForm() {
  const [errMessage, dispatch] = useFormState(authenticate, undefined);
  const [submit, setSubmit] = useState('');
  const captchaRef = useRef<ReCAPTCHA>(null)


  const handleSubmit = async (e?: SyntheticEvent<HTMLFormElement, SubmitEvent>) =>{
    e?.preventDefault();
    const gRecaptchaToken = captchaRef?.current?.getValue();
    console.log('gRecaptchaToken', gRecaptchaToken)

    const response = await axios({
      method: "post",
      url: "/api/recaptcha",
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept:  "application/json, text/plain, */*",
        "Content-Type": 'application/json',
      }
    });

    console.log('response.data', response?.data);
    

    if(response?.data?.success === true) {
      console.log(`Success with score: ${response?.data?.score}`);
      setSubmit('Recaptcha Verified and Form Submitted');
      return true;
    } else {
      console.log(`Failure with score: ${response?.data?.score}`);
      setSubmit('Failed to verify recaptcha! You must be a robot!');
      return false;
    }
  }

  useEffect(() => {
    return () => {
      captchaRef?.current?.reset();
    }
  }, []);

  return (
    <form action={async(payload) => {
      console.log('payload', payload);
      if(await handleSubmit()){
        console.log('before dispatch', payload);
        
        dispatch(payload);
      }
    }} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
            ref={captchaRef}
          />
        </div>
        <LoginButton />
        {submit && <p className='text-lg text-center'>{submit}</p>}
        <div className="flex h-8 items-end space-x-1" aria-live='polite' aria-atomic="true" >
          {errMessage && (
            <>
              <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
              <p className='text-sm text-red-500' >{errMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const pending = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
