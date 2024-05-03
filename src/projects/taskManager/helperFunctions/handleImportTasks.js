import { setTasks } from "../features/reducers/taskReducer";

export const handleImportTasks = (event, window) => {
  const fileReader = new FileReader();
  fileReader.readAsText(event.target.files[0], "UTF-8");
  fileReader.onload = (e) => {
    const importedTasks = JSON.parse(e.target.result);
    if (Array.isArray(importedTasks)) {
      localStorage.setItem("tasks", JSON.stringify(importedTasks));
    } else {
      alert("Invalid file format");
    }
  };
};
