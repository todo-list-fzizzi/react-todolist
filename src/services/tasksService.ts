import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../utils/constants";
import {StatusType} from "../features/tasks/tasksSlice";

export const getAllTasksService = createAsyncThunk(
	"tasks/getAllTasks",
	async () => {
		const response = await axios.get('http://localhost:3000/tasks');
		return await response.data;
	}
);

export const createTaskService = createAsyncThunk(
	"tasks/createTask",
	async (task: {title: string, description: string}) => {
		const response = await axios.post(BASE_URL + `/tasks`, task);
		return response.data;
	}
)

export const deleteTaskService = createAsyncThunk(
	"tasks/deleteTask",
	async (id: string) => {
		const response = await axios.delete(BASE_URL + `/tasks/${id}`);
		return response.data;
	}
);

export const updateTaskService = createAsyncThunk(
	"tasks/updateTask",
	async (payload: {id: string, status: StatusType}) => {
		const updateData = {
			status: payload.status.toString()
		}
		const response = await axios.patch(BASE_URL + `/tasks/${payload.id}`, updateData);
		return response.data;
	}
)