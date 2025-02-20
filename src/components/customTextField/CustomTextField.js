import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({
                             id = '',
                             label,
                             value,
                             onChange,
                             disabled = false,
                             helperText = '',
                             placeholder = '',
                             variant = 'outlined',
                             type = 'text',
                             fullWidth = true,
                             sx = {},
                             inputProps = {},
                         }) => {

    return (
        <TextField
            id={id}
            className="custom-field"
            label={label}
            value={value}
            onChange={onChange}
            disabled={disabled}
            helperText={helperText}
            placeholder={placeholder}
            variant={variant}
            type={type}
            fullWidth={fullWidth}
            sx={{...sx}}
            inputProps={{...inputProps}}
        />
    );
};

export default CustomTextField;
