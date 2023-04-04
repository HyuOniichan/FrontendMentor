'use strict'

import data from './data.json' assert { type: 'json' }; 


const $ = document.querySelector.bind(document) 

let cmt = data.comments 


cmt = cmt.map(edit => {
    edit.isEditing = false; 
    edit.isReplying = false; 
    
    edit.replies = edit.replies.map(editrep => {
        editrep.isReplying = false; 
        return editrep; 
    })
   
    return edit; 
})



const box = $('.box') 


let isUser = false; 

const userId = 'user'; 


let cf = $('.confirm'); 
let cfNo = $('.confirmSelectNo'); 
let cfYes = $('.confirmSelectYes'); 


let needDel = null; 
cf.style.display = 'none'; 



render() 
function render() {
    box.innerText = '' 
    cmt.forEach((added) => {
        
        let main = document.createElement('div') 
        main.className = 'main'
        main.id = added.id
        box.appendChild(main) 

        let e = document.createElement('div') 
        e.className = 'comment'
        e.id = added.id
        main.appendChild(e) 
        

        //upvote + downvote button 
        let vote = document.createElement('div')
        vote.className = 'vote' 
        e.appendChild(vote) 

        let voteButt  = document.createElement('div') 
        voteButt.className = 'voteButt'
        vote.appendChild(voteButt) 

        let voteButtUp = document.createElement('img') 
        voteButtUp.src = './images/icon-plus.svg' 
        voteButtUp.alt = 'plus' 
        voteButtUp.className = 'voteButtUp'
        voteButtUp.onclick = () => {
            added.score += 1 
            rate.innerText = added.score 
        }
        voteButt.appendChild(voteButtUp)
        
        let rate = document.createElement('div') 
        rate.className = 'rate'
        rate.innerText = added.score 
        voteButt.appendChild(rate)
        
        let voteButtDown = document.createElement('img') 
        voteButtDown.src = './images/icon-minus.svg' 
        voteButtDown.alt = 'minus' 
        voteButtDown.className = 'voteButtDown'
        voteButtDown.onclick = () => {
            added.score -= 1 
            rate.innerText = added.score 
        }
        voteButt.appendChild(voteButtDown)

        //main part 
        let info = document.createElement('div') 
        info.className = 'info' 
        e.appendChild(info) 

        //header
        let title = document.createElement('div') 
        title.className = 'title'
        info.appendChild(title) 

        //creator (avatar + name + time )
        let creator = document.createElement('div') 
        creator.className = 'creator'
        title.appendChild(creator) 

        let creatorAvatar = document.createElement('img') 
        creatorAvatar.src = added.user.image.png 
        creatorAvatar.alt = 'avatar'
        creatorAvatar.className = 'creatorAvatar'
        creator.appendChild(creatorAvatar) 

        let creatorName = document.createElement('h1') 
        creatorName.innerText = added.user.username 
        creatorName.className = 'creatorName' 
        creator.appendChild(creatorName) 
        if (added.user.username == data.currentUser.username) isUser = true; 

        if (isUser) {
            let creatorYou = document.createElement('div') 
            creatorYou.innerText = 'you' 
            creatorYou.className = 'creatorYou' 
            creator.appendChild(creatorYou) 
        }

        let creatorTime = document.createElement('p') 
        creatorTime.innerText = added.createdAt 
        creatorTime.className = 'creatorTime' 
        creator.appendChild(creatorTime) 

        //reply / delete + edit button 
        let change = document.createElement('div') 
        change.className = 'change'
        title.appendChild(change) 
        
        if (isUser) {
            let del = document.createElement('div') 
            del.className = 'del' 
            del.id = added.id  
            del.onclick = deleteComment; 
            change.appendChild(del) 
            let delIcon = document.createElement('img') 
            delIcon.src = './images/icon-delete.svg' 
            delIcon.alt = 'delete' 
            delIcon.className = 'delIcon'
            delIcon.id = added.id 
            del.appendChild(delIcon) 
            let delText = document.createElement('p') 
            delText.className = 'delText'
            delText.innerText = 'Delete' 
            delText.id = added.id 
            del.appendChild(delText) 
            
            let edit = document.createElement('div') 
            edit.className = 'edit' 
            edit.id = added.id 
            edit.onclick = editComment; 
            change.appendChild(edit) 
            let editIcon = document.createElement('img') 
            editIcon.src = './images/icon-edit.svg' 
            editIcon.alt = 'edit' 
            editIcon.className = 'editIcon'
            editIcon.id = added.id 
            edit.appendChild(editIcon) 
            let editText = document.createElement('p') 
            editText.className = 'editText'
            editText.innerText = 'Edit' 
            editText.id = added.id 
            edit.appendChild(editText) 
        } else {
            let reply = document.createElement('div')
            reply.className = 'reply' 
            reply.id = added.id 
            reply.onclick = replyComment
            change.appendChild(reply) 

            let replyIcon = document.createElement('img') 
            replyIcon.src = './images/icon-reply.svg' 
            replyIcon.className = 'replyIcon'
            replyIcon.id = added.id 
            reply.appendChild(replyIcon)

            let replyText = document.createElement('div') 
            replyText.innerText = 'Reply'
            replyText.className = 'replyText' 
            replyText.id = added.id 
            reply.appendChild(replyText)
        }

        //text 
        let text = document.createElement('div') 
        text.className = 'text' 
        text.innerText = added.content
        info.appendChild(text) 

        let textEditing = document.createElement('textarea')
        textEditing.className = 'textEditing' 
        textEditing.innerText = added.content
        info.appendChild(textEditing) 

        //update button if editing 
        let update = document.createElement('div') 
        update.className = 'update' 
        update.id = added.id 
        info.appendChild(update) 

        let updateButt = document.createElement('button') 
        updateButt.className = 'userSendButt' 
        updateButt.innerText = 'UPDATE' 
        updateButt.id = added.id 
        updateButt.onclick = editComment 
        update.appendChild(updateButt) 

        //check if a comment is edited 
        if (added.isEditing) {
            text.style = 'display: none; '
            textEditing.style = ''
            update.style = ''
        } else {
            textEditing.style = 'display: none; '
            text.style = ''
            update.style = 'display: none; '
        }

        //reply mes 
        if (added.isReplying) {
            let replyMes = document.createElement('div') 

            let replyMesBox = document.createElement('form') 
            replyMesBox.className = 'comment'
            replyMes.appendChild(replyMesBox) 

            let userAvatar = document.createElement('div') 
            userAvatar.className = 'userAvatar' 
            replyMesBox.appendChild(userAvatar) 

            let userAvatarImage = document.createElement('img') 
            userAvatarImage.src = data.currentUser.image.png 
            userAvatarImage.alt = 'user_avatar' 
            userAvatarImage.className = 'userAvatarImage' 
            userAvatar.appendChild(userAvatarImage) 

            let userInput = document.createElement('div') 
            userInput.className = 'userInput' 
            replyMesBox.appendChild(userInput) 

            let userInputEnter = document.createElement('textarea') 
            userInputEnter.placeholder = 'Add a comment... ' 
            userInputEnter.className = 'userInputEnter' 
            userInput.appendChild(userInputEnter) 

            let userReply = document.createElement('div') 
            userReply.className = 'userSend' 
            replyMesBox.appendChild(userReply) 

            let userReplyButt = document.createElement('button') 
            userReplyButt.innerText = 'REPLY' 
            userReplyButt.id = added.id 
            userReplyButt.type = 'button'
            userReplyButt.onclick = addComment 
            userReplyButt.className = 'userSendButt' 
            userReply.appendChild(userReplyButt) 

            main.appendChild(replyMes)
        }


        //including replies 
        let repliesBox = document.createElement('div') 

        if (added.replies.length) {
            repliesBox.innerText = ''

            let lineReply = document.createElement('div') 
            let ind = 0; 
            if (added.isReplying) ind = 1;
            lineReply.style = `position: absolute; top: ${160 + 115 * ind}px; height: ${added.replies.length * 150}px; width: 2px; background-color: hsl(223, 19%, 93%); `
            e.appendChild(lineReply) 

            added.replies.forEach(addedReply => {

                let main = document.createElement('div') 
                main.className = 'main'
                main.id = addedReply.id
                box.appendChild(main) 

                let e = document.createElement('div') 
                e.className = 'comment'
                e.style = 'margin-left: 70px; width: 510px; '
                e.id = addedReply.id
                main.appendChild(e) 
                
                //upvote + downvote button 
                let vote = document.createElement('div')
                vote.className = 'vote' 
                e.appendChild(vote) 

                let voteButt  = document.createElement('div') 
                voteButt.className = 'voteButt'
                vote.appendChild(voteButt) 

                let voteButtUp = document.createElement('img') 
                voteButtUp.src = './images/icon-plus.svg' 
                voteButtUp.alt = 'plus' 
                voteButtUp.className = 'voteButtUp'
                voteButtUp.onclick = () => {
                    addedReply.score += 1 
                    rate.innerText = addedReply.score 
                }
                voteButt.appendChild(voteButtUp)
                
                let rate = document.createElement('div') 
                rate.className = 'rate'
                rate.innerText = addedReply.score 
                voteButt.appendChild(rate)
                
                let voteButtDown = document.createElement('img') 
                voteButtDown.src = './images/icon-minus.svg' 
                voteButtDown.alt = 'minus' 
                voteButtDown.className = 'voteButtDown'
                voteButtDown.onclick = () => {
                    addedReply.score -= 1 
                    rate.innerText = addedReply.score 
                }
                voteButt.appendChild(voteButtDown)

                //main part 
                let info = document.createElement('div') 
                info.className = 'info' 
                e.appendChild(info) 

                //header
                let title = document.createElement('div') 
                title.className = 'title'
                info.appendChild(title) 

                //creator (avatar + name + time )
                let creator = document.createElement('div') 
                creator.className = 'creator'
                title.appendChild(creator) 

                let creatorAvatar = document.createElement('img') 
                creatorAvatar.src = addedReply.user.image.png 
                creatorAvatar.alt = 'avatar'
                creatorAvatar.className = 'creatorAvatar'
                creator.appendChild(creatorAvatar) 

                let creatorName = document.createElement('h1') 
                creatorName.innerText = addedReply.user.username 
                creatorName.className = 'creatorName' 
                creator.appendChild(creatorName) 
                if (addedReply.user.username == data.currentUser.username) isUser = true; 
                
                if (isUser) {
                    let creatorYou = document.createElement('div') 
                    creatorYou.innerText = 'you' 
                    creatorYou.className = 'creatorYou' 
                    creator.appendChild(creatorYou) 
                }
                let creatorTime = document.createElement('p') 
                creatorTime.innerText = addedReply.createdAt 
                creatorTime.className = 'creatorTime' 
                creator.appendChild(creatorTime) 

                //reply / delete + edit button 
                let change = document.createElement('div') 
                change.className = 'change'
                title.appendChild(change) 

                if (isUser) {
                    let del = document.createElement('div') 
                    del.className = 'del' 
                    del.id = addedReply.id; 
                    del.onclick = deleteComment; 
                    change.appendChild(del) 
                    let delIcon = document.createElement('img') 
                    delIcon.src = './images/icon-delete.svg' 
                    delIcon.alt = 'delete' 
                    delIcon.className = 'delIcon'
                    delIcon.id = addedReply.id; 
                    del.appendChild(delIcon) 
                    let delText = document.createElement('p') 
                    delText.className = 'delText'
                    delText.innerText = 'Delete' 
                    delText.id = addedReply.id; 
                    del.appendChild(delText) 
                    
                    let edit = document.createElement('div') 
                    edit.className = 'edit' 
                    edit.id = addedReply.id 
                    edit.onclick = editComment; 
                    change.appendChild(edit) 
                    let editIcon = document.createElement('img') 
                    editIcon.src = './images/icon-edit.svg' 
                    editIcon.alt = 'edit' 
                    editIcon.className = 'editIcon'
                    editIcon.id = addedReply.id 
                    edit.appendChild(editIcon) 
                    let editText = document.createElement('p') 
                    editText.className = 'editText'
                    editText.innerText = 'Edit' 
                    editText.id = addedReply.id 
                    edit.appendChild(editText) 
                    
                } else {
                    let reply = document.createElement('div')
                    reply.className = 'reply' 
                    reply.id = addedReply.id 
                    reply.onclick = replyComment 
                    change.appendChild(reply) 

                    let replyIcon = document.createElement('img') 
                    replyIcon.src = './images/icon-reply.svg' 
                    replyIcon.className = 'replyIcon'
                    replyIcon.id = addedReply.id 
                    reply.appendChild(replyIcon)

                    let replyText = document.createElement('div') 
                    replyText.innerText = 'Reply'
                    replyText.className = 'replyText' 
                    replyText.id = addedReply.id 
                    reply.appendChild(replyText)
                }

                //text 
                let textBox = document.createElement('div') 
                textBox.className = 'textBox' 
                info.appendChild(textBox) 

                let textReply = document.createElement('span') 
                textReply.innerText = '@' + addedReply.replyingTo + ' ' 
                textReply.style = 'font-size: 14px; font-weight: 500; color: hsl(228, 45%, 44%); '
                textBox.appendChild(textReply) 

                let text = document.createElement('span') 
                text.className = 'text' 
                text.innerText = addedReply.content
                textBox.appendChild(text) 
                
                let textEditing = document.createElement('textarea')
                textEditing.className = 'textEditing' 
                textEditing.innerText = addedReply.content
                info.appendChild(textEditing) 

                //update button if editing 
                let update = document.createElement('div') 
                update.className = 'update' 
                update.id = addedReply.id 
                info.appendChild(update) 

                let updateButt = document.createElement('button') 
                updateButt.className = 'userSendButt' 
                updateButt.innerText = 'UPDATE' 
                updateButt.id = addedReply.id 
                updateButt.onclick = editComment 
                update.appendChild(updateButt) 

                //check if a comment is edited 
                if (addedReply.isEditing) {
                    text.style = 'display: none; '
                    textEditing.style = ''
                    update.style = ''
                } else {
                    textEditing.style = 'display: none; '
                    text.style = ''
                    update.style = 'display: none; '
                }

                if (addedReply.isReplying) { 
                    let replyMes = document.createElement('div') 
        
                    let replyMesBox = document.createElement('form') 
                    replyMesBox.className = 'comment'
                    replyMesBox.style = 'margin-left: 70px; width: 510px; '
                    replyMes.appendChild(replyMesBox) 
        
                    let userAvatar = document.createElement('div') 
                    userAvatar.className = 'userAvatar' 
                    replyMesBox.appendChild(userAvatar) 
        
                    let userAvatarImage = document.createElement('img') 
                    userAvatarImage.src = data.currentUser.image.png 
                    userAvatarImage.alt = 'user_avatar' 
                    userAvatarImage.className = 'userAvatarImage' 
                    userAvatar.appendChild(userAvatarImage) 
        
                    let userInput = document.createElement('div') 
                    userInput.className = 'userInput' 
                    replyMesBox.appendChild(userInput) 
        
                    let userInputEnter = document.createElement('textarea') 
                    userInputEnter.placeholder = 'Add a comment... ' 
                    userInputEnter.className = 'userInputEnter' 
                    userInput.appendChild(userInputEnter) 
        
                    let userReply = document.createElement('div') 
                    userReply.className = 'userSend' 
                    replyMesBox.appendChild(userReply) 
        
                    let userReplyButt = document.createElement('button') 
                    userReplyButt.innerText = 'REPLY' 
                    userReplyButt.id = addedReply.id 
                    userReplyButt.type = 'button'
                    userReplyButt.onclick = addComment 
                    userReplyButt.className = 'userSendButt' 
                    userReply.appendChild(userReplyButt) 
        
                    main.appendChild(replyMes)
                }

            })
        }

        isUser = false; 

    })

    curUser() 

}




function curUser() {
    let e = document.createElement('form') 
    e.className = 'comment'
    e.id = userId; 
    box.appendChild(e) 

    let userAvatar = document.createElement('div') 
    userAvatar.className = 'userAvatar' 
    e.appendChild(userAvatar) 

    let userAvatarImage = document.createElement('img') 
    userAvatarImage.src = data.currentUser.image.png 
    userAvatarImage.alt = 'user_avatar' 
    userAvatarImage.className = 'userAvatarImage' 
    userAvatar.appendChild(userAvatarImage) 

    let userInput = document.createElement('div') 
    userInput.className = 'userInput' 
    e.appendChild(userInput) 

    let userInputEnter = document.createElement('textarea') 
    userInputEnter.placeholder = 'Add a comment... ' 
    userInputEnter.className = 'userInputEnter' 
    userInput.appendChild(userInputEnter) 

    let userSend = document.createElement('div') 
    userSend.className = 'userSend' 
    e.appendChild(userSend) 

    let userSendButt = document.createElement('button') 
    userSendButt.innerText = 'SEND' 
    userSendButt.type = 'button'
    userSendButt.onclick = addComment 
    userSendButt.className = 'userSendButt' 
    userSendButt.id = userId 
    userSend.appendChild(userSendButt) 
    
}




function addComment(event) {
    const newCmt = event.target; 
    const newId = new Date().getTime(); 

    let newReply = {
        id: newId, 
        content: $(`#${userId}`).querySelector('.userInputEnter').value, 
        createdAt: 'just now',
        isEditing: false, 
        isReplying: false, 
        score: 0,
        user: {
          image: { 
            png: data.currentUser.image.png,
            webp: data.currentUser.image.webp, 
          },
          username: data.currentUser.username 
        },
    }

    if (newCmt.id == userId) {
        newReply.replies = []
        cmt.push(newReply)
        render(); 
        return; 
    }
    
    
    let replyTo; 

    cmt.forEach(find => {
        let repFound = find.replies.find(findrep => {
            if (findrep.id == newCmt.id) return findrep; 
        })
        if (repFound) replyTo = repFound.id; 
        if (find.id == newCmt.id) replyTo = find.id; 
    })
    
    let repliedText = document.getElementById(replyTo).querySelector('.userInputEnter').value; 


    cmt.forEach(f => {
        if (f.id == replyTo) {
            newReply.replyingTo = f.user.username; 
            newReply.content = repliedText; 
            f.isReplying = false; 
            f.replies.push(newReply); 
        }
        if (f.replies.length) {
            f.replies.forEach(ff => {
                if (ff.id == replyTo) {
                    newReply.replyingTo = ff.user.username; 
                    newReply.content = repliedText; 
                    ff.isReplying = false; 
                    f.replies.push(newReply); 
                }
            })
        }
    })


    render() 
}



function deleteComment(event) {
    cf.style.display = ''; 
    needDel = event.target; 
} 

cfNo.onclick = () => cf.style.display = 'none'; 

cfYes.onclick = () => {
    cmt = cmt.filter(rmv => {
        if (rmv.replies.length) {
            cmt[cmt.indexOf(rmv)].replies = cmt[cmt.indexOf(rmv)].replies.filter(rmvrep => {
                if (rmvrep.id == needDel.id) return false; 
                    else return true; 
            })
        }
        if (rmv.id == needDel.id) return false;
            else return true; 
    })
    cf.style.display = 'none'; 
    render(); 

}



function editComment(event) {
    let et = event.target; 
    cmt.forEach(put => {
        if (put.replies.length) {
            cmt[cmt.indexOf(put)].replies.forEach(putrep => {
                if (et.id == putrep.id) {
                    if (putrep.isEditing && et.className == 'userSendButt') {
                        let editing = document.getElementById(putrep.id); 
                        let editedText = editing.querySelector('.textEditing'); 
                        putrep.content = editedText.value; 
                    }
                    putrep.isEditing = !putrep.isEditing; 
                }
            })
        }
        if (et.id == put.id) {
            if (put.isEditing && et.className == 'userSendButt') {
                let editing = document.getElementById(put.id); 
                let editedText = editing.querySelector('.textEditing'); 
                put.content = editedText.value; 
            }
            put.isEditing = !put.isEditing; 
        }
    })
    render(); 
}




function replyComment(event) {
    let et = event.target 
    
    cmt.forEach(put => {
        if (put.replies.length) {
            cmt[cmt.indexOf(put)].replies.forEach(putrep => {
                if (et.id == putrep.id) putrep.isReplying = !putrep.isReplying; 
            })
        }
        if (et.id == put.id) put.isReplying = !put.isReplying; 
    })

    render() 

}




