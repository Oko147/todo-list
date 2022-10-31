{
  const tasks = [];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="taskEach"${
          task.done ? ' style="text-decoration: line-through"' : ""
        }>
        <button class="js-done buttonDone"></button>
            <div class="taskText">${task.content}</div>
            <button class="js-remove buttonRemove"><i class="fa fa-trash"></i></button>
        </li>
        <hr>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDone, index) => {
      toggleDone.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
      done: false,
    });
    document.querySelector(".js-newTask").value = ``;
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const newTaskContent = document.querySelector(".js-newTask").value.trim();
      console.log(newTaskContent);
      if (newTaskContent === "") {
        return;
      }
      addNewTask(newTaskContent);
    });
  };

  init();
}
