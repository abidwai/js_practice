const btnGetPosts = document.getElementById('getPosts');
const formSendPost = document.getElementById('sendPost');
const output = document.getElementById('output');

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
    fetch(POSTS_API_URL)
        .then(status)
        .then(json)
        .then(data)
        .catch(err => console.log(err))
}

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

const data = (posts) => {
    let result = `<h2>Posts</h2>`;
    posts.forEach((post) => {
        result += `<ul class="post">
               <li>ID: ${post.id}</li>
               <li>Title: ${post.title}</li>
               <li>Body: ${post.body}</li>
           </ul>`;
    });
    output.innerHTML = result;
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

/* remove post */
const removePost = (e) => {
    const element = e.target;
    if (element.parentNode.classList.contains('post')) {
        element.parentNode.remove();
    }
}
output.addEventListener('click', removePost, false)