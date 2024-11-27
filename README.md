# Country-Currencies

This is a npm package that provides information about country ISO codes, currencies, and decimal precision, for majority of countries. It offers utility functions to look up the currency and decimal places for any given country or currency ISO code.

Current countries: 256

## Installation

You can install the package via npm:

```bash
npm install country-currency
```

## Type Definitions
 - [**ISO3166**](https://www.iso.org/iso-3166-country-codes.html): A string type representing a two-letter country code (e.g., 'US', 'CA', 'GB').
 - [**ISO4217**](https://www.iso.org/iso-4217-currency-codes.html): A string type representing a three-letter currency code (e.g., 'USD', 'EUR', 'GBP').
 - **CountryCurrencyInfo**: An object type representing country and currency information, with the following properties:
    - **CountryIsoCode**: ISO3166: The country ISO code (e.g., 'US').
    - **Currencies**: ISO4217[]: A list of ISO 4217 currency codes associated with the country.
    - **Decimals**: number: The number of decimal places used by the country's primary currency.

## Functions

### getCurrency
This function retrieves the primary currency of a country given its ISO 3166 country code.
```typescript
import { getCurrency, type ISO4217 } from 'country-currencies'

let currency: ISO4217 = getCurrency("GB")
console.log(currency) //Output -> "GBP"
```
### getCurrencies
This function retrieves all of the Country Currency Info in a CountryCurrencyInfo[].
```typescript
import { getCurrencies, type CountryCurrencyInfo } from 'country-currencies'

let currencies: CountryCurrencyInfo[] = getCurrencies()
console.log(currencies) //Output -> [{CountryIsoCode: "GB", Currencies: ["GBP"], Decimals: 2}, ...]
```
### getDecimalsByCountryIsoCode
This function retrieves the decimals of the primary currency of a country given its ISO 3166 country code.
```typescript
import { getDecimalsByCountryIsoCode } from 'country-currencies'

let decimals: number = getDecimalsByCountryIsoCode("GB")
console.log(decimal) //Output -> 2
```
### getDecimalsByCurrencyIsoCode
This function retrieves the decimals of the currency given its ISO 4217 country code.
```typescript
import { getDecimalsByCurrencyIsoCode } from 'country-currencies'

let decimals: number = getDecimalsByCurrencyIsoCode("GBP")
console.log(decimals) //Output -> 2
```
### getCountry
This function retrieves the CountryCurrencyInfo of a country given its ISO 3166 country code.
```typescript
import { getCountry, type CountryCurrencyInfo } from 'country-currencies'

let countryCurrencyInfo: CountryCurrencyInfo = getCountry("GB")
console.log(countryCurrencyInfo) //Output -> {CountryIsoCode:"GBP", Currencies: ["GBP"], Decimals: 2}
```

