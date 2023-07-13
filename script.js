const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')




suffleImage() 
clicking()

function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}
function clicking(){

    for(let i =0; i<card.length; i++){


        card[i].addEventListener('click') ,()=>{

            front[i].classList.add('flip')
    }
}
}

