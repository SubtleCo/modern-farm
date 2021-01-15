export const Catalog = (harvestedFood) => {

    let catalogHTML = "";
    for (let item of harvestedFood) {
            const itemHTML = `
            <section class="plant">${item.type} - ID: ${item.id}</section>`
            catalogHTML += itemHTML;
    }

    const documentElement = document.querySelector(".container")
    documentElement.innerHTML += catalogHTML;
}