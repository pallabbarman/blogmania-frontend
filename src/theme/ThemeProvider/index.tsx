'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ReactNode } from 'react';
import theme from '..';

export interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <AppRouterCacheProvider>
            <MuiThemeProvider theme={responsiveFontSizes(theme)}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default ThemeProvider;
