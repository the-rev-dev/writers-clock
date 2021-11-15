import { useLinkClickHandler } from "react-router-dom";
import { Button, Grid, useTheme } from "@mui/material";
import { CreateProjectForm, CreateProjectFormValues } from "./CreateProjectForm";
import { useDispatch } from "react-redux";
import { ProjectSlice } from "../../slices/projectSlice";
import { v4 as uuidv4 } from 'uuid';

export const CreateProjectPage = () => {
    const linkHandler = useLinkClickHandler("/");
    const theme = useTheme();
    const dispatch = useDispatch();

    // function to save project to database
    const saveProject = (project: CreateProjectFormValues) => {
        if (!project.description || !project.name) {
            alert("Please fill out all fields");
            return;
        }
        dispatch(ProjectSlice.actions.createProject({ ...project, id: uuidv4() }));
        alert(JSON.stringify(project, null, 2));
    };

    return (
        <div>
            <Grid
                container
                spacing={3}
                justifyContent="flex-start"
            >
                <Grid
                    item
                    style={{
                        marginTop: theme.spacing(2),
                        marginLeft: theme.spacing(5),
                    }}
                >
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={linkHandler as any}>
                        Back
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <h1>New Project</h1>
                <CreateProjectForm
                    onSubmit={saveProject}
                />
            </Grid>
        </div>
    );
};