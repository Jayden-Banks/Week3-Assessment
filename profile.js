const allBtns = document.querySelectorAll('button')

const alerter = e => {
    e.preventDefault()
    if (e.target.id === "color") {
        alert("My Favorite Color is pink with a dash of black")
    }
    else if (e.target.id === "place") {
        alert("My Favorite Place is the snowy tundra")
    }
    else if (e.target.id === "ritual") {
        alert("My Favorite Ritual is to go swimming right after eating")
    }
}

const husky = e => {
    e.preventDefault()

    //console.log(document.querySelector('input').value)
    let name = document.querySelector('input').value
    let nameBlock = document.createElement('h3')

    nameBlock.style.display = 'block';
    nameBlock.style.backgroundColor = 'pink';
    nameBlock.textContent = `My husky is named ${name}!`
    document.querySelector('form').append(nameBlock)
}





for(let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', alerter)
}
document.querySelector('form').addEventListener('submit', husky)