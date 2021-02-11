import React from 'react';

const ThemeContext = React.createContext(
    {
        currentTheme: {
            dark: false,
            toggle: () => {}
        },
        initialTheme: {
            dark: false
        }
    }
)

export default ThemeContext;