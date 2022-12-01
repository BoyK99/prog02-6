CMTPRG04-6, Werkcollege –Lesbrief 3  
_Theorie_  
- Zie video’s van vorige week.  
_Opdrachten_  
- Zorg dat je collectie in de standaard structuur –zoals behandeld tijdens de les-komt:  
```
{  
  "items": [ ...hier de collectie met items... ],  
  "_links": { ...met link naar self...},  
  "pagination": {  
         temp: “pagination maken we later af”
  }
}  
```  
- Zet je array met items in “items”.
- Vul het “_ links” object met de juiste gegevens voor de collectie.
- Let op! Later moet de dummy content natuurlijk echte pagination worden, maar zet er nu gewoon even iets in zodat de checker ziet dat je basis structuur klopt
- Voeg ook een “_ links” object toe aan al je itemsin de collectiedoor een virtual property toe te voegen aan je model.
- Lees de opdrachtomschrijving opCumlaude (als je dat nog niet gedaan hebt).
- Zet je node-project op je vps.
- Plaats een webservice.json op je studentspace (zie opdrachtomschrijving) met een link naar je service.
- Laat je serviceeen eerste keer bekijken door dechecker.
- Ga verder met de detail resource (PUT en DELETE) voor je service. TIP: PUT van detail lijkt erg op POST van de collectie. 
- Handel de Accept header af voor GET (alleen application/json is toegestaan, al het andere wordt geweigerd)
- Handel de Content-Typeheader af voor POST(alleen application/json en application/x-www-form-urlencoded zijntoegestaan, al het andere wordt geweigerd)
- Zorg dat overal de correctie statuscodes/errors gebruikt worden.
- Ga verder met de opdracht.  

<br>

_Voorbereiding Theorieles_  
- Bedenk een scenario voor de statuscodes: 200, 201, 204, 400, 401, 404, 500, 501.
