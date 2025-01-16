function calculatePercentageByState(billingbystate) {
    const total = Object.values(billingbystate).reduce((acc, valor) => acc + valor, 0);

    console.log("Percentual de representação por estado:");
    for (const [state, value] of Object.entries(billingbystate)) {
        const percent = (value / total) * 100;
        console.log(`${state}: ${percent.toFixed(2)}%`);
    }
}

const billingbystate = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

calculatePercentageByState(billingbystate);
