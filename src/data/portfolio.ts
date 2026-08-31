type PortfolioImage = {
  src: string
  width: number
  height: number
}

export type PortfolioProject = {
  id: string
  category: string
  title: string
  shortDescription: string
  description: string
  image: PortfolioImage
  images?: PortfolioImage[]
  isReady?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'db-club',
    category: 'Premium',
    title: 'Butikowe Studio Ruchu',
    shortDescription:
      'Prestiżowa przestrzeń treningowa oferująca spersonalizowane zajęcia w kameralnej, wyciszającej atmosferze.',
    description:
      'Klub stawia na małe, stałe grupy i pełne zaangażowanie. Chciałem, żeby strona od razu budziła poczucie jakości z najwyższej półki. Połączyłem stonowane kolory i elegancką typografię, tworząc wizytówkę, która idealnie oddaje ekskluzywny charakter miejsca.',
    image: {
      src: '/client-projects/norbert-fila-db-club-projekt.ng.webp',
      width: 2560,
      height: 1287,
    },
    isReady: true,
  },
  {
    id: 'joy-english',
    category: 'Edukacja',
    title: 'JOY English School',
    shortDescription:
      'Lokalna placówka edukacyjna, w której nauka języka odbywa się w domowej, całkowicie bezstresowej atmosferze.',
    description:
      'Tworząc projekt strony dla JOY English School, zależało mi na oddaniu przytulnego i bezstresowego charakteru placówki. Wyeksponowałem zdjęcia kolorowych, przytulnych wnętrz, by budować zaufanie rodziców. Strona wyraźnie promuje nie tylko zajęcia indywidualne, ale również wakacyjne półkolonie',
    image: {
      src: '/client-projects/norbert-fila-joy-english.webp',
      width: 2560,
      height: 1287,
    },
  },
  {
    id: 'doradztwo-podatkowe',
    category: 'Prawo & Finanse',
    title: 'Doradztwo Podatkowe',
    shortDescription:
      'Niezależny ekspert finansowy oferujący rzetelne i przejrzyste wsparcie podatkowe dla przedsiębiorców.',
    description:
      'Branża finansowa i podatkowa opiera się na zaufaniu i rzetelności. Celem tego koncepcyjnego projektu było stworzenie wizytówki dla fikcyjnego doradcy, która od pierwszych sekund buduje wizerunek niezależnego eksperta. Zrezygnowałem ze skomplikowanego, żargonowego języka na rzecz jasnej i przejrzystej oferty. Minimalistyczny design, połączony z intuicyjną nawigacją oraz przemyślanym formularzem kontaktowym, drastycznie ułatwiłby potencjalnym klientom podjęcie decyzji o współpracy.',
    image: {
      src: '/client-projects/norbert-fila-biuro-podatkowe-projekt.webp',
      width: 2560,
      height: 1287,
    },
    isReady: true,
  },
  {
    id: 'santoro',
    category: 'Edukacja',
    title: 'Szkoła Językowa Santoro',
    shortDescription:
      'Kameralna szkoła językowa z szeroką ofertą nowoczesnych kursów dopasowanych do każdego poziomu.',
    description:
      'Szkoły językowe często borykają się z problemem przeładowanych informacjami, niefunkcjonalnych stron internetowych. Przeprowadziłem gruntowny redesign przestarzałej witryny szkoły Santoro, aby uporządkować ich szeroką ofertę edukacyjną w sposób czytelny i nowoczesny. Nowy układ sprawia, że klienci od razu widzą ceny i szybko znajdują to, czego potrzebują',
    image: {
      src: '/visual-projects/Santoro-szkola-jezykowa/1.webp',
      width: 2560,
      height: 1287,
    },
    isReady: true,
  },
  {
    id: 'abc-centrum',
    category: 'Zdrowie & Terapia',
    title: 'ABC Centrum Logopedii',
    shortDescription:
      'Specjalistyczna placówka terapeutyczna zapewniająca kompleksowe wsparcie rozwoju mowy u najmłodszych.',
    description:
      'Stworzyłem projekt strony, który porządkuje szeroką ofertę placówki i ułatwia rodzicom szybkie znalezienie odpowiedniego wsparcia dla dziecka. Czytelny układ, spokojna kolorystyka i jasne ścieżki kontaktu budują zaufanie oraz pomagają lepiej zrozumieć zakres terapii i zajęć.',
    image: {
      src: '/visual-projects/abc-centrum-logopedii/1.webp',
      width: 2560,
      height: 1287,
    },
  },
  {
    id: 'vellum-blanc',
    category: 'Premium',
    title: 'Vellum Blanc',
    shortDescription:
      'Autorska pracownia projektowa tworząca ekskluzywną, minimalistyczną papeterię na uroczystości ślubne.',
    description:
      'Stworzyłem koncepcyjny projekt wizualny dla marki oferującej ekskluzywną papeterię ślubną. Minimalistyczny design, otwarte przestrzenie (whitespace) i elegancka typografia odzwierciedlają luksusowy charakter produktów. Celem interfejsu było czytelne poprowadzenie klienta od inspiracji aż do intuicyjnego formularza zapytania.',
    image: {
      src: '/client-projects/norbert-fila-vellum-blanc.webp',
      width: 2560,
      height: 1287,
    },
  },
  {
    id: 'istqb-tester',
    category: 'Aplikacje Mobilne',
    title: 'ISTQB Tester',
    shortDescription:
      'Kieszonkowe kompendium wiedzy i precyzyjny symulator egzaminacyjny dla przyszłych testerów oprogramowania.',
    description:
      'Mobilna aplikacja do nauki do ISTQB CTFL z materiałem podzielonym na rozdziały, symulacją egzaminu, wyszukiwaniem w słowniczku i lokalnym śledzeniem postępu. Przejrzysty interfejs, czytelna nawigacja i dopracowane detale – tryb nauki, symulacja i system fiszek w jednym, spójnym doświadczeniu.',
    image: {
      src: '/app-portfolio/istqb-tester/home.webp',
      width: 1179,
      height: 2556,
    },
    images: [
      {
        src: '/app-portfolio/istqb-tester/home.webp',
        width: 1179,
        height: 2556,
      },
      {
        src: '/app-portfolio/istqb-tester/learning-mode.webp',
        width: 1179,
        height: 2556,
      },
      {
        src: '/app-portfolio/istqb-tester/flashcards.webp',
        width: 1179,
        height: 2556,
      },
    ],
  },
  {
    id: 'qraft',
    category: 'Aplikacje Mobilne',
    title: 'Qraft QR',
    shortDescription:
      'Błyskawiczne, pozbawione zbędnych funkcji narzędzie do zarządzania i odczytywania kodów QR.',
    description:
      'Narzędzie, które robi dokładnie to, czego potrzebujesz. Skaner i generator kodów QR w minimalistycznym, nowoczesnym wydaniu. Błyskawiczna detekcja linków na żywo, czytelna historia i udostępnianie jednym kliknięciem – zero zbędnych komplikacji.',
    image: {
      src: '/app-portfolio/qraft/scan-detected.webp',
      width: 1179,
      height: 2556,
    },
    images: [
      {
        src: '/app-portfolio/qraft/scan-detected.webp',
        width: 1179,
        height: 2556,
      },
      {
        src: '/app-portfolio/qraft/url-creation.webp',
        width: 1179,
        height: 2556,
      },
      {
        src: '/app-portfolio/qraft/history.webp',
        width: 1179,
        height: 2556,
      },
    ],
  },
  {
    id: 'studymood',
    category: 'Aplikacje Mobilne',
    title: 'Studymood',
    shortDescription:
      'Osobisty asystent nauki, który dba o zdrowy balans między wysoką produktywnością a codzienną higieną umysłu.',
    description:
      'Aplikacja multiplatformowa (Kotlin Multiplatform) łącząca produktywność z dbaniem o dobrostan psychiczny. Monitorowanie nastroju na mapie energii, timery nauki oraz szybkie narzędzia samoregulacji. Krótkie sesje relaksacyjne i statystyki pomagają wyrobić rutynę, a moduł śledzenia nauki to bonus dla produktywności.',
    image: {
      src: '/app-portfolio/studymood/check-in-homepage.webp',
      width: 1080,
      height: 2400,
    },
    images: [
      {
        src: '/app-portfolio/studymood/check-in-homepage.webp',
        width: 1080,
        height: 2400,
      },
      {
        src: '/app-portfolio/studymood/check-in-form.webp',
        width: 1080,
        height: 2400,
      },
      {
        src: '/app-portfolio/studymood/monthly-analysis.webp',
        width: 1080,
        height: 2400,
      },
    ],
  },
]
