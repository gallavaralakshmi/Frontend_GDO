async function getEmployeesOfAdmin(gdo_id) {
    console.log("inside getemployeesofadmin  function")
    console.log(gdo_id);
    console.log(typeof (gdo_id));
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method: "GET",
    };
    return fetch(`users/employeesundergdo/?gdo_id=${gdo_id}`, requestedOptions)
        .then((response) => response.json())
        .catch((error) => error)

}
export { getEmployeesOfAdmin };