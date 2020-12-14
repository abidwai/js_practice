const btnGetPosts = document.getElementById('getPosts');
const formSendPost = document.getElementById('sendPost');
const result = document.getElementById('output');

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

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
    let output = `<h2>Posts</h2>`;
    data.forEach((post) => {
        output += `<ul>
            <li>ID: ${post.id}</li>
            <li>Title: ${post.title}</li>
            <li>Body: ${post.body}</li>
        </ul>`;
    });
    result.innerHTML = output;

    /** print upto first 10 records */
    /* for (let i = 0; i < data.length; i++) {
        if (data[i].id === 11) {
            break;
        }
        output += `<ul>
            <li>ID: ${data[i].id}</li>
            <li>Title: ${data[i].title}</li>
            <li>Body: ${data[i].body}</li>
        </ul>`;
    } */
}

const getPosts = () => {
    fetch(POSTS_API_URL)
        .then(status)
        .then(json)
        .then(data)
        .catch(err => console.log(err))
}

/** send post */
const sendPost = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const post = {
        title: title,
        body: body
    }

    fetch(POSTS_API_URL, {
        method: 'POST', // required
        headers: {
            'Accept': 'application/json, text/plain, */*', // required
            'content-type': 'application/json' // required
        },
        body: JSON.stringify(post) // required
    })
        .then(status)
        .then(json)
        .then(data => console.log(data))
}

btnGetPosts.addEventListener('click', getPosts, false);
formSendPost.addEventListener('submit', sendPost, false);
