import React from "react";
import ReactDOM from "react-dom/client";

function ExampleComponent(){
    return (<>
        <h1>
            The sky is blue!
        </h1>
    </>);
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<ExampleComponent />);