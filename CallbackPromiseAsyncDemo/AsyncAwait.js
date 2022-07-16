
console.log('-------Start---------')

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout((() =>{
            console.log('inside timeout()...!!!')
            resolve({userEmail : email});
        }), 2000);
    });
   
}

function getUserVideo(email){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 1000);
    });
    
}

function getUserVideoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Title of the video is ' + video);
        }, 3000);
    });
    

}

/*
loginUser("sandeep@yahoo.com", "12345")
    .then((user) => getUserVideo(user.userEmail))
    .then((video) => getUserVideoDetails(video[0]))
    .then((details) => console.log(details));
*/

async function displayUser(){
    try {
        const user = await loginUser("poojary@gmail", "qawsed");
        console.log(user.userEmail)
        const video =  await getUserVideo(user.userEmail);
        const details = await getUserVideoDetails(video[1]);
        console.log(details);
    } catch (err){
        console.log("catch block...!!!")
    }
    
}

displayUser();

console.log('-------End---------')

