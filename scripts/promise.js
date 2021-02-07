const posts = [
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

const getPosts = (msg) => {
    console.log(msg)
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
            resolve("settled message");
        } else {
            reject('something went wrong!')
        }
    })
}

createPost({ id: 3, 'title': 'third post', 'body': 'third post' })
    .then((msg) => getPosts(msg))
    .catch(err => console.log(err));


