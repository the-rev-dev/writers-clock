import { Toolbar, IconButton, AppBar, Grid, Tooltip } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { NavLink } from "react-router-dom";

export const AppFooter: React.FC<{}> = () => {

    let activeStyle: React.CSSProperties = {
        color: "#fff"
    };

    return (
        <AppBar
            position="fixed"
            color="primary"
            style={{ top: 'auto', bottom: 0 }}>

            <Toolbar>

                <Grid
                    container
                >
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                    >
                        <Tooltip
                            title="Home"
                        >
                            <NavLink
                                to="/"
                                style={
                                    ({ isActive }) =>
                                        isActive ? activeStyle : {}
                                }
                            >
                                <IconButton
                                    color="inherit"
                                >
                                    <HomeIcon />
                                </IconButton>
                            </NavLink>
                        </Tooltip>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                    >
                        <Tooltip
                            title="Game"
                        >
                            <NavLink
                                to="/game"
                                style={
                                    ({ isActive }) =>
                                        isActive ? activeStyle : {}
                                }
                            >
                                <IconButton
                                    color="inherit"
                                >
                                    <SportsEsportsIcon />
                                </IconButton>
                            </NavLink>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>

    )
}
