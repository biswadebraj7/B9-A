function checkName(name){
    const lastName = ["A", "y", "i","e","o","u","w"];

    if(typeof name!== 'string'){
        return "invalid";
    }

    for(name1 of name){
        if(lastName.includes(name.slice(-1).toLowerCase())){
            return "Good Name"
        }
        else {
            return "Bad Name"
        }
    }
}

console.log(checkName("rASHEde"));
console.log(checkName("Rashed"));
console.log(checkName(65));