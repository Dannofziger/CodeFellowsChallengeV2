var enshelved = {};
var unshelved = {};
var libraries = {};

function book(Title, Author){
    this.title = Title;
    this.author = Author;
}

function addBook(bookId, Title, Author){
    if((unshelved[bookId] === undefined)&&(enshelved[bookId] === undefined)){
        unshelved[bookId] = new book(Title, Author);
    }else{
        alert("There is another book with that ID.");
    }
}
function removeBook(bookId){
    if(unshelved[bookId] !== undefined){
        delete unshelved[bookId];
    }else if(enshelved[bookId] !== undefined){
        alert("Please unshelf book before deletion.");
    }else{
        alert("There is no book with that ID.");
    }
}