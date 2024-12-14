import { currencies } from "./countryCurrencyInfo";

/**
 * Represents information about the currency of a specific country.
 *
 * @property CountryIsoCode - The ISO 3166-1 alpha-2 country code consisting of two uppercase letters.
 * @property Currencies - An array of ISO 4217 currency codes consisting of three uppercase letters.
 * @property Decimals - The number of decimal places typically used for the primary currency of the country.
 *
 * @example
 * const countryCurrencyInfo: CountryCurrencyInfo = {
 *   CountryIsoCode: "US",
 *   Currencies: ["USD"],
 *   Decimals: 2
 * };
 */
export type CountryCurrencyInfo = {
  readonly CountryIsoCode: ISO3166;
  readonly Currencies: ISO4217[];
  readonly Decimals: number;
};

/**
 * ISO 3166-1 alpha-2 country code consisting of two uppercase letters.
 * 
 * For more information on ISO 3166-1, see 
 * {@link https://www.iso.org/iso-3166-country-codes.html ISO-3166}.
 *
 * @example
 * const countryCode: ISO3166 = "US"; // United States
 */
type ISO3166 = `${UPPERCASE}${UPPERCASE}`;

/**
 * ISO 4217 code consisting of three uppercase letters representing a currency.
 *
 * For more information on ISO 4217, see 
 * {@link https://www.iso.org/iso-4217-currency-codes.html ISO-4217}.
 *
 * @example
 * const currencyCode: ISO4217 = "USD"; // US Dollar
 */
export type ISO4217 = `${UPPERCASE}${UPPERCASE}${UPPERCASE}`;

/**
 * Represents a single uppercase English alphabet character.
 *
 * Used for constructing ISO-compliant codes such as ISO 3166 and ISO 4217.
 *
 * @example
 * const letter: UPPERCASE = "A";
 */
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
  | "Z";


/**
 * Retrieves the primary currency for a given country ISO 3166-1 alpha-2 code.
 *
 * @param isoCode - The ISO 3166-1 alpha-2 country code (e.g., "US").
 * @returns The primary ISO 4217 currency code for the given country.
 * @throws An error if no currency is found for the provided ISO code.
 *
 * @example
 * const currency = getCurrency("US"); // Returns "USD"
 */
export const getCurrency = (isoCode: ISO3166): ISO4217 => {
  let currency = currencies.find((x) => x.CountryIsoCode == isoCode)?.Currencies[0];
  if (currency == undefined) throw new Error(`Unable to find currency for isocode: ${isoCode}`);
  return currency;
};

/**
 * Retrieves a list of all country-currency information.
 *
 * @returns An array of `CountryCurrencyInfo` objects, each containing a country's ISO code, currencies, and decimals.
 *
 * @example
 * const allCurrencies = getCurrencies();
 * console.log(allCurrencies[0].CountryIsoCode); // Example output: "US"
 */
export const getCurrencies = (): CountryCurrencyInfo[] => {
  return currencies;
};

/**
 * Retrieves the number of decimals typically used for a currency in a given country.
 *
 * @param isoCode - The ISO 3166-1 alpha-2 country code (e.g., "US").
 * @returns The number of decimals used for currencies in the given country.
 * @throws An error if no information is found for the provided ISO code.
 *
 * @example
 * const decimals = getDecimalsByCountryIsoCode("US"); // Returns 2
 */
export const getDecimalsByCountryIsoCode = (isoCode: ISO3166): number => {
  let decimal = currencies.find((x) => x.CountryIsoCode == isoCode)?.Decimals;
  if (decimal == undefined) throw new Error(`Unable to find decimals for isocode: ${isoCode}`);
  return decimal;
};

/**
 * Retrieves the number of decimals used for a specific currency ISO 4217 code.
 *
 * @param currencyIsoCode - The ISO 4217 currency code (e.g., "USD").
 * @returns The number of decimals used for the given currency.
 * @throws An error if no information is found for the provided currency ISO code.
 *
 * @example
 * const decimals = getDecimalsByCurrencyIsoCode("USD"); // Returns 2
 */
export const getDecimalsByCurrencyIsoCode = (currencyIsoCode: ISO4217): number => {
  let decimal = currencies.find((x) => x.Currencies.find((z) => z == currencyIsoCode))?.Decimals;
  if (decimal == undefined) throw new Error(`Unable to find decimals for a currency with isocode: ${currencyIsoCode}`);
  return decimal;
};

/**
 * Retrieves detailed country-currency information for a given country ISO 3166-1 alpha-2 code.
 *
 * @param isoCode - The ISO 3166-1 alpha-2 country code (e.g., "US").
 * @returns A `CountryCurrencyInfo` object containing the country's ISO code, currencies, and decimals.
 * @throws An error if no information is found for the provided ISO code.
 *
 * @example
 * const countryInfo = getCountry("US");
 * console.log(countryInfo.Currencies); // Example output: ["USD"]
 */
export const getCountry = (isoCode: ISO3166): CountryCurrencyInfo => {
  let country = currencies.find((x) => x.CountryIsoCode == isoCode);
  if (country == undefined) throw new Error(`Unable to find country for isocode: ${isoCode}`);
  return country;
};