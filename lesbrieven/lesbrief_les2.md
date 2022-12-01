#### **CMTPRG04-6, Werkcollege –Lesbrief 2** 
_Theorie_   
- What is REST?  
Overzicht en achtergrondinformatie van de REST architectuur  
https://www.codecademy.com/articles/what-is-rest 
- Cheat sheet linux commando’s  
https://cheatography.com/davechild/cheat-sheets/linux-command-line/  

_Tutorials(optioneel, aanvulling/extra uitleg bij de lessen)_  
- Learn The MERN Stack -Express & MongoDB Rest API  
https://www.youtube.com/watch?v=-0exw-9YJBo
- Node Mongodb Express Restful Api (playlist)    
https://www.youtube.com/playlist?list=PLS1QulWo1RIYsfKyjbctLaMvEJw3kZItQ
- Build A REST API With Node.js, Express, & MongoDB –Quick  
https://www.youtube.com/watch?v=fgTGADljAeg
- Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial  
https://www.youtube.com/watch?v=vjf774RKrLc&t=1s
  
  
  
  
**_Opdrachten_**  

_Postman_  
- Installeer een REST Client (bijv. Postman)  
- Haal met GET de collectie https://docent.cmi.hro.nl/bootb/demo/notes/ op, zowel JSON als XML  
_GET docent.cmi.hro.nl/bootb/demo/notes_
- Haal een detail resource op om de JSON indeling te zien  
_docent.cmi.hro.nl/bootb/demo/notes/20923_
- Maak nu een nieuwe note aan (als JSON)  
```
{
    "title": "faka neef",
    "body": "Bee Movie Better than Farmville, anyway",
    "author": "Poepje"
}
```
- Maak nog een nieuwe note aan (nu als x-www-form-urlencoded)  
![image](https://user-images.githubusercontent.com/89838779/205070056-9c11bc23-2f0b-4ee9-bd0f-f9dafdc967c1.png)
- Pas je note aan(PUT)  
![image](https://user-images.githubusercontent.com/89838779/205070952-5995cc6a-9f6a-4931-8c5c-7ba8d1851b71.png)
- Verwijder je note weer(DELETE)  
![image](https://user-images.githubusercontent.com/89838779/205071040-01431cc7-6451-4781-acca-6b09b5db7555.png)  

_Praktijkopdracht (server)_  
_Als je nog geen VPS hebt, moet je dat eerst nog regelen (zie lesbrief week 1)._  
- Installeer Node op je server via ssh (zie link onderaan de lesbrief, of screencast op Teams).
- Zet je hello world project van vorige week op de server en check of het werkt.  


_Praktijkopdracht (local, oefenen zonder db)_ 
- Bedenk een structuur voor een item
- Creeer array met json objecten (collection)
- Implementeer GET om de collectie te tonen
- Implementeer GET voor een detail uit de array

_Praktijkopdracht (local, start eindopdracht met db)_
- Installeer MongoDB lokaal
  - Mac OS: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/  
  (het is het handigst om hem als service te starten na installatie:  
  ```brew services start mongodb/brew/mongodb-community)```
  - Windows: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/  
  (het is het handigst om als service te installeren).
- Lees de opdracht omschrijving van praktijkopdracht 1 op Cumlaude(!).
- Bedenk een onderwerp voor je eerste praktische opdracht. Het is toegestaan een tutorial te volgen, **maar je moet deze wel aanpassen aan je eigen onderwerp!**
- Maak de GET, POST en OPTIONS(1) voor de collectie resource voor je opdracht. 
- Maak ook de GET en OPTIONS voor de detail-resource.  

(1) Let op: Je beantwoordt een OPTIONS request altijd met ‘Allow’. Eventueel kan je (extra) ook de ‘Access-Control-Allow-Methods’ toevoegen. 
- Gebruik een poort tussen 8000-9000 voor je node applicatie anders werkt hij op de server niet.  

_Praktijkopdracht (server)_  
- Installeer MongoDB op de server (zie de link onderaan de lesbrief, of screencast op Teams) en test je project op de server.  
NB. De data in je database wordt uiteraard niet overgezet naar de server, dus je GET geeft een lege lijst terug.

_Installatie op de server (screencastsvan de installatie zijn beschikbaar in Teams)_
- Node.js  
https://techviewleo.com/how-to-install-node-js-18-lts-on-ubuntu/  
**(Kies installatie onder ‘Option 2’)**
- MongoDB
  - Er is helaas nog geen officiele versie van mongodb voor Ubuntu 22, vandaar dat we een oude library (libssl1) moeten installeren **(tweede post!)**:  
  https://askubuntu.com/a/1403683
  - Daarna kan mongodb wel geinstalleerd worden:  
  https://blog.eldernode.com/install-mongodb-on-ubuntu-22-04/
