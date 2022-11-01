{
  const tasks = [
    { content: "Pójść do sklepu", done: true },

    {
      content:
        "Przykładowe, długie zadanie, aby pokazać jak zachowuje się lista na ekranie telefonu",
    },
    {
      content: "Ułożyć kostkę Rubika w czasie poniżej 30s",
    },
    {
      content: "Załatwić salę do grania na fortepianie",
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="list">
        <button class="js-done list__button list__button--done">${
          task.done ? "✓" : ""
        }</button>
            <div class="list__item ${task.done ? " list__item--done" : ""}">${
        task.content
      }</div>
            <button class="js-remove list__button list__button--remove"><i class="fa fa-trash"></i></button>
        </li>
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
    document.querySelector(".js-newTask").focus();
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
      if (newTaskContent === "") {
        return;
      }
      addNewTask(newTaskContent);
    });
  };

  init();
}
