const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(value => value.json())
.then(users => {
    console.log(users)
    for (const user of users) {
        const userBlock = document.createElement('div');
        userBlock.classList.add('user')

        const userName = document.createElement('div');
        userName.classList.add('user-name');
        userName.innerText = `${user.id} ${user.name}`;

        userBlock.appendChild(userName);
        document.body.appendChild(userBlock);

        const linkBlock = document.createElement('a')
        linkBlock.classList.add('link')
        linkBlock.href = `user-details.html?data=${user.id}`;
        linkBlock.innerText = 'Click me';

        userBlock.appendChild(linkBlock);
        wrapper.appendChild(userBlock)
        document.body.appendChild(wrapper);
    }
})

