import ReactDOM  from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App></App>);



// the oldest way to do render
// ReactDOM.render('Hello World',document.getElementById('root'))