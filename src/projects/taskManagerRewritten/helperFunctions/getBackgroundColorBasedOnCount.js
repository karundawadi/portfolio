export const getBackgroundColor = (props, pomodoroCount) => {
  if (pomodoroCount < 2) return props.dark ? "green" : "lightgreen";
  if (pomodoroCount < 5) return props.dark ? "#3131b5" : "lightblue";
  return props.dark ? "#cf4327" : "pink";
};
