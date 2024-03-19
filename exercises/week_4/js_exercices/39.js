// JavaScript – Multiple inputs copy
// The following exercise contains the following subjects:
// ● events
// Instructions
// Many times an application needs to verify the account by
// sending a verification code by text message.
// Let's create functionality that enables the user to paste the
// verification code to the input fields.
// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once all
// inputs all populated.
// Things to think about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.
// Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.
// Google “clipboardData” to find out how to get the value of
// a paste event.

const authForm = document.createElement("form")
authForm.className = "verification_form"

const manualSubmission = document.createElement("input")
manualSubmission.className = "manual_input"
manualSubmission.setAttribute("maxlength", 6)
authForm.appendChild(manualSubmission)

const pasteSubmission = document.createElement("input")
pasteSubmission.className = "paste_input"
pasteSubmission.setAttribute("maxlength", 6)
authForm.appendChild(pasteSubmission)

manualSubmission.addEventListener("input", (event) => {
    const value = event.target.value
    if (value.length == 6) {
        pasteSubmission.focus()
        checkFormCompletion()
    }
}
) 

pasteSubmission.addEventListener("paste", (event) => {
    event.preventDefault()
    const getText = (event.clipboardData || window.clipboardData).getData("text")
    pasteSubmission.value = getText.slice(0, 6)
    checkFormCompletion()
})

function checkFormCompletion() {
    const manualValue = manualSubmission.value;
    const pasteValue = pasteSubmission.value;
    if (manualValue.length === 6 && pasteValue.length === 6 && manualValue === pasteValue) {
        authForm.submit();
    }
}

document.querySelector('body').appendChild(authForm)
console.log(authForm)




