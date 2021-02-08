import React, { useRef, useState } from 'react';
import { Box, Grid, Grommet } from "grommet";
import { GrommetTheme } from "../../theme/GrommetTheme";
import Introduction from "../../components/sections/Introduction/Introduction";
import About from "../../components/sections/About/About";
import Experience from "../../components/sections/Experience/Experience";
import Projects from "../../components/sections/Projects/Projects";
import Header from "../../components/Header/Header";
import LinksSideBar from "../../components/SideBars/LinksSideBar";
import Footer from "../../components/Footer";
import ActionsSideBar from "../../components/SideBars/ActionsSideBar";
import './PortfolioPage.scss'
import ContactForm from "../../components/ContactForm/ContactForm";
import Contact from "../../components/sections/Contact/Contact";

const PortfolioPage = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [showContactForm, setShowContentForm] = useState(false);

    const bottom = useRef(null);
    const top = useRef(null);

    const pageRefs = {
        about: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    }

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <Grommet theme={GrommetTheme} themeMode={darkMode ? 'dark' : 'light'} full className={'transition-background-color'}>
            <Grid fill rows={["auto", "flex"]} ref={top} >

                <Header pageRefs={pageRefs} />
                <LinksSideBar/>
                <ActionsSideBar toggleTheme={toggleTheme} top={top} bottom={bottom} />

                <Box align='center' direction={'column'}>
                    <Introduction setShowContentForm={setShowContentForm} />
                    <About darkMode={darkMode} aboutRef={pageRefs.about} />
                    <Projects darkMode={darkMode} projectsRef={pageRefs.projects} />
                    <Contact setShowContentForm={setShowContentForm} contactRef={pageRefs.contact} />
                    <Footer bottomRef={bottom} />
                </Box>

                { showContactForm && <ContactForm setShowContentForm={setShowContentForm} />}

            </Grid>
        </Grommet>
    );
}

export default PortfolioPage;
