'use client'
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore,  AppStore } from "@/lib/store";
import  { cardSlice } from "@/lib/features/card/cardSlice";

export default function StoreProvider({ children }: {children: ReactNode}) {
  const storeRef = useRef<AppStore>();
  if(!storeRef.current) {
    storeRef.current = makeStore();
    // @ts-ignore
    storeRef.current.dispatch(cardSlice())
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}