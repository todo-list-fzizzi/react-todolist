import {createSlice} from '@reduxjs/toolkit'
import {createTaskService, deleteTaskService, getAllTasksService, updateTaskService} from "../../services/tasksService";

export enum StatusType {
    PENDING = 'PENDING',
	COMPLETED = 'COMPLETED',
}

export interface Task {
	id: string;
    title: string;
    description: string;
    status: StatusType;
}

const initialState: Task[] = [];


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    },
	extraReducers: (builder) => {
		builder
			.addCase(getAllTasksService.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(deleteTaskService.fulfilled, (state, action) => {
				const deletedTask = state.find((task: Task) => {
					return task.id.toString() === action.payload.id
				});
				if (deletedTask) {
					state.splice(state.indexOf(deletedTask), 1)
				}
			})
			.addCase(updateTaskService.fulfilled, (state, action) => {
				const id: string = action.payload.task.id;
				return state.map((task: Task) => task.id.toString() === id.toString() ? action.payload.task : task);
			})
			.addCase(createTaskService.fulfilled, (state, action) => {
				state.push(action.payload);
			})
		;
	},
});

export default tasksSlice.reducer;