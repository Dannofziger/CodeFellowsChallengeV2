
function shelf(Genre){
    this.genre = Genre;
    this.books = {};
    this.shelf = function(bookId){
        this.books[bookId] = unshelved[bookId];
        enshelved[bookId] = unshelved[bookId];
        delete unshelved[bookId];
    };
    this.unshelf = function(bookId){
        this.books[bookId] = enshelved[bookId];
        unshelved[bookId] = enshelved[bookId];
        delete enshelved[bookId];
    };
    this.unshelfAll = function(){
        var keys = Object.keys(this.books);
        for(var i = 0; i < keys.length; i++){
            unshelved[keys[i]] = enshelved[keys[i]];
            delete enshelved[keys[i]];
        }
    };
}

function enshelf(library, shelf, book){
    if(unshelved[book] !== undefined){
        libraries[library].shelves[shelf].shelf(book);
    }else{
        alert("There is no unshelved book with that ID.");
    }
}
function unshelf(library, shelf, book){
    if(enshelved[book] !== undefined){
        libraries[library].shelves[shelf].unshelf(book);
    }else{
        alert("There is no shelved book with that ID.");
    }
}