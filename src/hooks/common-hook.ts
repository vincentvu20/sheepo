import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Theme, useTheme as useThemeBase } from '@mui/material';
import { AppThunkDispatch, RootState } from '@/redux/store';
import { IColorType } from '@/themes/types';

export const useAppDispatch: () => AppThunkDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTheme: () => Theme & { colors: IColorType } = useThemeBase;
