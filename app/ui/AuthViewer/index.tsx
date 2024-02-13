'use client'
import React from "react";
import { useAppSelector } from '@/lib/hooks';
import { Tag, Space } from 'antd';

const AuthViewer = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <Space>
      <Tag>
        {authState ? "Logged  In" : "Logged Out"}
      </Tag>
    </Space>
  );
};

export default AuthViewer;
