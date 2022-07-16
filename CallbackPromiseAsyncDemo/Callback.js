console.log('Start')

function loginUser(email, password, callback){
    setTimeout((() =>{
        console.log('inside timeout()...!!!')
        callback({userEmail : email});
    }), 2000);
}

function getUserVideo(email, callback){
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 1000);
}

function getUserVideoDetails(video, callback){
    setTimeout(() => {
        callback('Title of the video is ');
    }, 3000);

}

const user = loginUser('sandeep@gmail.com', 'zzzxxx', (user) =>{
    console.log(user)
    getUserVideo(user.userEmail, (video) => {
        console.log(video);
        getUserVideoDetails(video[0], (title) => {
            console.log(title + video[0]);
        });
    })
});


console.log('End')