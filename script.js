let idade = Number(prompt("digite sua idade"));
let aposentado =(prompt("vc é aposentado? (sim/nao)"));
let estudante = (prompt("vc é estudante?"));

aposentado.toLocaleUpperCase();

if (idade<=12){
    console.log ("entrada 15 reais");
} else if (idade >=13 && idade <= 17){
    console.log ("entrada 25 reais");
} else if (idade >= 18 && idade<=59){
    console .log ("entrada 35 reais");
} else if (idade >= 60 || aposentado === "SIM");{
      console .log("entrada gratuita");  
} 
