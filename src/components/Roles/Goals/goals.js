async function getGoals(id, month) {
    console.log("inside getgoals  function")
    console.log(`id=${id} and month=${month}`);
    console.log(id);
    console.log(typeof (id));
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method: "GET",
    };
    return fetch(`usergoals/userid/month/?user_id=${id}&month=${month}`, requestedOptions)
        .then((response) => response.json())
        .catch((error) => error)
}
/*
async function getGoalsofEMployee(id){
    console.log("inside getgoals  function")
    console.log(id);
    console.log(typeof(id));
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions={
        headers:{
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method:"GET",
    };
    return fetch(`usergoals/userid/?user_id=${id}`,requestedOptions)
    .then((response)=>response.json())
    .catch((error)=>error)
}
*/
async function deleteGoal(id) {
    console.log("inside delete goal  function")
    console.log(id);
    console.log(typeof (id));
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method: "DELETE",
    };
    return fetch(`usergoals/delete/?id=${id}`, requestedOptions)
        .then((response) => response.json())
        .catch((error) => error)
}
export { getGoals, deleteGoal };