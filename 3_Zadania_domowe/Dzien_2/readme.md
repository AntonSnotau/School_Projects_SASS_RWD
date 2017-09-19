# Sass & RWD - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
BARDZO WAŻNE - Wasze zadania są sprawdzane przy pomocy automatycznego systemu. Żeby odpowiedzi zostały uznane za poprawne, strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcje i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane w zadaniu.


### Dzień 2 
> Zadania z tego dnia wykonuj w pliku main.scss oraz index.html. Wygeneruj odpowiedni plik .css do folderu css

#### Zadanie 1 - Jednostki RWD

W pliku `index.html` znajdziesz sekcję o nazwie `test_units`. Przyjrzyj się jej dokładnie. Wewnąrz jest kilka elementów.
Ustaw sekcji `test_units` wielkość tekstu na `30px`, dodaj jej obramowanie i ustaw szerokość na `25em` oraz wysokość na `5em`.
Ustaw również elementowi `header` wielkość tekstu na `50%`.

Twoim zadaniem jest napisanie jednej reguły css dla elementów span, która ustawi im wielkość tekstu (za pomocą jednostki `em`) w taki sposób, aby:
* span pierwszy był o połowę mniejszy od wielkości tekstu zdefiniowanego dla sekcji `test_units`,
* span drugi miał taką samą wielkość jak tekst zdefiniowany dla sekcji  `test_units`.


#### Zadanie 2 - Media Queries i Mobile first
W pliku `index.html` znajdziesz sekcję o nazwie `blocks`.
Stwórz w niej 5 elementów `div` o klasie `block` i każdemu ustaw następujące własności:
* szerokość na `25%`
* wysokość na `100vh`
* obramowanie na `1px solid red`
* ustaw je również obok siebie (jeśli będziesz mieć problem, przypomnij sobie o box-model)

Następnie:
* na ekrantach mniejszych niż `450px`, ustaw elementy pod sobą i ukryj ostatni,
* na ekranach większych niż `450px`, ale mniejszych niż `720px`, ustaw elementy obok siebie, pokaż ostatni i ukryj pierwszy,
* na ekranach większych niż `720px`, ale mniejszych niż `1024px`, pokaż tylko ostatni i pierwszy element.
Skorzystaj z podejścia **Mobile first**.
