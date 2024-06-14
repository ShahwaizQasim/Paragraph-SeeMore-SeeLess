
const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem.`;
const element = document.querySelector("#myParagraph");

window.seeMore = () => {
    element.innerHTML = `${paragraph} <a onclick="seeLess(event)"> see less... </a>`
    }
window.seeLess = () => {
    element.innerHTML = `${paragraph.slice(0,305)} <a onclick="seeMore(event)"> see more... </a>`;
}
seeLess();