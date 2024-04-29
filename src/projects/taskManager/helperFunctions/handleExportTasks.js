export const handleExportTasks = (tasks) => {
    const tasksData = JSON.stringify(tasks);
    const blob = new Blob([tasksData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tasks.json";
    link.click();
  };