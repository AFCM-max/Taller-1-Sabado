let CalcularTempratura = (Temperatura1Max,Temperatura1Min,Temperatura2Max,
    Temperatura2Min,Temperatura3Max,Temperatura3Min,
    Temperatura4Max,Temperatura4Min,Temperatura5Max,Temperatura5Min) => {

        let Suma = Temperatura1Max+Temperatura1Min+Temperatura2Max+
        Temperatura2Min+Temperatura3Max+Temperatura3Min+
        Temperatura4Max+Temperatura4Min+Temperatura5Max+Temperatura5Min;

        let Tempera= Suma/10;
        return Tempera;
    }
        console.log(CalcularTempratura(76,90,4,18,52,23,5,10,23,1));