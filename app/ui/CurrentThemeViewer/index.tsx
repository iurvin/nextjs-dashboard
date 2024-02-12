import { Themes } from "@/lib/features/themeSlice";
import { useAppSelector } from "@/lib/hooks";
import {Tag} from 'antd'

export const CurrentThemeViewer = () => {
  const currentTheme = useAppSelector(state => state.theme.currentTheme);
  return  <Tag color={currentTheme === Themes.dark ? 'black' : 'blue'} >{currentTheme}</Tag>
}