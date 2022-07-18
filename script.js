let input = document.querySelector("input");
let addButton = document.querySelector(".btn_add");
let list = document.querySelector("#list");
let taskSection = document.querySelector(".task_section");
let completedBtn = document.querySelector(".fa-pen-to-square");
let cancelBtn = document.querySelector(".fa-trash-can");
let taskName = document.querySelector(".task_name");

// Disable add button

input.addEventListener("keyup", () => {
  addButton.classList.add("active");
});

// Add items from input to task section

addButton.addEventListener("click", () => {
  if (input.value == "") return;

  let div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `<p class='task_name'>${input.value}</p><div class='task_btn'><i class='fa-solid fa-pen-to-square'></i> <i class='fa-solid fa-trash-can'></i> </div>`;

  taskSection.appendChild(div);

  // Clear input
  input.value = "";
});

// Activate completed button

taskSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.firstElementChild.classList.toggle(
      "completed"
    );
    console.log(e.target);
  }
});

// Activate cancel button

taskSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    if (
      e.target.parentElement.parentElement.firstElementChild.classList.contains(
        "completed"
      )
    ) {
      e.target.parentElement.parentElement.classList.add("move");
    } else {
      e.target.parentElement.parentElement.classList.add("moving");
    }

    setTimeout(() => {
      e.target.parentElement.parentElement.remove();
    }, 1000);
  }
});

// let taskArray = [];

// input.addEventListener("change", ({ target }) => {
//   const task = target.value;
//   if (taskArray.includes(task) || task == "") {
//     return;
//   }
//   taskArray.push(task);
//   console.log(taskArray);
// });

// addButton.addEventListener("click", () => {
//   taskArray.forEach((element) => {
//     let li = document.createElement("li");
//     li.innerText = element;

//     if (taskArray.length > 0) {
//       taskArray.shift();
//     }
//     list.appendChild(li);
//   });
// });
