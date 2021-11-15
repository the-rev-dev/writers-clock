import { useTheme } from "@mui/material"
import Grid from "@mui/material/Grid/Grid"
import AddIcon from '@mui/icons-material/Add';
import { useLinkClickHandler } from "react-router-dom";
import { StyledButton } from "../Styled/StyledButton";
import { useDispatch } from "react-redux";
import { ProjectList } from "./ProjectList";

interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = (props) => {
    const dispatch = useDispatch();

    const linkHandler = useLinkClickHandler("/new-project");
    const theme = useTheme();

    const handleNewProjectClick = (evt: any) => {
        linkHandler(evt);
    }

    return <Grid
        container
        style={{ height: "100%" }}
        alignItems="center"
        justifyContent='center'
    >

        <Grid item xs={6}>
            <StyledButton
                startIcon={<AddIcon />}
                children="New Project"
                style={{
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1)
                }}
                onClick={handleNewProjectClick}
                fullWidth
            />
            <ProjectList />
        </Grid>

    </Grid>
}