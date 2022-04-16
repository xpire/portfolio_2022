import React from 'react';
import styled from 'styled-components'
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import 'pollen-css';

const theme = createTheme();

const responsiveTheme = responsiveFontSizes(theme, {factor: 3});

export const PageThemeProvider = ({children}) => {
    return <ThemeProvider theme={responsiveTheme}>{children}</ThemeProvider>
}

export const Section = styled.div`
padding-top: var(--size-8);
padding-bottom: var(--size-8);
`;
