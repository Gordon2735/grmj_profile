declare global {
    interface HTMLCollectionOf<T extends Element> {
        [Symbol.iterator](): Iterator<T>;
    }
    interface HTMLIFrameElement {
        type?: string;
    }
}
export {};
