
//constructor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;

}

//display constructor
function Display(){

}

//add methods to display prototype
Display.prototype.add= function(book){
    tablebody = document.getElementById('tablebody');
    let uiString = `
              <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
              </tr>`;
     console.log(uiString);
    tablebody.innerHTML += uiString;
}
Display.prototype.clear= function(){
    let libraryform=document.getElementById('libraryform');
    libraryform.reset();
}


//implementing the validate function
Display.prototype.validate= function(book){
    if (book.name.length<2 || book.name.author<2 ){
        return false

    }
    else{
        return true
    }
}


//show method of display
Display.prototype.show= function(type,displaymessage){
    
   let message=document.getElementById('message');
   message.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
              <strong>Message:</strong> ${displaymessage}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
             </div>`;
             setTimeout(function (){
                   message.innerHTML = '';
             },2000);
        }


//add submit event listener to form libraryform
let libraryform=document.getElementById('libraryform');
libraryform.addEventListener('submit',libraryformsubmit);
//this function is executed when library form is submitted
function libraryformsubmit(e){
  

    let name =document.getElementById('bookname').value;
    let author =document.getElementById('author').value;
    let fiction =document.getElementById('fiction');
    let programming =document.getElementById('programming');
    let cooking =document.getElementById('cooking');
    let type;
    if (fiction.checked){
        type = fiction.value;
    }
    else if (programming.checked){
        type = programming.value;
    }
    else if (cooking.checked){
        type = cooking.value;
    }
    let book=new Book(name,author,type);

    let display=new Display();
   
    if (display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully added');
    }
    else{
        //show error
        display.show('danger','Sorry you cannot add this book');
    }
 
    e.preventDefault();
}
//If you have any suggstion to improve this project so feel free to do a pull request.