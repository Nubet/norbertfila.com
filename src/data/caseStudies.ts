type CaseStudyImage = {
  src: string
  width: number
  height: number
}

export type CaseStudyData = {
  id: string
  title: string
  clientDescription: string
  role: string
  industry: string
  year: string
  openingImage: CaseStudyImage
  overviewText: string
  galleryImage1: CaseStudyImage
  galleryImage2: CaseStudyImage
  fullPageMockup: CaseStudyImage
  nextProjectSlug?: string
  prevProjectSlug?: string
  nextProjectName?: string
  prevProjectName?: string
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'db-club',
    title: 'Butikowe Studio Ruchu',
    clientDescription:
      'DB Club to butikowe studio ruchu w Pabianicach, stworzone z pasji do świadomego treningu i uważności. W obliczu silnej ekspansji marki oraz rosnącej społeczności wokół profilów na Instagramie i Facebooku, naturalnym następnym krokiem jest posiadanie profesjonalnej strony internetowej. Miała ona pełnić rolę centralnego punktu informacyjnego, systematyzującego szeroką ofertę (głównie praca z Reformerami i Barre), a jednocześnie stanowić wizualne przedłużenie spokojnej, ekskluzywnej atmosfery studia.',
    role: 'Web Design & Development',
    industry: 'Premium / Sport & Zdrowie',
    year: '2026',
    openingImage: {
      src: '/portfolio/db-club/butikowe-studio-ruchu-strona-www.webp',
      width: 2560,
      height: 1287,
    },
    overviewText:
      'Głównym wyzwaniem w projekcie DB Club było stworzenie cyfrowej przestrzeni, która natychmiast po wejściu wycisza i relaksuje – dokładnie tak, jak fizyczna sala treningowa studia. Aby to osiągnąć, zrezygnowałem z typowej, agresywnej estetyki siłowni na rzecz kojącego minimalizmu. Zastosowałem stonowaną paletę barw opartą na naturalnych odcieniach, a całą kompozycję wzbogaciłem o dużą ilość wolnej przestrzeni (whitespace), dzięki czemu projekt zyskał "oddech" i ekskluzywny, butikowy charakter.\n\nDzięki temu strona nie tylko skutecznie konwertuje, ale przede wszystkim staje się autentyczną, cyfrową wizytówką butikowego klimatu DB Club.',
    galleryImage1: {
      src: '/portfolio/db-club/nowoczesna-strona-dla-studia-pilates.webp',
      width: 2560,
      height: 1287,
    },
    galleryImage2: {
      src: '/portfolio/db-club/strona-internetowa-trener-personalny.webp',
      width: 2560,
      height: 1287,
    },
    fullPageMockup: {
      src: '/portfolio/db-club/strona-www-studio-treningowe-pelny-projekt.webp',
      width: 2560,
      height: 1287,
    },
    nextProjectSlug: 'doradztwo-podatkowe',
    nextProjectName: 'Doradztwo Podatkowe',
  },
  {
    id: 'doradztwo-podatkowe',
    title: 'Doradztwo Podatkowe',
    clientDescription:
      'Branża podatkowa często kojarzy się ze skomplikowanym żargonem i stresem. Głównym celem tego projektu koncepcyjnego dla fikcyjnej marki "Tomasz Nowak" było wykreowanie przestrzeni, która od pierwszych sekund budzi poczucie bezpieczeństwa. Zamiast operować na ustawach, interfejs tłumaczy skomplikowane prawo na proste rekomendacje, pozycjonując doradcę jako tarczę ochronną dla biznesu, chroniącą przed błędami i urzędami.',
    role: 'UX/UI Design',
    industry: 'Finanse & Prawo',
    year: '2026',
    openingImage: {
      src: '/portfolio/doradztwo-podatkowe/nowoczesna-strona-doradcy-podatkowego.webp',
      width: 2560,
      height: 1287,
    },
    overviewText:
      'Kluczowym wyzwaniem projektowym było przełamanie schematu "sztywnej" strony urzędowej, przy jednoczesnym zachowaniu pełnego profesjonalizmu. Postawiłem na psychologię kolorów – dominująca na stronie głęboka zieleń podświadomie buduje skojarzenia ze stabilnością finansową i bezpieczeństwem, ale w nowoczesnym wydaniu. Aby strona nie była monotonna, wprowadziłem wyrazisty turkus. Pełni on jednak wyłącznie funkcję strategicznego akcentu wizualnego – pojawia się tylko tam, gdzie chcemy przyciągnąć wzrok użytkownika, np. na najważniejszych przyciskach akcji. Dzięki takiemu ograniczeniu palety, wyrazisty akcent działa jak drogowskaz ułatwiający nawigację.\n\nDużo uwagi poświęciłem również typografii, która w branży prawnej i podatkowej często niepotrzebnie przytłacza odbiorców. Zestawiłem ze sobą dwa różne style krojów pisma, aby uzyskać złoty środek. Do nagłówków użyłem fontu o surowej, zgeometryzowanej i czystej linii, który podkreśla precyzję, kompetencje i nowoczesność. Z kolei do dłuższych tekstów i opisów wybrałem font o znacznie bardziej miękkim, przyjaznym i zaokrąglonym charakterze. Dzięki temu czytanie o skomplikowanych optymalizacjach podatkowych nie przypomina analizy dokumentu prawnego, a marka eksperta zyskuje bardziej "ludzką" i przystępną twarz.\n\nCałość interfejsu spina konsekwentny język wizualny. Zamiast dekorować każdą sekcję z innej bajki, stworzyłem jeden rozpoznawalny motyw oparty na charakterystycznie zaokrąglonych rogach i konsekwentnie go powielałem. Najbardziej widoczne jest to w przyciskach wzywających do akcji. Niezależnie od tego, czy użytkownik czyta o doświadczeniu eksperta, czy przegląda listę usług – główny przycisk zawsze wygląda i zachowuje się tak samo. Ta spójność daje poczucie porządku i błyskawicznie uczy odwiedzającego, gdzie powinien kliknąć, by nawiązać współpracę.',
    galleryImage1: {
      src: '/portfolio/doradztwo-podatkowe/strona-www-doradztwo-podatkowe-oferta.webp',
      width: 1872,
      height: 1260,
    },
    galleryImage2: {
      src: '/portfolio/doradztwo-podatkowe/strona-www-doradztwo-podatkowe-kontakt.webp',
      width: 1872,
      height: 1260,
    },
    fullPageMockup: {
      src: '/portfolio/doradztwo-podatkowe/strona-www-doradztwo-podatkowe-pelny-projekt.webp',
      width: 2560,
      height: 1287,
    },
    prevProjectSlug: 'db-club',
    prevProjectName: 'Butikowe Studio Ruchu',
    nextProjectSlug: 'santoro',
    nextProjectName: 'Szkoła Językowa Santoro',
  },
  {
    id: 'santoro',
    title: 'Szkoła Językowa Santoro',
    clientDescription:
      'Stara strona szkoły była przeładowanym, niefunkcjonalnym informatorem przypominającym dawne lata internetu. Brakowało w niej wyraźnej hierarchii, spójnego design systemu, a ogromne bloki drobnego tekstu zniechęcały do czytania. Moim celem było przekształcenie tego chaosu w nowoczesny, sprzedażowy landing page. Nowy projekt miał za zadanie natychmiast komunikować ofertę, ułatwiać porównywanie kursów i przede wszystkim – budować zaufanie oraz zachęcać do zapisu.',
    role: 'UX/UI Redesign',
    industry: 'Edukacja',
    year: '2026',
    openingImage: {
      src: '/portfolio/santoro-szkola-jezykowa/nowoczesna-strona-szkoly-jezykowej-mobile.webp',
      width: 2560,
      height: 1287,
    },
    overviewText:
      'Głównym założeniem redesignu była zmiana struktury – z typowej strony informacyjnej na stronę nastawioną na konwersję (wartość → marka → oferta → cennik → lokalizacja → kontakt). Każda sekcja odpowiada teraz na jedno, konkretne pytanie użytkownika. Ściany nieczytelnego tekstu zastąpiłem krótkimi, łatwymi do skanowania fragmentami z dużą ilością "oddechu" (whitespace). Spokojna paleta barw, kremowe tła i szeryfowe nagłówki nadały całości zdecydowanie bardziej charakterystyczny i elegancki wygląd.\n\nUporządkowałem również kwestię kolorystyki i design systemu. Wcześniej firmowy, bordowy kolor pojawiał się dosłownie wszędzie, przez co całkowicie tracił swoją moc. W nowym projekcie pełni on wyłącznie funkcję akcentu dla najważniejszych elementów i przycisków CTA (np. zrekonstruowany i "odchudzony" header z jasnym komunikatem "Zapisz się"). Ponadto usunąłem przestarzałe cliparty i surowe listy z flagami, wprowadzając nowoczesne karty kursów, które od razu prezentują języki jako pełnoprawne produkty z widocznym cennikiem.\n\nKluczowym zabiegiem wizerunkowym było "uczłowieczenie" marki. Zamiast anonimowego opisu placówki, zaprojektowałem dedykowaną sekcję o założycielce szkoły – Rosarii (z miejscem na finalne, profesjonalne zdjęcie, które docelowo będzie punktem centralnym budującym więź). Ten zabieg drastycznie skraca dystans i buduje autentyczne zaufanie, co w branży edukacyjnej jest absolutnym fundamentem decydującym o wyborze szkoły.',
    galleryImage1: {
      src: '/portfolio/santoro-szkola-jezykowa/strona-www-szkola-jezykowa-oferta.webp',
      width: 1872,
      height: 1260,
    },
    galleryImage2: {
      src: '/portfolio/santoro-szkola-jezykowa/strona-www-szkola-jezykowa-cennik.webp',
      width: 1872,
      height: 1260,
    },
    fullPageMockup: {
      src: '/visual-projects/Santoro-szkola-jezykowa/whole.webp',
      width: 2560,
      height: 8000,
    },
    prevProjectSlug: 'doradztwo-podatkowe',
    prevProjectName: 'Doradztwo Podatkowe',
    nextProjectSlug: 'abc-centrum',
    nextProjectName: 'ABC Centrum Logopedii',
  },
]

export function getCaseStudyById(id: string): CaseStudyData | undefined {
  return caseStudies.find((study) => study.id === id)
}
