{
  const tasks = [
    {
      content: "Zrobić obiad",
      done: true,
    },
    {
      content: "Zrobić kupę",
      done: false,
    },
    {
      content: "Wyjść z domu",
      done: true,
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li${task.done ? ' style="text-decoration: line-through"' : ""}>
        <button class="js-remove">Usuń</button>
            ${task.content}
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
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
      done: false,
    });
    newTaskContent = "";
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
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
