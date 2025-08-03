// Direct translation of Lexi Rose's Phrases.h from C++ to TypeScript.

import { enableInput, write } from "./terminal.js";

const inputDiv = document.getElementById("input-line") as HTMLElement | null;
const inputField = document.getElementById("input") as HTMLInputElement | null;

//Minor functions for Door Simulator+ Project

export let userInput: string = "";

/**
 * Replicates C++'s delay function. Delays execution for a given number of
 * milliseconds.
 * @param ms - Number of milliseconds to wait.
 * @returns A promise that resolves after the delay.
 */
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Replicates C++'s getch function. Delays execution until a key is pressed.
 * @returns A promise that resolves when any key is pressed.
 */
export function getch(): Promise<void> {
    return new Promise((resolve) => {
        const handler = () => {
            window.removeEventListener("keydown", handler);
            // Brief timeout to prevent typing in input field.
            setTimeout(resolve, 1);
        };
        window.addEventListener("keydown", handler);
    });
}

/**
 * Replicates C++'s system("PAUSE").
 */
export async function systemPause(): Promise<void> {
    write("Press any key to continue . . .");
    await getch();
    write("\n");
}

//Prompts the user for a keypress
export async function keyp(): Promise<void> {
    write(">>");
    await getch();
}

//Prints out a string, character by character
export async function stringOut(text: string) {
    await write(text, true);
}

//Prompts the users for an input
export async function gameprompt(): Promise<void> {
    enableInput();
    await new Promise<void>((resolve) => {
        const handler = async (event: KeyboardEvent) => {
            if (event.key !== "Enter") return;
            if (!inputDiv || !inputField) return;

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
export function wordCheckB(check: string): boolean {
    return userInput.includes(check);
}

//Returns the position of a word in the input
export function wordCheckP(check: string): number {
    if (wordCheckB(check)) {
        return userInput.indexOf(check);
    } else {
        write("this should not happen\n");
        return 0;
    }
}

//Returns true if word a is before word b
export function wordOrder(a: string, b: string): boolean {
    return wordCheckB(a) && wordCheckB(b) && wordCheckP(a) < wordCheckP(b);
}
