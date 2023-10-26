import {Hct, argbFromHex, themeFromSourceColor, applyTheme, type Theme} from "@material/material-color-utilities";


// Simple demonstration of HCT.
const color = Hct.fromInt(0xff4285f4);
console.log(`Hue: ${color.hue}`);
console.log(`Chrome: ${color.chroma}`);
console.log(`Tone: ${color.tone}`);
// Get the theme from a hex color
const themeList: { [key: string]: Theme } = {
    red: themeFromSourceColor(argbFromHex('#d45e5e'), [
        {
            name: "red",
            value: argbFromHex("#d45e5e"),
            blend: true,

        },
    ]),

    blue: themeFromSourceColor(argbFromHex('#96b5ff'), [
        {
            name: "blue",
            value: argbFromHex("#96b5ff"),
            blend: true,

        },
    ]), deepBlue: themeFromSourceColor(argbFromHex('#00629f'), [
        {
            name: "blue",
            value: argbFromHex("#00629f"),
            blend: true,

        },
    ]),
    green: themeFromSourceColor(argbFromHex('#006d38'), [
        {
            name: "green",
            value: argbFromHex("#006d38"),
            blend: true,

        },
    ]),
    pink: themeFromSourceColor(argbFromHex('#ac0078'), [
        {
            name: "pink",
            value: argbFromHex("#ac0078"),
            blend: true,

        },
    ]),

    purple: themeFromSourceColor(argbFromHex('#9700dd'), [
        {
            name: "purple",
            value: argbFromHex("#9700dd"),
            blend: true,
        },
    ]), yellow: themeFromSourceColor(argbFromHex('#795a00'), [
        {
            name: "yellow",
            value: argbFromHex("#795a00"),
            blend: true,
        },
    ])
};


// Print out the theme as JSON


// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export type Themes = '' | 'red' | 'blue' | 'purple' | 'green' | 'pink' | 'yellow' | 'deepBlue';
export type Scheme = '' | 'light' | 'dark';
// Apply the theme to the body by updating custom properties for material tokens
export const apply = (theme: Themes, schema: Scheme) => {
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