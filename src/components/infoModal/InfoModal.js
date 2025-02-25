import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";

const InfoModal = ({ open, onClose, title, content, hideCloseButton = false }) => {


    return (
        <Dialog open={open} onClose={onClose} maxWidth slotProps={{ paper: { sx: { borderRadius: 4, p: 2 } } }}>
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", margin: 1 }}>
                <Box sx={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>{title}</Box>
                {!hideCloseButton && (
                    <IconButton onClick={onClose} sx={{ padding: 0 }}>
                        <CloseIcon />
                    </IconButton>
                )}
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
        </Dialog>
    );
};

export default InfoModal;
