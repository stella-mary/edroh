import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


const PaymentBill = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            <Box

                backgroundColor={colors.primary[400]}
                borderRadius="10px"
            // overflow="auto"
            >

                <Box
                    colors={colors.grey[100]}
                    p="15px"
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
                        Billing Address
                        <CreateOutlinedIcon />
                    </Typography>

                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="600" fontSize="15px" paddingBottom="5px">
                        Office UI lib (Home)
                    </Typography>
                    <Typography color={colors.grey[300]} variant="h5" fontWeight="600" fontSize="15px" paddingBottom="5px">
                        Ap #285-7193 Ullamcorper Avenue
                    </Typography>
                    <Typography color={colors.grey[300]} variant="h5" fontWeight="600" fontSize="15px" paddingBottom="5px">
                        Amesbury HI 93373
                    </Typography>
                    <Typography color={colors.grey[300]} variant="h5" fontWeight="600" fontSize="15px" paddingBottom="20px">
                        US
                    </Typography>

                </Box>
            </Box>
        </Box>


    );
};

export default PaymentBill;