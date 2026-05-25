/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createTheme, SimplePaletteColorOptions, ThemeOptions } from '@mui/material/styles';
import { CSSProperties } from 'react';

interface CustomTypographyVariants {
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
    h4: CSSProperties;
    h5: CSSProperties;
    h6: CSSProperties;
    text1: CSSProperties;
    text2: CSSProperties;
    caption: CSSProperties;
}

interface CustomColors {
    black: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    gray: SimplePaletteColorOptions;
    fieryRose: SimplePaletteColorOptions;
    sunsetGlow: SimplePaletteColorOptions;
    moonstone: SimplePaletteColorOptions;
}

interface CustomColorNames {
    black: true;
    white: true;
    gray: true;
    fieryRose: true;
    sunsetGlow: true;
    moonstone: true;
}

declare module '@mui/material/styles' {
    interface Palette extends CustomColors {}

    interface PaletteOptions extends CustomColors {}

    interface TypographyVariants extends CustomTypographyVariants {}

    interface TypographyVariantsOptions extends CustomTypographyVariants {}
}

declare module '@mui/material/Typography' {
    interface TypographyPropsColorOverrides extends CustomColorNames {}

    interface TypographyPropsVariantOverrides {
        h1: true;
        h2: true;
        h3: true;
        h4: true;
        h5: true;
        h6: true;
        body1: false;
        body2: false;
        button: false;
        text1: true;
        text2: true;
        caption: true;
        inherit: false;
        overline: false;
        subtitle1: false;
        subtitle2: false;
    }
}

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'var(--font-roboto)',
        h1: {
            fontFamily: 'var(--font-poppins)',
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 50 / 36,
        },
        h2: {
            fontFamily: 'var(--font-poppins)',
            fontSize: 30,
            fontWeight: 700,
            lineHeight: 42 / 30,
        },
        h3: {
            fontFamily: 'var(--font-poppins)',
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 34 / 24,
        },
        h4: {
            fontFamily: 'var(--font-poppins)',
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 28 / 20,
        },
        h5: {
            fontFamily: 'var(--font-poppins)',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 26 / 18,
        },
        h6: {
            fontFamily: 'var(--font-poppins)',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 24 / 16,
        },
        text1: {
            fontFamily: 'var(--font-roboto)',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 28 / 16,
        },
        text2: {
            fontFamily: 'var(--font-roboto)',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 24 / 14,
        },
        caption: {
            fontFamily: 'var(--font-roboto)',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 18 / 12,
        },
    },
    colorSchemes: {
        light: {
            palette: {
                black: {
                    main: '#000000',
                },
                white: {
                    main: '#ffffff',
                },
                gray: {
                    main: '#ebebeb',
                },
                fieryRose: {
                    main: '#FE4F70',
                },
                sunsetGlow: {
                    main: 'linear-gradient(to right, #FE4F70 0%, #FFA387 51%, #FE4F70 100%)',
                },
                moonstone: {
                    main: '#F1F8FF',
                },
                primary: {
                    main: '#203656',
                },
                secondary: {
                    main: '#8F9BAD',
                },
                background: {
                    paper: '#ffffff',
                    default: '#ffffff',
                },
            },
        },
        dark: {
            palette: {
                black: {
                    main: '#000000',
                },
                white: {
                    main: '#ffffff',
                },
                gray: {
                    main: '#ebebeb',
                },
                fieryRose: {
                    main: '#FE4F70',
                },
                sunsetGlow: {
                    main: 'linear-gradient(to right, #FE4F70 0%, #FFA387 51%, #FE4F70 100%)',
                },
                moonstone: {
                    main: '#F1F8FF',
                },
                primary: {
                    main: '#ffffff',
                },
                secondary: {
                    main: '#8F9BAD',
                },
                background: {
                    paper: '#142030',
                    default: '#142030',
                },
            },
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;
