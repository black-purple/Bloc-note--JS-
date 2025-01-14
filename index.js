//Si l'utilisateur ajoute une note, cette derniere va s'ajouter auto au LocalStorage
showNotes();
  
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("text");
    let notes = localStorage.getItem("notes");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    notesObj.push(text.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    text.value = "";
  
    showNotes();
})


// fonction pour afficher les elements du LocalStroage
function showNotes() {
    let notes = localStorage.getItem("notes");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    let html = "";
  
    notesObj.forEach(function(element, index) {
        html += `<div class="noteCard my-2 mx-2 card" 
            style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        Note ${index + 1}
                    </h5>
                    <p class="card-text"> 
                        ${element}
                    </p>
                    <button id="${index}" onclick=
                    "deleteNote(this.id)"
                    class="btn btn-primary">
                    Delete Note
                </button>
            </div>
        </div>`;
    });
  
    let notesElm = document.getElementById("notes");
  
    if (notesObj.length != 0) notesElm.innerHTML = html;
    else
        notesElm.innerHTML = `Rien ne s'affiche`;
}

// Fonction pour supprimer les notes 
// Function to delete a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    notesObj.splice(index, 1);
  
    localStorage.setItem("notes", 
        JSON.stringify(notesObj));
  
    showNotes();
}