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
                dark: '#92a3cb',
                light: '#7578af'
            },
            standoutColor: {
                dark: '#b258f1',
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
                dark: 'rgba(255, 255, 255, 0.20)',
                light: '#6d6d6d'
            },
            primaryButtonText: {
                dark: '#252541',
                light: '#d2e0e8'
            },
            successNotification: {
                dark: '#2fd73f',
                light: '#1f811f'
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
                'small': '0px 4px 4px rgba(255, 255, 255, 0.20)',
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
    },
    heading: {
        level: {
            1: {
                font: {
                    family: 'Exo',
                    weight: '700'
                }
            },
            2: {
                font: {
                    family: 'Cairo'
                }
            }
        }
    }
});