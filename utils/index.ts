export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': 'b0b37d4243mshaa12e374815657fp1cbe2ajsnf5023878bffb',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers,});

    const result = await response.json();

    return result;
}

