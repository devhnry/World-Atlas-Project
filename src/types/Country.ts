interface NativeName {
  [languageCode: string]: {
    official: string;
    common: string;
  };
}

interface Currencies {
  [currencyCode: string]: {
    name: string;
  };
}

interface Languages {
  [languageCode: string]: string;
}

export interface Country {
  name: {
    common: string;
    nativeName: NativeName;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
  subregion: string;
  currencies: Currencies;
  tld: string[];
  languages: Languages;
  borders: string[];
  cca3: string;
}
