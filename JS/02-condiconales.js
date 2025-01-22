/*
if (codicion logica){
    todo el codigo que quiero realizar si la condicion es verdadera
}
*/ 

//Solicite la edad al usuario e indique si debe votar
//16 y menores de 18 anos es optativo,mayores de 70 
//18 a 70 

let edad = parseInt(prompt('ingrese su edad'));

if (edad >=18 && edad < 70){
    document.write('debe votar');
}else{
    if((edad>=16 && edad<18) || edad >70 ){
        document.write('es optativo votar');
    }else{
        document.write('no debe votar');
    }
}