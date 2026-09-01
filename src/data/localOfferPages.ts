import type { ContentSection } from '@/data/editorial'

export type LocalOfferPageData = {
  slug: string
  city: string
  eyebrow: string
  title: string
  description: string
  lead: string
  heroPoints: string[]
  showcaseTitle?: string
  showcaseDescription?: string
  showcaseProjectIds?: string[]
  audienceTitle: string
  audienceIntro: string
  audiences: Array<{
    name: string
    description: string
  }>
  sections: ContentSection[]
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedPostSlugs: string[]
  ctaTitle: string
  ctaDescription: string
}

export const localOfferPages: LocalOfferPageData[] = [
  {
    slug: 'lodz',
    city: 'Łódź',
    eyebrow: 'Strony internetowe Łódź',
    title:
      'Profesjonalne strony internetowe Łódź dla gabinetów eksperckich i marek o wysokim standardzie',
    description:
      'Projektuję dopracowane strony internetowe dla firm z Łodzi, które sprzedają jakość, zaufanie i wysoki standard obsługi. To rozwiązanie dla marek, które chcą wyglądać wiarygodnie jeszcze przed pierwszym kontaktem.',
    lead: 'Tworzę strony internetowe dla Łodzi, które pomagają markom wyglądać profesjonalnie, budować zaufanie i przyciągać lepiej dopasowanych klientów. Najlepiej sprawdza się to w branżach, gdzie decyzja zakupowa zaczyna się od oceny poziomu, estetyki i wiarygodności marki.',
    heroPoints: [
      'strona ma wzmacniać postrzeganą jakość usługi, a nie tylko informować',
      'komunikacja ma uspokajać klienta i porządkować proces kontaktu',
      'projekt ma być elegancki, szybki i gotowy pod SEO lokalne oraz dalszy rozwój',
    ],
    showcaseTitle: 'Realizacje, które dobrze pokazują ten kierunek',
    showcaseDescription:
      'Jeśli szukasz strony dla gabinetu, studia albo marki, w której liczy się estetyka, spokój i zaufanie, zobacz dwa projekty bliskie temu sposobowi myślenia o marce.',
    showcaseProjectIds: ['db-club', 'vellum-blanc'],
    audienceTitle: 'Dla jakich biznesów w Łodzi to rozwiązanie ma największy sens?',
    audienceIntro:
      'Najlepiej działa tam, gdzie klient porównuje kilka ofert i bardzo szybko wyrabia sobie zdanie na podstawie strony. W takich branżach strona musi od razu komunikować standard marki.',
    audiences: [
      {
        name: 'Stomatologia i medycyna estetyczna',
        description:
          'Pomagam pokazać kompetencje, zakres zabiegów, spokojny proces i poziom opieki. W tej kategorii zaufanie i klarowność są ważniejsze niż sama liczba zakładek.',
      },
      {
        name: 'Kosmetologia i salony beauty o wyższym standardzie',
        description:
          'Tutaj liczy się estetyka, wyczucie marki i to, czy klientka czuje, że trafiła do miejsca z wyższym standardem. Strona musi sprzedawać atmosferę, nie tylko cennik.',
      },
      {
        name: 'Chirurgia plastyczna i usługi wysokiego zaufania',
        description:
          'Projekt i copy powinny redukować niepewność, tłumaczyć proces i porządkować pytania jeszcze przed rozmową. To pomaga przyciągać bardziej świadomych klientów.',
      },
    ],
    sections: [
      {
        title: 'Co musi zawierać dobra strona dla marki o wysokim standardzie z Łodzi?',
        body: [
          'Dobra strona dla marki o wysokim standardzie musi od razu budować poczucie porządku, zaufania i jakości. Użytkownik po kilku sekundach powinien wiedzieć, czym zajmuje się firma, dla kogo jest oferta i jaki poziom obsługi może otrzymać.',
          'Dlatego na takiej stronie najważniejsze są: mocny pierwszy ekran, czytelny opis usług, sekcje budujące wiarygodność, logiczna ścieżka kontaktu i estetyka, która wspiera markę zamiast odwracać od niej uwagę.',
        ],
        points: [
          'hero z jasną obietnicą wartości i dobrze ustawionym CTA',
          'sekcje pokazujące specjalizacje, zakres usług i dla kogo są przeznaczone',
          'elementy zaufania: zdjęcia, proces, FAQ, odpowiedzi na obawy, standard obsługi',
          'szybkie działanie na telefonie i dopracowana warstwa wizualna',
        ],
      },
      {
        title: 'Jak taka strona pomaga zdobywać lepszych klientów?',
        body: [
          'W branżach o wyższym progu zaufania strona bardzo często nie walczy o jak największą liczbę zapytań, tylko o lepszą jakość tych zapytań. Dobra prezentacja oferty od razu odfiltrowuje przypadkowy ruch i wzmacnia decyzje osób, które szukają konkretnego standardu.',
          'To oznacza mniej rozmów z osobami przypadkowymi i więcej kontaktów od klientów, którzy rozumieją wartość usługi. Strona porządkuje oczekiwania jeszcze przed pierwszym telefonem lub formularzem.',
        ],
      },
      {
        title: 'Jak wygląda współpraca przy stronie dla biznesu nastawionego na jakość i zaufanie?',
        body: [
          'Najpierw porządkujemy ofertę, przewagi i to, jak marka ma być odbierana. Dopiero potem przechodzę do architektury informacji, kierunku wizualnego i wdrożenia.',
          'Dzięki temu nie powstaje kolejna ładna strona bez funkcji biznesowej, tylko narzędzie, które realnie wspiera sprzedaż, wizerunek i dalsze pozycjonowanie lokalne.',
        ],
        table: {
          headers: ['Etap', 'Po co jest potrzebny'],
          rows: [
            ['Strategia i oferta', 'ustawia priorytety marki, grupy klientów i główną obietnicę'],
            ['UX i treść', 'porządkuje ścieżkę decyzji i ogranicza chaos informacyjny'],
            ['Projekt i wdrożenie', 'buduje finalne wrażenie jakości i dba o szybkość działania'],
          ],
        },
      },
      {
        title: 'Jak wspieram SEO i GEO na podstronie lokalnej?',
        body: [
          'Taka strona powinna być czytelna nie tylko dla użytkownika, ale też dla wyszukiwarki i modeli AI. Dlatego treść układa się w krótkie, konkretne sekcje, które odpowiadają na realne pytania klienta z Łodzi.',
          'Dbam też o sensowne nagłówki, lokalne frazy bez przesady, FAQ, linkowanie do powiązanych artykułów oraz metadata, które opisują usługę i miasto w naturalny sposób.',
        ],
      },
    ],
    faqs: [
      {
        question:
          'Ile kosztuje profesjonalna strona internetowa w Łodzi dla marki o wyższym standardzie?',
        answer:
          'Koszt zależy od zakresu, liczby podstron, jakości treści i poziomu dopracowania projektu. W praktyce taka wycena jest wyższa niż dla prostej strony wizytówkowej, bo obejmuje także pracę nad pozycjonowaniem oferty, zaufaniem i warstwą wizualną.',
      },
      {
        question: 'Czy taka strona ma sens, jeśli firma działa głównie z poleceń?',
        answer:
          'Tak, bo nawet klient z polecenia zwykle i tak sprawdza stronę przed kontaktem. Dopracowana witryna pomaga potwierdzić poziom marki i zmniejsza ryzyko, że klient zrezygnuje po cichu na etapie porównywania opcji.',
      },
      {
        question:
          'Czy można przygotować stronę pod lokalne SEO w Łodzi bez przesadnego upychania fraz?',
        answer:
          'Tak. Najlepiej działa naturalne połączenie fraz lokalnych z realnie przydatną treścią: opisem usługi, FAQ, procesem współpracy i logicznym linkowaniem wewnętrznym. To lepsze rozwiązanie niż sztuczne powtarzanie miasta w każdym akapicie.',
      },
    ],
    relatedPostSlugs: [
      'marka-premium-potrzebuje-strony-ktora-sprzedaje-standard-nie-tylko-usluge',
      'strona-dla-salonu-beauty-co-powinna-zawierac-zeby-domykac-klientki',
      'strony-internetowe-lodz-ile-naprawde-kosztuje-profesjonalna-strona-dla-firmy',
    ],
    ctaTitle: 'Potrzebujesz strony, która wygląda jak Twoja marka, a nie jak przypadkowy szablon?',
    ctaDescription:
      'Jeśli prowadzisz w Łodzi gabinet, klinikę, salon beauty albo inną markę nastawioną na jakość, przygotuję stronę, która uporządkuje ofertę i pomoże budować zaufanie od pierwszego wejścia.',
  },
  {
    slug: 'pabianice',
    city: 'Pabianice',
    eyebrow: 'Strony internetowe Pabianice',
    title:
      'Strony internetowe Pabianice dla lokalnych firm usługowych, które chcą dostawać więcej zapytań',
    description:
      'Tworzę strony internetowe dla firm z Pabianic, które muszą jasno pokazać ofertę, specjalizacje i prosty kontakt. To dobre rozwiązanie dla biznesów usługowych, które chcą być łatwiej znajdowane i lepiej oceniane już po pierwszym wejściu.',
    lead: 'Projektuję strony internetowe dla firm z Pabianic, które potrzebują czytelnej oferty, mocnego lokalnego SEO i prostego procesu kontaktu. Najlepiej sprawdza się to tam, gdzie klient chce szybko sprawdzić, czym zajmuje się firma, czy działa lokalnie i jak się z nią skontaktować.',
    heroPoints: [
      'oferta ma być czytelna od razu, bez szukania podstawowych informacji',
      'strona ma pomagać w lokalnym SEO i zbieraniu zapytań z telefonu',
      'wdrożenie ma być lekkie, szybkie i gotowe do dalszego rozwoju',
    ],
    showcaseTitle: 'Realizacje, które dobrze pasują do tego typu usług',
    showcaseDescription:
      'Jeśli prowadzisz lokalny biznes usługowy i zależy Ci na czytelnej ofercie oraz zaufaniu już od pierwszego wejścia, zobacz dwa projekty bliskie temu kierunkowi.',
    showcaseProjectIds: ['abc-centrum', 'joy-english'],
    audienceTitle: 'Jakim firmom w Pabianicach taka strona pomaga najbardziej?',
    audienceIntro:
      'Najmocniej korzystają na tym lokalne biznesy usługowe, w których klient porównuje kilka opcji i wybiera tę, która wygląda najbardziej konkretnie i wiarygodnie.',
    audiences: [
      {
        name: 'Logopeda, terapeuta, specjalista pracujący z rodzicami',
        description:
          'Strona powinna szybko budować zaufanie, wyjaśniać zakres pomocy i odpowiadać na pierwsze obawy. To skraca dystans i ułatwia pierwszy kontakt.',
      },
      {
        name: 'Budowlaniec, wykonawca, fachowiec',
        description:
          'Tutaj liczy się konkret: co robisz, na jakim obszarze działasz, jak wygląda realizacja i jak wysłać zapytanie. Dobra struktura od razu oddziela profesjonalistów od przypadkowych ofert.',
      },
      {
        name: 'Fryzjer, salon urody, lokalna usługa oparta o szybką decyzję',
        description:
          'Klient ma od razu zobaczyć usługi, estetykę marki, zasady umawiania i dane kontaktowe. Tu wygoda na telefonie ma ogromne znaczenie.',
      },
    ],
    sections: [
      {
        title: 'Co powinna zawierać skuteczna strona usługowa w Pabianicach?',
        body: [
          'Skuteczna strona dla lokalnej firmy usługowej powinna w kilka sekund odpowiedzieć na cztery pytania: czym się zajmujesz, dla kogo pracujesz, na jakim obszarze działasz i jak się z Tobą skontaktować. Jeśli użytkownik musi tego szukać, rosną szanse, że wyjdzie do konkurencji.',
          'Dlatego najważniejsze są czytelne sekcje usług, prosty układ, dane kontaktowe widoczne na telefonie, FAQ i treść, która pomaga w lokalnym pozycjonowaniu bez robienia z podstrony ściany tekstu.',
        ],
        points: [
          'jasno opisana oferta i specjalizacje',
          'sekcja obszaru działania: Pabianice i okolice',
          'formularz lub szybki kontakt telefoniczny',
          'podstawy zaufania: realizacje, proces, opinie, FAQ',
        ],
      },
      {
        title: 'Dlaczego prosta i uporządkowana strona daje przewagę lokalnej firmie?',
        body: [
          'W wielu lokalnych branżach nie wygrywa firma z najdłuższym opisem, tylko ta, która najszybciej daje poczucie konkretu. Klient chce wiedzieć, czy robisz dokładnie to, czego szuka i czy łatwo będzie wykonać następny krok.',
          'Dobra strona porządkuje więc ofertę, zamiast ją komplikować. Pokazuje usługi, obszar działania, najczęstsze pytania i kontakt w taki sposób, żeby użytkownik nie musiał się domyślać, co dalej.',
        ],
      },
      {
        title: 'Jak taka podstrona wspiera SEO i wyszukiwania AI?',
        body: [
          'Lokalna podstrona ma sens wtedy, gdy odpowiada na intencję osoby szukającej usługi w Pabianicach. To oznacza unikalny lead, konkretne sekcje o typowych problemach klientów i pytania, które da się bezpośrednio zacytować przez wyszukiwarkę albo model AI.',
          'Dlatego stosuję krótkie bloki odpowiedzi, nagłówki w formie pytań, lokalne FAQ i linkowanie do wpisów rozwijających temat ceny, wyboru wykonawcy i struktury strony.',
        ],
        table: {
          headers: ['Element', 'Dlaczego pomaga'],
          rows: [
            ['Lokalny H1 i lead', 'od razu dopasowuje stronę do zapytania z miasta'],
            [
              'FAQ z konkretnymi odpowiedziami',
              'wzmacnia SEO, GEO i redukuje obawy przed kontaktem',
            ],
            [
              'Linki do treści eksperckich',
              'budują wiarygodność i wzmacniają całą strukturę strony',
            ],
          ],
        },
      },
      {
        title: 'Jak wygląda współpraca z lokalną firmą usługową?',
        body: [
          'Najpierw ustalamy, jakie usługi mają być najmocniej wyeksponowane i jakie pytania klienci zadają najczęściej przed kontaktem. To pozwala zbudować strukturę, która pracuje biznesowo, a nie tylko estetycznie.',
          'Potem przygotowuję układ strony, treści, projekt i wdrożenie. Finalnie dostajesz stronę, którą łatwo rozwijać o kolejne podstrony, artykuły i lokalne frazy, jeśli będziesz chciał dalej pracować nad widocznością.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Czy mała firma z Pabianic potrzebuje osobnej podstrony lokalnej?',
        answer:
          'Często tak, jeśli chcesz zbierać ruch z konkretnych fraz lokalnych i pokazać, że obsługujesz klientów z tego miasta. Taka strona daje też miejsce na FAQ, zakres usług i lokalny kontekst, które trudno zmieścić na jednej głównej stronie.',
      },
      {
        question: 'Czy taka strona będzie dobra na telefonie?',
        answer:
          'Tak, bo w lokalnych usługach duża część wejść i kontaktów odbywa się z telefonu. Dlatego projekt powinien od razu eksponować kontakt, czytelne sekcje i wygodne przejście do kolejnego kroku.',
      },
      {
        question: 'Jakie firmy z Pabianic najczęściej korzystają z takiej strony?',
        answer:
          'Najczęściej są to firmy usługowe: specjaliści, gabinety, wykonawcy, salony i biznesy lokalne, które chcą być znajdowane w Google i wyglądać bardziej profesjonalnie niż konkurencja oparta tylko na social mediach albo wizytówce.',
      },
    ],
    relatedPostSlugs: [
      'strona-internetowa-dla-logopedy-co-buduje-zaufanie-rodzica',
      'najczestsze-bledy-na-stronach-firm-uslugowych-przez-ktore-tracisz-zapytania',
      'landing-page-dla-lokalnej-uslugi-kiedy-ma-sens-a-kiedy-nie',
    ],
    ctaTitle:
      'Potrzebujesz strony dla firmy z Pabianic, która jasno pokazuje ofertę i ułatwia kontakt?',
    ctaDescription:
      'Jeśli prowadzisz lokalny biznes usługowy i chcesz uporządkować stronę pod klienta, SEO i zapytania z telefonu, przygotuję rozwiązanie dopasowane do Twojej oferty.',
  },
]

export function getLocalOfferPageBySlug(slug: string) {
  return localOfferPages.find((page) => page.slug === slug)
}
