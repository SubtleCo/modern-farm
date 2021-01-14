export const countTable = (countedFood) => {

    let table = "";
    for (let item in countedFood) {
            const itemHTML = `
            <tr>
                <td>${item}</td>
                <td>${countedFood[item]}</td>
            </tr>
                `
            table += itemHTML;
    }

    const documentElement = document.querySelector(".countTable")
    documentElement.innerHTML += table;
}