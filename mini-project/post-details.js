let url = new URL(location.href);
let json = url.searchParams.get('info');
let post = JSON.parse(json);
let divAllInfoComment = document.createElement('divAllInfoComment');
divAllInfoComment.classList.add('divAllInfoComment')
let divUserId = document.createElement('h3');
divUserId.classList.add('divUserIdTitle');
divUserId.innerText = `UserId: ${post.userId}`
let divId = document.createElement('h3');
divId.classList.add('divIdTitle');
divId.innerText = `ID: ${post.id}`;
let divTitle = document.createElement('h3');
divTitle.classList.add('divTitle');
divTitle.innerText = `Title: ${post.title}`;
let divBody = document.createElement('h3');
divBody.classList.add('divBodyTitle');
divBody.innerText = `Body: ${post.body}`;

divAllInfoComment.append(divUserId,divId,divTitle,divBody);
document.body.append(divAllInfoComment);

let divBr = document.createElement('div');
divBr.classList.add('divBr');
divBr.innerText = `Comments`;
document.body.appendChild(divBr);

let urlComment = new URL('https://jsonplaceholder.typicode.com/comments');
let divAllComments = document.createElement('div');
divAllComments.classList.add('divAllComments')

fetch(urlComment)
    .then(value => value.json())
    .then(comments => {
        let jsonPostId = JSON.parse(post.id);
        for (const comment of comments) {
            if (jsonPostId === comment.postId){
                let divComment = document.createElement('div');
                divComment.classList.add('divCommentStyle')
                let h3 = document.createElement('h4');
                h3.innerText = `NAME: ${comment.name} 
                
                POST ID: ${comment.postId}
                
                ID: ${comment.id}
                
                BODY: ${comment.body}
                
                EMAIL: ${comment.email}`;


                divComment.appendChild(h3);
                divAllComments.appendChild(divComment);
                document.body.appendChild(divAllComments);
            }
        }
    })

