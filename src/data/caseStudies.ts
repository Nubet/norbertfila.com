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
    id: 'artorius',
    title: 'Artorius',
    clientDescription:
      'Artorius to firma zajmująca się zarządzaniem majątkiem, specjalizująca się w dostarczaniu spersonalizowanych strategii finansowych dla zamożnych klientów. Potrzebowali strony, która jasno zakomunikuje ich usługi, zbuduje zaufanie oraz zapewni bezszwowe doświadczenie dla użytkowników. Celem było stworzenie wyrafinowanej, profesjonalnej platformy oddającej ekspertyzę i niezawodność ich marki.',
    role: 'Design & Development',
    industry: 'Premium E-commerce',
    year: '2025',
    openingImage: {
      src: '/zdj-otwierajace.jpg',
      width: 2500,
      height: 1459,
    },
    overviewText:
      'Podczas pracy nad tym projektem skupiłem się na wyeliminowaniu szumu wizualnego. Zaprojektowałem architekturę informacji od zera, łącząc rygorystyczną typografię z dużą ilością negatywnej przestrzeni. Każda interakcja została zaprogramowana tak, aby potęgować wrażenie obcowania z produktem luksusowym.',
    galleryImage1: {
      src: '/mockup1.jpg',
      width: 1872,
      height: 1260,
    },
    galleryImage2: {
      src: '/mockup2.jpg',
      width: 1872,
      height: 1260,
    },
    fullPageMockup: {
      src: '/visual-projects/abc-centrum-logopedii/whole.webp',
      width: 2560,
      height: 8228,
    },
    prevProjectSlug: 'doradztwo-podatkowe',
    prevProjectName: 'Doradztwo Podatkowe',
    nextProjectSlug: 'aura-medical',
    nextProjectName: 'Aura Medical',
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
    prevProjectSlug: 'joy-english',
    prevProjectName: 'JOY English School',
    nextProjectSlug: 'artorius',
    nextProjectName: 'Artorius',
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
