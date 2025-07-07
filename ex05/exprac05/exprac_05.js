let e, f, suma, resta, multi, divi, potencia, at;

e=parseFloat(prompt("ingrese el valor de e: "));
f=parseFloat(prompt("ingrese el valor de f: "));


suma= e + f;
resta= e - f;
multi= e * f;
divi= e / f;
poten= e ** f;
at= (e*f)/2


console.log(
    "la suma es: ", suma,
    "\nla multiplicacion es: ", multi,
    "\nla division es: ", divi,
    "\nla potencia es: ", poten,
    "\nla resta es: ", resta,
    "\nel  area del triangulo es ", at
)