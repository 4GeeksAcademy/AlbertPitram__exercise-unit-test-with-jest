//converter

let oneEuroIs = {
    "JPY": 156.5, //Japan Yen
    "USD": 1.07, //US Dollar
    "GBP": 0.87, //British Pound
};

function fromEuroToDollar(euro) {
    return euro * oneEuroIs["USD"];
}

function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs["USD"];
    return euro * oneEuroIs["JPY"];
}

function fromYenToPound(yen) {
    let euro = yen / oneEuroIs["JPY"];
    return euro*oneEuroIs["GBP"];
}