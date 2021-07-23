const foodArr = ["Mcdonalds", "Arbys", "The Vatican", "Soup Kitchen", "Sam's Lucky Toast", "Granola in a Melon"]

const chooser = _ => {
    const randomElement = foodArr[Math.floor(Math.random() * foodArr.length)];
    let tag = document.createElement('h3')
    let p = document.createElement('p')
    p.textContent = "Now go google it or whatever cuz i'm not attaching any more hyperlinks"
    tag.textContent = randomElement 
    
    document.querySelector('content').append(tag,p)
}

document.querySelector('button').addEventListener('click', chooser)