let Temperatura1Max = 25;
let Temperatura1Min = 2;
let Temperatura2Max = 30;
let Temperatura2Min = 1;
let Temperatura3Max = 22;
let Temperatura3Min = 1;
let Temperatura4Max = 18;
let Temperatura4Min = 2;
let Temperatura5Max = 16;
let Temperatura5Min = 10;

function CalcularTempratura(Temperatura1Max,Temperatura1Min,Temperatura2Max,
    Temperatura2Min,Temperatura3Max,Temperatura3Min,
    Temperatura4Max,Temperatura4Min,Temperatura5Max,Temperatura5Min){

        let SumaTemperatura = Temperatura1Max+Temperatura1Min+Temperatura2Max+
        Temperatura2Min+Temperatura3Max+Temperatura3Min+
        Temperatura4Max+Temperatura4Min+Temperatura5Max+Temperatura5Min;

        let SumaTotal = SumaTemperatura;

        let Division = (SumaTotal / 10);

        return Division;
    }
        console.log(CalcularTempratura(Temperatura1Max,Temperatura1Min,TemperaturaDia2Max,
            Temperatura2Min,Temperatura3Max,Temperatura3Min,
            Temperatura4Max,Temperatura4Min,Temperatura5Max,Temperatura5Min));
 