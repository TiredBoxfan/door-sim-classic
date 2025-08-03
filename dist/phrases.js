// Direct translation of Lexi Rose's Phrases.h from C++ to TypeScript.
import { write } from "./terminal.js";
//Phrases.h
//A header file to contain all of the text from the game.
//The goal of course being to not clutter the main file.
//Functions should be in alphabetacal order
//Functions
export function guide() {
    write("You begin to read the book...\n\n" +
        "DOORS AND YOU: A BEGINNER'S GUIDE TO DOOR OPENING\n\n" +
        "Opening a door is a multi-step operation that requires\n" +
        "knowledge, skill, and patience.  Getting a firm grasp of\n" +
        "the subject matter is a great place to start.  Knowing how\n" +
        "to open the door is a key element of opening the door.\n" +
        "If you feel stuck, it doesn't hurt to take a step back\n" +
        "to evaluate your situation.  The big picture is the only\n" +
        "picture that matters when attempting to open doors.\n\n" +
        "Keep trying and good luck.\n" +
        "\t-A'Pertus Doorman, Door Expert\n\n");
}
export function help() {
    //Prints the help text
    write("In this game your main goal is to [open] a [door]\n\n" +
        "You could try to [put] your [hand] on the [knob] or\n" +
        "maybe even to [look] at things like the [door].  \n\n" +
        "At any time you can type [score] to get an idea \n" +
        "of what you have or haven't accomplished yet.\n\n" +
        "You can check your [inventory] with [inventory]\n\n" +
        "and check your [status] with [status]\n" +
        "You can also [turn] your character and [walk] around!\n" +
        "Also it is worth noting that caps do not matter\n" +
        "at all when typing your commands.\n\n" +
        "[KiLl lIcH] is as valid a command as [kIlL LiCh].\n\n" +
        "Have fun!\n");
}
export function NGPlus() {
    //Prints the new game plus opening addition
    write("In this new game plus, you have access to a bunch more commands with\n" +
        "a secret ending thrown in there as well.  A good way to start is to\n" +
        "figure out what you need to do.  There are new things to see\n" +
        "and discoveries to make.  So have some fun trying\n" +
        "something new!\n\n" +
        "Have fun\n");
    write("\nYou can always type the phrase KILLTHELICH to access \nthe new game plus from the regular game.\n\n");
}
export function opening(subtitle) {
    //Prints the opening text
    write("Welcome to the Door game: " +
        subtitle +
        "!\n\n" +
        "This is a tale of liches and kings,\n" +
        "riches and ruins\n" +
        "a man and a door.\n\n" +
        "The very door that would try his sanity,\n" +
        "the very door that would try his spirit,\n" +
        "the very door that would break all that he belived to be true.\n\n" +
        "This game is the story, of the quest to open a door.\n\n" +
        "If you need help on what to do, the HELP command works quite nicely!\n\n" +
        "'>>' prompts a keypress to continue text\n\n");
}
//# sourceMappingURL=phrases.js.map