

const formZ = document.querySelector('form');

const  lib = new Library();

formZ.addEventListener("submit" , (e) => {
    e.preventDefault(); 


const bookT = document.getElementById('bookTitle').value;
const bookA = document.getElementById('bookAuthor').value;


if(bookT && bookA) {
    const addedBook = new Book(bookT, bookA);


    // Add book to Library class

    lib.addBook(addedBook)
    

    renderLibrary();


    //remove the book entered information in input section

    document.getElementById('bookTitle').value = ''
    document.getElementById('bookAuthor').value =''

}

})


// function removeBook(index) {
//     lib.removeBook(index);
//     renderLibrary();
// }


const renderLibEl = document.querySelector('#renderdedLibraray');
    const bookcountEl = document.querySelector('#bookcount');


function renderLibrary() {
    
    bookcountEl.textContent = lib.bookCount();

    // console.log(lib.getBooks());


    
    //Resting previous value
     renderLibEl.innerHTML = ''

    lib.getBooks().forEach((book, index) => {

     renderLibEl.innerHTML +=
     
     `<li class="white">

     <div style="background-color: white;" class="name1">

         <h4 class="head">${book.getTitle()} by ${book.getAuthor()}</h4> 

      </div>
  
      <div  style="background-color: white;" class="name2" >

         <button  class="read "> Mark as Read</button>

         <button class="remove" onclick = "removeBook(${index})">Remove</button>
      </div>
 </li>
     `
    });

}

function removeBook(index) {
    lib.removeBook(index);
    renderLibrary();
}
