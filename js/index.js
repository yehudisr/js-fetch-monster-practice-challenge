function renderOneMonster(monsterObject) {
    const monsterItem = document.createElement('div')
    monsterItem.dataset.id = monsterObject.id


    monsterItem.innerHTML = `
    <h2> ${monsterObject.name} </h2>
    <h4> ${monsterObject.age} </h4>
    <p> ${monsterObject.description} </p>
    `
    const monsterCollection = document.querySelector('div#monster-container')
    monsterCollection.append(monsterItem)

}

function renderAllMonsters(){
    fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(response => response.json())
    .then(monsterObject => {monsterObject.forEach(monster => {renderOneMonster(monster)})
    })

}

renderAllMonsters()

const newMonsterForm = document.querySelector('form#monster-form')

newMonsterForm.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(event)
    const name = event.target[0].value
    const age =  event.target[1].value
    const description = event.target[2].value

    fetch('http://localhost:3000/monsters',{
        method: 'POST',
        headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
},
body: JSON.stringify({name, age, description})
    })
    .then(response => response.json())
    .then(newMonsterObject => {renderOneMonster(newMonsterObject)})
    
    newMonsterForm.reset()

})
document.addEventListener('click', function(event){
    console.log(event)

})