import { useTheme } from "@mui/material"
import Grid from "@mui/material/Grid/Grid"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useLinkClickHandler } from "react-router-dom";
import { StyledButton } from "../Styled/StyledButton";
import { useDispatch } from "react-redux";
import { newGame } from "../../actions/gameActions";

interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = (props) => {
    const dispatch = useDispatch();

    const linkHandler = useLinkClickHandler("/game");
    const theme = useTheme();

    const handleNewGameClick = (evt: any) => {
        linkHandler(evt);
        dispatch(newGame())
    }

    return <Grid
        container
        style={{ height: "100%" }}
        alignItems="center"
        justifyContent='center'
    >

            <Grid item xs={6}>
                <StyledButton
                    startIcon={<SportsEsportsIcon />}
                    children="New Game"
                    style={{
                        paddingTop: theme.spacing(1),
                        paddingBottom: theme.spacing(1)
                    }}
                    onClick={handleNewGameClick}
                    fullWidth
                />
            </Grid>
            
    </Grid>
}