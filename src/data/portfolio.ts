export type PortfolioProject = {
  id: string
  category: string
  title: string
  shortDescription: string
  description: string
  image: string
  images?: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'db-club',
    category: 'Premium',
    title: 'Butikowe Studio Ruchu',
    shortDescription: 'Luksusowa strona z dedykowanym systemem rezerwacji.',
    description:
      'Butikowe studia ruchu oraz marki premium wymagają specyficznego podejścia do estetyki cyfrowej. Projektując stronę dla tego prestiżowego miejsca, skupiliśmy się na oddaniu jego luksusowego klimatu za pomocą stonowanej palety barw i wyrafinowanej typografii. Priorytetem była nienaganna optymalizacja na urządzeniach mobilnych oraz pełna integracja z zewnętrznym systemem rezerwacji, co pozwala klientom błyskawicznie zapisywać się na zajęcia bez zbędnych przeszkód.',
    image: '/client-projects/norbert-fila-db-club-projekt.ng.webp',
  },
  {
    id: 'joy-english',
    category: 'Edukacja',
    title: 'JOY English School',
    shortDescription: 'Przytulna szkoła językowa promująca lokalne półkolonie.',
    description:
      'Tworząc stronę dla JOY English School, zależało mi na oddaniu przytulnego i bezstresowego charakteru placówki. Wyeksponowałem zdjęcia kolorowych, przytulnych wnętrz, by budować zaufanie rodziców. Strona wyraźnie promuje nie tylko zajęcia indywidualne, ale również wakacyjne półkolonie',
    image: '/client-projects/norbert-fila-joy-english.webp',
  },
  {
    id: 'doradztwo-podatkowe',
    category: 'Prawo & Finanse',
    title: 'Doradztwo Podatkowe',
    shortDescription: 'Profesjonalna wizytówka budująca wizerunek eksperta.',
    description:
      'Branża finansowa i podatkowa opiera się na zaufaniu i rzetelności. Celem projektu było stworzenie profesjonalnej wizytówki internetowej dla niezależnego doradcy, która od pierwszych sekund buduje wizerunek eksperta. Zrezygnowaliśmy ze skomplikowanego, żargonowego języka na rzecz jasnej i przejrzystej oferty. Minimalistyczny design, połączony z intuicyjną nawigacją oraz przemyślanym formularzem kontaktowym, drastycznie ułatwia potencjalnym klientom podjęcie decyzji o współpracy.',
    image: '/client-projects/norbert-fila-biuro-podatkowe-projekt.webp',
  },
  {
    id: 'santoro',
    category: 'Edukacja',
    title: 'Szkoła Językowa Santoro',
    shortDescription: 'Przejrzysty redesign nastawiony na łatwość zapisu.',
    description:
      'Kameralne szkoły językowe często borykają się z problemem przeładowanych informacjami, niefunkcjonalnych stron internetowych. Przeprowadzony redesign miał na celu uporządkowanie szerokiej oferty edukacyjnej w sposób czytelny i nowoczesny. Dzięki zastosowaniu dużej ilości otwartej przestrzeni wizualnej oraz zoptymalizowaniu ścieżki użytkownika, nowa witryna naturalnie prowadzi odwiedzającego od pierwszego zainteresowania kursem aż do szybkiego wypełnienia formularza rekrutacyjnego na najbliższy semestr.',
    image: '/visual-projects/Santoro-szkola-jezykowa/1.webp',
  },
  {
    id: 'abc-centrum',
    category: 'Zdrowie & Terapia',
    title: 'ABC Centrum Logopedii',
    shortDescription: 'Projekt UI porządkujący szeroką ofertę terapeutyczną.',
    description:
      'Stworzyłem projekt strony, który porządkuje szeroką ofertę placówki i ułatwia rodzicom szybkie znalezienie odpowiedniego wsparcia dla dziecka. Czytelny układ, spokojna kolorystyka i jasne ścieżki kontaktu budują zaufanie oraz pomagają lepiej zrozumieć zakres terapii i zajęć.',
    image: '/visual-projects/abc-centrum-logopedii/1.webp',
  },
  {
    id: 'vellum-blanc',
    category: 'Premium',
    title: 'Vellum Blanc',
    shortDescription: 'Luksusowy projekt UI dla pracowni papeterii ślubnej.',
    description:
      'Stworzyłem koncepcyjny projekt wizualny dla marki oferującej ekskluzywną papeterię ślubną. Minimalistyczny design, otwarte przestrzenie (whitespace) i elegancka typografia odzwierciedlają luksusowy charakter produktów. Celem interfejsu było czytelne poprowadzenie klienta od inspiracji aż do intuicyjnego formularza zapytania.',
    image: '/client-projects/norbert-fila-vellum-blanc.webp',
  },
  {
    id: 'istqb-tester',
    category: 'Aplikacje Mobilne',
    title: 'ISTQB Tester',
    shortDescription: 'Aplikacja mobilna do nauki do egzaminu ISTQB.',
    description:
      'Mobilna aplikacja do nauki do ISTQB CTFL z materiałem podzielonym na rozdziały, symulacją egzaminu, wyszukiwaniem w słowniczku i lokalnym śledzeniem postępu. Przejrzysty interfejs, czytelna nawigacja i dopracowane detale – tryb nauki, symulacja i system fiszek w jednym, spójnym doświadczeniu.',
    image: '/app-portfolio/istqb-tester/home.webp',
    images: [
      '/app-portfolio/istqb-tester/home.webp',
      '/app-portfolio/istqb-tester/learning-mode.webp',
      '/app-portfolio/istqb-tester/flashcards.webp',
    ],
  },
  {
    id: 'qraft',
    category: 'Aplikacje Mobilne',
    title: 'Qraft QR',
    shortDescription: 'Skaner i generator kodów QR w minimalistycznym wydaniu.',
    description:
      'Narzędzie, które robi dokładnie to, czego potrzebujesz. Skaner i generator kodów QR w minimalistycznym, nowoczesnym wydaniu. Błyskawiczna detekcja linków na żywo, czytelna historia i udostępnianie jednym kliknięciem – zero zbędnych komplikacji.',
    image: '/app-portfolio/qraft/scan-detected.webp',
    images: [
      '/app-portfolio/qraft/scan-detected.webp',
      '/app-portfolio/qraft/url-creation.webp',
      '/app-portfolio/qraft/history.webp',
    ],
  },
  {
    id: 'studymood',
    category: 'Aplikacje Mobilne',
    title: 'Studymood',
    shortDescription: 'Aplikacja łącząca produktywność i dobrostan psychiczny.',
    description:
      'Aplikacja multiplatformowa (Kotlin Multiplatform) łącząca produktywność z dbaniem o dobrostan psychiczny. Monitorowanie nastroju na mapie energii, timery nauki oraz szybkie narzędzia samoregulacji. Krótkie sesje relaksacyjne i statystyki pomagają wyrobić rutynę, a moduł śledzenia nauki to bonus dla produktywności.',
    image: '/app-portfolio/studymood/check-in-homepage.webp',
    images: [
      '/app-portfolio/studymood/check-in-homepage.webp',
      '/app-portfolio/studymood/check-in-form.webp',
      '/app-portfolio/studymood/monthly-analysis.webp',
    ],
  },
]
