import React, {useState} from 'react';
import {StatusType, Task} from "../features/tasks/tasksSlice";
import {useDispatch} from "react-redux";
import {deleteTaskService, updateTaskService} from "../services/tasksService";
import {AppDispatch} from "../app/store";
import {DeleteIcon} from "./icons/DeleteIcon";
import {Checkbox} from "@mui/material";

const TaskComponent = ({task}:{task: Task}) => {
	const [isCompleted, setIsCompleted] = useState(task.status === StatusType.COMPLETED);
	const dispatch = useDispatch<AppDispatch>();

	const handleUpdate = () => {
		let status = task.status;
		const id = task.id
		switch (isCompleted) {
			case true:
				status = StatusType.PENDING;
				setIsCompleted(false);
				break;
			case false:
				setIsCompleted(true);
				status = StatusType.COMPLETED;
				break;
		}
		dispatch(updateTaskService({id, status}));
	}

	const handleDelete = () => {
		dispatch(deleteTaskService(task.id));
	}

	return (
		<div className="break-words bg-blue-300 rounded-lg">
			<div className="flex flex-row">
				<div className="flex justify-items-center">
					<Checkbox onChange={handleUpdate} checked={isCompleted}/>
				</div>
				<div className="p-5 w-11/12">
					<div className="flex flex-row pr-6 w-3/4">
						<h2 className="text-2xl font-bold">{task.title}</h2>
					</div>
					<div className="pt-5">
						<p>{task.description}</p>
					</div>
				</div>
				<div className="flex justify-end pt-2 pr-2">
					<button onClick={handleDelete}><DeleteIcon/></button>
				</div>
			</div>
		</div>
	)
}

export default TaskComponent;
