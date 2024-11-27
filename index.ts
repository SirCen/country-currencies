import { currencies } from "./countryCurrencyInfo";

export type CountryCurrencyInfo = {
  readonly CountryIsoCode: ISO3166
  readonly Currencies: ISO4217[]
  readonly Decimals: number
}

type ISO3166 = `${UPPERCASE}${UPPERCASE}`
export type ISO4217 = `${UPPERCASE}${UPPERCASE}${UPPERCASE}`
type UPPERCASE =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"



export const getCurrency = (isoCode: ISO3166): ISO4217 => {
  let currency = currencies.find((x) => x.CountryIsoCode == isoCode)?.Currencies[0]
  if (currency == undefined) throw new Error(`Unable to find currency for isocode: ${isoCode}`)
  return currency
}

export const getCurrencies = (): CountryCurrencyInfo[] => {
    return currencies
}

export const getDecimalsByCountryIsoCode = (isoCode: ISO3166): number => {
    let decimal = currencies.find((x) => x.CountryIsoCode == isoCode)?.Decimals
    if (decimal == undefined) throw new Error(`Unable to find decimals for isocode: ${isoCode}`)
    return decimal
}

export const getDecimalsByCurrencyIsoCode = (currencyIsoCode: ISO4217): number => {
    let decimal = currencies.find((x) => x.Currencies.find((z) => z == currencyIsoCode))?.Decimals
    if (decimal == undefined) throw new Error(`Unable to find decimals for a currency with isocode: ${currencyIsoCode}`)
    return decimal
}

export const getCountry = (isoCode: ISO3166): CountryCurrencyInfo => {
    let country = currencies.find((x) => x.CountryIsoCode == isoCode)
    if (country == undefined) throw new Error(`Unable to find country for isocode: ${isoCode}`)
    return country
}