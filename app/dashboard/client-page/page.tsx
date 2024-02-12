'use client'
import { lusitana } from "@/app/ui/fonts";
import { Block } from '@/app/ui/block-tmp'
import Provider from '@/app/StoreProvider';
import { CurrentThemeViewer } from "@/app/ui/CurrentThemeViewer";
import { ButtonSwitchTheme } from "@/app/ui/ButtonSwitchTheme";
import dynamic from "next/dynamic";

export default function Page() {
  const NoSSRAuthUpdater = dynamic(() => import('@/app/ui/AuthUpdater'), {ssr: false});
  const NoSSRAuthViewer = dynamic(() => import('@/app/ui/auth-viewer'), {ssr: false});

  return (
    <Provider>
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Client Page
        </h1>
          <Block>
            <NoSSRAuthUpdater />
            <NoSSRAuthViewer />
          </Block>
          <Block>
            <ButtonSwitchTheme />
            <CurrentThemeViewer />
          </Block>
      </main>
    </Provider>
  )
}