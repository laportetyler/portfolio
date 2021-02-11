import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

const PortfolioApp = () => {

    const trackPageView = () => {
        ReactGA.initialize(process.env.REACT_APP_UNIVERSAL_ANALYTICS_CODE);
        ReactGA.pageview(window.location.pathname + window.location.search);
    };

    useEffect(() => {
        trackPageView();
    }, []);

    const isDarkThemeEnabled = () => {
        const darkThemeEnabled = localStorage.getItem('darkThemeEnabled');
        if (darkThemeEnabled) {
            return darkThemeEnabled === 'true'
        }

        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const darkThemeEnabled = isDarkThemeEnabled();

    return (
        <PortfolioPage initialDarkThemeEnabled={darkThemeEnabled} />
    );
}

export default PortfolioApp;