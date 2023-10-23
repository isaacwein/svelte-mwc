import {argbFromHex, themeFromSourceColor, applyTheme, type Theme} from "@material/material-color-utilities";

// Get the theme from a hex color
const themeList: { [key: string]: Theme } = {
    red: themeFromSourceColor(argbFromHex('#d45e5e'), [
        {
            name: "red",
            value: argbFromHex("#d45e5e"),
            blend: true,

        },
    ]),

    blue: themeFromSourceColor(argbFromHex('#5ecad4'), [
        {
            name: "blue",
            value: argbFromHex("#5ecad4"),
            blend: true,

        },
    ]),

    purple: themeFromSourceColor(argbFromHex('#d45ec0'), [
        {
            name: "purple",
            value: argbFromHex("#d45ec0"),
            blend: true,
        },
    ])
};


// Print out the theme as JSON


// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export type Themes = '' | 'red' | 'blue' | 'purple';
export type Scheme = '' | 'light' | 'dark';
// Apply the theme to the body by updating custom properties for material tokens
export const apply= (theme: Themes, schema: Scheme) => {
    if (theme === '') {
        document.body.setAttribute('style', '');

        return;
    }
    let dark: boolean
    switch (schema) {
        case 'light':
            dark = false;
            break;
        case 'dark':
            dark = true;
            break;
        default:
            dark = systemDark;
    }
    console.log(JSON.stringify(themeList[theme], null, 2));

    applyTheme(themeList[theme], {target: document.body, dark})
};