//nessa função considerei que o output será um array de objetos com keys dia e valor, conforme recebi via e-mail

function analyzeDailyBilling(billing) {
    if (!Array.isArray(billing) || billing.length === 0) {
        console.log("O vetor de faturamento está vazio ou inválido.");
        return;
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let daysWithBilling = 0;

    
    for (const dayData of billing) {
        if (dayData.valor > 0) {
            min = Math.min(min, dayData.valor);
            max = Math.max(max, dayData.valor);
            sum += dayData.valor;
            daysWithBilling++;
        }
    }

    if (daysWithBilling === 0) {
        console.log("Não houve dias com faturamento.");
        return;
    }

    const average = sum / daysWithBilling;
    let daysAboveAverage = 0;


    for (const dayData of billing) {
        if (dayData.valor > average) {
            daysAboveAverage++;
        }
    }

    console.log(`Menor valor de faturamento: R$ ${min.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${max.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);
}


const dailyBilling = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];
analyzeDailyBilling(dailyBilling);
