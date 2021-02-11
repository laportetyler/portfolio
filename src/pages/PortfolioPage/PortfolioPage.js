import React, { useRef, useState } from 'react';
import { Box, Grid, Grommet, Heading, ResponsiveContext } from "grommet";
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
import EmailSentNotification from "../../components/ContactForm/EmailSentNotification";
import ContactFormOverlay from "../../components/ContactForm/ContactFormOverlay";
import styled from "styled-components";

const PortfolioPage = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [showContactForm, setShowContentForm] = useState(false);
    const [showEmailSuccessNotification, setShowEmailSuccessNotification] = useState(false);

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

    const contactForm = <ContactForm setShowContentForm={setShowContentForm}
                                     showEmailSentNotification={() => setShowEmailSuccessNotification(true)}
                                     darkMode={darkMode} />

    return (

            <Grommet theme={GrommetTheme} themeMode={darkMode ? 'dark' : 'light'} full className={'global-transition-color'} >
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Grid fill rows={["auto", "auto"]} ref={top} width={'xxlarge'} >

                                <Header pageRefs={pageRefs} toggleTheme={toggleTheme} />

                                <Box direction={'row'}>
                                    <LinksSideBar />
                                    <Box fill align='center' direction={'column'}>
                                        <Introduction setShowContentForm={setShowContentForm} contactRef={pageRefs.contact} darkMode={darkMode} />
                                        <About darkMode={darkMode} aboutRef={pageRefs.about} />
                                        <Projects darkMode={darkMode} projectsRef={pageRefs.projects} />

                                        <Box flex={false} align='center' height={size === 'small' ? '100vh' : ''} >
                                            <Contact darkMode={darkMode} setShowContentForm={setShowContentForm} contactRef={pageRefs.contact} >{contactForm}</Contact>
                                            <Footer bottomRef={bottom} pageRef={pageRefs} />
                                        </Box>

                                    </Box>
                                    <ActionsSideBar toggleTheme={toggleTheme} top={top} bottom={bottom} />
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
                        )}
                    </ResponsiveContext.Consumer>


            </Grommet>

    );
}

export default PortfolioPage;
