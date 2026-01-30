const habitList = document.getElementById("habitList");
const habitInput = document.getElementById("habitInput");

function addHabit() {
  const text = habitInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.onclick = () => {
    span.classList.toggle("completed");
    saveHabits();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => {
    li.remove();
    saveHabits();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  habitList.appendChild(li);

  habitInput.value = "";
  saveHabits();
}

function saveHabits() {
  localStorage.setItem("habits", habitList.innerHTML);
}

function loadHabits() {
  habitList.innerHTML = localStorage.getItem("habits") || "";
}

loadHabits();
