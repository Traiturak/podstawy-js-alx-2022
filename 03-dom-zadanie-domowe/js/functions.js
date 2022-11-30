// Zadania do zrobienia w domu z tematu funkcji

// 1. Stworz tablice obiektów, zawierającą Twoje ulubione filmy. Kazdy film niech posiada takie wlasciwosci jak tytul, rok produkcji i ocena (number od 1 do 10). Nastepnie napisz program (bez uzycia funkcji), ktory wypisze w konsoli, ktore filmy maja ocene powyzej 8.
const myFilms = [
          {
            tytul: 'Happy Family',
            rok produkcji: 2017,
            ocena: 9
          },
          {
            tytul: 'The Queen's Gambit',
            rok produkcji: 2020,
            ocena: 9
          },
          {
            tytul: 'The Matrix',
            rok produkcji: 1999,
            ocena: 10
          }
        ];

 for (let films of myFilms) {
    if(films.ocena > 8) {
      filmsAboveCertainMark.push(films.name)
      console.log(`${filmsAboveCertainMark.join(' i ')} ma ocene wiecej niz 8`)
    }
  }

  if(filmsAboveCertainMark.length < 8) {
    console.log(`Zaden z filmow nie ma oceny wiecej niz 8`)
  }

// Przyklad w konsoli
// Film Ojciec Chrzestny ma wg mnie ocene 10
// Film Rozowa Pantera ma wg mnie ocene 9
// Dla filmu z ocena 2, nie wyswietl nic



// 2. Napisz funkcje multiply, ktora przyjmie dwie liczby a nastepnie wyswietli w konsoli wynik mnozenia
 const multiply = () => {
const userNumber1 = parseInt(prompt('Podaj pierwsza liczbe'));
const userNumber2 = parseInt(prompt('Podaj druga liczbe'));
          console.log(`Wynik mnozenia liczb ${userNumber1} * ${userNumber2}`)
        }
        multiply()


// 3. Napisz funkcje o nazwie whoIsTaller, ktorej zadanie jest nastepujace:
// - funkcja ma pobrac wzrost pierwszego uzytkownika
// - funkcja ma pobrac wzrost drugiego uzytkownika
// - funkcja ma wyswietlic informacje, kto jest wyzszim

const whoIsTaller = () => {
const userNumber1 = parseInt(prompt('Wpisz swój wzrost'));
const userNumber2 = parseInt(prompt('Wpisz swój wzrost'));
          if (userNumber1 > userName2) {
            console.log(`Wzrost ${userNumber1} wiekszy za wzrost ${userNumber2}`)
          } else if (userNumber1 < userNumber2) {
            console.log(`Wzrost ${userNumber2} wiekszy za ${userNumber1}`);
          } else {
            console.log('Rost uzytkownikow jest rowny pomiedzy soba');
          }
        }
        whoIsTaller()


// 4. Napisz funkcje o nazwie findTheBestMovie, ktora przyjmie jako parametr liste Twoich ulubionych filmow i nastepnie zwroci napis "Moim ulubionym filmem jest Ojciec Chrzestny z ocena 10".
const myFilms = [
  { tytul: 'Ojciec Chrzestny', gatunek: 'gangsterski', ocena: 10 },
  { tytul: 'Rambo: Ostatnia krew', gatunek: 'action', ocena: 6 },
  { tytul: 'Joker', gatunek: 'dramat', ocena: 7 }
]
const findTheBestMovie = (listOfFilms, gatunek, ocena) => {
  let found = false;
  for(let films of listOfFilms) {
    if(films.gatunek === tytul && films.ocena === ocena) {
      found = true;
    }
  }
  if(found) {
    console.log(`"Moim ulubionym filmem jest ${tytul} z ocena ${ocena}`)
  } else {
    console.log(`Nie ma filmu ${tytul} z ocena ${ocena}`)
  }
}

findTheBestMovie(films, 'gangsterski', 10)