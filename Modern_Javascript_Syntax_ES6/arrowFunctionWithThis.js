// Arrow function doesn't care about "this" keyword ......Arrow function use korle this er man change hoi na...

/** In this code "this" keyword don't get it's proper value 
because forEach build in function change the value of "this" 
that's why we cann't get expected output **/
// let javascript = {
//     name: "Javascript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         this.libraries.forEach(function(p){
//             console.log(`${this.name} loves ${p}`);
//         })
//     }
// }

// javascript.printLibraries();


/** Solve this problem - one way */

// let javascript = {
//     name: "Javascript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         let self = this; // added one line
//         this.libraries.forEach(function(p){
//             console.log(`${self.name} loves ${p}`); // replace this = self
//         })
//     }
// }

// javascript.printLibraries();


/**Best way to solve this problem using arrow function... Arrow function get the proper value of "this" in this environment **/

let javascript = {
    name: "Javascript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function () {
        this.libraries.forEach((p) => {      // Using arrow function in this line
            console.log(`${this.name} loves ${p}`);
        })
    }
}

javascript.printLibraries();


