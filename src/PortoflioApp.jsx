import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import { PuffLoader } from "react-spinners";
import { Placeholder, Preloader } from "react-preloading-screen";
import { GrommetTheme } from "./theme/GrommetTheme";

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
    const backgroundColor = darkThemeEnabled ? GrommetTheme.global.colors.background.dark : GrommetTheme.global.colors.background.light;
    const standoutColor = darkThemeEnabled ? GrommetTheme.global.colors.standoutColor.dark : GrommetTheme.global.colors.standoutColor.light;

    return (
        <React.Fragment>
            <PortfolioPage initialDarkThemeEnabled={darkThemeEnabled} />
            <Preloader style={{'background-color': backgroundColor}} >
                <Placeholder>
                    <PuffLoader isLoading={true} color={standoutColor} size={100} />
                </Placeholder>
            </Preloader>
        </React.Fragment>

    );
}

export default PortfolioApp;