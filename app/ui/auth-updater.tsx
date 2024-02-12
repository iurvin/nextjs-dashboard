'use client'
import React from "react";
import { setAuthState } from "@/lib/features/authSlice";
import { useAppDispatch } from "@/lib/hooks";

const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setAuthState(true))}>Log in</button>
      <button onClick={() => dispatch(setAuthState(false))}>Log out</button>
    </div>
  );
};
export default AuthUpdater;