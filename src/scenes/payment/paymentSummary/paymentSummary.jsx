import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const PaymentSummary = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            {/* <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            > */}

            <Box
                // gridColumn="span 4"
                // gridRow="span 2"
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
            // overflow="auto"
            >

                <Box
                // display="flex"
                // justifyContent="space-between"
                // alignItems="center"
                // colors={colors.grey[100]}
                // p="15px"
                >

                    <Typography
                        color={colors.grey[100]}
                        variant="h5"
                        fontWeight="600"
                        fontSize="15px"
                        paddingBottom="20px"
                        display="flex"
                        p="15px"
                        justifyContent="space-between"
                    >
                        Order Summary
                        <CreateOutlinedIcon />
                    </Typography>
                </Box>

                <Box
                    // key={`${transaction.txId}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                >
                    <Box>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingBottom="20px">
                            Items
                        </Typography>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingBottom="20px">
                            VATS 0%
                        </Typography>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" font-Size="20px" paddingBottom="20px">
                            Sub Total
                        </Typography>


                    </Box>
                    {/* <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box> */}
                    <Box p="5px 10px" >
                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" variant="h5" font-Size="20px" paddingBottom="20px">$230</Typography>

                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" variant="h5" font-Size="20px" paddingBottom="20px">$0</Typography>
                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" variant="h5" font-Size="20px" paddingBottom="20px">$230</Typography>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p="15px"
                >
                    <Box>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontSize="20px" fontWeight="600" paddingBottom="5px">
                            Total
                        </Typography>
                    </Box>
                    <Box p="5px 10px" >
                        {/* ${transaction.cost} */}
                        <Typography color="#2499ee;" fontWeight="600" fontSize="20px" paddingBottom="5px">$230</Typography>
                    </Box>
                </Box>


                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                // overflow="auto"
                >

                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingTop="20px" textAlign="center" paddingBottom="10px">
                        <button className="button"><AddShoppingCartIcon /> Place Order</button>
                    </Typography>
                </Box>


            </Box>
        </Box >



    );
};

export default PaymentSummary;