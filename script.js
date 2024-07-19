const btn = document.querySelector("#btn");
alert("Enter the pokemon name in the box eg. Pikachu")

btn.addEventListener('click', () => {
    const search = document.querySelector("#broii").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((res) => {
        if (!res.ok) {
            const noName=document.querySelector("#noName")
            noName.innerHTML=`<p>${search}:This pokemon is not exist</p>`
            noName.style.marginTop="20px";
        }
        return res.json();
    })
    .then((data) => {
        const picture = data.sprites.front_default;
        const imgElement = document.querySelector("#pic");
        imgElement.src = picture;
        imgElement.style.display = "block";
        const name = data.name;
        const abilities = data.abilities.map(ability => ability.ability.name);
        const height=data.height;

        setTimeout(()=>{
            const nameElement = document.querySelector("#name");
            const abilitiesElement = document.querySelector("#abilities");
            const heightElement=document.querySelector("#height");
    
            nameElement.textContent = `Name: ${name}`;
            abilitiesElement.textContent = `Abilities: ${abilities}`;
            heightElement.textContent = `Height: ${height}`;
        },0)
    })
    .catch((err) => {
        console.log("Find another one..");

    });
});


// when user amount
// fromAmountElement.addEventListener('input',getExchangeRate);


// when user change currency
// fromAmountElement.addEventListener('change',getExchangeRate)
// toCurrencyElement.addEventListener('change',getExchangeRate)
window.addEventListener('load')
