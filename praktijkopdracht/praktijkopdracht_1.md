#### **Praktijkopdracht 1 - CMTPRG04-6**
Bouw een eenvoudige webservice, waarmee je een collectie kunt beheren volgens
de in de lessen behandelde RESTful specificaties. Het onderwerp van de collectie is
vrij, het is echter **niet toegestaan** om de demonstratie-service met notes uit de
lessen na te bouwen, of een bestaande tutorial in te leveren.  

Ophalen van informatie is mogelijk als json. Andere formaten zijn niet mogelijk.
Hiervoor moet gekeken worden naar de Accept-header van het request. Het sturen
van informatie naar de service moet als json en als x-www-form-urlencoded kunnen,
hiervoor moet gekeken worden naar het Content-type van het request.  

Als een nieuw item wordt toegevoegd zal er gecontroleerd moeten worden of alle
informatie is in gevuld (lege velden zijn niet toegestaan, verder mogen er geen
restricties aan de invoer zijn – gebruik dus **alleen strings** voor invoer, getallen en
datums kunnen niet alle waarden bevatten)  

Met OPTIONS is het mogelijk om op te vragen welke methoden op een uri
ondersteund worden.  

_Collectieresource_  
De service bevat een collectieresource waar je zowel informatie kunt ophalen als
nieuwe informatie kunt plaatsen. Met de parameter limit moet hier het aantal
resources dat in de collectie getoond wordt beperkt worden, en met de parameter
start kunt je kiezen hoe ver je in de collectie wilt beginnen (start=1 is vanaf de eerste
resource in de collectie).
Voor het nakijken moeten er meer dan 5 resources in de collectie staan. Zonder limit
moeten alle items getoond worden (geen default limit).  

_Detailresources_  
Voor elke resource uit de collectie moet er een detailweergave zijn die aangepast
(alleen in zijn geheel, niet gedeeltelijk) en verwijderd kan worden. De resource heeft
minstens 3 velden die aangepast kunnen worden (zie boven) waarvan er minstens 2
ook in de collectie zichtbaar zijn.
Voor de beoordeling is het belangrijk dat de aan te passen velden niet leeg mogen
zijn, en vrije invoer hebben (bijv. geen date, of erg korte varchar waardoor ze
‘afgehakt’ worden).  

Alle communicatie van en naar de webservice moet uiteraard via de uniform interface
afgehandeld worden.  

_Oplevering_  
Voor de beoordeling zet je de webservice online. De broncode lever je in via
Cumlaude.  

In een directory van je studentspace zet je een bestand met de titel
webservice.json, waarin je de locatie van je service zet en een korte omschrijving,
zodat de checker hem kan vinden.  

Als je webservice klaar is controleer je hem op:  
https://checker.basboot.nl/  

Waarna je hem inlevert via natschool (broncode en URI van de collectie).  

Je kunt zo vaak controleren als je wilt!  

_Deadline om voor beoordeling in aanmerking te komen: 16 december 2022 17:00_

**Beoordeling**

| Cijfer        | Eisen                                                                                             |
| -----------   | -----------                                                                                       |
| ND            | Opdracht niet ingeleverd, niet gecontroleerd met de checker, of voldoet niet aan de minimale eis. |
| 6             | Webservice bevat geen fouten, alleen warnings in de pagination of andere onderdelen.              |
| 8             | Webservice bevat geen fouten, geen warnings in de pagination, maar nog wel andere warnings.       |
| 10            | Webservice bevat geen fouten en warnings.                                                         |


NB. Deze service wordt individueel beoordeeld. Het is dus niet toegestaan werk van
een ander, of een voorbeeldopdracht uit een tutorial in te leveren.  

**Voorbeeld service**  
Als voorbeeld voor het uitwerken van een webservice kan je de notitie-demo
bekijken:
http://docent.cmi.hro.nl/bootb/demo/notes/

**Voorbeeld webservice.json**
```json
{
    "uri":"http://docent.cmi.hro.nl/bootb/demo/notes/",
    "uitleg": "dit is een voorbeeld-service"
}
```

