import { IAddressData } from "@/interfaces/IAddressData";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export class GreetingCardService {
  cardType: undefined | "Geburtstagskarte" | "Taufjubiläumskarte";
  addressData: IAddressData[];
  private cardTexts: Map<string, string>;
  currentGreetingCardText: string;

  constructor() {
    this.cardType = undefined;
    this.addressData = [];
    this.cardTexts = new Map<string, string>([
      [
        "Geburtstagskarte",
        "#Anrede# #Bruder-Schwester# #Nachname#,<br><br>zu Deinem Geburtstag wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele Schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br><br>Herzliche Grüße<br><strong>Dein Büro der Mittelrheinische Vereinigung</strong>",
      ],
      [
        "Taufjubiläumskarte",
        "#Anrede# #Bruder-Schwester# #Nachname#,<br><br>zu Deinem Taufjubiläum wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele Schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br><br>Herzliche Grüße<br><strong>Dein Büro der Mittelrheinische Vereinigung</strong>",
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

  async createPdf(addressData: IAddressData[], text: string): Promise<void> {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const millimeterToPointConversion = 2.83465;

    addressData.forEach((address) => {
      const page = pdfDoc.addPage([
        210 * millimeterToPointConversion,
        200 * millimeterToPointConversion,
      ]);
      const { width, height } = page.getSize();
      const fontSize = 13;
      // page.drawText(address.vorname + " " + address.name, {
      //   x: 36,
      //   y: 0 * fontSize,
      //   size: fontSize,
      //   maxWidth: 439,
      //   font: font,
      //   color: rgb(0, 0.53, 0.71),
      // });
      let text = this.cardTexts.get("Taufjubiläumskarte") as string;
      text = text.replaceAll("<br>", "\n");
      text = text.replaceAll("#Nachname#", address.name);
      text = text.replaceAll(
        "#Bruder-Schwester#",
        address.geschlecht == "männlich" ? "Bruder" : "Schwester"
      );
      text = text.replaceAll(
        "#Anrede#",
        address.geschlecht == "männlich" ? "Lieber" : "Liebe"
      );
      page.drawText(text, {
        x: 36,
        y: 245,
        size: fontSize,
        maxWidth: 439,
        font: font,
        color: rgb(0.29, 0.29, 0.28),
      });
    });

    const pdfBytes = await pdfDoc.save();
    const file = new File([pdfBytes], "grußkarte.pdf");
    this.downloadFile(file);
  }
}
