import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

export const GrommetTheme = deepMerge(grommet, {
    global: {
        colors: {
            headerText: {
                dark: '#a4c7de',
                light: '#5653a4'
            },
            baseColor: {
                dark: '#92a3cb',
                light: '#7578af'
            },
            standoutColor: {
                dark: '#9251c4',
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
                dark: 'rgba(255, 255, 255, 0.1)',
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
            height: '20px'
        },
        focus: {
            border: {
                color: 'transparent'
            },
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