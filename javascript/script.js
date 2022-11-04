{
  const tasks = [
    {
      content: "Zrobić pranie",
    },
    {
      content: "Wyjść z psem",
    },
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

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

  const listButtons = () => {
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

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="list">
        <button class="js-done list__button list__button--done">
        ${task.done ? "✓" : ""}
          </button>
            <div class="list__item ${task.done ? " list__item--done" : ""}">
            ${task.content}
            </div>
            <button class="js-remove list__button list__button--remove">🗑</button>
        </li>
        <hr>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
    listButtons();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent === "") {
      return;
    }
    addNewTask(newTaskContent);
    document.querySelector(".js-newTask").value = ``;
    document.querySelector(".js-newTask").focus();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
