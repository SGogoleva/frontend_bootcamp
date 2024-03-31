function isValidHexColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
}

const colorInput = document.getElementById("colorInput")
const btn = document.getElementById("submitBtn")
const forma = document.getElementById("submissionForm")

forma.addEventListener("click", (event) => {
    event.preventDefault()
    if (isValidHexColor(colorInput.value)) {
        document.getElementById("container").style.backgroundColor = colorInput.value
    }
    else {
        window.alert("Invalid hex color format (e.g., #FFFFFF)")
    }
})

