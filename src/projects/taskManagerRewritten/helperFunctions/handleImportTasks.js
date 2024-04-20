export const handleImportTasks = (event, setTasks) => {
  const fileReader = new FileReader();
  fileReader.readAsText(event.target.files[0], "UTF-8");
  fileReader.onload = (e) => {
    const importedTasks = JSON.parse(e.target.result);
    if (Array.isArray(importedTasks)) {
      setTasks(importedTasks);
      localStorage.setItem("tasks", e.target.result);
    } else {
      alert("Invalid file format");
    }
  };
};
