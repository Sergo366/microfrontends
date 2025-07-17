import faker from "faker";

const mount = (el) => {
    el.innerHTML = `<div>${faker.random.number()} items</div>`;
}

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#dev-cart");
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };