'use client'
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore,  AppStore } from "@/lib/store";
import  { fetch } from "@/lib/features/card/cardSlice";

export default function StoreProvider({ children }: {children: ReactNode}) {
  const storeRef = useRef<AppStore>();
  if(!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(fetch())
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}