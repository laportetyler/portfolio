import React from 'react';
import SectionHeading from "../SectionHeading/SectionHeading";
import { Box, Button, Form, FormField, Layer, Text, TextInput } from "grommet";

const ContactForm = ({setShowContentForm}) => {

    const [value, setValue] = React.useState({ name: 'a', email: 'b' });
    const message =
        value.name && value.email && value.name[0] !== value.email[0]
            ? 'Mismatched first character'
            : undefined;

    const disableContactForm = () => {
        setShowContentForm(false);
    }

    return (
            <Layer
                background={'background'}
                onEsc={disableContactForm}
                onClickOutside={disableContactForm}
            >
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onSubmit={({ value: nextValue }) => console.log(nextValue)}
                >
                    <FormField label="Name" name="name" required>
                        <TextInput name="name" type="name" />
                    </FormField>

                    <FormField name="email" required>
                        <TextInput name="email" type="email" />
                    </FormField>

                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                        <Button type="reset" label="Reset" />
                        <Button type="submit" label="Update" primary />
                    </Box>
                </Form>
            </Layer>
    )
}

export default ContactForm;