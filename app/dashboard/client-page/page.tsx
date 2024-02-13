'use client'
import { lusitana } from "@/app/ui/fonts";
import { Block } from '@/app/ui/block-tmp'
import Provider from '@/app/StoreProvider';
import { CurrentThemeViewer } from "@/app/ui/CurrentThemeViewer";
import { ButtonSwitchTheme } from "@/app/ui/ButtonSwitchTheme";
import AuthUpdater from '@/app/ui/AuthUpdater'
import AuthViewer from '@/app/ui/AuthViewer'

export default function Page() {
  return (
    <Provider>
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Client Page
        </h1>
          <Block>
            <AuthUpdater />
            <AuthViewer />
          </Block>
          <Block>
            <ButtonSwitchTheme />
            <CurrentThemeViewer />
          </Block>
      </main>
    </Provider>
  )
}