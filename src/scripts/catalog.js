export const Catalog = (harvestedFood) => {
    const documentElement = document.querySelector(".container")
    documentElement.innerHTML += harvestedFood.map(item => `<section class="plant">${item.type} - ID: ${item.id}</section>`).join("")
}