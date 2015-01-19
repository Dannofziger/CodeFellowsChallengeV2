
function library(Name){
    this.name = Name;
    this.shelves = {};
    this.addShelf = function(genre){
        this.shelves[genre] = new shelf(genre);
    };
    this.deleteShelf = function(genre){
        delete this.shelves[genre];
    };
}

function addLibrary(Name){
    var libArray = libraries;
    var duplicationCheck;
    if(libArray[Name] === undefined){
        duplicationCheck = true;
    }else{
        duplicationCheck = false;
    }
    if(duplicationCheck){
        libraries[Name] = new library(Name);
        alert("New library added: "+Name);
    }else{
        alert("No new libraries added: Duplicate found.");
    }
}
function removeLibrary(Name){
    var check = confirm("Are you sure you want to remove library: "+Name);
    if((libraries[Name] !== undefined) && check){
        delete libraries[Name];
    }else if(libraries[Name] === undefined){
        alert("Library doesn't exist. Please check spelling.");
    }
}
function checkString(string){
    return string !== "fail";
}
function newShelf(library, genre){
    if((libraries[library] === undefined)){
        alert(library +" doesn't exist.");
    }else if(libraries[library].shelves[genre] === undefined){
        libraries[library].addShelf(genre);
    }else{
        alert(genre+ " already exists.");
    }
}
function removeShelf(library, genre){
    if(libraries[library].shelves[genre] !== undefined){
        libraries[library].shelves[genre].unshelfAll();
        libraries[library].deleteShelf(genre);
    }
}
