'use client'
import { ReactNode } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface IGoogleCaptchaWrapper {
  children: ReactNode;
}

export default function GoogleCaptchaWrapper({children}: IGoogleCaptchaWrapper) {
  const recapchaKey: string | undefined = process?.env?.NEXT_PUBLIC_RECAPTCHA_KEY;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recapchaKey ?? "NOT_DEFINED"}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
     >
      {children}
    </GoogleReCaptchaProvider>
  );
}