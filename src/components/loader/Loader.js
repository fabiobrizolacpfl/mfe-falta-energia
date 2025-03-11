import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import "./Loader.css";

const Loader = ({ isLoading }) => {
    return (
        <Backdrop className="loader-backdrop" open={isLoading}>
            <Box className="loader-container">
                <CircularProgress size={80} color="info" />
                <img src="/images/logo.png" alt="CPFL Logo" className="loader-logo" />
            </Box>
        </Backdrop>
    );
};

export default Loader;
