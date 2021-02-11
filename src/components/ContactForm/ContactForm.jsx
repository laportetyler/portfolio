import React, { useContext, useState } from 'react';
import { Box, Button, Form, FormField, ResponsiveContext, TextArea, TextInput, ThemeContext as GrommetThemeContext } from "grommet";
import { deepMerge } from "grommet/utils";
import './ContactForm.scss'
import { GrommetTheme } from "../../theme/GrommetTheme";
import { sendEmail } from "../../api/EmailAPI";
import ElevatedButton from "../ElevatedButton";
import FlipButton from "../FlipButton";
import hexColorWithAlpha from "../../utils/HexColorWithAlpha";
import ThemeContext from "../../context/ThemeContext";

const ContactForm = ({ setShowContentForm, showEmailSentNotification }) => {

    const { currentTheme } = useContext(ThemeContext);

    const grommetThemeColors = GrommetTheme.global.colors;
    const theme = deepMerge(GrommetTheme, {
        global: {
            colors: {
                placeholder: {
                    dark: hexColorWithAlpha(grommetThemeColors.baseColor.dark, '0.35'),
                    light: hexColorWithAlpha(grommetThemeColors.baseColor.light, '0.35'),
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
            extend: {color: currentTheme.dark ? grommetThemeColors.baseColor.dark : grommetThemeColors.baseColor.light}
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
                    <GrommetThemeContext.Extend value={theme}>
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
                    </GrommetThemeContext.Extend>

                    <GrommetThemeContext.Extend value={buttonTheme}>
                        <Box direction="row" justify="between" margin={{top: 'medium'}}>
                            {
                                mobileView ? <FlipButton type="submit" label="Send Message" primary fill /> :
                                             <ElevatedButton type="submit" label="Send Message" primary />
                            }

                            {!mobileView && <Button label="Close" onClick={disableContactForm}/>}
                        </Box>
                    </GrommetThemeContext.Extend>

                </Form>
        </Box>
    )
}

export default ContactForm;