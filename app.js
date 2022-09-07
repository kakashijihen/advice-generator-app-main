const  fetchAdvice=async()=>{
    const response=await fetch("https://api.adviceslip.com/advice")
    const data= await response.json()

    document.getElementById("advice_titulo").innerHTML=`Advice #${data.slip.id}`
    document.getElementById("advice_texto").innerHTML=`"${data.slip.advice}"`
}

