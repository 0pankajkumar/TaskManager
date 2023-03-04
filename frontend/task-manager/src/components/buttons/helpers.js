import axios from 'axios';
let localFlaskServer = "http://127.0.0.1:5000"

export const statusOptions = ["Pending", "InProgress", "InReview", "Complete"];


export function persistInBackend(taskDetails){
    axios.post(localFlaskServer + '/update', {
        id : taskDetails.id,
        update_field: "status",
        update_value: taskDetails.status
    })
        .then(function (response) {
            // handle success
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        // .finally(function () {
        //     // always executed
        // });

}


export function getAuditTrial(taskDetails){
    console.log("Fetching audittrials");
    axios.get(localFlaskServer + '/audittrial/' + taskDetails.id)
        .then(function (response) {
            // handle success
            console.log(response, "resp received");
            console.log(response.data, "resp returned back");
            console.log(typeof(response.data));
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        // .finally(function () {
        //     // always executed
        // });

}