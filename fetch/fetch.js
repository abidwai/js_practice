/** HTML elements */
const btnGetAllPosts = document.getElementById('btnGetAllPosts');
const btnGetSinglePost = document.getElementById("btnGetSinglePost");
const formSendPost = document.getElementById('formSendPost');
const output = document.getElementById('output');
const inputPostId = document.getElementById("inputPostId");

/** API URL */
const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.status))
    }
}

const json = (response) => {
    //console.log('response.json', response.json());
    // return promise with result
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


/** get the all post */
const getAllPosts = () => {
    fetch(ENDPOINT)
        .then(status)
        .then(json)
        .then(data)
        .catch(err => output.innerHTML = err.message)
}

/** get the desired post */
const getAPost = () => {
    const id = inputPostId.value;
    fetch(`${ENDPOINT}/${id}`)
        .then(status)
        .then(json)
        .then(post => {
            let result = `
             <ul class="post">
                <li>${post.id}</li>
                <li>${post.title}</li>
                <li>${post.body}</li>
             </ul>
            `;

            output.innerHTML = result;
        }, err => output.innerHTML = err)
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

    const params = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*', // required
            'content-type': 'application/json' // required
        },
        body: JSON.stringify(post) // required
    }

    fetch(ENDPOINT, params)
        .then(status)
        .then(json)
        .then(data => console.log(data))
}

/** remove post */
const removePost = (e) => {
    const element = e.target;
    if (element.parentNode.classList.contains('post')) {
        element.parentNode.remove();
    }
}

/** event registrations */
btnGetAllPosts.addEventListener('click', getAllPosts, false);
btnGetSinglePost.addEventListener("click", getAPost, false);
formSendPost.addEventListener('submit', sendPost, false);
output.addEventListener('click', removePost, false)