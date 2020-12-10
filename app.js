window.addEventListener("load", initSite)
document.getElementById("saveBtn").addEventListener("click", saveHoroscope)
document.getElementById("deleteBtn").addEventListener("click", deleteHoroscope)
document.getElementById("updateBtn").addEventListener("click", updateHoroscope)

async function initSite() {
}


// Save-knapp -> saveHoroscope -> addHoroscope.php "POST"

async function saveHoroscope() {
    const dateToSave = document.getElementById("inputNumber").value
    const horoscopeText = document.getElementById("showHoroscope")

    if (!dateToSave.length) {
        horoscopeText.innerText = "Välj ett datum..."
        return
    }

    const body = new FormData()
    body.set("dayOfBirth", dateToSave)

    const serverResponse = await makeRequest("./servers/addHoroscope.php", "POST", body)

    if (serverResponse !== false) {
        horoscopeText.innerText = serverResponse
        console.log(serverResponse)
        const dateToSave = document.getElementById("inputNumber")
        dateToSave.value = ""

    } else {
        horoscopeText.innerText = "Ett datum är redan sparat..."
        console.log("Gick ej att spara...")

    }
}
// Update-knapp -> updateHoroscope -> updateHoroscope.php "POST"

async function updateHoroscope() {
    const dateToSave = document.getElementById("inputNumber").value
    const horoscopeText = document.getElementById("showHoroscope")

    if (!dateToSave.length) {
        horoscopeText.innerText = "Välj ett datum..."
        console.log("Ett datum behöver sparas...")
        return
    }

    const body = new FormData()
    body.set("dayOfBirth", dateToSave)

    const serverResponse = await makeRequest("./servers/updateHoroscope.php", "POST", body)

    if (serverResponse !== false) {
        horoscopeText.innerText = serverResponse
        console.log(serverResponse)

    } else {
        horoscopeText.innerText = "Spara ett nytt datum..."
        console.log("Gick ej att spara...")

    }
}

// Delete-knapp -> deleteHoroscope -> deleteHoroscope.php "DELETE"


async function deleteHoroscope() {
    const inputDate = document.getElementById("inputNumber")
    const serverResponse = await makeRequest("./servers/deleteHoroscope.php", "DELETE")

    if (inputDate) {
        const horoscopeText = document.getElementById("showHoroscope")
        horoscopeText.innerText = ""
        const inputDate = document.getElementById("inputNumber")
        inputDate.value = ""
        console.log(serverResponse)
    } else {
        console.log(serverResponse)
    }

}


// viewHoroscope.php -> viewHoroscope() - "GET"

async function viewHoroscope() {
    const serverResponse = await makeRequest("./servers/viewHoroscope.php", "GET")

    console.log(serverResponse)
}

//________________________________________________


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
