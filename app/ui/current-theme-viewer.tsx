import { useAppSelector } from "@/lib/hooks";

export const CurrentThemeViewer = () => {
  const currentTheme = useAppSelector(state => state.theme.currentTheme);
  return  <h3>{currentTheme}</h3>
}