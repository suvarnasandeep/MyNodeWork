
console.log('-------Start---------')
/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got the user');
        //resolve({user : 'sandeep'});
        reject(new Error('Error...!!!'));
    }, 2000);
});

promise.then((user) => {
    console.log(user)
}).catch((err) => {
    console.log(err.message)
});
*/


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

loginUser("sandeep@yahoo.com", "12345")
    .then((user) => getUserVideo(user.userEmail))
    .then((video) => getUserVideoDetails(video[0]))
    .then((details) => console.log(details));



/*
//promise all example
const yt = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('getting data from youtube...!!!')
        resolve({video : [1, 2, 3, 4, 5]});
    }, 2000);
});

const fb = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('getting data from fb...!!!')
        resolve({userInfo : "name"});
    }, 5000);
});
Promise.all([yt, fb]).then(result => console.log(result));
*/
console.log('-------End---------')

