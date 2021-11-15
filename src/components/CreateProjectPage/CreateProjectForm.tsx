import { Button, Container, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";

export interface CreateProjectFormValues {
    name: string;
    description: string;
}


interface CreateProjectFormProps {
    onSubmit: (values: CreateProjectFormValues) => void;
}

export const CreateProjectForm: React.FC<CreateProjectFormProps> = (props) => {

    // a form with inputs for CreateProjectFormValues

    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
        },
        onSubmit: values => {
            props.onSubmit(values);
        },
    });
    return (
        <Container
            maxWidth="md"
        >
            <Grid
                container
                justifyContent="center"
                spacing={3}
            >
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Project name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}

                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Project Description"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </Grid>

                <Grid item xs={5}>
                    <Button
                        children="Back"
                        variant="contained"
                        color="inherit"
                        fullWidth
                        onClick={formik.handleSubmit as any}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Button
                        children="Create"
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={formik.handleSubmit as any}
                    />
                </Grid>
            </Grid >
        </Container>
    );
};