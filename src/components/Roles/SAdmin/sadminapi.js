async function getAdmins() {
    console.log("inside getadmins  function")
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method: "GET",
    };
    return fetch(`users/admins`, requestedOptions)
        .then((response) => response.json())
        .catch((error) => error)
}
export { getAdmins };