import React, { useContext } from 'react';
import ThemeContext from "../context/ThemeContext";
import ReactCardFlip from "react-card-flip";

const ThemedReactFlipCard = ({ lightCard, darkCard, ...reactCardFlipProps }) => {

    const { currentTheme, initialTheme } = useContext(ThemeContext);

    const frontCard = initialTheme.dark ? darkCard : lightCard;
    const backCard = initialTheme.dark ? lightCard : darkCard

    const isFlipped = () => {
        return initialTheme.dark ? !currentTheme.dark : currentTheme.dark;
    }

    return (
        <ReactCardFlip isFlipped={isFlipped()}
                       {...reactCardFlipProps}
        >
            {frontCard}
            {backCard}
        </ReactCardFlip>
    );

}

export default ThemedReactFlipCard;