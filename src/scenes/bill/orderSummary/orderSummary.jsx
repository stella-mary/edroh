import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import calulator from '../../Img/calulator.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const OrderSummary = () => {
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
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    colors={colors.grey[100]}
                    p="15px"
                >

                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" fontSize="20px">
                        Order Summery
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
                        <Typography fontWeight="600" font-Size="20px" paddingBottom="20px">$230</Typography>

                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" font-Size="20px" paddingBottom="20px"><span class="space" />$0</Typography>
                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" font-Size="20px" paddingBottom="20px">$230</Typography>
                    </Box>
                </Box>

                <Box
                    // key={`${transaction.txId}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"

                    p="15px"
                >
                    <Box>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontSize="15px" fontWeight="600" paddingBottom="20px">
                            Total
                        </Typography>
                    </Box>
                    <Box p="5px 10px" >
                        {/* ${transaction.cost} */}
                        <Typography color="red" fontWeight="600" fontSize="15px" paddingBottom="20px">$230</Typography>
                    </Box>
                </Box>

                <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" textAlign="center" paddingBottom="10px">
                    <button className="button"><AddShoppingCartIcon /> Place Order</button>
                </Typography>
            </Box>


        </Box>




    );
};

export default OrderSummary;