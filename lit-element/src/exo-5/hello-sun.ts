import { LitElement, html, customElement, css, property } from "lit-element";


@customElement("hello-sun")
export class HelloSun extends LitElement {

    static get styles() {
        return css`
blockquote {
    width: 80vmin;
    height: 67vmin;
    padding: 2em;
    background: url('./assets/stars.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
blockquote p::before {
    font-size: 2.5em;
    color: white;
    text-shadow: .1em .1em .1em black;
    content: 'Only in the darkness can you see the starts';
    font-family: cursive;
}

blockquote footer::after {
    font-size: 1.5em;
    color: white;
    text-shadow: .1em .1em .1em black;
    content: ' Martin Luther King Jr.';
}

blockquote span::before {
    color: hsla(0,100%,100%,.5);
    content: 'Photo by Jeremy Thomas on Unsplash';
}`;
    }

    // TODO Step 1

    render() {
        return html`
<blockquote>
    <p></p>
    <footer>--</footer>
    <span></span>
</blockquote>
`;
    }
}