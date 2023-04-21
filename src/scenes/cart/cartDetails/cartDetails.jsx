import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataCart } from "../../../data/mockData";

const OrderSummary = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const [cart, setCart] = useState(mockDataCart);

    const increase = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrease = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };


    return (
        <Box m="20px">
            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                {cart.map((item) => (
                    <div key={item.id}>

                        < Box
                            display="flex"
                            justifyContent="space-between"
                            marginBottom="15px"
                            borderRadius="10px"
                            padding="15px"
                            backgroundColor={colors.primary[400]}
                            key={item.id}
                        // key={`${Cart.id}-${i}`}
                        >
                            <Box>
                                <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                                    <div className="image">
                                        <img src={item.ProductImage} width={50} height={50} />
                                    </div>
                                </Typography>
                            </Box>
                            <Box
                                marginLeft="-30%"
                            >
                                <Typography variant="h3" fontWeight="100" fontSize="15px" color={colors.greenAccent[100]} marginBottom="5px">
                                    {item.ProductName}
                                </Typography>
                                <Typography variant="h3" fontWeight="100" fontSize="15px" color={colors.greenAccent[100]} marginBottom="5px">
                                    {item.ProductPrice}
                                </Typography>
                                <Typography variant="h3" fontWeight="300" fontSize="15px" color={colors.grey[500]} marginBottom="5px">
                                    {item.ProductStock}
                                </Typography>
                            </Box>
                            <Typography variant="h3" fontWeight="300" fontSize="15px" color={colors.grey[100]} marginTop="10px">
                                <button className="bgColor" onClick={() => increase(item.id)}>+</button>
                                <span className="space" />
                                {item.quantity}
                                <span className="space" />
                                <button className="bgColor" onClick={() => decrease(item.id)}>-</button>
                            </Typography>
                        </Box>
                    </div>
                ))
                }

            </Box >

        </Box >


    );
};

export default OrderSummary;