/* ReactDOM.render(<h1>Hello, React!</h1>, document.querySelector("#root"));
 ReactDOM.render(
    <ul>
        <li>First</li>
        <li>Second</li>
    </ul>, document.querySelector("#list")
); */

/* function MainContent() {
    return <h1>I'm learning React</h1>;
}

ReactDOM.render(<MainContent />, document.querySelector("#root")); */

/* const H1 = document.createElement("h1");
H1.textContent = "Hello World!";
H1.className  = "header";
document.querySelector("#root").append(H1); 

ReactDOM.render(<h1 class="header">Hello World!</h1>, document.querySelector("#root")); */

/* ReactDOM.render(
    <div>
        <h1 className="header">Exemplo de JSX</h1>
        <p>Adicionando um parágrafo</p>
    </div>,
    document.querySelector("#root")
);*/

/* const navbar = (
    <nav>
        <h1>Exemple JSX</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(navbar, document.querySelector("#root")); */

/* const page = (
    <div>
        <img src="react.ico" width="40px" />
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walker</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);

ReactDOM.render(page, document.querySelector("#root"));
// console.log(page); */

function PageList() {
    return (
        <div>
            <h1>ReactJS</h1>
            <ol>
                <li>Aprendendo</li>
                <li>a usar</li>
                <li>ReactJS</li>
            </ol>
        </div>
    );
}

ReactDOM.render(<PageList />, document.querySelector("#root"));
