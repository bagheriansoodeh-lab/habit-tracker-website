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
  updateStats();
};
;

  li.appendChild(span);
  li.appendChild(deleteBtn);
  habitList.appendChild(li);

  habitInput.value = "";
  saveHabits();
  updateStats();
}

function saveHabits() {
  localStorage.setItem("habits", habitList.innerHTML);
}

function loadHabits() {
  habitList.innerHTML = localStorage.getItem("habits") || "";
  updateStats();
}

loadHabits();
function updateStats() {
  const habits = habitList.querySelectorAll("li");
  const completed = habitList.querySelectorAll(".completed");

  document.getElementById("totalHabits").textContent = habits.length;
  document.getElementById("completedHabits").textContent = completed.length;
}

