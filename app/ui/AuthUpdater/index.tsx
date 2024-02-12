'use client'
import React from "react";
import { setAuthState } from "@/lib/features/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button } from "antd";
import { AuthUpdaterStyled } from './styles';

const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <AuthUpdaterStyled>
      <Button type="primary" onClick={() => dispatch(setAuthState(true))}>Log in</Button>
      <Button onClick={() => dispatch(setAuthState(false))}>Log out</Button>
    </AuthUpdaterStyled>
  );
};

export default AuthUpdater;