// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST
function getTodos() {
    // method默认是get
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit: 5
    //     }
    // })
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err));

    axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _limit: 5 }
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// POST REQUEST
function addTodo() {
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            userId: 1,
            title: "clarence sends a post request",
            completed: true
        }
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
    axios({
        method: 'put',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        data: {
            title: "Updated Todo",
            completed: true
        }
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err));

    // axios({
    //     method: 'patch',
    //     url: 'https://jsonplaceholder.typicode.com/todos/1',
    //     data: {
    //         title: "Updated Todo",
    //         completed: true
    //     }
    // })
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err));   
}

// DELETE REQUEST
function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                _limit: 3
            }
        }),
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: 5
            }
        })
    ])
        .then(axios.spread((todos, posts) => {
            console.log(todos.data);
            console.log(posts.data);
            showOutput(todos);
        }))
        .catch(err => console.error(err));
}

// CUSTOM HEADERS/AXIOS INSTANCES
function customHeaders() {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: 'sometoken'
    //     }
    // };
    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //     title: 'New Todo',
    //     completed: true
    // }, config)
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err));

    const instance = axios.create();
    instance.interceptors.request.use(axios.interceptors.request.handlers[0].fulfilled);
    instance.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            userId: 1,
            title: "clarence sends a post request",
            completed: true
        }
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: "Hello World"
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })
    };
    axios(options).then(res => showOutput(res)).catch(err => console.error(err));
}

// ERROR HANDLING
function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todoss', {
        // validateStatus: function(status) {
        //     // default status [200, 300)
        //     // reject only if status is greater or equal to 500
        //     return status < 500;
        // }
    })
        .then(res => showOutput(res))
        .catch(err => {
            if (err.response) {
                // server responded with a status other than [200, 300)
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                // request was made but no response
                console.log(err.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        });
}

// CANCEL TOKEN
function cancelToken() {
    const controller = new AbortController();
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
        signal: controller.signal
    })
        .then(res => showOutput(res))
        .catch(err => {
            if (axios.isCancel(err)) {
                console.log('Request canceled', err.message);
            } else {
                // handle error
            }
        });
    controller.abort();
}

// INTERCEPTING REQUESTS & RESPONSES

function format(dataString) {
    var time = new Date(dataString);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)
}

axios.interceptors.request.use(function (config) {
    currentTime = format(new Date().getTime());
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${currentTime}`);
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card mb-4">
      <div class="card-header">
        Status Code
      </div>
      <div class="card-body">
        <pre>Status: ${res.status}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
