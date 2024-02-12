import SideNav from "../ui/dashboard/sidenav";
import { ReactNode } from "react";
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <AntdRegistry>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </AntdRegistry>
  )
}