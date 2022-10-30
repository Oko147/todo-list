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
            ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
      done: false,
    });

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
