import { ApplicationSettings } from "@nativescript/core";

export function setTask(name, tasks) {
  const arr = JSON.stringify(tasks)

  ApplicationSettings.setString(name, arr);
}

export function getTasks(name) {
  const tasks = ApplicationSettings.getString(name);
  // const tasks = ;
  // console.log("_______________________________________________________")
  
  // console.log(JSON.parse(ApplicationSettings.getString('index')));
  // console.log("_______________________________________________________")
  if (tasks) {
    return JSON.parse(tasks)
  }
  else return []
}
