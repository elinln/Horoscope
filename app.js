window.addEventListener("load", initSite)
document.getElementById("saveBtn").addEventListener("click", saveHoroscope)
document.getElementById("deleteBtn"),addEventListener("click", deleteHoroscope)
document.getElementById("updateBtn").addEventListener("click", getHoroscope)

function initSite() {

}

function deleteHoroscope() {

}

async function getHoroscope() {
    console.log("hejsan")
    const collectedHoroscope = await makeRequest("./servers/viewHoroscope.php", "POST")
    console.log(collectedHoroscope)
}

async function saveHoroscope() {
    const collectedHoroscope = await makeRequest("./servers/viewHoroscope.php", "GET")
    console.log(collectedHoroscope)
}


async function makeRequest(path, method, body) {
    try {
        const response = await fetch(path, {
            method, 
            body
        })
        console.log(response)
        return response.json()
    } catch (err) {
        console.error(err)
    }
}






