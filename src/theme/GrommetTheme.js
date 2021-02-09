import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

export const GrommetTheme = deepMerge(grommet, {
    global: {
        colors: {
            headerText: {
                dark: '#bbe1fa',
                light: '#747fe0'
            },
            baseColor: {
                dark: '#8892b0',
                light: '#8185c1'
            },
            standoutColor: {
                dark: '#bc6ff1',
                light: '#f8709b'
            },
            cardBackground: {
                dark: '#252541',
                light: '#bae1f3'
            },
            background: {
                dark: '#1a1a2e',
                light: '#d2e0e8'
            },
            text: {
                dark: '#5f677e',
                light: '#6d6d6d'
            },
            primaryButtonText: {
                dark: '#252541',
                light: '#d2e0e8'
            }
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
        focus: {
            border: {
                color: 'transparent'
            },
        },
        elevation: {
            light: {
                'primary-button': 'box-shadow: 0 4px 6px #2d2d2d, 0 1px 3px #2d2d2d'
            },
            dark: {
                'primary-button': 'box-shadow: 0 4px 6px, 0 1px 3px'
            }
        }
    },
    formField: {
        border: { position: 'outer', side: 'all' },
    },
    button: {
        hover: {
            default: { color: 'standoutColor' },
            secondary: { color: 'standoutColor' },
            primary: {
                color: 'background',
                background: {
                    color: 'standoutColor',
                    opacity: 0.85
                }
            }
        },
        default: {
            color: 'baseColor'
        },
        secondary: {
            color: 'baseColor',
            padding: {horizontal: 'large'},
            border: {
                color: 'transparent',
                radius: '0px'
            }
        },
        primary: {
            color: 'primaryButtonText',
            padding: { horizontal: 'medium' },
            border: { radius: '1px' },
            background: { color: 'standoutColor' },
            elevation: 'large'
        }
    }
});