import React from 'react';
import {useSelector} from "react-redux";
import {Task} from "../features/tasks/tasksSlice";
import TaskComponent from "./TaskComponent";

const TaskList = () => {
	const tasks: Task[] = useSelector((state: any) => state.tasks)

	const taskComponents: any[] = tasks.map((task: Task) => <li className="list-none" key={task.id}><TaskComponent task={task}/></li>)

	return(
		<div className="flex flex-col w-full pl-5 gap-4">
			<div className="flex flex-col gap-3">
				{taskComponents}
			</div>
		</div>
	)
}

export default TaskList;
