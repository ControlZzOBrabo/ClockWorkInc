
const button = document.getElementById('feedbackbutton')

button.addEventListener('click', ()=>{
    const feedback = document.getElementById('feedback').value
    const resposta = "great"

    if(feedback == resposta){
        alert('coordinates: 316 100 4878 Chest password: 2309 | PLEASE DO NOT GO ALONE')
    }else{
        alert('Thanks for your review :]')
    }
})