let itemsArray = [];

function addItem() {
    const input = document.getElementById("inputText");

    if (input.value !== "") {
        itemsArray.push(input.value);
        input.value = "";
        input.focus();
    }
}

function displayItems() {
    let htmlContent = "";

    itemsArray.forEach((element, index) => {
        htmlContent += `<p>Element ${index + 1} = ${element}</p>`;
    });

    document.getElementById("result").innerHTML = htmlContent;
}