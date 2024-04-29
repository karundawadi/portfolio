export const filterTask = (task) => {
    if (!task.completed) return true; // Show all uncompleted tasks
    const completionDate = new Date(task.completionDate);
    const currentDate = new Date();
    const differenceInTime =
      currentDate.getTime() - completionDate.getTime();
    const differenceInDays =
      differenceInTime / (1000 * 3600 * 24);
    return differenceInDays <= 1;
}