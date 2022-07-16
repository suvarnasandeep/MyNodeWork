function taskOne(){
    console.log('task 1...!');
}

function taskTwo(){
    console.log('task 2...!');
}

//taskOne();

setTimeout(taskOne, 2000);

taskTwo();