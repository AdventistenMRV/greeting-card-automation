import { IAddressData } from "@/interfaces/IAddressData";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export class GreetingCardService {
  cardType: undefined | "Geburtstagskarte" | "Taufjubiläumskarte";
  addressData: IAddressData[];
  private cardTexts: Map<string, string>;
  currentGreetingCardText: string;
  exampleRawData: string;

  constructor() {
    this.cardType = undefined;
    this.addressData = [];
    this.exampleRawData = `Mitglieds-ID	Name	Geburtsdatum	Anrede	Vorname	Geschlecht	Alter	PLZ (Navi)	Ort (Navi)	Land (Navi)	Zusatz	Straße	Geburtsdatum (TAG)	Geburtsdatum (MONAT)	Geburtsdatum (JAHR)	Land	Exakte Bezeichnung	Titel	Jahre (Taufe)
    MI-16-06-035598	Mustermann	22.05.1992	Herr	Max	männlich	29	64297	Darmstadt	Deutschland		Carl-Ulrich Str. 36	22	Mai	1992	DE	Deutschland		81
    MI-16-06-030726	Musterfrau	01.12.1943	Frau	Maximiliane	weiblich	78	63073	Offenbach	Deutschland		Musterstraße 33	1	Dezember	1943	DE	Deutschland		82`;
    this.cardTexts = new Map<string, string>([
      [
        "Geburtstagskarte",
        "#Anrede# #Bruder-Schwester# #Nachname#,<br><br>zu Deinem Geburtstag wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br>Herzliche Grüße<br><strong>Dein Büro der mittelrheinischen Vereinigung</strong>",
      ],
      [
        "Taufjubiläumskarte",
        "#Anrede# #Bruder-Schwester# #Nachname#,<br><br>zu Deinem #Jahre#. Taufjubiläum wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br>Herzliche Grüße<br><strong>Dein Büro der mittelrheinischen Vereinigung</strong>",
      ],
    ]);
    this.currentGreetingCardText = "";
  }

  setGreetingCardType(
    cardType: undefined | "Geburtstagskarte" | "Taufjubiläumskarte"
  ): void {
    this.cardType = cardType;
    if (cardType === "Geburtstagskarte") {
      this.currentGreetingCardText = this.cardTexts.get(
        "Geburtstagskarte"
      ) as string;
    } else if (cardType === "Taufjubiläumskarte") {
      this.currentGreetingCardText = this.cardTexts.get(
        "Taufjubiläumskarte"
      ) as string;
    }
  }

  getAddressData(): IAddressData[] {
    return this.addressData;
  }
  private downloadFile(file: File): void {
    // Create a link and set the URL using `createObjectURL`
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(file);
    link.download = file.name;

    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);
    link.click();

    // To make this work on Firefox we need to wait
    // a little while before removing it.
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    }, 0);
  }

  async createPdf(addressData: IAddressData[]): Promise<void> {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const millimeterToPointConversion = 2.83465;

    addressData.forEach((address) => {
      const page = pdfDoc.addPage([
        210 * millimeterToPointConversion,
        200 * millimeterToPointConversion,
      ]);
      // const { width, height } = page.getSize();
      const fontSize = 12;
      // page.drawText(address.vorname + " " + address.name, {
      //   x: 36,
      //   y: 0 * fontSize,
      //   size: fontSize,
      //   maxWidth: 439,
      //   font: font,
      //   color: rgb(0, 0.53, 0.71),
      // });

      // check if a card type is defined
      if (!this.cardType) {
        return false;
      }

      let text = this.cardTexts.get(this.cardType) as string;

      text = text.replaceAll("<br>", " \n");
      text = text.replaceAll("<strong>", "");
      text = text.replaceAll("</strong>", "");
      text = text.replaceAll("#Nachname#", address.name);
      text = text.replaceAll(
        "#Jahre#",
        (parseInt(address.jahreTaufe) + 1).toString()
      );
      text = text.replaceAll(
        "#Bruder-Schwester#",
        address.geschlecht == "männlich" ? "Bruder" : "Schwester"
      );
      text = text.replaceAll(
        "#Anrede#",
        address.geschlecht == "männlich" ? "Lieber" : "Liebe"
      );
      page.drawText(text, {
        x: 9 * millimeterToPointConversion,
        y: 89 * millimeterToPointConversion,
        size: fontSize,
        maxWidth: 160 * millimeterToPointConversion,
        font: font,
        lineHeight: 16,
        color: rgb(0.29, 0.29, 0.28),
      });
    });

    const pdfBytes = await pdfDoc.save();
    const file = new File([pdfBytes], "grußkarte.pdf");
    this.downloadFile(file);
  }
}
