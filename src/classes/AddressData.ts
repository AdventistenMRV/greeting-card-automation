import { IAddressData } from "@/interfaces/IAddressData";

export class AddressData {
  inputData: string | null;
  parsedAddressData: IAddressData[];

  constructor() {
    this.inputData = null;
    this.parsedAddressData = [];
  }

  parseData(rawData: string): IAddressData[] | false {
    if (rawData) {
      // parse string to arrays
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const array = [] as any;
      rawData.split("\n").forEach((row) => {
        array.push(row.split("\t"));
      });

      // build header for data validation
      const validHeader = [
        "Mitglieds-ID",
        "Name",
        "Geburtsdatum",
        "Anrede",
        "Vorname",
        "Geschlecht",
        "Alter",
        "PLZ (Navi)",
        "Ort (Navi)",
        "Land (Navi)",
        "Zusatz",
        "Straße",
        "Geburtsdatum (TAG)",
        "Geburtsdatum (MONAT)",
        "Geburtsdatum (JAHR)",
        "Land",
        "Exakte Bezeichnung",
        "Titel",
        "Jahre (Taufe)",
      ];

      // validate table header
      if (JSON.stringify(array[0]) != JSON.stringify(validHeader)) {
        console.log("Data invalid");
        return false;
      }

      // parse data to IAddressData
      for (let index = 1; index < array.length; index++) {
        const address: IAddressData = {
          mitgliedsId: array[index][0],
          name: array[index][1],
          geburtsdatum: array[index][2],
          anrede: array[index][3],
          vorname: array[index][4],
          geschlecht: array[index][5],
          alter: array[index][6],
          plzNavi: array[index][7],
          ortNavi: array[index][8],
          landNavi: array[index][9],
          zusatz: array[index][10],
          straße: array[index][11],
          geburtsdatumTag: array[index][12],
          geburtsdatumMonat: array[index][13],
          geburtsdatumJahr: array[index][14],
          land: array[index][15],
          exakteBezeichnung: array[index][16],
          titel: array[index][17],
          jahreTaufe: array[index][18],
        };
        this.parsedAddressData.push(address);
      }
      console.log("Data valid");
      console.log(this.parsedAddressData);
      return this.parsedAddressData;
    }
    console.log("Data invalid");
    return false;
  }
}
