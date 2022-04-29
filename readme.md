## DOM public index.html

### naudojam data/data.js

1. + Sugeneruoti items ul elemente li elementus su prekiu pavadinimu ir kaina ir mygtuku buy
2. + pasaudus mygtuka nuperkam preke. Tai reiskia pasalinam ja is saraso.
   + 2.1. Susikuriam masyva cart. jis tures objektus {title: , price: , qty: 1}. paspaudus buy, ikeliam ta preke i cart masyva.
   + 2.2. pridedant preke kuri jau yra padidinti jos kieki cart masyve(kai netrinam pridedami)
3. atvaizduojam cart masyva po prekiu sarasu.

4. Pagaminam lentele su title(primi trys title zodziai), price(kaina), category(kategorija), image(paveiklselis)

5. pridedam select lauka virs lenteles/saraso kuriame yra visos kategorijos is items. Parinkus kategorija rodom tik tos kategorijos items

6. <button id="sort-price">Sort By Price</button> nusitaikyti ir iskviesti sortByPrice() kuri iskonsolina "sort"

7. + sortByPrice() fn viduje isrikiuoti items masyva ir paduoti ji i makelShopList

8. + paspaudus sortByPrice kiekviena karta keiciam rikiavimo tvarka asc | desc

9. Vietoj li elementu sugeneruoti korteles su paveiksleliais [mazdaug tokias](https://prnt.sc/fKmiy264NYT5)

10. prideti buy mygtuka prie korteliu, padaryti kad veiktu

11. po to kai sugeneruojam lentele. Paspaudus ant qty lauko isrikiuojam eilutes pagal qty. paspaudus dar karta keiciasi desc => asc ir atvirksciai

12. virs lenteles idedam input ir mygtuka paieskai. ivedus reiksme i
    input ir paspaudus mygtuka, atrenkam tik tas eilutes kuriu title dalyje yra ivesta i search lauka fraze.

    12.1. ivedus 2 ir daugiau simboliu su kiekvienu naujo simbolio ivedimu ar istrynimu atrenkam eilutes kuriu title turi ivesta fraze

13. Paspaudus ant title lauko rikiuojam pagal title pridedam rodykles simboli kuria kryptimi rikiuojame.

### cart

14. krepselyje suskaiciuojam bendra krepselio kaina

15. paskaiciuojam 21% pvm nuo kainos ir atvaizduojam

16. pridedam mygtuka checkuot, kuri paspaudus visos prekes pasalinamos is krepselio ir ekrane su atvaizduojame kortele kiek is viso sumoketi.

## tarpine uzduotis

1t. Paspaudus mygtuka 'minus' mazinam counter reiksme.
2t. Neleisti mazinti maziau nulio.
