type CaseStudyImage = {
  src: string
  width: number
  height: number
}

export type CaseStudyBlockType = 'text-only' | 'split-left' | 'split-right' | 'full-image'

export type CaseStudyContentBlock = {
  id: string
  type: CaseStudyBlockType
  title?: string
  text?: string
  image?: CaseStudyImage
}

export type CaseStudyData = {
  id: string
  title: string
  clientDescription: string
  role: string
  industry: string
  year: string
  openingImage: CaseStudyImage
  overviewText?: string
  contentBlocks?: CaseStudyContentBlock[]
  galleryImage1?: CaseStudyImage
  galleryImage2?: CaseStudyImage
  fullPageMockup?: CaseStudyImage
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
  {
    id: 'studymood',
    title: 'StudyMood',
    clientDescription:
      'StudyMood to aplikacja mobilna stworzona z myślą o studentach, która łączy monitorowanie nauki z obserwowaniem własnego samopoczucia. Projekt powstał podczas realizacji przedmiotu Interdisciplinary Project Based Learning na International Faculty of Engineering (IFE) Politechniki Łódzkiej.',
    role: 'App Dev / Product Dev / Research',
    industry: 'Edukacja / Well-being',
    year: '2025',
    openingImage: {
      src: '/portfolio/studymood/studymood-mood-tracker-ui-design-presentation.png',
      width: 2560,
      height: 1287,
    },
    contentBlocks: [
      {
        id: 'o-projekcie',
        type: 'text-only',
        title: 'O projekcie',
        text: 'W projekcie uczestniczyli studenci różnych kierunków, a naszym zadaniem było stworzenie praktycznego rozwiązania odpowiadającego na problem związany z życiem studenckim.\n\nPunktem wyjścia był prosty pomysł na mood tracker. Chcieliśmy stworzyć sposób, który pozwala studentowi szybko określić swoje samopoczucie bez konieczności prowadzenia rozbudowanego dziennika. Pierwsza wersja opierała się na dwuwymiarowej mapie nastroju, wykorzystującej przyjemność i poziom energii.\n\nWraz z rozwojem projektu zaczęliśmy konfrontować ten pomysł z opiniami studentów. Przeprowadziliśmy 15 wywiadów, a zebrany feedback pokazał, że samo określenie nastroju nie zawsze wystarcza. Studenci potrzebowali również sposobu na lepsze nazwanie tego, co czują, oraz narzędzia pozwalającego spojrzeć na swoje samopoczucie w kontekście nauki. To właśnie te obserwacje zaczęły zmieniać pierwotny pomysł.',
      },
      {
        id: 'full-mockup-1',
        type: 'full-image',
        image: {
          src: '/portfolio/studymood/studymood-check-in-emotion-selection-screens.png',
          width: 2560,
          height: 1287,
        },
      },
      {
        id: 'od-mood-trackera',
        type: 'text-only',
        title: 'Od mood trackera do StudyMood',
        text: 'Aplikacja rozwijała się etapami. Kolejne funkcje wynikały z problemów, które pojawiały się podczas rozmów ze studentami i dalszego researchu. Cały produkt zaczął działać według prostego schematu: Sprawdź → Nazwij → Ucz się → Znajdź wzorce → Zareaguj.',
      },
      {
        id: 'mood-check',
        type: 'split-right',
        title: 'Mood Check',
        text: 'Podstawą pozostała szybka mapa nastroju, ale dodaliśmy możliwość nazwania konkretnej emocji. Do nazw dodaliśmy również krótkie wyjaśnienia, ponieważ część określeń mogła być trudna do zrozumienia, poniewż aplikacjia projetkowana była w języku angielskim.',
        image: {
          src: '/portfolio/studymood/studymood-emotion-definitions-and-meanings.png',
          width: 1080,
          height: 1080,
        },
      },
      {
        id: 'study-tracker',
        type: 'split-left',
        title: 'Study Tracker',
        text: 'Kolejnym krokiem było połączenie samopoczucia z rzeczywistą nauką. Sesje zaczęliśmy zapisywać z podziałem na konkretne przedmioty, dzięki czemu aplikacja mogła zbierać więcej informacji niż zwykły licznik czasu.',
        image: {
          src: '/portfolio/studymood/studymood-study-session-timer-and-summary.png',
          width: 1080,
          height: 1080,
        },
      },
      {
        id: 'analyze',
        type: 'split-right',
        title: 'Analyze',
        text: 'Skoro mieliśmy już dane dotyczące zarówno samopoczucia, jak i nauki, kolejnym krokiem było pokazanie ich w czasie. Sekcja Analyze pozwala obserwować trendy i szukać własnych wzorców.',
        image: {
          src: '/portfolio/studymood/studymood-mood-analytics-and-insights-dashboard.png',
          width: 1080,
          height: 1080,
        },
      },
      {
        id: 'reframe',
        type: 'split-left',
        title: 'Reframe',
        text: 'Ostatnim etapem było przejście od samego monitorowania do działania. Feedback od studentów pokazał potrzebę krótkich narzędzi, które można wykorzystać w momencie pojawienia się trudnych emocji. Tak powstała sekcja Reframe, która stała się praktycznym uzupełnieniem całego procesu: użytkownik nie tylko rejestruje, co czuje, ale może również spróbować coś z tym zrobić.',
        image: {
          src: '/portfolio/studymood/studymood-mind-tools-breathing-and-reframing-alt.png',
          width: 1080,
          height: 1080,
        },
      },
      {
        id: 'research',
        type: 'text-only',
        title: 'Research i dobór ćwiczeń',
        text: 'Jednym z ważniejszych elementów projektu był research związany z tym, jak aplikacja może realnie wspierać pracę z emocjami, zamiast ograniczać się do ich zapisywania. Przy projektowaniu funkcji związanych z emocjami korzystaliśmy nie tylko z feedbacku studentów, ale również z materiałów naukowych i artykułów dotyczących emocji, stresu oraz samoregulacji.\n\nJednym z przykładów była funkcja affective labeling, czyli nazywanie własnych emocji. Research dotyczący tego zagadnienia wskazywał na związek pomiędzy nazwaniem emocji a zmniejszeniem jej natychmiastowego wpływu, co stało się jednym z powodów, dla których emotion labeling stał się istotną częścią Mood Check. Podobnie podeszliśmy do sekcji Reframe. Ćwiczenia nie zostały dobrane przypadkowo ani stworzone jako zbiór ogólnych porad motywacyjnych. Szukałem materiałów dotyczących technik, które mogą wspierać samoregulację, zmianę perspektywy i pracę z trudnymi emocjami, a następnie na tej podstawie dobierałem i opracowywałem krótkie ćwiczenia możliwe do wykonania w aplikacji.',
      },
      {
        id: 'full-mockup-3',
        type: 'full-image',
        image: {
          src: '/portfolio/studymood/studymood-self-talk-guided-exercise-screens.png',
          width: 2560,
          height: 1287,
        },
      },
      {
        id: 'feedback',
        type: 'text-only',
        title: 'Feedback, który zmienił projekt',
        text: 'Feedback studentów miał wpływ zarówno na funkcje aplikacji, jak i na jej wygląd. Podczas 15 wywiadów studenci zwracali uwagę między innymi na trudności z nazwaniem emocji, potrzebę miejsca na refleksję oraz zainteresowanie krótkimi treściami poprawiającymi nastrój.\n\nJednym z konkretnych efektów feedbacku było dodanie wyjaśnień do nazw emocji. Chcieliśmy, żeby użytkownik nie musiał zgadywać znaczenia bardziej zaawansowanych określeń. Zmienił się również kierunek wizualny. Pierwsza wersja była bardziej niebieska i kliniczna. Feedback pokazał, że aplikacja powinna być cieplejsza i bardziej ludzka, dlatego zmieniliśmy język wizualny oraz sposób prezentowania emocji.',
      },
      {
        id: 'tech-stack',
        type: 'text-only',
        title: 'Technologia i moja rola',
        text: 'Od strony technicznej StudyMood został zbudowany przy użyciu Kotlin Multiplatform oraz Compose Multiplatform. Aplikacja działa offline-first – dane są przechowywane lokalnie na urządzeniu, bez kont użytkowników i bez konieczności korzystania z serwera. Była to świadoma decyzja projektowa z uwagi na prywatność.\n\nByłem odpowiedzialny za programistyczną realizację aplikacji, ale moja praca obejmowała również część researchową i produktową. Po stronie technicznej zbudowałem działającą aplikację mobilną, zaimplementowałem jej główne funkcje oraz testowałem na rzeczywistym urządzeniu. Poza tym pracowałem nad treścią aplikacji (w języku angielskim) i prowadziłem wspomniany research dotyczący emocji.',
      },
      {
        id: 'podsumowanie',
        type: 'text-only',
        title: 'Efekt końcowy',
        text: 'StudyMood zaczął się jako prosty pomysł na monitorowanie nastroju, a zakończył jako aplikacja łącząca samopoczucie, naukę, analizę własnych wzorców i praktyczne ćwiczenia wspierające samoregulację. Najważniejsza zmiana polegała na przejściu od prostego pytania „Jak się dzisiaj czuję?” do szerszego procesu: „Jak się czuję, jak to wiąże się z moją nauką i co mogę z tym zrobić?”.\n\nPodziękowania dla Natalii Augustyniak oraz Kasi Lerman za pomoc w procesie kreatywnym oraz przy zbieraniu feedbacku i przeprowadzaniu ankiet wśród studentów.',
      },
    ],
    prevProjectSlug: 'santoro',
    prevProjectName: 'Szkoła Językowa Santoro',
  },
]

export function getCaseStudyById(id: string): CaseStudyData | undefined {
  return caseStudies.find((study) => study.id === id)
}
