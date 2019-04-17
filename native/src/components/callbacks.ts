

export interface WebComponentCallbacks {
    connectedCallback: () => void;
    disconnectedCallback: () => void;
    attributeChangedCallback: (attrName: string, oldValue: string, newValue: string) => void;
    adoptedCallback: () => void;
}