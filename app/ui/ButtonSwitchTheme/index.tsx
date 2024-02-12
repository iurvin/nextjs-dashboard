'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleTheme } from '@/lib/features/themeSlice';
import { Themes } from '@/lib/features/themeSlice';
import { SwitchStyled } from './styles';

export const ButtonSwitchTheme = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(state => state.theme.currentTheme);
  
  return (
    <SwitchStyled
      onChange={() => dispatch(toggleTheme())}
      checkedChildren={Themes.dark}
      unCheckedChildren={Themes.light}
      value={currentTheme === Themes.dark}
    />
  )
}