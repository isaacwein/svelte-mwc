<script context="module" lang="ts">
    export type Theme = ''|'red' | 'blue' | 'purple';
    export type ColorScheme = '' | 'light' | 'dark';
</script>


<script lang="ts">
    // import {materialTheme} from "@/theme/material-theme?url";
    import {base, assets} from '$app/paths';
    import './material-theme.ts'

    const blueColorsModule = "/material-theme/blue/colors.module.css";
    const blueTypography = "/material-theme/blue/typography.module.css";
    const blueTokens = "/material-theme/blue/tokens.css";
    const blueLight = "/material-theme/blue/theme.light.css"; // (prefers-color-scheme: light);
    const blueDark = "/material-theme/blue/theme.dark.css"; // (prefers-color-scheme: dark);

    const purpleColorsModule = "/material-theme/purple/colors.module.css";
    const purpleTypography = "/material-theme/purple/typography.module.css";
    const purpleTokens = "/material-theme/purple/tokens.css";
    const purpleLight = "/material-theme/purple/theme.light.css"; // (prefers-color-scheme: light);
    const purpleDark = "/material-theme/purple/theme.dark.css"; // (prefers-color-scheme: dark);


    const redColorsModule = "/material-theme/red/colors.module.css";
    const redTypography = "/material-theme/red/typography.module.css";
    const redTokens = "/material-theme/red/tokens.css";
    const redLight = "/material-theme/red/theme.light.css"; // (prefers-color-scheme: light);
    const redDark = "/material-theme/red/theme.dark.css"; // (prefers-color-scheme: dark);


    interface ThemeFiles {
        tokens: string;
        colorsModule: string;
        typography: string;
        light: string;
        dark: string;
    }

    const files: { [key: string]: ThemeFiles } = {
        blue: {
            tokens: blueTokens,
            colorsModule: blueColorsModule,
            typography: blueTypography,
            light: blueLight,
            dark: blueDark
        },
        purple: {
            tokens: purpleTokens,
            colorsModule: purpleColorsModule,
            typography: purpleTypography,
            light: purpleLight,
            dark: purpleDark
        },
        red: {
            tokens: redTokens,
            colorsModule: redColorsModule,
            typography: redTypography,
            light: redLight,
            dark: redDark
        }
    }

    let activeColorScheme: 'light' | 'dark';
    const getSystemTheme = (): typeof activeColorScheme => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }


    let active: ThemeFiles | null = null;

    // props from parent


    export let theme: Theme = '';


    export let colorScheme: ColorScheme = '';

    function themeUpdate(themeName:  Theme, colorScheme:  ColorScheme) {

        if (themeName === '') {
            active = null;
            return;
        }

        activeColorScheme = colorScheme || getSystemTheme();

        active = files[themeName];
        console.log("active", themeName,colorScheme,active);
    }

    $: themeUpdate(theme, colorScheme)
</script>

<svelte:head>
    <meta name="color-scheme" content="dark light">
    {#if (!!active)}
        <link rel="stylesheet" href="{active.tokens}"/>
        <link rel="stylesheet" href="{active.colorsModule}"/>
        <link rel="stylesheet" href="{active.typography}"/>
        <link rel="stylesheet" href="{activeColorScheme === 'light' ? active.light : active.dark}"/>
    {/if}
</svelte:head>