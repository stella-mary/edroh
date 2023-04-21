import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import calulator from '../../Img/calulator.svg'


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
                            SubTotal
                        </Typography>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingBottom="20px">
                            Discount
                        </Typography>
                        <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" font-Size="20px" paddingBottom="20px">
                            Shipping Cost
                        </Typography>


                    </Box>
                    {/* <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box> */}
                    <Box p="5px 10px" >
                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" font-Size="20px" paddingBottom="20px">$215</Typography>

                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" font-Size="20px" paddingBottom="20px">15%</Typography>
                        {/* ${transaction.cost} */}
                        <Typography fontWeight="600" font-Size="20px" paddingBottom="20px">$50</Typography>
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
                        <Typography color={colors.greenAccent[100]} variant="h5" fontSize="25px" fontWeight="600" paddingBottom="20px">
                            Total
                        </Typography>
                    </Box>
                    <Box p="5px 10px" >
                        {/* ${transaction.cost} */}
                        <Typography color="#2499ee;" fontWeight="600" fontSize="25px" paddingBottom="20px">$285</Typography>
                    </Box>
                </Box>


                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                // overflow="auto"
                >


                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" paddingTop="20px" textAlign="center" paddingBottom="20px">
                        <button className="button">Proceed to payment</button>
                    </Typography>
                </Box>
                <img src={calulator} alt="" width={200}></img>

            </Box>
        </Box >



    );
};

export default OrderSummary;