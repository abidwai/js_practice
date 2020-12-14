/* const posts = [
    {
        id: 1,
        'title': 'first',
        'body': ' first post'
    },
    {
        id: 2,
        'title': 'second',
        'body': 'second post'
    }
];

const getPosts = () => {
    let output = '';
    posts.forEach(post => {
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
}

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        posts.push(post);
        const error = false;
        if (!error) {
            resolve();
        } else {
            reject('something went wrong!')
        }
    })
}

createPost({ id: 3, 'title': 'third post', 'body': 'third post' })
    .then(getPosts)
    .catch(err => console.log(err)); */

const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.status))
    }
}

const json = (response) => {
    return response.json();
}

const data = (data) => {
    console.table(data[0]);
}

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(status)
    .then(json)
    .then(data)
    .catch(err => console.log(err))

