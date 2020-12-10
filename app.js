window.addEventListener("load", initSite)
document.getElementById("saveBtn").addEventListener("click", saveHoroscope)
document.getElementById("deleteBtn"),addEventListener("click", deleteHoroscope)
document.getElementById("updateBtn").addEventListener("click", getHoroscope)

function initSite() {

}

async function saveHoroscope() {
    console.log("save horoscope")
    const collectedHoroscope = await makeRequest("./servers/viewHoroscope.php", "GET")
    console.log(collectedHoroscope)
}


async function getHoroscope() {
    console.log("get horoscope")
    const collectedHoroscope = await makeRequest("./servers/addHoroscope.php", "POST")
    console.log(collectedHoroscope)
}


async function deleteHoroscope() {
    console.log("delete horoscope")
    const collectedHoroscope = await makeRequest("./servers/deleteHoroscope.php", "POST")
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

/* () => {
    const inputNumber = document.querySelector("#inputNumber")
    const showHoroscope = document.querySelector("#showHoroscope")

    document.querySelector("#saveBtn").addEventListener("click", () => {
        var formData = new FormData();

        formData.append("dayOfBirth", inputNumber.value);

        fetch("/addHoroscope.php", { method: "POST", body: formData })
            .then((res) => {
                showHoroscope()
            })
    })
    document.querySelector("#deleteBtn").addEventListener("click", () => {
        inputNumber.value = ""
        fetch("/deleteHoroscope.php", { method: "DELETE" })

    })
    document.querySelector("#updateBtn").addEventListener("click", () => {
        fetch("/updateHoroscope.php", { method: "POST" })
            .then((res) => {
                showHoroscope()
            })
    })
    document.querySelector("#showHoroscope")
        fetch("/viewHoroscope.php")
            .then((res) => {
                res.text().then((text) => {
                    showHoroscope.textContent = text
                })
            }) 
    
}) */




