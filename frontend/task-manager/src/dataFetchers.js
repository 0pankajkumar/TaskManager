import axios from 'axios';
let localFlaskServer = "http://127.0.0.1:5000"

export function getTasks(){
    axios.get(localFlaskServer + '/tasks')
        .then(function (response) {
            // handle success
            console.log(response);
            return JSON.parse(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        // .finally(function () {
        //     // always executed
        // });

}

