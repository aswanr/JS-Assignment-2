// 1) ​Console this star pattern
for (let i=1; i<=5; i++) {
    let gap="";
    for (let j=i; j<5; j++) {
        gap +=" ";
    }
    for (let k=0; k<i; k++) {
        gap +="* ";
    }
    console.log(gap);
}

//2)['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.
const items = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
const result=items.map(element=>{
    switch(typeof element){
        case 'string':
            console.log(`its srting ${element}`);
            break;
        case 'number':
                console.log(`it is number ${element}`);
                break;
        case 'boolean':
            console.log(`its is boolen charater ${element}`);
            break;
        default:
            console.log(`type unfounded iteam charater${element}`);
    };
});
console.log(result);

// 3)[1, 2, 3, 4.5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
function dele(){
    let array= [1, 2, 3, 4.5, 6];
    function delposition(){
            array.splice(array.indexOf(2),1);
            array.splice(array.indexOf(5),1);
            console.log(array);                
    }
    return delposition;
}
let closure=dele();
closure();

//4)Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
const array12=[1,2,3,5]
let aswan=new Function("array12","array12.forEach(i =>{console.log(i);})");
aswan(array12);

// 5)Create a self-invoking function to console you name.
(function() {
    console.log("Aswan.r"); 
}());

