import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";

const InfoModal = ({ open, onClose, title, content }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth slotProps={{paper: { sx: { borderRadius: 4, p: 2 } }}}>
            <DialogTitle sx={{display: "flex", justifyContent: "space-between", margin: 1}}>
                <Box sx={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>{title}</Box>
                <IconButton onClick={onClose} sx={{padding: 0}}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions sx={{ m: 1, display: "flex", justifyContent: "center" }}>
                <CustomButton onClick={onClose} label="Ok, entendi" />
            </DialogActions>
        </Dialog>
    );
};

export default InfoModal;
