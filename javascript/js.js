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
        <li>
            ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const init = () => {
    render();
  };

  init();
}
