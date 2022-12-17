#### **CMTPRG04-6, Werkcollege – Lesbrief 4**

**_Theorie_**   
 Naslag: 
 * ES6 features: http://es6-features.org/  
 * Understanding ES6: https://leanpub.com/understandinges6/read  

**_Opdrachten_**  
Onderstaande opdrachten gaan over pagination. Maak voor je hieraan begint eerst alle verplichte onderdelen (zie vorige lesbrievenen opdrachtomschrijving) af, als je die nog niet af hebt.  
* Kijk in de demo (notes-service) of in de presentatie van les 4 hoe een pagination object eruit ziet.
* Haal start en limit uit de query-string en zet ze om naar getallen met parseInt(). Je pagination hoeft alleen maar de werken met zowel een start als een limit. 
Als één van beiden niet opgegeven is mag je de limit/start negeren.  
_Tip: parseInt zet undefined om naar NaN, je test dit met de functie isNaN()_ 


Voor de pagination van de collectie heb je een aantal gegevens nodig. Het is handig om daar eerst functies voor te schrijven. 
* Schrijf de functie **currentItems(total, start, limit)** die het getoondeaantal items in de collectie berekent  
  _Als er geen limit/startis dan is het huidige aantal items het totale aantal items._


* Schrijf de functie **numberOfPages(total, start, limit)** die het aantal pagina’s berekent(halve pagina’s bestaan niet!).  
  _Als er geen limit/start is dan is het aantal pageshettotale aantal pages.Voor de liefhebber: dit kan met een recursieve functie, maar hoeft niet._


* Schrijf de functie **currentPage(total, start, limit)** die berekent op welke pagina je zit.  
  _Als er geen limit/startis zit je op pagina 1.Voor de liefhebber: dit kan ook met een recursieve functie._


* Schrijf de functies **firstPageItem(total, start, limit)** en **lastPageItem(total, start, limit)** die berekenenwat de startnummers van de items  op de eerste en laatste pagina zijn.  
firstPageItemkan natuurlijk in 1 regel ;-)  
  _En voor de liefhebber kan lastPageItemmet een recursieve functie._


* Schrijf de functies **previousPageItem(total, start, limit)** en **nextPageItem(total, start, limit)** die berekenen wat de start-nummers van de items vorige en volgende pagina zijn.  
  _Die kunnen heel kort (als je gebruik maakt van de functies die je al hebt)_


* Schrijf de functie **getFirstQueryString(total, start, limit)** en *getLastQueryString (total, start, limit)** die de query achter de uri geven voor de eerste/laatste pagina (bijv. “?start=1&limit=10”).  
  _Zonder start/limitmag je de query leeg laten (“”)._


* Schrijf de functie **getPreviousQueryString (total, start, limit)** en **getNextString (total, start, limit)** die de query achter de uri geven voor de vorige/volgende pagina.
  _Zonder start/limit mag je de query leeg laten (“”).  


* Schrijf de functie **itemToPageNumber(total, start, limit, itemNumber)** die berekent wat het paginanummer is dat bij een startnummer hoort.  


* Schrijf nu de functie **createPagination (total, start, limit)** Alle functies die je gemaakt hebt kan je hier als helper-functies in plaatsen en gebruiken.