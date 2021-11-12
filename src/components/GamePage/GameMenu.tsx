import { useTheme, Grid, Button, Typography } from "@mui/material";
import { StyledButton } from "../Styled/StyledButton";
import { useLinkClickHandler } from "react-router-dom";

interface GameMenuProps {
    handleGameOnBitchezClick: () => void;
}

export const GameMenu: React.FC<GameMenuProps> = (props) => {

    const theme = useTheme();
    const linkHandler = useLinkClickHandler("/");

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
                children="Game Menu"
                variant="h4"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
            />
        </Grid>
        <Grid item>
            <StyledButton
                children="Start Game"
                color="error"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
                onClick={props.handleGameOnBitchezClick}
            />
            {/* <Button
                children="Game on Bitchez"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
                color="error"
                onClick={props.handleGameOnBitchezClick}
                fullWidth
            /> */}

        </Grid>
        <Grid item>
            <StyledButton
                children="Home"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
                onClick={(e) => linkHandler(e as any)}
            />
        </Grid>
    </Grid>
}