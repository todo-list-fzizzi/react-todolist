import React, {useEffect} from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {useDispatch} from "react-redux";
import {getAllTasksService} from "./services/tasksService";
import {AppDispatch} from './app/store';

function App() {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(getAllTasksService());
	});
  // "Quicksand", sans-serif
  return (
	  <div className="bg-cyan-100 h-full w-screen p-14 font-sans">
		  <div className="flex flex-col items-center justify-center pb-10">
			  <h1 className="font-bold text-4xl">{"Todo List"}</h1>
		  </div>
		  <div className="flex flex-row justify-start h-full">
			  <div className="flex h-screen w-1/6">
				  <TaskForm/>
			  </div>
			  <div className="w-5/6">
				  <TaskList/>
			  </div>
		  </div>
	  </div>
  );
}

export default App;
