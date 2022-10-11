console.log("this is a notes app");
showNotes();

let btn = document.getElementById('add_note');
btn.addEventListener('click',function(){
    let text = document.querySelector('textarea');
    let notes = localStorage.getItem('notes');
    // console.log('hi');
    if(notes==null){
        noteobj = [];
    }
    else{
        noteobj= JSON.parse(notes);
    }
    noteobj.push(text.value);
    text.value = "";
    localStorage.setItem('notes',JSON.stringify(noteobj));
    showNotes()
})

function showNotes(){
    let notes = localStorage.getItem('notes');
    console.log('hi');
    if(notes==null){
        noteobj = [];
    }
    else{
        noteobj= JSON.parse(notes);
    }
    let note_det = document.querySelector('.notes_details');
    let html = '';
    Array.from(noteobj).forEach(function(element,index){
        html += `<div class="box1">
                    <h4>Note ${index+1}</h4>
                    <p>${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)"class="btn">delete note</button>
                </div> 
                `;
        if(noteobj.length!=0){

            note_det.innerHTML=html;
        }
        else{
            note_det.innerHTML="Nothing added in the notes";
        }
    })
}

function deleteNote(index){
    // let notes = localStorage.getItem('notes');
    let notes = localStorage.getItem("notes");
    console.log('hi',index);
    if(notes==null){
        noteobj = [];
    }
    else{
        noteobj= JSON.parse(notes);
    }
    noteobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    showNotes();
}

let in_txt = document.getElementById('inputtxt');
in_txt.addEventListener('input',function(ele){
    let input_val = in_txt.value.toLowerCase();
    let box1txt = document.getElementsByClassName('box1');
    Array.from(box1txt).forEach(function(element){
        let eletxt = element.getElementsByTagName('p')[0].innerText;
        if(eletxt.includes(input_val)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";

        }
    })
    
})
