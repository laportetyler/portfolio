import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from "grommet";
import { GrommetTheme } from "../../theme/GrommetTheme";
import Introduction from "../../components/sections/Introduction/Introduction";
import About from "../../components/sections/About/About";
import Projects from "../../components/sections/Projects/Projects";
import Header from "../../components/Header/Header";
import LinksSideBar from "../../components/SideBars/LinksSideBar";
import Footer from "../../components/Footer";
import ActionsSideBar from "../../components/SideBars/ActionsSideBar";
import './PortfolioPage.scss'
import ContactForm from "../../components/ContactForm/ContactForm";
import Contact from "../../components/sections/Contact/Contact";
import EmailSentNotification from "../../components/ContactForm/EmailSentNotification";
import ContactFormOverlay from "../../components/ContactForm/ContactFormOverlay";
import ThemeContext from "../../context/ThemeContext";

const PortfolioPage = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [initialDarkMode, setInitialDarkMode] = useState(false);
    const [showContactForm, setShowContentForm] = useState(false);
    const [showEmailSuccessNotification, setShowEmailSuccessNotification] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setInitialDarkMode(darkMode);
        setDarkMode(darkMode);
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', Boolean(darkMode).toString());
    }, [darkMode])

    const pageRefs = {
        about: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
        bottom: useRef(null),
        top: useRef(null)
    }

    const contactForm =
        <ContactForm setShowContentForm={setShowContentForm}
                                     showEmailSentNotification={() => setShowEmailSuccessNotification(true)}
        />

    return (

            <Grommet theme={GrommetTheme} themeMode={darkMode ? 'dark' : 'light'} full className={'global-transition-color'} >
                    <ResponsiveContext.Consumer>
                        {size => (

                            <ThemeContext.Provider
                                value={{currentTheme: {dark: darkMode, toggle: toggleTheme}, initialTheme: {dark: initialDarkMode}}}
                            >

                                <Grid fill rows={["auto", "auto"]} ref={pageRefs.top} width={'xxlarge'} >

                                    <Header pageRefs={pageRefs} />

                                    <Box direction={'row'}>
                                        <LinksSideBar />
                                        <Box fill align='center' direction={'column'}>
                                            <Introduction setShowContentForm={setShowContentForm} contactRef={pageRefs.contact} />
                                            <About aboutRef={pageRefs.about} />
                                            <Projects projectsRef={pageRefs.projects} />

                                            <Box flex={false} align='center' className={size === 'small' ? 'fill-available' : ''} >
                                                <Contact setShowContentForm={setShowContentForm} contactRef={pageRefs.contact} >{contactForm}</Contact>
                                                <Footer bottomRef={pageRefs.bottom} />
                                            </Box>

                                        </Box>
                                        <ActionsSideBar pageRefs={pageRefs} />
                                    </Box>

                                    { showContactForm &&
                                        <ContactFormOverlay setShowContentForm={setShowContentForm} >{contactForm}</ContactFormOverlay>
                                    }
                                    { showEmailSuccessNotification &&
                                        <EmailSentNotification
                                            onClose={() => setShowEmailSuccessNotification(false)}
                                        />
                                    }

                                </Grid>
                            </ThemeContext.Provider>

                        )}
                    </ResponsiveContext.Consumer>


            </Grommet>

    );
}

export default PortfolioPage;
