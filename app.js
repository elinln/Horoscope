window.addEventListener("load", () => {
    const inputNumber =  document.querySelector("#inputNumber")
    const showHoroscope = document.querySelector("#showHoroscope")

    document.querySelector("#saveBtn").addEventListener("click", () => {
        var formData = new FormData();

        formData.append("dayOfBirth", inputNumber.value);

        fetch("/addHoroscope.php", {method: "POST", body: formData})
        .then((res) => { 
            getHoroscope()
        })
    })
    document.querySelector("#deleteBtn").addEventListener("click", () => {
        inputNumber.value = ""
        fetch("/deleteHoroscope.php", {method: "DELETE"})

    })
    document.querySelector("#updateBtn").addEventListener("click", () => {
        fetch("/updateHoroscope.php", {method: "POST"})
        .then((res) => {
            getHoroscope()
        })
    })
})

function getHoroscope() {
    const showHoroscope = document.querySelector("#showHoroscope")
    fetch("/viewHoroscope.php")
        .then((res) => {
            res.text().then( (text) => {
                showHoroscope.textContent = text
            }) 
        })
}




