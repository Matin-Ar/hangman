const  getPuzzle = async (wordCount) => {
    response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return country = await getCountry(location.country)
}

const getCountry = async (countryCode) => {
    response = await fetch('https://restcountries.eu/rest/v2/all')
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getLocation = async () => {
    response = await fetch('https://ipinfo.io/json?token=65f63da42113ea')
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}
