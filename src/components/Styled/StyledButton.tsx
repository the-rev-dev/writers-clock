import { Button, styled } from "@mui/material"

export const StyledButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#eee',
    borderRadius: 0,
    color: '#344',

    '&:hover': {
        backgroundColor: '#a3b4c4',
        boxShadow: 'none',
        color: "#fff"
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});