import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import ActionsSideBar from "./SideBars/ActionsSideBar";
import LinksSideBar from "./SideBars/LinksSideBar";
import Header from "./Header/Header";
import { Box, Grid } from "grommet";

const Layout = ({children, switchThemeCallback}) => {

    const isHome = window.location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    useEffect(() => {
        if (isLoading) {
            return;
        }
    }, [isLoading])


    return (
        <Grid fill rows={["auto", "flex"]}>
            <Header switchThemeCallback={switchThemeCallback}/>
            <Box direction='row' fill>
                <LinksSideBar/>
                <Box align='center' fill>
                    {children}
                    <Footer/>
                </Box>
                <ActionsSideBar switchThemeCallback={switchThemeCallback} />
            </Box>
        </Grid>
    )

}

export default Layout;