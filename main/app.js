const answer = document.getElementById("input")

function revAnswer(str){
    return str.split('').reverse().join('')
}

function check(){

    const textAnswer = answer.value
    const reverseAnswer = revAnswer(textAnswer)

    answer.value = ""
    if (textAnswer == reverseAnswer){
        return alert("yes")
    } else {
        return alert("nope")
    }

}