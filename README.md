# Vragen les 1:

### Bekijk de headers in je browser via hulpprogramma’s voor ontwikkelaarsof ‘HTTP Headers extensie’ in je browser: 
- Ga naar: [base64decode](https://www.base64decode.org/en) bekijk de headers 
- Decodeer ‘SGVsbG8sIHdvcmxk’:  
_"Hello, world"_
- Bekijk de headers, wat is veranderd aan de method:      
Laden pagina:  
![Before](https://github.com/BoyK99/prog02-6/blob/master/img/before.png?raw=true)  
Na decoden:  
![After](https://github.com/BoyK99/prog02-6/blob/master/img/after.png?raw=true)  
_De header is van GET naar POST veranderd_
- Bezoek verschillende websites, en bekijk de request en response:  
_Google, Github_
- Kan je de cookies vinden:  
_F12->Netwerk->Selecteer document(type)->Cookies tab_


### Zoek uit welke http methods er zijn, en waarvoor je ze gebruikt bij RESTful Webservices.  
| Method  | Waarvoor?                              | Safe | Idempotent |
|---------|----------------------------------------|------|------------|
| GET     | Haal data op (vraag op)                | Ja   | Ja         |
| POST    | Geef data door (creëer nieuw)           | Nee  | Nee        |
| PUT     | Update data helemaal (update helemaal) | Nee  | Ja         |
| PATCH   | Update specifieke data (update deel)   | Nee  | Ja         |
| DELETE  | Verwijder data (delete)                | Nee  | Ja/Nee     |
| HEAD    | GET zonder body                        | Ja   | Ja         |
| OPTIONS | Vraagt welke methods mogen             | Ja   | Ja         |

### Wat betekent de term idempotency?
_"Idempotentie is de eigenschap van een object en/of een operatie daarop dat het object niet meer verandert als de operatie nogmaals wordt uitgevoerd" -Wikipedia_

### Wat betekent LTS?
_LTS betekent Long Time Support_

# Vragen les 2:
