# Sass & RWD - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
BARDZO WAŻNE - Wasze zadania są sprawdzane przy pomocy automatycznego systemu. Żeby odpowiedzi zostały uznane za poprawne, strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcje i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane w zadaniu.


### Dzień 1 - Sass
> Zadania z tego dnia wykonuj w pliku main.scss oraz index.html. Wygeneruj odpowiedni plik .css do folderu css

#### Zadanie 1

Napisz mixin o nazwie `setTooltip`, za pomocą którego będzie można ustawić dowolny tekst na tooltipie. Jako argument przekaż tekst do wyświetlenia oraz kolor tooltipa. Niech tooltipy pojawiają się po najechaniu na element `ul` o klasie `lista` znajdujący się w pliku `index.html`
Podpowiedź: Stwórz odpowiedni pseudoelement np. :before lub :after.

#### Zadanie 2

Na podstawie poniższej mapy (za pomoca odpowiedniej funkcji sass), zrób listę zawierającą same wartości.
Następnie za pomocą odpowiedniej pętli ustaw wielkości dla nagłówków z pliku `index.html`, od największego do najmniejszego, wykorzystując wartości listy.

```
$font-sizes: (
 fs1: 100px,
 fs2: 50px,
 fs3: 6px
 );
```
Skorzystaj: http://sass-lang.com/documentation/Sass/Script/Functions.html
