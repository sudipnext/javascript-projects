const randomGenerator = (num) =>{
    return Math.floor(Math.random()* num)
}
// console.log(randomGenerator(12))
const magicWords ={
    userInput: ["Aquarious", "Pisces", "Aries", "Tarus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"],
    prediction: ["Today's day is good for you!", "I doubt", "It's serious", "How are you so happy?", "Feeling Sad", "Coincidence", "Magical number is 7", "You are fine i know", "today is worst day of your life", "It's good!"],
    advice: ["Bath in sun", "wear rudrakshya", "Follow lord shiva", "follow krishna", "be happy for what you have", "be greatful", "be positive", "get a cup of tea and relax", "Just enjoy your life", "Forget the problems for a second", "You are lucky you got that", "God is real everything is just a mirage"]
}
let final =["HOROSCOPE TELLER","================================================="]
for (let choice in magicWords){
    let idx = randomGenerator(magicWords[choice].length)
    switch(choice){
        case 'userInput':
            final.push(magicWords[choice][idx])
            break;
        case 'prediction':
            final.push(`My prediction: ${magicWords[choice][idx]}`)
            break
        case 'advice':
            final.push(`My advice is :- ${magicWords[choice][idx]}`)
            break;
        default:
            final.push("Try again");
            break;
    }

}
let joined = final.join(" \n")
console.log(joined);
