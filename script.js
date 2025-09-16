window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//Selectors
const recognition = new SpeechRecognition();
const words = document.querySelector(".words");
const notesList = document.querySelector(".notes-list");
const saveButton = document.querySelector(".save-notes");
const clearButton = document.querySelector(".clear-notes");
const languageSelect = document.querySelector("#language-select");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const exportButton = document.querySelector("#export-notes");
recognition.interimResults = true;

let p = document.createElement("p");
words.appendChild(p);

let notes = []; //Array to store notes

//toggle dark mode
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    //Save the final transcript as a note
    notes.push(transcript);
    displayNotes();
    p = document.createElement("p");
    words.appendChild(p);
  }
});

recognition.addEventListener("end", () => recognition.start());

recognition.lang = "en-US";
recognition.start();

//Update recognition language when the user selects a new language from the dropdown
languageSelect.addEventListener("change", () => {
  recognition.lang = languageSelect.value;
});

//Function to display notes
function displayNotes() {
  notesList.innerHTML = ""; //Clear the list
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;

    //Create a delete button for each note
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "#ff4d4d"; //Adds some styling to the button
    deleteButton.style.color = "#fff";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "10px";
    deleteButton.addEventListener("click", () => {
      notes.splice(index, 1); //Removes the note at the current index
      displayNotes(); //Refresh the notes list
    });
    li.appendChild(deleteButton); //Add the delete button to the note
    notesList.appendChild(li); //Add the note to the list
  });
}

//Create an edit button
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.style.backgroundColor = "#4caf50"; //Add some style to the button
editButton.style.color = "#fff";
editButton.style.border = "none";
editButton.style.borderRadius = "10px";
editButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.value = notes;
});

//Save notes to local storage
saveButton.addEventListener("click", () => {
  localStorage.setItem("notes", JSON.stringify(notes));
  alert("Notes saved!");
});

//Clear notes
clearButton.addEventListener("click", () => {
  notes = [];
  displayNotes();
  alert("All notes cleared!");
});

//Load notes from local storage on page load
window.addEventListener("load", () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes"));
  if (savedNotes) {
    notes = savedNotes;
    displayNotes();
  }
});

//Export notes as a text file
exportButton.addEventListener("click", () => {
  const blob = new Blob([notes.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "notes.txt";
  a.click();
  URL.revokeObjectURL(url);
});
