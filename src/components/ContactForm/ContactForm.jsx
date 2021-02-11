import React, { useContext, useState } from 'react';
import { Box, Button, Form, FormField, Heading, Layer, ResponsiveContext, TextArea, TextInput, ThemeContext } from "grommet";
import { deepMerge } from "grommet/utils";
import './ContactForm.scss'
import { GrommetTheme } from "../../theme/GrommetTheme";
import hexRgb from "hex-rgb";
import { sendEmail } from "../../api/EmailAPI";
import ElevatedButton from "../ElevatedButton";
import FlipButton from "../FlipButton";

const ContactForm = ({ setShowContentForm, showEmailSentNotification, darkMode }) => {

    const convertToRGB = (hex, alpha) => {
      const rgb = hexRgb(hex);
      return 'rgb(' + rgb.red + ', ' + rgb.green + ', ' + rgb.blue + ', ' + alpha + ')';
    };

    const grommetThemeColors = GrommetTheme.global.colors;
    const theme = deepMerge(GrommetTheme, {
        global: {
            colors: {
                placeholder: {
                    dark: convertToRGB(grommetThemeColors.baseColor.dark, '0.35'),
                    light: convertToRGB(grommetThemeColors.baseColor.light, '0.35'),
                }
            },
            focus: {
                border: {
                    color: grommetThemeColors.standoutColor,
                    size: '2px'
                },
            },
        },
        formField: {
            border: {
                color: grommetThemeColors.baseColor,
                size: '2px'
            },
            content: {pad: 'large'},
            color: grommetThemeColors.baseColor
        },
        box: {
            extend: {color: darkMode ? grommetThemeColors.baseColor.dark : grommetThemeColors.baseColor.light}
        }
    })

    const buttonTheme = deepMerge(GrommetTheme, {
        button: {
            default: {
                color: 'baseColor',
                border: {
                    width: '2px',
                    radius: '16px'
                }
            }
        }
    })

    const defaultFormValue = {name: '', email: '', content: ''}
    const [value, setValue] = useState(defaultFormValue);

    const disableContactForm = () => {
        setValue(defaultFormValue);
        setShowContentForm(false);
    }

    const submitContactForm = (emailRequest) => {

        sendEmail(emailRequest)
            .then(handleSuccess)
            .catch(error => {
                console.log(error);
            })
    }

    const handleSuccess = () => {
        disableContactForm();
        showEmailSentNotification();
    }

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (

        <Box width={mobileView ? '90%' : ''} margin={'medium'} color={'baseColor'}>
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onSubmit={({value: nextValue}) => submitContactForm(nextValue)}
                    margin={{horizontal: 'large'}}
                    color='baseColor'
                >
                    <ThemeContext.Extend value={theme}>
                        <FormField name="name" required>
                            <TextInput color={'baseColor'} name="name" type="name" placeholder={'Enter Name'}/>
                        </FormField>

                        <FormField name="email" required>
                            <TextInput color={'baseColor'} name="email" type="email" placeholder={'Enter Email'}/>
                        </FormField>

                        <Box height={'small'}>
                            <FormField fill className={'textAreaForm'} name="content" required>
                                <TextArea resize={false} name="content" placeholder={'Enter Message'}/>
                            </FormField>
                        </Box>
                    </ThemeContext.Extend>

                    <ThemeContext.Extend value={buttonTheme}>
                        <Box direction="row" justify="between" margin={{top: 'medium'}}>
                            {
                                mobileView ? <FlipButton darkMode={darkMode} type="submit" label="Send Message" primary fill /> :
                                             <ElevatedButton type="submit" label="Send Message" primary />
                            }

                            {!mobileView && <Button label="Close" onClick={disableContactForm}/>}
                        </Box>
                    </ThemeContext.Extend>

                </Form>
        </Box>
    )
}

export default ContactForm;