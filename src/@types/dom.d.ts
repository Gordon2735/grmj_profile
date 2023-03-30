/* eslint-disable @typescript-eslint/no-explicit-any */
interface CustomEventMap {
    customnumberevent: CustomEvent<number>;
    anothercustomevent: CustomEvent<CustomParams>;
}
declare global {
    interface Document {
        //adds definition to Document, but you can do the same with HTMLElement
        addEventListener<K extends keyof CustomEventMap>(
            type: K,
            listener: (this: Document, ev: CustomEventMap[K]) => void
        ): void;
        dispatchEvent<K extends keyof CustomEventMap>(
            ev: CustomEventMap[K]
        ): void;
    }
}
interface CustomEvent<T = any> extends Event {
    /**
     * Returns any custom data event was created with. Typically used for synthetic events.
     */
    readonly detail: T;
    initCustomEvent(
        typeArg: string,
        canBubbleArg: boolean,
        cancelableArg: boolean,
        detailArg: T
    ): void;
}
export {}; //keep that for TS compiler.
