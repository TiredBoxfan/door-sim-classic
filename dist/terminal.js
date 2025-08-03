const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const inputDiv = document.getElementById("input-line");
const inputField = document.getElementById("input");
const bottomTolerance = 10;
export let inputEnabled = false; // If inputs are currently being accepted.
/**
 * Sets the text color of the on screen terminal.
 * @param colorCode - The color code to use.
 */
export function setTextColor(colorCode) {
    console.log(colorCode);
    document.documentElement.style.setProperty("--main-font-color", colorCode);
}
/**
 * Disables the input line element.
 */
export function disableInput() {
    inputEnabled = false;
    if (inputDiv)
        inputDiv.style.display = "none";
}
/**
 * Enables the input line element.
 */
export function enableInput() {
    inputEnabled = true;
    const atBottom = scrollAtBottom();
    if (inputDiv)
        inputDiv.style.display = "flex";
    if (inputField) {
        inputField.value = ""; // clear lingering text.
        inputField.focus({ preventScroll: true });
    }
    if (atBottom)
        scrollToBottom();
}
/**
 * Helper function to determine if the terminal is scrolled to the bottom.
 */
export function scrollAtBottom() {
    if (!terminal)
        return false;
    return terminal.scrollHeight - terminal.scrollTop - terminal.clientHeight <= bottomTolerance;
}
/**
 * Helper function to scroll to bottom of the terminal.
 */
export function scrollToBottom() {
    if (terminal)
        terminal.scrollTop = terminal.scrollHeight;
}
/**
 * Clears the terminal output.
 */
export function clear() {
    if (output)
        output.innerHTML = "";
}
/**
 * Writes the provided message with an optional typewriter mode that respects
 * HTML tags. Backticks can be used for pauses and thus will not be displayed.
 * @param msg - Message to display.
 * @param typewrite - If typewriter mode should be enabled.
 * @returns Promise that outputs the message to the output.
 */
export async function write(msg, typewrite = false) {
    if (!output)
        return;
    const out = output;
    const text = msg.replace(/\n/g, "<br>") + "<br>";
    let atBottom = scrollAtBottom();
    let timeout;
    return new Promise((resolve) => {
        if (!typewrite) {
            output.innerHTML += text;
            if (atBottom)
                scrollToBottom();
            return resolve();
        }
        let i = 0;
        function next() {
            atBottom = scrollAtBottom();
            if (i >= text.length) {
                if (atBottom)
                    scrollToBottom();
                return resolve();
            }
            timeout = 100;
            const char = text[i];
            switch (char) {
                case "<":
                    const endTag = text.indexOf(">", i);
                    if (endTag !== -1) {
                        out.innerHTML += text.slice(i, endTag + 1);
                        i = endTag;
                    }
                    else {
                        out.innerHTML += char;
                    }
                    break;
                case "1": // "zero-width space" for pause
                    timeout = 50;
                    break;
                default:
                    out.innerHTML += char;
            }
            if (atBottom)
                scrollToBottom();
            i++;
            setTimeout(next, timeout);
        }
        next();
    });
}
// Focus on input when anywhere is clicked to emulate old-school terminal.
document.addEventListener("click", (event) => {
    // If input is clicked, it is already focused on.
    // Further meddling would incorrectly move the cursor to the end of the
    // input rather than to where the user clicked.
    if (event.target === inputField)
        return;
    if (!inputField)
        return;
    // Move cursor to the end of the string.
    const text = inputField.value;
    inputField.value = "";
    inputField.value = text;
    inputField.focus();
});
//# sourceMappingURL=terminal.js.map