import { useDispatch, useSelector,useStore } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispath, AppStore } from './store';

export const useAppDispatch: () => AppDispath = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
