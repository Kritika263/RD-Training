const main = document.querySelector('.main');


var arr = ["Two", "Three"]
arr.forEach((item) => {
    card(item);
})
function card(item) {
    const elementContainer = document.createElement('DIV');
    elementContainer.setAttribute("class", "elements-container")
    const imgContainer = document.createElement('DIV');

    imgContainer.setAttribute("class", "image-container")
    const contentContainer = document.createElement('DIV');
    contentContainer.setAttribute("class", "content-container")
    const image = document.createElement('IMG');
    image.setAttribute("src", "data:image/jpeg;base64,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");
    const heading = document.createElement('H2');
    heading.setAttribute("class", "content-title");
    heading.innerText = `Title ${item}`;
    const subheading = document.createElement('P');
    subheading.innerText = `posted on 29 June //Category`;
    subheading.setAttribute("class", "subheading");
    const description = document.createElement('P');
    description.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vitae sit, reiciendis excepturi
    maiores quam rem dolorum ea nulla aut laborum placeat facere ullam odit qui est non deserunt doloribus?`
    description.setAttribute("class", "description");
    const button = document.createElement("BUTTON");
    button.setAttribute("id", "continue-btn");
    button.innerText = `Continue Reading`;
    const linebreak = document.createElement("HR");
    main.appendChild(elementContainer);
    elementContainer.appendChild(imgContainer);
    imgContainer.appendChild(image);
    elementContainer.appendChild(contentContainer);
    contentContainer.appendChild(heading);
    contentContainer.appendChild(subheading);
    contentContainer.appendChild(description);
    contentContainer.appendChild(button);
    main.appendChild(linebreak);

}
// function customElement(ele,class,id){
//     const element = document.createElement(ele);
//     return element;
// }