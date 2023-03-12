// import {fetchData} from './component';
import './style.css';
import './image-component';
const element =document.createElement("button")
element.innerText= "Click Me";
document.body.appendChild(element);
// const updateData =()=>{
//     fetchData();
// }
const updateData = (event)=>{
    import("./component.js").then(module=>{
        module.fetchData();
    })}
element.addEventListener('click',updateData);