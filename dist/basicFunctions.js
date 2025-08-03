// Direct translation of Lexi Rose's Phrases.h from C++ to TypeScript.
import { enableInput, write } from "./terminal.js";
const inputDiv = document.getElementById("input-line");
const inputField = document.getElementById("input");
//Minor functions for Door Simulator+ Project
export let userInput = "";
/**
 * Replicates C++'s delay function. Delays execution for a given number of
 * milliseconds.
 * @param ms - Number of milliseconds to wait.
 * @returns A promise that resolves after the delay.
 */
export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Replicates C++'s getch function. Delays execution until a key is pressed.
 * @returns A promise that resolves when any key is pressed.
 */
export function getch() {
    return new Promise((resolve) => {
        const sensitivity = 10; // in px
        let startX = 0;
        let startY = 0;
        let isTap = true;
        let pointerid = -1;
        const cleanup = () => {
            window.removeEventListener("keydown", keyHandler);
            window.removeEventListener("pointerdown", downHandler);
            window.removeEventListener("pointerup", upHandler);
            window.removeEventListener("pointermove", moveHandler);
            // Brief timeout to prevent typing in input field.
            setTimeout(resolve, 1);
        };
        const keyHandler = () => {
            cleanup();
        };
        const downHandler = (e) => {
            if (!e.isPrimary)
                return;
            startX = e.clientX;
            startY = e.clientY;
            isTap = true;
            pointerid = e.pointerId;
        };
        const upHandler = (e) => {
            if (e.pointerId != pointerid)
                return;
            if (isTap)
                cleanup();
        };
        const moveHandler = (e) => {
            if (e.pointerId != pointerid)
                return;
            const diffX = e.clientX - startX;
            const diffY = e.clientY - startY;
            const dist = Math.sqrt(diffX * diffX + diffY * diffY);
            if (dist > sensitivity)
                isTap = false;
        };
        window.addEventListener("keydown", keyHandler);
        window.addEventListener("pointerdown", downHandler);
        window.addEventListener("pointerup", upHandler);
        window.addEventListener("pointermove", moveHandler);
    });
}
/**
 * Replicates C++'s system("PAUSE").
 */
export async function systemPause() {
    write("Press any key to continue . . .");
    await getch();
    write("\n");
}
//Prompts the user for a keypress
export async function keyp() {
    write(">>");
    await getch();
}
//Prints out a string, character by character
export async function stringOut(text) {
    await write(text, true);
}
//Prompts the users for an input
export async function gameprompt() {
    enableInput();
    await new Promise((resolve) => {
        const handler = async (event) => {
            if (event.key !== "Enter")
                return;
            if (!inputDiv || !inputField)
                return;
            window.removeEventListener("keydown", handler);
            inputDiv.style.display = "none";
            userInput = inputField.value.trim().toLowerCase();
            // Commit input to output.
            const text = `> ${inputField.value}`;
            inputField.value = "";
            await write(text);
            resolve();
        };
        window.addEventListener("keydown", handler);
    });
}
//Returns if a word is found in the input
export function wordCheckB(check) {
    return userInput.includes(check);
}
//Returns the position of a word in the input
export function wordCheckP(check) {
    if (wordCheckB(check)) {
        return userInput.indexOf(check);
    }
    else {
        write("this should not happen\n");
        return 0;
    }
}
//Returns true if word a is before word b
export function wordOrder(a, b) {
    return wordCheckB(a) && wordCheckB(b) && wordCheckP(a) < wordCheckP(b);
}
//# sourceMappingURL=basicFunctions.js.map