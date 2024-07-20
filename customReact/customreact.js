function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);

    if (reactElement.children) {
        domElement.innerHTML = reactElement.children;
    }

    if (reactElement.props) {
        if (reactElement.props.href) {
            domElement.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            domElement.setAttribute('target', reactElement.props.target);
        }
    }

    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
