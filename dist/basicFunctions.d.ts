export declare let userInput: string;
/**
 * Replicates C++'s delay function. Delays execution for a given number of
 * milliseconds.
 * @param ms - Number of milliseconds to wait.
 * @returns A promise that resolves after the delay.
 */
export declare function delay(ms: number): Promise<void>;
/**
 * Replicates C++'s getch function. Delays execution until a key is pressed.
 * @returns A promise that resolves when any key is pressed.
 */
export declare function getch(): Promise<void>;
/**
 * Replicates C++'s system("PAUSE").
 */
export declare function systemPause(): Promise<void>;
export declare function keyp(): Promise<void>;
export declare function stringOut(text: string): Promise<void>;
export declare function gameprompt(): Promise<void>;
export declare function wordCheckB(check: string): boolean;
export declare function wordCheckP(check: string): number;
export declare function wordOrder(a: string, b: string): boolean;
//# sourceMappingURL=basicFunctions.d.ts.map