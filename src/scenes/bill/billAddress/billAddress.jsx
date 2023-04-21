import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataCart } from "../../../data/mockData";
import ApartmentIcon from '@mui/icons-material/Apartment';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';


const BillAddress = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px">
            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="300px"
                        >
                            <Typography variant="h5" fontWeight="600" fontSize="12px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography variant="h5" fontWeight="600" fontSize="12px" marginTop="15px" color={colors.grey[100]} >
                                <span className="color"><DeleteIcon /></span>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
            </Box >


            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="300px"
                        >
                            <Typography variant="h5" fontWeight="600" fontSize="12px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography variant="h5" fontWeight="600" fontSize="12px" marginTop="15px" color={colors.grey[100]} >
                                <span className="color"><DeleteIcon /></span>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
            </Box >



            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="300px"
                        >
                            <Typography variant="h5" fontWeight="600" fontSize="12px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography variant="h5" fontWeight="600" fontSize="12px" marginTop="15px" color={colors.grey[100]} >
                                <span className="color"><DeleteIcon /></span>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
                <Typography
                    marginLeft="20px"
                ><ChevronLeftOutlinedIcon /><span className="space" />Back </Typography>
            </Box >




        </Box>


    );
};

export default BillAddress;