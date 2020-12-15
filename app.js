window.addEventListener("load", initSite)
document.getElementById("saveBtn").addEventListener("click", saveHoroscope)
document.getElementById("deleteBtn").addEventListener("click", deleteHoroscope)
document.getElementById("updateBtn").addEventListener("click", updateHoroscope)

async function initSite() {
}


//_____________save-knapp -> saveHoroscope -> addHoroscope.php "POST"

async function saveHoroscope() {
    const dateToSave = document.getElementById("inputNumber").value
    const horoscopeText = document.getElementById("showHoroscope")

    if (!dateToSave.length) {
        console.log("Du måste välja ett datum...")
        horoscopeText.innerText = "Välj ett datum..."
    } else {
        const body = new FormData()
        body.set("horoscope", dateToSave)

        const serverResponse = await makeRequest("./servers/addHoroscope.php", "POST", body)

        if (serverResponse["Success"]) {
            viewHoroscope()
        } else {
            horoscopeText.innerText = serverResponse["Message"]
        }
    }


}
//_____________update-knapp -> updateHoroscope -> updateHoroscope.php "POST"

async function updateHoroscope() {
    const dateToSave = document.getElementById("inputNumber").value
    const horoscopeText = document.getElementById("showHoroscope")


    if (!dateToSave.length) {
        console.log("Du måste välja ett datum...")
        horoscopeText.innerText = "Välj ett nytt datum..."
        return
    }

    const body = new FormData()
    body.set("horoscope", dateToSave)

    const serverResponse = await makeRequest("./servers/updateHoroscope.php", "POST", body)


    if (serverResponse["Success"]) {
        viewHoroscope()
    } else {
        horoscopeText.innerText = serverResponse["Message"]
    }

}

//_____________delete-knapp -> deleteHoroscope -> deleteHoroscope.php "DELETE"


async function deleteHoroscope() {

    const serverResponse = await makeRequest("./servers/deleteHoroscope.php", "DELETE")

    const horoscopeText = document.getElementById("showHoroscope")
    horoscopeText.innerText = ""
    const inputDate = document.getElementById("inputNumber")
    inputDate.value = ""

}


// viewHoroscope.php -> viewHoroscope() -> "GET"

async function viewHoroscope() {
    const serverResponse = await makeRequest("./servers/viewHoroscope.php", "GET")
    const horoscopeText = document.getElementById("showHoroscope")
    const inputDate = document.getElementById("inputNumber")


    if (serverResponse["Success"]) {
        horoscopeText.innerText = serverResponse["Horoscope"]
        inputDate.value = serverResponse["DateOfBirth"]
    }
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






