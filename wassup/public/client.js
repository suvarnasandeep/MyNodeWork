const socket =  io()

let userName;

let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
let feedbackArea = document.querySelector('.feedback')
do {
    userName = prompt('Please enter name : ')
} while(!userName)

textarea.addEventListener('keyup', (e) =>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value)        
    }
})

textarea.addEventListener('keypress', () => {
    socket.emit('typing', userName)
})

function sendMessage(mesg) {
    let msg = {
        user : userName,
        message : mesg.trim()
    }

    //append to chatbox
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    //send to server
    socket.emit('message', msg)
}

function appendMessage (msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
       <h4>${msg.user}</h4> 
       <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup

    messageArea.appendChild(mainDiv)
}

//recieve message
socket.on('message', (msg) => {
    //console.log(msg)
    feedbackArea.innerHTML = ""
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

//recieve feedback message
socket.on('typing', (msg) =>{
    feedbackArea.innerHTML = '<p><em>' + msg + ' is typing...</em></p>'
})

function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight

}