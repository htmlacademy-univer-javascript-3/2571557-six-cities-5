import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './index';

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
