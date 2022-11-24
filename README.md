## Vragen les 1:

### Bekijk de headers in je browser via hulpprogramma’s voor ontwikkelaarsof ‘HTTP Headers extensie’ in je browser: 
- Ga naar: [base64decode](https://www.base64decode.org/en) bekijk de headers 
- Decodeer ‘SGVsbG8sIHdvcmxk’:  
"Hello, world"
- Bekijk de headers, wat is veranderd aan de method:  
Before  
![Before](https://github.com/BoyK99/prog02-6/blob/master/img/before.png?raw=true)  
After  
![After](https://github.com/BoyK99/prog02-6/blob/master/img/after.png?raw=true)  
De header is van GET naar POST veranderd
- Bezoek verschillende websites, en bekijk de request en response:  
Google, Github
- Kan je de cookies vinden:  
F12->Netwerk->Selecteer document(type)->Cookies tab


### Zoek uit welke http methods er zijn, en waarvoor je ze gebruikt bij RESTful Webservices.  
| Method | Waarvoor?                              | Safe | Idempotent |
|--------|----------------------------------------|------|------------|
| GET    | Haal data op (vraag op)                | Ja   | Ja         |
| POST   | Geef data door (creer nieuw)           | Nee  | Nee        |
| PUT    | Update data helemaal (update helemaal) | Nee  | Ja         |
| PATCH  | Update specifieke data (update deel)   | Nee  | Ja         |
| DELETE | Verwijder data (delete)                | Nee  | Ja/Nee     |
| HEAD   | GET zonder body                        | Ja   | Ja         |
- HTTP GET      = Haal data op (vraag op) - Safe en potent
- HTTP POST     = Geef data door (creer nieuw) - niet safe niet potent
- HTTP PUT      = Update data helemaal (update helemaal) - niet safe wel potent
- HTTP PATCH    = Update specifieke data (update deel) - niet safe wel potent
- HTTP DELETE   = Verwijder data (delete) - niet safe twijfel potent
- HTTP HEAD     = GET zonder body - safe en potent

### Wat betekent de term idempotency?
"Idempotentie is de eigenschap van een object en/of een operatie daarop dat het object niet meer verandert als de operatie nogmaals wordt uitgevoerd" -Wikipedia

### Wat betekent LTS?
LTS betekent Long Time Support
