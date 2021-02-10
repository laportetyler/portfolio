import React, { useContext } from 'react';
import { Box, Button, Form, FormField, Heading, Layer, ResponsiveContext, TextArea, TextInput, ThemeContext } from "grommet";
import { deepMerge } from "grommet/utils";
import './ContactForm.scss'
import { GrommetTheme } from "../../theme/GrommetTheme";
import hexRgb from "hex-rgb";
import { sendEmail } from "../../api/EmailAPI";

const ContactForm = ({ setShowContentForm, showEmailSentNotification, darkMode }) => {

    const convertToRGB = (hex, alpha) => {
      const rgb = hexRgb(hex);
      return 'rgb(' + rgb.red + ', ' + rgb.green + ', ' + rgb.blue + ', ' + alpha + ')';
    };

    const grommetThemeColors = GrommetTheme.global.colors;
    const theme = deepMerge(GrommetTheme, {
        global: {
            colors: {
                text: grommetThemeColors.baseColor,
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
                color: grommetThemeColors.headerText,
                size: '2px'
            },
            content: {pad: 'large'},
            color: grommetThemeColors.baseColor
        },
        box: {
            extend: {color: darkMode ? grommetThemeColors.baseColor.dark : grommetThemeColors.baseColor.light}
        }
    })

    const [value, setValue] = React.useState({});

    const disableContactForm = () => {
        setValue({});
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

        <Box width={mobileView ? '80%' : ''} margin={'medium'} color={'baseColor'}>
            <ThemeContext.Extend value={theme}>
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onSubmit={({value: nextValue}) => submitContactForm(nextValue)}
                    margin={{horizontal: 'large'}}
                    color='baseColor'
                >
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


                    <Box direction="row" justify="between" margin={{top: 'medium'}}>
                        <Box fill={mobileView} elevation='primary-button' className='primary-button-container' margin={'none'}>
                            <Button className={'primary-button'} type="submit" label="Send Message" primary/>
                        </Box>
                        { !mobileView && <Button label="Close" onClick={disableContactForm}/> }
                    </Box>
                </Form>
            </ThemeContext.Extend>
        </Box>
    )
}

export default ContactForm;