#### **CMTPRG04-6, Werkcollege – Lesbrief 1**

_Theorie_
- “How node.js works”  
  Heel kort overzicht van hoe node.js werkt  
  https://www.youtube.com/watch?v=jOupHNvDIq8

 - Node.js en npm  
   Documentatie en download Node 18.12.1 LTS  
   https://nodejs.org/en/

- “What is REST”  
  Overzicht en achtergrondinformatie van de REST architectuur  
  https://www.codecademy.com/articles/what-is-rest

_Opdrachten_ 
- Later in deze module heb je een Ubuntu webserver nodig, je kunt kiezen om: 
  - Een vps van de hogeschool te gebruiken:  
    Deze vps is niet zo snel en flexibel als commerciële oplossingen. Deze vps wordt na dit kwartaal weer gewisten kan je alleen gebruiken voor deze cursus.  
  https://forms.office.com/r/nchaARcJH7  
  (Project code: CMTPRG04-6, Ubuntu, Einddatum: 6/2/2023)

  - Een eigen vps te gebruiken:  
    Als je die (nog) niet hebt zijn er betaalde en gratis oplossingenbeschikbaar, die je ook na dit kwartaal kunt blijven gebruiken. Tip: Via Github education zijn er     verschillende mogelijkheden om als student tijdelijk gratis een betaalde server te huren.  

- Lees de cursushandleiding.

- Bekijk de headers in je browser via hulpprogramma’s voor ontwikkelaarsof ‘HTTP Headers extensie’ in je browser: 
  - Ga naar: https://www.base64decode.org/en bekijk de headers 
  - Decodeer ‘SGVsbG8sIHdvcmxk’  
  _"Hello, world"_
  - Bekijk de headers, wat is veranderd aan de method  
  Laden pagina:  
  ![Before](https://github.com/BoyK99/prog02-6/blob/master/img/before.png?raw=true)  
  Na decoden:  
  ![After](https://github.com/BoyK99/prog02-6/blob/master/img/after.png?raw=true)  
  _De header is van GET naar POST veranderd_
  - Bezoek verschillende websites, en bekijk de request en respons.  
  _Google, Github_
  - Kan je de cookies vinden?  
  _F12->Netwerk->Selecteer document(type)->Cookies tab_
  
- Installeer op je laptop node.js 18.12.1 LTS en npm.

- Maak een “Hello World” pagina met ‘express’ en start deze met ‘nodemon’ om te testen of de installatie helemaal gelukt is. 
 
 _Voorbereiding Theorieles_ 
 - Zoek uit welke http methods er zijn, en waarvoor je ze gebruikt bij RESTful Webservices.  
  
| Method  | Waarvoor?                              | Safe | Idempotent |
|---------|----------------------------------------|------|------------|
| GET     | Haal data op (vraag op)                | Ja   | Ja         |
| POST    | Geef data door (creëer nieuw)          | Nee  | Nee        |
| PUT     | Update data helemaal (update helemaal) | Nee  | Ja         |
| PATCH   | Update specifieke data (update deel)   | Nee  | Ja         |
| DELETE  | Verwijder data (delete)                | Nee  | Ja/Nee     |
| HEAD    | GET zonder body                        | Ja   | Ja         |
| OPTIONS | Vraagt welke methods mogen             | Ja   | Ja         | 
 - Wat betekent de term idempotency?  
 _"Idempotentie is de eigenschap van een object en/of een operatie daarop dat het object niet meer verandert als de operatie nogmaals wordt uitgevoerd" -Wikipedia_
 - Wat betekent LTS?  
 _LTS betekent Long Time Support_
