export declare let inputEnabled: boolean;
/**
 * Sets the text color of the on screen terminal.
 * @param colorCode - The color code to use.
 */
export declare function setTextColor(colorCode: string): void;
/**
 * Disables the input line element.
 */
export declare function disableInput(): void;
/**
 * Enables the input line element.
 */
export declare function enableInput(): void;
/**
 * Helper function to determine if the terminal is scrolled to the bottom.
 */
export declare function scrollAtBottom(): boolean;
/**
 * Helper function to scroll to bottom of the terminal.
 */
export declare function scrollToBottom(): void;
/**
 * Clears the terminal output.
 */
export declare function clear(): void;
/**
 * Writes the provided message with an optional typewriter mode that respects
 * HTML tags. Backticks can be used for pauses and thus will not be displayed.
 * @param msg - Message to display.
 * @param typewrite - If typewriter mode should be enabled.
 * @returns Promise that outputs the message to the output.
 */
export declare function write(msg: string, typewrite?: boolean): Promise<void>;
//# sourceMappingURL=terminal.d.ts.map