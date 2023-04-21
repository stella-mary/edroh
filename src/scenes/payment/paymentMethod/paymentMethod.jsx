import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};

const PaymentMethod = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}

                >

                    <Typography
                        color={colors.grey[100]}
                        variant="h5"
                        fontWeight="600"
                        fontSize="15px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="space-between"
                    >
                        Payment Method
                    </Typography>

                    <Typography
                        color={colors.grey[100]}
                        variant="h5"
                        fontWeight="600"
                        fontSize="15px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="space-between"
                    >

                        <RadioGroup name="use-radio-group" defaultValue="first">
                            <MyFormControlLabel
                                className="bgColor3" value="PayPal" label="PayPal" control={<Radio />} />
                        </RadioGroup>
                        {/* <li><i><span className="bgColor2">Pay</span><span className="bgColor3">Pal</span></i></li> */}
                    </Typography>
                    <p className="bordertop">&#160;</p>
                    <RadioGroup name="use-radio-group" defaultValue="first">
                        <MyFormControlLabel
                            value="Credit or debit card" label="Credit or debit card" control={<Radio />} />
                    </RadioGroup>


                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            marginBottom: '20px',
                            marginTop: "20px",
                            color: '#283b82;',
                        }}
                    >
                        <TextField fullWidth label="Card Number" id="Card Number" />
                    </Box>
                    <Box
                        sx={{
                            width: 500,
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            maxWidth: '100%',
                            marginBottom: '20px'
                        }}
                    >
                        <TextField fullWidth label="Exp Date" id="Exp Date" />

                        <TextField fullWidth label="CVC" id="CVC" />
                    </Box>
                    <p className="bordertop">&#160;</p>
                    <RadioGroup name="use-radio-group" defaultValue="first">
                        <MyFormControlLabel
                            value="Cash on Delivery" label="Cash on Delivery" control={<Radio />} />
                    </RadioGroup>
                </Box >
            </Box >
            <Typography
                marginLeft="20px"
            ><ChevronLeftOutlinedIcon /><span className="space" />Back </Typography>
        </Box >
    );
};

export default PaymentMethod;