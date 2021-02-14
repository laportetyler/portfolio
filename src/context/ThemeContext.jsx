import React from 'react';

const ThemeContext = React.createContext(
    {
        currentTheme: {
            dark: false,
            toggle: () => {}
        },
        themeTransitioning: false,
        initialTheme: {
            dark: false
        }
    }
)

export default ThemeContext;