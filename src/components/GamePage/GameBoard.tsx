import { useTheme, Grid, Typography } from "@mui/material";
import { StyledButton } from "../Styled/StyledButton";

interface GameBoardProps {
    handleMenuClick: () => void;
}

export const GameBoard: React.FC<GameBoardProps> = (props) => {

    const theme = useTheme();


    return <Grid
        container
        style={{ height: "100%" }}
        // alignItems="flex-start"
        justifyContent='center'
        alignItems='center'
        direction='column'
    >

        <Grid item >
            <Typography
                align="center"
                children="Game Board"
                variant="h4"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
            />
        </Grid>


        <Grid item>

            {/* ------------ TODO 001: @Emily create a 10 col x 12 row grid ---------- */}
            <Typography
                align="center"
                children="<create 10x12 game board here>"
                variant="overline"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
            />
            {/* ------------------------------ END TODO 0001 ----------------------------- */}

        </Grid>

        <Grid item>
            <StyledButton
                children="Menu"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
                onClick={props.handleMenuClick}
                fullWidth
            />
        </Grid>

    </Grid>
}