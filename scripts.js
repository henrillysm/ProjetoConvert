const USD = 4.87
const EUR = 5.32
const GBP = 6.08


const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description") //acessando o span
const result = document.querySelector("#result") //acessando o h1


amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
})


function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        //apenas para verificar se não é um número
        // if (isNaN(total)) {
        //     return alert("Não é um número, por favor corrija!")
        // }   

        total = formatCurrencyBRL(total).replace("R$", "")
        result.innerText = `${total} reais`
        footer.classList.add("show-result")

    } catch (error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

// formata a moeda em real brasileiro

function formatCurrencyBRL(value) {
    // Converte em número para utilizar o toLocaleString() para formatar no padrão BRL (R$ 00,00).
    return Number(value).toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL"
    })
}