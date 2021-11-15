import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../models/project";

export const ProjectSlice = createSlice({
    name: "project",
    initialState: {
        projects: [] as Project[],
        project: {} as Project,
        loading: false,
        error: null,
    },
    reducers: {
        createProject: (state, action: PayloadAction<Project>) => {
            state.projects.push(action.payload);
        }

    }
});