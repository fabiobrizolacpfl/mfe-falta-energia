import Button from '@mui/material/Button';

const CustomButton = ({
                          label,
                          onClick,
                          disabled = false,
                          endIcon = null,
                          startIcon = null,
                          variant = null,
                      }) => {

    const defaultStyle = {
        textTransform: 'none',
        fontWeight: 'bold',
        backgroundColor: 'var(--btn-primary-bg)',
        borderRadius: 'var(--s25)',
        padding: 'var(--s8) var(--s15)',
        color: 'var(--white)',
        textAlign: 'center',
        border: '2px solid var(--btn-primary-bg)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
        '&:disabled': {
            color: 'var(--white)',
            opacity: 0.5,
            cursor: 'not-allowed',
        },
        '&:hover': {
            backgroundColor: 'var(--btn-primary-bg-hv)',
            borderColor: 'var(--btn-primary-bg-hv)',
            cursor: 'pointer',

        }
    };

    const primaryStyle = {
        ...defaultStyle,
        fontsize: 'var(--s16)',
        backgroundColor: 'var(--falta-energia-orange)',
        display: 'inline-flex',
        gap: 'var(--s15)',
        border: 'none',
        '&:hover': {
            backgroundColor: 'var(--falta-energia-orange)',
            borderColor: 'none',
        }
    };

    const styleButton = variant === 'primary' ? primaryStyle : defaultStyle;

    return (
        <Button
            sx={styleButton}
            onClick={onClick}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {label}
        </Button>
    );
};

export default CustomButton;
