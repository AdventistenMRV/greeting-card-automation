(function(e){function t(t){for(var r,c,u=t[0],l=t[1],s=t[2],d=0,b=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);o&&o(t);while(b.length)b.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var o=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"518f":function(e,t,n){"use strict";n("9d23")},"9d23":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"p-grid"},i=Object(r["i"])("div",{class:"p-col-0 p-md-1 p-lg-2"},null,-1),c={class:"p-col-0 p-md-10 p-lg-8"},u=Object(r["i"])("div",{class:"p-col-0 p-md-1 p-lg-2"},null,-1);function l(e,t){var n=Object(r["D"])("Navigation"),l=Object(r["D"])("router-view");return Object(r["x"])(),Object(r["h"])("div",a,[i,Object(r["i"])("div",c,[Object(r["m"])(n),Object(r["m"])(l)]),u])}n("518f");var s=n("6b0d"),o=n.n(s);const d={},b=o()(d,[["render",l]]);var p=b,m=n("9319"),h=n("6c02"),g=Object(r["i"])("h2",null,"Grußkarten generieren",-1),O=Object(r["i"])("p",{class:"p-mb-4"}," Mithilfe des Grußkarten Generators können personalisierte PDFs für die Grußkarten erstellt werden. ",-1);function j(e,t,n,a,i,c){var u=Object(r["D"])("Steps"),l=Object(r["D"])("router-view");return Object(r["x"])(),Object(r["h"])(r["a"],null,[g,O,Object(r["m"])(u,{model:e.items,readonly:!0,class:"p-mb-4"},null,8,["model"]),Object(r["m"])(l)],64)}var f=n("1da1"),v=n("d4ec"),D=n("bee2"),k=(n("96cf"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("b0c0"),n("159b"),n("ac1f"),n("5319"),n("5b81"),n("e198")),y=function(){function e(){Object(v["a"])(this,e),this.cardType=void 0,this.addressData=[],this.exampleRawData="Mitglieds-ID\tName\tGeburtsdatum\tAnrede\tVorname\tGeschlecht\tAlter\tPLZ (Navi)\tOrt (Navi)\tLand (Navi)\tZusatz\tStraße\tGeburtsdatum (TAG)\tGeburtsdatum (MONAT)\tGeburtsdatum (JAHR)\tLand\tExakte Bezeichnung\tTitel\n    MI-16-06-035598\tMustermann\t22.05.1992\tHerr\tMax\tmännlich\t29\t64297\tDarmstadt\tDeutschland\t\tCarl-Ulrich Str. 36\t22\tMai\t1992\tDE\tDeutschland\t\n    MI-16-06-030726\tMusterfrau\t01.12.1943\tFrau\tMaximiliane\tweiblich\t78\t63073\tOffenbach\tDeutschland\t\tMusterstraße 33\t1\tDezember\t1943\tDE\tDeutschland\t",this.cardTexts=new Map([["Geburtstagskarte","#Anrede# #Bruder-Schwester# #Nachname#,<br><br>zu Deinem Geburtstag wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele Schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br><br>Herzliche Grüße<br><strong>Dein Büro der Mittelrheinische Vereinigung</strong>"],["Taufjubiläumskarte","#Anrede# #Bruder-Schwester# #Nachname#,<br><br>zu Deinem Taufjubiläum wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele Schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br><br>Herzliche Grüße<br><strong>Dein Büro der Mittelrheinische Vereinigung</strong>"]]),this.currentGreetingCardText=""}return Object(D["a"])(e,[{key:"setGreetingCardType",value:function(e){this.cardType=e,"Geburtstagskarte"===e?this.currentGreetingCardText=this.cardTexts.get("Geburtstagskarte"):"Taufjubiläumskarte"===e&&(this.currentGreetingCardText=this.cardTexts.get("Taufjubiläumskarte"))}},{key:"getAddressData",value:function(){return this.addressData}},{key:"downloadFile",value:function(e){var t=document.createElement("a");t.style.display="none",t.href=URL.createObjectURL(e),t.download=e.name,document.body.appendChild(t),t.click(),setTimeout((function(){URL.revokeObjectURL(t.href),t&&t.parentNode&&t.parentNode.removeChild(t)}),0)}},{key:"createPdf",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,c,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k["PDFDocument"].create();case 2:return n=e.sent,e.next=5,n.embedFont(k["StandardFonts"].Helvetica);case 5:return r=e.sent,a=2.83465,t.forEach((function(e){var t=n.addPage([210*a,200*a]),i=13,c=u.cardTexts.get("Taufjubiläumskarte");c=c.replaceAll("<br>","\n"),c=c.replaceAll("#Nachname#",e.name),c=c.replaceAll("#Bruder-Schwester#","männlich"==e.geschlecht?"Bruder":"Schwester"),c=c.replaceAll("#Anrede#","männlich"==e.geschlecht?"Lieber":"Liebe"),t.drawText(c,{x:36,y:245,size:i,maxWidth:439,font:r,color:Object(k["rgb"])(.29,.29,.28)})})),e.next=10,n.save();case 10:i=e.sent,c=new File([i],"grußkarte.pdf"),this.downloadFile(c);case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),S=new y,x=Object(r["n"])({name:"Geburtstagskarten",data:function(){return{greetingCardService:S,addressDataValid:!1,greetingCardText:"Liebe Schwester Mustermann,<br><br>zu Deinem Geburtstag wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele Schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br><br>Herzliche Grüße<br><strong>Dein Büro der Mittelrheinische Vereinigung</strong>",card:S,showPDF:!1,base64PDF:"",items:[{label:"Kartenart wählen",to:"/grusskarten/1"},{label:"Importieren & Prüfen",to:"/grusskarten/2"},{label:"Texte anpassen",to:"/grusskarten/3"},{label:"Generieren",to:"/grusskarten/4"}]}},components:{}});const G=o()(x,[["render",j]]);var w=G,C={style:{"text-align":"center"}},T=Object(r["i"])("h2",null,"Wähle eine Kartenart",-1);function A(e,t,n,a,i,c){var u=this,l=Object(r["D"])("Button");return Object(r["x"])(),Object(r["h"])("div",C,[T,Object(r["m"])(l,{class:"p-mr-2",type:"submit",label:"Geburtstagskarten",onClick:t[0]||(t[0]=function(e){return u.nextStep("Geburtstagskarte")})}),Object(r["m"])(l,{class:"p-mr-2",type:"submit",label:"Taufjubiläumskarten",onClick:t[1]||(t[1]=function(e){return u.nextStep("Taufjubiläumskarte")})})])}var M=Object(r["n"])({name:"Step1",data:function(){return{greetingCardService:S}},methods:{nextStep:function(e){this.$toast.add({severity:"success",summary:"Success Message",detail:"Order submitted",life:3e3}),this.greetingCardService.setGreetingCardType(e),Se.push("2")}},components:{}});const N=o()(M,[["render",A]]);var P=N,z={style:{"text-align":"center"}},F=Object(r["i"])("br",null,null,-1),V=Object(r["l"])(" kopiere die Adressdaten aus WAVE in deine Zwischenablage (Copy & Paste) in dieses Feld: "),E=Object(r["i"])("p",null,null,-1),B=Object(r["l"])(" Öffne WAVE auf deinem Computer."),L=Object(r["l"])(" Klicke bei "),R=Object(r["i"])("i",null,"Mitgliederverwaltung > Mitglied",-1),H=Object(r["l"])(" auf das Auswahl Icon "),_=Object(r["i"])("p",null,null,-1),I=Object(r["l"])(" Wähle folgende Einstellung "),Z=Object(r["i"])("ul",null,[Object(r["i"])("li",null,"Selektion: MRV-Geburtstage ab 75"),Object(r["i"])("li",null,"Filter: MRV-Geburtstage ab 75"),Object(r["i"])("li",null,"Liste: MRV-Geburtstage ab 75"),Object(r["i"])("li",null,"Ausgabe: Standardausgabe")],-1),W=Object(r["l"])(" Markiere die ganze Ausgabe (Eine Zeile anklicken, dann Strg-A) "),$=Object(r["l"])(" Kopiere die ganze Ausgabe (Rechtsklick > Markierte Datensätze kopieren) "),K={key:1},U=Object(r["i"])("h2",null,"Datenvorschau",-1);function J(e,t,n,a,i,c){var u=Object(r["D"])("GetClipboard"),l=Object(r["D"])("Button"),s=Object(r["D"])("Badge"),o=Object(r["D"])("AccordionTab"),d=Object(r["D"])("Accordion"),b=Object(r["D"])("Column"),p=Object(r["D"])("DataTable");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",z,[Object(r["i"])("h2",null,"Importiere die Daten für die "+Object(r["H"])(e.greetingCardService.cardType),1),Object(r["i"])("p",null,[Object(r["l"])(" Um die Daten für die "+Object(r["H"])(e.greetingCardService.cardType)+" zu importieren,",1),F,V]),Object(r["i"])("p",null,[Object(r["m"])(u,{onDataValid:t[0]||(t[0]=function(t){return e.greetingCardService.addressData=t})})]),Object(r["m"])(l,{class:"p-mr-2 p-button-secondary",type:"submit",label:"Zurück",onClick:t[1]||(t[1]=function(t){return e.$router.push("1")})}),Object(r["m"])(l,{class:Object(r["t"])(["p-mr-2",{"p-button-secondary":!e.greetingCardService.addressData.length}]),disabled:!e.greetingCardService.addressData.length,type:"submit",label:"Weiter",onClick:t[2]||(t[2]=function(t){return e.$router.push("3")})},null,8,["class","disabled"]),E]),e.greetingCardService.addressData.length?Object(r["g"])("",!0):(Object(r["x"])(),Object(r["f"])(d,{key:0},{default:Object(r["N"])((function(){return[Object(r["m"])(o,{header:"Anleitung: So kommst du an die Adressdaten aus WAVE"},{default:Object(r["N"])((function(){return[Object(r["i"])("div",null,[Object(r["i"])("p",null,[Object(r["m"])(s,{value:"1"}),B]),Object(r["i"])("p",null,[Object(r["m"])(s,{value:"2"}),L,R,H]),_,Object(r["m"])(s,{value:"3"}),I,Z,Object(r["i"])("p",null,[Object(r["m"])(s,{value:"4"}),W]),Object(r["i"])("p",null,[Object(r["m"])(s,{value:"4"}),$])]),Object(r["m"])(l,{class:"p-mr-2 clipboard-btn",type:"submit","data-clipboard-text":e.greetingCardService.exampleRawData,icon:"pi pi-copy",label:"Kopiere Beispieldaten in die Zwischenablage"},null,8,["data-clipboard-text"])]})),_:1})]})),_:1})),e.greetingCardService.addressData.length?(Object(r["x"])(),Object(r["h"])("div",K,[U,Object(r["m"])(p,{value:e.greetingCardService.addressData,responsiveLayout:"scroll"},{default:Object(r["N"])((function(){return[Object(r["m"])(b,{field:"vorname",header:"Vorname"}),Object(r["m"])(b,{field:"name",header:"Nachname"}),Object(r["m"])(b,{field:"geburtsdatum",header:"Geburtstag"}),Object(r["m"])(b,{field:"plzNavi",header:"Postleitzahl"})]})),_:1},8,["value"])])):Object(r["g"])("",!0)],64)}var q=n("b311"),Q=n.n(q),X=Object(r["n"])({name:"Step2",data:function(){return{greetingCardService:S}},mounted:function(){S.cardType||Se.push("1"),new Q.a(".clipboard-btn")},components:{}});const Y=o()(X,[["render",J]]);var ee=Y,te=Object(r["i"])("h2",null,"Grußkartentext",-1),ne=Object(r["i"])("span",{class:"ql-formats"},[Object(r["i"])("button",{class:"ql-bold"})],-1);function re(e,t,n,a,i,c){var u=Object(r["D"])("Editor"),l=Object(r["D"])("Button");return Object(r["x"])(),Object(r["h"])(r["a"],null,[te,Object(r["m"])(u,{modelValue:e.greetingCardService.currentGreetingCardText,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.greetingCardService.currentGreetingCardText=t}),editorStyle:"height: 320px",class:"p-mb-4"},{toolbar:Object(r["N"])((function(){return[ne]})),_:1},8,["modelValue"]),Object(r["m"])(l,{class:"p-mr-2 p-button-secondary",type:"submit",label:"Zurück",onClick:t[1]||(t[1]=function(t){return e.$router.push("2")})}),Object(r["m"])(l,{class:"p-mr-2",disabled:!e.greetingCardService.addressData,type:"submit",label:"Weiter",onClick:t[2]||(t[2]=function(t){return e.$router.push("4")})},null,8,["disabled"])],64)}var ae=Object(r["n"])({name:"Step3",data:function(){return{greetingCardService:S,greetingCardText:"init"}},mounted:function(){S.cardType||Se.push("1")},components:{}});const ie=o()(ae,[["render",re]]);var ce=ie,ue={style:{"text-align":"center"}},le=Object(r["i"])("h2",null,"🎉 Fast geschafft!",-1),se=Object(r["i"])("p",null," Lade die PDF herunter und drucke Sie mit den entsprechend Einstellungen aus. ",-1),oe=Object(r["l"])(" Öffne die heruntergeladene PDF"),de=Object(r["l"])(" Wähle "),be=Object(r["i"])("i",null,"Datei > Drucken",-1),pe=Object(r["l"])(" (Strg-P)"),me=Object(r["i"])("p",null,null,-1),he=Object(r["l"])(" Klicke auf Druckereinstellungen und"),ge=Object(r["i"])("br",null,null,-1),Oe=Object(r["l"])(" nimm folgende Einstellungen vor: ");function je(e,t,n,a,i,c){var u=Object(r["D"])("Button"),l=Object(r["D"])("Badge"),s=Object(r["D"])("AccordionTab"),o=Object(r["D"])("Accordion");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",ue,[le,se,Object(r["m"])(u,{class:"p-mr-2 p-button-secondary",type:"submit",label:"Zurück",onClick:t[0]||(t[0]=function(t){return e.$router.push("3")})}),Object(r["m"])(u,{class:"p-mt-4 p-button-success",type:"submit",label:"PDF herunterladen",onClick:t[1]||(t[1]=function(t){return e.generatePDF()})})]),Object(r["m"])(o,{class:"p-mt-4"},{default:Object(r["N"])((function(){return[Object(r["m"])(s,{header:"Anleitung: Druckereinstellungen damit die Karten gedruckt werden können"},{default:Object(r["N"])((function(){return[Object(r["i"])("div",null,[Object(r["i"])("p",null,[Object(r["m"])(l,{value:"1"}),oe]),Object(r["i"])("p",null,[Object(r["m"])(l,{value:"2"}),de,be,pe]),me,Object(r["m"])(l,{value:"3"}),he,ge,Oe])]})),_:1})]})),_:1})],64)}var fe=Object(r["n"])({name:"Step4",data:function(){return{greetingCardService:S}},mounted:function(){S.cardType||Se.push("1")},components:{},methods:{generatePDF:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S.createPdf(this.greetingCardService.addressData).then((function(e){console.log(e),t.$toast.add({severity:"success",summary:"Success Message",detail:"Order submitted",life:3e3})}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}});const ve=o()(fe,[["render",je]]);var De=ve,ke=[{path:"/",name:"Home",redirect:"/grusskarten/1"},{path:"/grusskarten",name:"Grußkarten",component:w,children:[{name:"Grußkarten-Step-1",path:"1",component:P},{name:"Grußkarten-Step-2",path:"2",component:ee},{name:"Grußkarten-Step-3",path:"3",component:ce},{name:"Grußkarten-Step-4",path:"4",component:De}]}],ye=Object(h["a"])({history:Object(h["b"])(),routes:ke}),Se=ye,xe=n("5bd2"),Ge=n("bb57"),we=n("4c62"),Ce=n("80b9"),Te=n("485c"),Ae=n("5b2c"),Me=n("6f85"),Ne=n("0afb"),Pe=n("4b7b"),ze=n("de53"),Fe=n("c8c8"),Ve=n("8398"),Ee=(n("098b"),n("e1ae"),n("4121"),n("bddf"),n("6981"),n("c0c3")),Be=Object(r["i"])("strong",null,"Kartengenerator",-1);function Le(e,t,n,a,i,c){var u=Object(r["D"])("Menubar");return Object(r["x"])(),Object(r["f"])(u,{model:e.items,class:"p-mt-4"},{start:Object(r["N"])((function(){return[Be]})),_:1},8,["model"])}var Re=Object(r["n"])({name:"Navigation",data:function(){return{items:[{label:"Grußkarten",icon:"pi pi-fw pi-file",to:"/grusskarten/1"}]}},components:{}});const He=o()(Re,[["render",Le]]);var _e=He;function Ie(e,t,n,a,i,c){var u=this,l=Object(r["D"])("InputText"),s=Object(r["D"])("Button");return Object(r["x"])(),Object(r["h"])(r["a"],null,[e.hidePasteField?Object(r["g"])("",!0):(Object(r["x"])(),Object(r["f"])(l,{key:0,modelValue:e.inputData,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputData=t}),onInput:t[1]||(t[1]=function(t){return e.dataChanged(t.data)}),ref:"inputData"},null,8,["modelValue"])),e.hidePasteField?(Object(r["x"])(),Object(r["f"])(s,{key:1,label:"Adressdaten löschen und neu einfügen",class:"p-button-secondary",onClick:t[2]||(t[2]=function(e){return u.resetData()})})):Object(r["g"])("",!0)],64)}n("1276"),n("e9c4");var Ze=function(){function e(){Object(v["a"])(this,e),this.inputData=null,this.parsedAddressData=[]}return Object(D["a"])(e,[{key:"parseData",value:function(e){if(e){var t=[];e.split("\n").forEach((function(e){t.push(e.split("\t"))}));var n=["Mitglieds-ID","Name","Geburtsdatum","Anrede","Vorname","Geschlecht","Alter","PLZ (Navi)","Ort (Navi)","Land (Navi)","Zusatz","Straße","Geburtsdatum (TAG)","Geburtsdatum (MONAT)","Geburtsdatum (JAHR)","Land","Exakte Bezeichnung","Titel"];if(JSON.stringify(t[0])!=JSON.stringify(n))return console.log("Data invalid"),!1;for(var r=1;r<t.length;r++){var a={mitgliedsId:t[r][0],name:t[r][1],geburtsdatum:t[r][2],anrede:t[r][3],vorname:t[r][4],geschlecht:t[r][5],alter:t[r][6],plzNavi:t[r][7],ortNavi:t[r][8],landNavi:t[r][9],zusatz:t[r][10],"straße":t[r][11],geburtsdatumTag:t[r][12],geburtsdatumMonat:t[r][13],geburtsdatumJahr:t[r][14],land:t[r][15],exakteBezeichnung:t[r][16],titel:t[r][17]};this.parsedAddressData.push(a)}return console.log("Data valid"),console.log(this.parsedAddressData),this.parsedAddressData}return console.log("Data invalid"),!1}}]),e}(),We=Object(r["n"])({name:"get-clipboard",data:function(){return{inputData:"",placeholderText:'Hier die kopierten Excel Daten einfügen (Rechtsklick > "Einfügen" auswählen)',hidePasteField:!1}},emits:["data-valid"],methods:{dataChanged:function(e){var t=new Ze;t.parseData(e)?this.onDataValid(t.parsedAddressData):(console.log(this.inputData),this.inputData="",console.log(this.inputData))},resetData:function(){this.inputData="",this.$emit("data-valid",!1),this.hidePasteField=!1},onDataValid:function(e){this.$emit("data-valid",e),this.hidePasteField=!0}},components:{}});const $e=o()(We,[["render",Ie]]);var Ke=$e,Ue=Object(r["e"])(p);Ue.use(Se),Ue.use(m["a"]),Ue.use(Te["a"]),Ue.component("Dialog",xe["a"]),Ue.component("Button",Ge["a"]),Ue.component("Navigation",_e),Ue.component("GetClipboard",Ke),Ue.component("Menubar",Ee["a"]),Ue.component("Textarea",we["a"]),Ue.component("Editor",Ce["a"]),Ue.component("DataTable",Ae["a"]),Ue.component("Column",Me["a"]),Ue.component("Steps",Ne["a"]),Ue.component("Badge",Pe["a"]),Ue.component("Accordion",ze["a"]),Ue.component("AccordionTab",Fe["a"]),Ue.component("InputText",Ve["a"]),Ue.mount("#app")}});
//# sourceMappingURL=app.504fbb02.js.map