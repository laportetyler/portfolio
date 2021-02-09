import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

export const GrommetTheme = deepMerge(grommet, {
    global: {
        colors: {
            headerText: {
                dark: '#bbe1fa',
                light: '#5d68ca'
            },
            baseColor: {
                dark: '#8892b0',
                light: '#7578af'
            },
            standoutColor: {
                dark: '#bc6ff1',
                light: '#fc5e8f'
            },
            cardBackground: {
                dark: '#252541',
                light: '#c4deea'
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
            color: 'headerText'
        },
        secondary: {
            color: 'headerText',
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