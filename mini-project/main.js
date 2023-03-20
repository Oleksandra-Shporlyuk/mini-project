let url = new URL('https://jsonplaceholder.typicode.com/users');
let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
fetch(url)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div')
            div.classList.add('divUser');
            let a = document.createElement('a');
            a.classList.add('aStyle');
            a.innerText = `${user.name}, ID: ${user.id}`
            a.href = 'details-user.html?data='+ JSON.stringify(user);
            div.appendChild(a);
            mainDiv.appendChild(div);
            document.body.appendChild(mainDiv);
        }
    });
