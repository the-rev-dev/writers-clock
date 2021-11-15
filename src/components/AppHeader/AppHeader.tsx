import { Toolbar, AppBar, Typography, useTheme } from "@mui/material"

interface AppHeaderProps {
}

export const AppHeader: React.FC<AppHeaderProps> = (props) => {

    const theme = useTheme();

    return (
        <AppBar
            position="static"
            color="transparent"
            sx={{ top: 'auto' }}>
            <Toolbar>

                <Typography
                    variant="h5"
                    style={{padding: theme.spacing(2), color: theme.palette.primary.main}}
                    children="Writers Clock"
                />


            </Toolbar>

        </AppBar>

    )
}
