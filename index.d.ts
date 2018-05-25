declare class PlayerEndpoint {
    constructor();

    play(callback?: (error: Error) => void): Promise<void>;
}