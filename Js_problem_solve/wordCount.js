// Word count from a string 
// PH v: 15-8
var speech = "My name is Najmus Sakib. I       am a student and try to become a web developer";
var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i - 1] != " "){  // Second condition after && just for if white space is more than 1 in same place.
        count++;
    }
}
count++;
console.log(count);