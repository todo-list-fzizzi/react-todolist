import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createTaskService} from "../services/tasksService";
import {AppDispatch} from "../app/store";
import {Button, TextField} from "@mui/material";

const TaskForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch<AppDispatch>();

	const handleTitleChange = (e: any) => {
		setTitle(e.target.value);
	}

	const handleDescriptionChange = (e: any) => {
		setDescription(e.target.value);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setTitle("");
		setDescription("");
		const task = {
			title,
			description,
		}
		dispatch(createTaskService(task));
	}

	return (
		<div>
			<form className="flex flex-col bg-white p-3 rounded-lg gap-3">
				<h2 className="text-2xl font-bold">Create new Task:</h2>
				<TextField style={{borderRadius: 100}} type='text' value={title} label="Title"
						   onChange={handleTitleChange}/>
				<TextField type='text' value={description} label="Description" multiline={true} onChange={handleDescriptionChange}/>
				<Button className="bg-amber-500" variant="contained" onClick={handleSubmit}>Create</Button>
			</form>
		</div>
	)
}

export default TaskForm;
