'use client'
import { useAppDispatch } from '@/lib/hooks';
import { toggleTheme } from '@/lib/features/themeSlice';

export const ButtonSwitchTheme = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(toggleTheme())}>Change theme</button>;
}