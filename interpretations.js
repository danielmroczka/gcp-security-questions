window.questionInterpretations = {
  "1": {
    "about": "Pytanie dotyczy całkowitego zablokowania dostępu instancji Compute Engine (VM) do publicznego internetu oraz do wszelkich usług i API Google.",
    "interpret": "Kluczem jest wyłączenie przypisywania zewnętrznego IP (Public IP) oraz wyłączenie funkcji Private Google Access (PGA), która domyślnie pozwala maszynom z prywatnymi adresami IP na łączenie się z usługami Google (np. Cloud Storage, BigQuery)."
  },
  "2": {
    "about": "Pytanie sprawdza wiedzę na temat domyślnych, wbudowanych reguł zapory sieciowej (implied firewall rules) w sieciach VPC Google Cloud.",
    "interpret": "Zawsze istnieją dwie reguły implied (o najniższym priorytecie 65535): zezwalaj na cały ruch wychodzący (allow egress) i blokuj cały ruch przychodzący (deny ingress). Nie można ich usunąć, jedynie nadpisać."
  },
  "3": {
    "about": "Chodzi o bezpieczne przechowywanie kluczy i sekretów bez umieszczania ich w postaci jawnego tekstu w repozytorium kodu (SCM).",
    "interpret": "Wskazówka historyczna: Chociaż Secret Manager to nowoczesny standard, w starszych pytaniach najbezpieczniejszym wyborem jest szyfrowanie sekretów kluczami zarządzanymi przez klienta (CMEK) w Cloud KMS i przechowywanie ich w Cloud Storage."
  },
  "4": {
    "about": "Pytanie dotyczy centralnego zarządzania uprawnieniami GCP IAM z poziomu lokalnego Active Directory (AD) na podstawie przynależności do grup.",
    "interpret": "Rozwiązaniem jest użycie Google Cloud Directory Sync (GCDS) do synchronizacji grup AD do Google Workspace/Cloud Identity, a następnie przypisywanie ról IAM bezpośrednio do tych zsynchronizowanych grup."
  },
  "5": {
    "about": "Chodzi o najlepsze praktyki bezpieczeństwa podczas budowania i zabezpieczania obrazów kontenerów dla środowisk produkcyjnych.",
    "interpret": "Aby zminimalizować powierzchnię ataku, należy używać minimalnych obrazów bazowych (np. alpine lub distroless) pozbawionych niepotrzebnych pakietów/powłok oraz wdrożyć skanowanie podatności w potoku CI/CD."
  },
  "6": {
    "about": "Zaprojektowanie bezpiecznego i odizolowanego dostępu do 3-warstwowej aplikacji internetowej (frontend, backend, baza danych) w GCP.",
    "interpret": "Zabezpiecz warstwy wewnętrzne (backend i bazę danych) poprzez brak publicznych adresów IP oraz precyzyjną kontrolę komunikacji przy użyciu reguł firewall opartych na kontach serwisowych (Service Accounts)."
  },
  "7": {
    "about": "Pytanie dotyczy migracji obciążeń z fizycznego centrum danych do chmury GCP z zachowaniem poufności i integralności danych.",
    "interpret": "Kluczem jest zrozumienie modelu współdzielonej odpowiedzialności oraz wdrożenie szyfrowania na każdym etapie – zarówno dla danych w spoczynku (at rest), jak i w tranzycie."
  },
  "8": {
    "about": "Zabezpieczenie dostępu do systemu ERP hostowanego na Compute Engine przy użyciu Cloud IAP (Identity-Aware Proxy).",
    "interpret": "Cloud IAP pozwala na bezpieczny dostęp i uwierzytelnianie użytkowników bez konieczności korzystania z VPN. Działa na poziomie warstwy aplikacyjnej, weryfikując tożsamość i kontekst żądania."
  },
  "9": {
    "about": "Wykrywanie podatności i błędów konfiguracyjnych w systemach operacyjnych maszyn wirtualnych Compute Engine.",
    "interpret": "Do skanowania systemów pod kątem podatności (Vulnerability Assessment) i konfiguracji OS najlepiej wykorzystać Security Command Center (SCC) wraz z agentami skanującymi."
  },
  "10": {
    "about": "Uzyskanie spójnego i scentralizowanego widoku logów ze wszystkich projektów deweloperskich w zewnętrznym systemie SIEM.",
    "interpret": "Najlepszą praktyką jest skonfigurowanie sinka logów (Log Sink) na poziomie organizacji lub folderu, który przesyła logi zbiorczo do Cloud Pub/Sub, skąd system SIEM może je pobierać."
  },
  "11": {
    "about": "Zapobieganie porwaniom domen/IP oraz atakom typu hijacking poprzez przekierowywanie użytkowników na złośliwe strony.",
    "interpret": "Rozwiązaniem chroniącym przed zatruciem DNS i zapewniającym autentyczność odpowiedzi DNS jest wdrożenie DNSSEC (Domain Name System Security Extensions) w Cloud DNS."
  },
  "12": {
    "about": "Skanowanie wdrożonej aplikacji w App Engine pod kątem podatności bezpieczeństwa z listy OWASP Top 10.",
    "interpret": "Natywnym narzędziem w GCP dedykowanym do automatycznego skanowania aplikacji webowych (App Engine, GKE, Compute Engine) pod kątem luk bezpieczeństwa jest Web Security Scanner."
  },
  "13": {
    "about": "Umożliwienie analitykom danych pracy w środowisku GCP przy jednoczesnym zapobieganiu wyciekowi wrażliwych danych (Data Exfiltration).",
    "interpret": "Wymaga to zastosowania VPC Service Controls (VPC-SC), które tworzy perymetr bezpieczeństwa wokół usług takich jak Cloud Storage czy BigQuery, uniemożliwiając kopiowanie danych poza ten perymetr."
  },
  "14": {
    "about": "Zapewnienie zgodności z ładem korporacyjnym i bezpieczeństwem w nowo utworzonej organizacji GCP.",
    "interpret": "Wdrożenie struktur hierarchii zasobów (organizacja, foldery, projekty) oraz zdefiniowanie polityk organizacji (Organization Policies) w celu ograniczenia niepożądanych zachowań."
  },
  "15": {
    "about": "Zapewnienie bezpiecznego dostępu do zasobów Cloud Storage z poziomu aplikacji działającej na Compute Engine.",
    "interpret": "Unikaj kluczy Service Account zapisanych na dysku. Zamiast tego przypisz Service Account bezpośrednio do instancji VM i pozwól aplikacji korzystać z tożsamości metadanych instancji."
  },
  "16": {
    "about": "Zabezpieczenie i monitorowanie ruchu sieciowego w tranzycie między podsieciami oraz chmurą a środowiskiem lokalnym.",
    "interpret": "Użyj VPC Flow Logs do szczegółowego audytu połączeń sieciowych oraz wdróż Cloud IDS lub zapory sieciowe partnerów (Next-Gen Firewall) do głębokiej inspekcji pakietów (DPI)."
  },
  "17": {
    "about": "Analiza zmian w poufnych danych płacowych w czasie przy jednoczesnym zapobieganiu identyfikacji konkretnych pracowników.",
    "interpret": "Należy zastosować Cloud DLP API w celu deidentyfikacji lub maskowania danych wrażliwych (np. tokenizacja, k-anonimowość) przed udostępnieniem ich do analizy."
  },
  "18": {
    "about": "Wybór odpowiedniej strategii uwierzytelniania i autoryzacji dla użytkowników zewnętrznych w chmurze GCP.",
    "interpret": "Kluczowym rozróżnieniem jest Cloud Identity (dla pracowników i tożsamości wewnętrznych) kontra Firebase Authentication / Identity Platform (dla klientów i użytkowników końcowych aplikacji)."
  },
  "19": {
    "about": "Wdrożenie szyfrowania kopertowego (envelope encryption) do ochrony danych za pomocą własnych kluczy szyfrujących.",
    "interpret": "Dane szyfruje się lokalnym kluczem danych (DEK), a sam klucz DEK jest następnie szyfrowany kluczem głównym (KEK) zarządzanym centralnie w Cloud KMS."
  },
  "20": {
    "about": "Przesyłanie logów z GCP do lokalnego systemu SIEM w sposób niezawodny i odporny na awarie.",
    "interpret": "Prawidłowy potok przesyłania logów to: Cloud Logging -> Log Sink -> Cloud Pub/Sub -> Integrator SIEM (np. Splunk) pobierający dane z subskrypcji Pub/Sub."
  },
  "21": {
    "about": "Zapewnienie, że cały ruch wychodzący z maszyn wirtualnych do internetu przechodzi przez autoryzowane punkty kontrolne w celu spełnienia wymogów PCI DSS.",
    "interpret": "Należy usunąć domyślną trasę do internetu z sieci VPC i skierować ruch wychodzący (egress) przez dedykowane bramy proxy, zapory sieciowe lub NAT z włączonym logowaniem."
  },
  "22": {
    "about": "Zapewnienie bezpiecznego dostępu administracyjnego do aplikacji App Engine w środowisku programistycznym i produkcyjnym.",
    "interpret": "Zastosuj role IAM na poziomie projektu lub usługi App Engine oraz wdróż Identity-Aware Proxy (IAP) w celu precyzyjnej kontroli dostępu do konsoli administracyjnej."
  },
  "23": {
    "about": "Wykrywanie i automatyczne maskowanie wrażliwych danych, takich jak numery kart płatniczych, w czatach wsparcia klientów.",
    "interpret": "Użyj Cloud DLP API w czasie rzeczywistym do skanowania przesyłanego tekstu czatu i zastępowania wykrytych informacji wrażliwych (infoTypes) maskami (np. [CREDIT_CARD_NUMBER])."
  },
  "24": {
    "about": "Zapobieganie ryzyku związanemu z wyciekiem lub kompromitacją długożyjących kluczy kont serwisowych (Service Account Keys).",
    "interpret": "Najlepszą praktyką jest unikanie pobierania kluczy w formacie JSON. Zamiast tego należy korzystać z tożsamości powiązanych (np. Workload Identity w GKE) lub krótkotrwałych poświadczeń (short-lived credentials)."
  },
  "25": {
    "about": "Konfiguracja centralnego zbierania i analizowania audytowych logów dostępu w dużej organizacji z wieloma projektami GCP.",
    "interpret": "Stwórz dedykowany projekt bezpieczeństwa, w którym skonfigurujesz zagregowane logi (Aggregated Sinks) na poziomie organizacji, kierujące ruch do jednego bezpiecznego kubła Cloud Storage lub datasetu BigQuery."
  },
  "26": {
    "about": "Migracja tożsamości z lokalnego Active Directory do Google Workspace/Cloud Identity z obsługą jednokrotnego logowania (SSO).",
    "interpret": "Użyj GCDS do synchronizacji kont, a jako dostawcę tożsamości (IdP) dla logowania jednokrotnego skonfiguruj system wspierający standard SAML 2.0 (np. AD FS, Okta)."
  },
  "27": {
    "about": "Podział sieci i rozliczeń między różne jednostki biznesowe w ramach jednej organizacji w GCP.",
    "interpret": "Zastosuj strukturę folderów dla jednostek biznesowych, a zasoby sieciowe odizoluj przy użyciu Shared VPC lub osobnych sieci VPC połączonych za pomocą Peeringu."
  },
  "28": {
    "about": "Rozpraszanie i kierowanie ruchu pocztowego (SMTP) do zapasowych serwerów w różnych regionach GCP w celu zapewnienia wysokiej dostępności.",
    "interpret": "Skonfiguruj odpowiednie rekordy MX w Cloud DNS z przypisanymi priorytetami (niższa wartość to wyższy priorytet), wskazujące na adresy IP serwerów pocztowych w poszczególnych regionach."
  },
  "29": {
    "about": "Zarządzanie siecią w architekturze Shared VPC, gdzie projektem hosta jest co-vpc-prod, a projekty usługowe to projekty deweloperskie.",
    "interpret": "Użytkownicy w projektach usługowych (Service Projects) muszą mieć przypisaną rolę `Network User` na poziomie podsieci projektu hosta, aby móc podpinać swoje maszyny do tej sieci."
  },
  "30": {
    "about": "Bezpieczne połączenie lokalnego centrum danych z siecią VPC w GCP z zapewnieniem redundancji i niskich opóźnień.",
    "interpret": "Dla połączeń o krytycznym znaczeniu wybierz Dedicated Interconnect (lub Partner Interconnect) z dwoma łączami w osobnych lokalizacjach brzegowych (Edge Colocation) dla pełnej niezawodności."
  },
  "31": {
    "about": "Migracja zasobów do GCP z zachowaniem istniejących polityk bezpieczeństwa i standardów nazewnictwa maszyn.",
    "interpret": "Wykorzystaj polityki organizacji (Organization Policies) oraz mechanizmy Infrastructure as Code (IaC, np. Terraform) do wymuszenia ujednoliconej konfiguracji zasobów."
  },
  "32": {
    "about": "Autoryzacja aplikacji App Engine do wykonywania operacji w imieniu użytkownika na jego Dysku Google.",
    "interpret": "Należy zaimplementować przepływ OAuth 2.0 z delegowaniem uprawnień na poziomie domeny (domain-wide delegation) dla konta serwisowego (Service Account)."
  },
  "33": {
    "about": "Zapewnienie poufności i bezpieczeństwa danych przetwarzanych w pamięci RAM na maszynach Compute Engine.",
    "interpret": "Użyj funkcji Confidential VMs (dostępnej np. na procesorach AMD EPYC), która szyfruje dane w pamięci RAM za pomocą kluczy sprzętowych generowanych w procesorze (SEV)."
  },
  "34": {
    "about": "Zabezpieczenie klastra Cloud Dataproc (Hadoop/Spark) i kontrola dostępu do danych w nim przetwarzanych.",
    "interpret": "Włącz integrację z protokołem Kerberos w klastrze Dataproc w celu silnego uwierzytelniania wewnątrz klastra oraz zarządzaj dostępem do Cloud Storage za pomocą ról IAM."
  },
  "35": {
    "about": "Audyt i monitorowanie uprawnień administratorów w celu wykrycia nadmiarowego dostępu (Overprivileged Users).",
    "interpret": "Skorzystaj z narzędzia IAM Recommender, które analizuje rzeczywiste użycie uprawnień i sugeruje usunięcie ról, które nie były używane przez ostatnie 90 dni."
  },
  "36": {
    "about": "Ochrona aplikacji internetowej przed wstrzykiwaniem złośliwego kodu (XSS, SQL Injection) w przesyłanych formularzach.",
    "interpret": "Wdróż Cloud Armor z włączonymi regułami prekonfigurowanymi (WAF) chroniącymi przed atakami z listy OWASP Top 10 na zewnętrznym Load Balancerze HTTP(S)."
  },
  "37": {
    "about": "Ograniczenie pracownikom możliwości tworzenia własnych projektów i zasobów, które mogą generować wysokie koszty.",
    "interpret": "Usuń domyślną rolę `Project Creator` z grupy `Authenticated Users` na poziomie organizacji w panelu IAM."
  },
  "38": {
    "about": "Zarządzanie kluczami szyfrującymi przez własny zespół bezpieczeństwa z wymogiem przechowywania kluczy poza chmurą GCP.",
    "interpret": "Wykorzystaj Cloud External Key Manager (Cloud EKM), który integruje Cloud KMS z zewnętrznym systemem zarządzania kluczami (HSM) znajdującym się on-premises lub u innego dostawcy."
  },
  "39": {
    "about": "Zapewnienie bezpiecznego dostępu do zasobów GCP dla dużego zespołu inżynierów z minimalnym narzutem administracyjnym.",
    "interpret": "Zamiast zarządzać pojedynczymi kontami, stwórz grupy w Cloud Identity (np. wg zespołów) i przypisuj role IAM do grup, a nie do konkretnych użytkowników."
  },
  "40": {
    "about": "Audyt środowiska Google Cloud pod kątem zgodności ze standardem PCI DSS (Payment Card Industry Data Security Standard).",
    "interpret": "Skorzystaj z wbudowanych raportów zgodności (Compliance) w Security Command Center (SCC) oraz zapoznaj się z matrycą odpowiedzialności PCI DSS dostarczaną przez Google."
  },
  "41": {
    "about": "Zapewnienie automatycznej retencji i bezpowrotnego usuwania plików zawierających dane osobowe (PII) po określonym czasie.",
    "interpret": "Najbardziej opłacalnym i zautomatyzowanym rozwiązaniem jest przechowywanie danych w Cloud Storage i ustawienie reguły Object Lifecycle Management (np. kasowanie po 30 dniach)."
  },
  "42": {
    "about": "Zmniejszenie podatności i powierzchni ataku kontenerów wdrożonych w klastrze Google Kubernetes Engine (GKE).",
    "interpret": "Używaj minimalnych obrazów bazowych (np. distroless lub alpine) podczas budowania obrazu kontenera. Im mniej narzędzi systemowych w kontenerze, tym trudniejsza eskalacja uprawnień."
  },
  "43": {
    "about": "Uwierzytelnianie użytkowników w GCP na podstawie danych logowania z lokalnego serwera Active Directory z zachowaniem zasady jednego źródła prawdy.",
    "interpret": "Należy zsynchronizować konta za pomocą Google Cloud Directory Sync (GCDS) oraz wdrożyć federację tożsamości (SAML SSO), aby logowanie odbywało się przez lokalne AD."
  },
  "44": {
    "about": "Zabezpieczenie wewnętrznej aplikacji App Engine przed dostępem osób niepowołanych w przypadku wycieku hasła pracownika.",
    "interpret": "Wymuś wdrożenie dwuetapowej weryfikacji (2FA / 2SV) dla wszystkich kont użytkowników w Google Workspace/Cloud Identity."
  },
  "45": {
    "about": "Autoryzacja i kontrola dostępu do danych przechowywanych w klastrze Apache Spark/Hadoop w chmurze.",
    "interpret": "Wykorzystaj Cloud Dataproc z włączonym Cloud IAM i precyzyjnymi rolami dostępu do powiązanych kubłów Cloud Storage (gcsfs)."
  },
  "46": {
    "about": "Ograniczenie ruchu sieciowego wewnątrz sieci VPC wyłącznie do niezbędnych połączeń (zasada najmniejszych uprawnień).",
    "interpret": "Skonfiguruj reguły firewall oparte na kontach serwisowych (Service Accounts) jako źródłach i celach ruchu zamiast stosowania niepewnych tagów sieciowych."
  },
  "47": {
    "about": "Zabezpieczenie serwerów backendowych przed bezpośrednimi atakami DDoS oraz nieautoryzowanym ruchem bezpośrednio z internetu.",
    "interpret": "Umieść serwery za Cloud HTTP(S) Load Balancerem i włącz Cloud Armor, a na zaporze sieciowej (firewall) zezwól na ruch przychodzący wyłącznie z zakresów IP Load Balancera."
  },
  "48": {
    "about": "Bezpieczne zarządzanie i wstrzykiwanie haseł oraz kluczy API do aplikacji w czasie budowania lub uruchamiania.",
    "interpret": "Zastosuj Secret Manager jako centralny, szyfrowany magazyn sekretów i nadaj aplikacji (za pomocą jej konta serwisowego) uprawnienie do odczytu konkretnego sekretu."
  },
  "49": {
    "about": "Zapewnienie bezpiecznego dostępu administracyjnego do maszyn wirtualnych Compute Engine bez przypisywania im publicznych adresów IP.",
    "interpret": "Użyj usługi Identity-Aware Proxy (IAP) do przekierowania ruchu TCP (port 22 dla SSH, 3389 dla RDP) przez tunele IAP bez konieczności wystawiania maszyn na świat."
  },
  "50": {
    "about": "Wykrywanie i blokowanie prób włamań na poziomie sieciowym w chmurze Google Cloud.",
    "interpret": "Wdróż Cloud IDS (Intrusion Detection System) lub zintegruj wirtualne zapory sieciowe innych firm (NGFW) w celu inspekcji i analizy ruchu sieciowego."
  },
  "51": {
    "about": "Ograniczenie możliwości uruchamiania maszyn wirtualnych wyłącznie z autoryzowanych i bezpiecznych obrazów systemowych.",
    "interpret": "Użyj polityki organizacji (Organization Policy) o nazwie `constraints/compute.trustedImageProjects`, aby zdefiniować listę projektów, z których można pobierać obrazy dysków."
  },
  "52": {
    "about": "Scentralizowana kontrola nad tym, kto w firmie może zakładać nowe projekty w strukturze organizacji GCP.",
    "interpret": "Polityka ta jest zarządzana przez rolę IAM `Project Creator`. Usuń tę rolę ze standardowych grup użytkowników na najwyższym poziomie hierarchii organizacji."
  },
  "53": {
    "about": "Zapewnienie bezpiecznej komunikacji między wieloma mikrousługami wdrożonymi w chmurze bez ujawniania ich IP.",
    "interpret": "Wykorzystaj Service Directory do rejestracji i wyszukiwania usług oraz zintegruj je z wewnętrznym Load Balancerem w celu bezpiecznego kierowania ruchu."
  },
  "54": {
    "about": "Zabezpieczenie bazy danych Cloud SQL i ograniczenie dostępu do niej wyłącznie dla uprawnionej aplikacji frontendowej.",
    "interpret": "Skonfiguruj połączenie z bazą danych przy użyciu prywatnych adresów IP (Private IP) w sieci VPC i zablokuj dostęp przez publiczne IP."
  },
  "55": {
    "about": "Ochrona skrzynek pocztowych pracowników przed phishingiem i złośliwym oprogramowaniem.",
    "interpret": "Skonfiguruj zaawansowane ustawienia ochrony przed spamem i phishingiem w konsoli administracyjnej Google Workspace (w tym rekordy SPF, DKIM oraz DMARC w DNS)."
  },
  "56": {
    "about": "Monitorowanie i audytowanie działań podejmowanych przez inżynierów wsparcia Google na zasobach Twojej organizacji.",
    "interpret": "Włącz usługę Access Approval, która wymaga Twojej wyraźnej zgody (poprzez zatwierdzenie żądania), zanim wsparcie Google uzyska dostęp do Twoich danych lub maszyn."
  },
  "57": {
    "about": "Blokowanie maszynom produkcyjnym możliwości wysyłania ruchu bezpośrednio do internetu w celu zapobiegania wyciekowi danych.",
    "interpret": "Skonfiguruj politykę organizacji `constraints/compute.restrictPublicIp` lub usuń domyślną trasę internetową z tabeli routingu sieci VPC."
  },
  "58": {
    "about": "Charakterystyka bezpieczeństwa i ograniczenia połączeń sieciowych typu VPC Network Peering.",
    "interpret": "VPC Peering łączy dwie sieci w warstwie 3 bez narzutu wydajnościowego. Pamiętaj, że peering nie jest przechodni (non-transitive) – sieć A połączona z B i B z C nie daje połączenia A z C."
  },
  "59": {
    "about": "Aktualizacja podatnego oprogramowania w działających kontenerach bez przerywania ciągłości działania aplikacji.",
    "interpret": "Zbuduj nowy obraz kontenera z poprawioną wersją oprogramowania, przetestuj go, a następnie wykonaj aktualizację krokową (Rolling Update) w klastrze GKE."
  },
  "60": {
    "about": "Bezpieczna analiza zachowań klientów w sklepie internetowym bez narażania danych wrażliwych na ujawnienie.",
    "interpret": "Zastosuj anonimizację i deidentyfikację danych za pomocą Cloud DLP przed zapisaniem ich w hurtowni danych BigQuery do celów analitycznych."
  },
  "61": {
    "about": "Zapewnienie uwierzytelnionej separacji sieciowej (authenticated separation) pomiędzy warstwami aplikacji na Compute Engine.",
    "interpret": "Używanie kont serwisowych (Service Accounts) jako tożsamości do reguł firewall. Tagi sieciowe nie są tożsamościami i każdy admin maszyny może je zmienić, co czyni je mniej bezpiecznymi."
  },
  "62": {
    "about": "Retencja logów bezpieczeństwa przez 2 lata przy minimalizacji kosztów.",
    "interpret": "Przechowywanie logów w Cloud Storage (klasa Archive) jest najtańszą opcją retencji długoterminowej. BigQuery jest lepsze do analizy, ale znacznie droższe przy samym składowaniu danych."
  },
  "63": {
    "about": "Izolacja podów Kubernetes obsługujących transakcje PCI na dedykowanych i odizolowanych węzłach (Nodes).",
    "interpret": "Zastosuj mechanizm Taints (skazy) na węzłach oraz Tolerations (tolerancje) w konfiguracji Podów. Gwarantuje to, że żadne inne pody nie zostaną uruchomione na tych dedykowanych węzłach."
  },
  "64": {
    "about": "Dostosowanie aplikacji Compute Engine z dyskami SSD i ruchem UDP do standardu FIPS 140-2.",
    "interpret": "Standard FIPS wymaga certyfikowanych modułów kryptograficznych. W chmurze Google należy wykorzystać bibliotekę BoringCrypto do szyfrowania danych w locie i w spoczynku."
  },
  "65": {
    "about": "Zezwolenie maszynie wirtualnej z zablokowanym internetem na pobieranie aktualizacji z określonego repozytorium.",
    "interpret": "Stwórz regułę zezwalającą na ruch wychodzący do konkretnego zakresu IP (CIDR) repozytorium z priorytetem wyższym niż reguła blokująca (czyli o niższej wartości liczbowej priorytetu)."
  },
  "66": {
    "about": "Grupowe zarządzanie uprawnieniami IAM do kluczy szyfrujących w Cloud KMS.",
    "interpret": "Najlepszą praktyką jest grupowanie powiązanych kluczy w jednym pęku kluczy (KeyRing) i nadawanie uprawnień IAM na poziomie KeyRing, co upraszcza zarządzanie dostępem."
  },
  "67": {
    "about": "Bezpieczne filtrowanie i przenoszenie logów zawierających dane osobowe (PII) do odizolowanego kubła.",
    "interpret": "Użyj wyzwalacza Cloud Storage (GCS Trigger) połączonego z Cloud Functions i Cloud DLP API, aby skanować wgrywane pliki i przenosić te z PII do bezpiecznej lokalizacji."
  },
  "68": {
    "about": "Automatyczne odbieranie dostępu zwolnionemu pracownikowi w chmurze GCP.",
    "interpret": "Skonfiguruj Google Cloud Directory Sync (GCDS) z lokalnym Active Directory/LDAP, co zapewni automatyczne deprovisionowanie konta w Cloud Identity po wyłączeniu go w lokalnym AD."
  },
  "69": {
    "about": "Integracja istniejącego lokalnego katalogu tożsamości jako jedynego źródła prawdy w GCP.",
    "interpret": "GCDS (Google Cloud Directory Sync) to dedykowane narzędzie do synchronizacji tożsamości i grup z lokalnego katalogu (np. AD) do Cloud Identity."
  },
  "70": {
    "about": "Wybór międzynarodowego standardu dotyczącego bezpieczeństwa informacji w chmurze.",
    "interpret": "ISO/IEC 27017 to standard zawierający wytyczne dla kontroli bezpieczeństwa informacji stosowanych specyficznie w usługach chmurowych."
  },
  "71": {
    "about": "Tworzenie konta serwisowego (Service Account) z minimalnymi uprawnieniami do listowania instancji maszyn wirtualnych.",
    "interpret": "Zastosuj zasadę najmniejszych uprawnień. Zamiast roli edytora przypisz predefiniowaną rolę z uprawnieniami tylko do odczytu metadanych Compute Engine (np. `Compute Viewer`)."
  },
  "72": {
    "about": "Podział odpowiedzialności za bezpieczeństwo w modelu IaaS (Infrastructure as a Service).",
    "interpret": "W modelu IaaS Google odpowiada za bezpieczeństwo fizyczne i hiperwizor, natomiast klient odpowiada za system operacyjny, aplikacje, dane oraz konfigurację sieci (zapory)."
  },
  "73": {
    "about": "Zapewnienie odporności na awarie (Disaster Recovery) i retencji danych w chmurze GCP.",
    "interpret": "Skonfiguruj cykliczne migawki (snapshots) dysków maszyn wirtualnych oraz replikację danych w Cloud Storage do wielu regionów (Multi-Regional)."
  },
  "74": {
    "about": "Procedura wdrażania szyfrowania kopertowego (Envelope Encryption) dla wrażliwych danych.",
    "interpret": "Szyfrujemy dane lokalnie za pomocą wygenerowanego klucza DEK, następnie szyfrujemy klucz DEK w usłudze Cloud KMS za pomocą KEK, a na koniec przechowujemy zaszyfrowane dane wraz z zaszyfrowanym DEK."
  },
  "75": {
    "about": "Zapewnienie bezpiecznego dostępu pracowników do systemu CRM w GCP z dowolnego miejsca.",
    "interpret": "Użyj Cloud IAP (Identity-Aware Proxy) do uwierzytelniania użytkowników na podstawie tożsamości IAM i kontekstu urządzenia (Context-Aware Access) bez potrzeby posiadania VPN."
  },
  "76": {
    "about": "Ochrona wrażliwych danych w Cloud Storage przed przypadkowym udostępnieniem publicznym.",
    "interpret": "Włącz blokadę publicznego dostępu (Public Access Prevention) na poziomie kubła GCS lub zastosuj regułę polityki organizacji blokującą publiczne udostępnianie."
  },
  "77": {
    "about": "Monitorowanie i audytowanie zapytań SQL wykonywanych na wrażliwych danych w BigQuery.",
    "interpret": "Włącz zbieranie logów audytowych dostępu do danych (Data Access Audit Logs) w Cloud Logging, które rejestrują szczegóły każdego zapytania do BigQuery."
  },
  "78": {
    "about": "Ograniczenie ryzyka związanego z posiadaniem uprawnień superadministratora (Organization Administrator).",
    "interpret": "Zminimalizuj liczbę kont z rolą admina organizacji, oddziel konta codzienne od administracyjnych i włącz obowiązkowe uwierzytelnianie dwuskładnikowe (MFA)."
  },
  "79": {
    "about": "Zrozumienie granic odpowiedzialności za bezpieczeństwo sieciowe w Google Cloud.",
    "interpret": "Google zapewnia bezpieczeństwo fizycznej sieci i infrastruktury, natomiast klient odpowiada za konfigurację reguł zapory (firewall), tras (routes) oraz perymetrów bezpieczeństwa (VPC-SC)."
  },
  "80": {
    "about": "Zabezpieczenie publicznej aplikacji przed atakami OWASP Top 10 i blokowanie złośliwych adresów IP na brzegu sieci.",
    "interpret": "Rozwiązaniem jest użycie Cloud Armor zintegrowanego z zewnętrznym Load Balancerem HTTP(S) w celu wdrożenia reguł zapory aplikacyjnej (WAF)."
  },
  "81": {
    "about": "Umożliwienie maszynom wirtualnym bez publicznych adresów IP dostępu do usług Google (takich jak Cloud Storage) bez dostępu do internetu.",
    "interpret": "Włącz Private Google Access (PGA) na podsieci VPC. Pozwala to na routing ruchu do usług Google przez sieć wewnętrzną bez użycia bramy internetowej."
  },
  "82": {
    "about": "Zapisywanie plików wynikowych przetwarzania wsadowego z maszyn wirtualnych do Cloud Storage przy braku dostępu do internetu.",
    "interpret": "Prawidłowym mechanizmem jest włączenie Private Google Access na podsieci maszyn wirtualnych, co umożliwia im komunikację z API Cloud Storage bez publicznego IP."
  },
  "83": {
    "about": "Optymalizacja kosztów skanowania dużych ilości danych w poszukiwaniu danych wrażliwych przy użyciu Cloud DLP.",
    "interpret": "Zastosuj próbkowanie danych (sampling) za pomocą limitów wierszy (rowsLimit) w BigQuery lub bajtów na plik (bytesLimitPerFile) w GCS, zamiast skanować całe zbiory danych."
  },
  "84": {
    "about": "Bezpieczne uwierzytelnianie transferu danych z maszyny wirtualnej do innych usług GCP.",
    "interpret": "Przypisz do maszyny wirtualnej dedykowane konto serwisowe (Service Account) z precyzyjnie nadanymi rolami IAM, unikając stosowania domyślnego konta serwisowego Compute Engine."
  },
  "85": {
    "about": "Ograniczenie tworzenia i używania zewnętrznych, kluczowych poświadczeń (service account keys) w całej firmie.",
    "interpret": "Wdróż politykę organizacji (Organization Policy) blokującą tworzenie kluczy do kont serwisowych (`constraints/iam.disableServiceAccountKeyCreation`)."
  },
  "86": {
    "about": "Reakcja na incydent bezpieczeństwa związany z wyciekiem lub kompromitacją klucza konta serwisowego.",
    "interpret": "Natychmiast usuń lub dezaktywuj skompromitowany klucz w konsoli IAM, aby odciąć napastnikowi dostęp do zasobów, a następnie przeanalizuj logi audytowe."
  },
  "87": {
    "about": "Zapewnienie bezpieczeństwa komunikacji sieciowej między warstwami frontend i backend w VPC.",
    "interpret": "Użyj reguł firewall zezwalających na ruch przychodzący (ingress) do warstwy backendu wyłącznie wtedy, gdy źródłem jest konto serwisowe frontendowej grupy instancji."
  },
  "88": {
    "about": "Zabezpieczenie maszyn wirtualnych za load balancerem przed bezpośrednim dostępem z pominięciem load balancera.",
    "interpret": "Skonfiguruj reguły firewall zezwalające na ruch przychodzący wyłącznie z zakresów adresów IP należących do Google Cloud Load Balancer (np. 130.211.0.0/22 i 35.191.0.0/16)."
  },
  "89": {
    "about": "Zapewnienie zgodności z zasadą najmniejszych uprawnień dla programistów wdrażających aplikacje.",
    "interpret": "Przypisuj programistom role predefiniowane (np. `Kubernetes Engine Developer`) zamiast szerokich ról podstawowych (np. `Editor` lub `Owner`)."
  },
  "90": {
    "about": "Dostęp do zasobów GCP dla zewnętrznych partnerów biznesowych lub kontrahentów bez tworzenia kont w naszej domenie.",
    "interpret": "Skorzystaj z federacji tożsamości lub dodaj ich zewnętrzne konta Google (np. gmail lub konta ich organizacji) bezpośrednio do odpowiednich ról IAM w naszych projektach."
  },
  "91": { "about": "Convert unmanaged consumer Google accounts using the corporate domain to managed accounts for corporate identity control.", "interpret": "Use the Transfer Tool for Unmanaged Users (TTUU) to invite users to join the corporate domain and enforce management. Use Google Cloud Directory Sync (GCDS) to sync identities." },
  "92": { "about": "Prevent XSS attacks in a web application where user input is reflected in web pages.", "interpret": "Use a templating system with contextual auto-escaping to prevent XSS. Web Security Scanner can help detect these vulnerabilities in staging/production." },
  "93": { "about": "Restrict Cloud Storage access in Project A to only be accessible from Project B and prevent exfiltration outside the network.", "interpret": "Use VPC Service Controls (VPC-SC) to create a perimeter around Project A and B and include Cloud Storage in the perimeter to block access outside the perimeter." },
  "94": { "about": "Protect sensitive fields (email, names) in BigQuery from operations teams while allowing analysis.", "interpret": "Use Cloud DLP API to tokenize or mask (pseudonymize) the sensitive fields before they are loaded into BigQuery, ensuring analytical integrity while protecting PII." },
  "95": { "about": "Restrict service account creation capability centrally across the organization.", "interpret": "Use the organization policy constraint `constraints/iam.disableServiceAccountCreation` (or `disableServiceAccountKeyCreation`) to restrict the creation of new service accounts." },
  "96": { "about": "Provide evidence for access reviews of a regulated workload.", "interpret": "Use Policy Analyzer to understand which principals have access to which resources, making it the tool for access review evidence." },
  "97": { "about": "Reduce the risk of account compromise for Cloud Identity users who use SAML SSO.", "interpret": "Configure a strong Cloud Identity password policy AND enforce 2-Step Verification (2SV), preferably with security keys, for all users." },
  "98": { "about": "Validate web application protection policies (Cloud Armor) without enforcing them immediately.", "interpret": "Use Cloud Armor's preconfigured WAF rules in 'preview' mode to observe which requests would have been blocked without affecting traffic." },
  "99": { "about": "Store and retrieve sensitive configuration data (secrets) for an application on Compute Engine.", "interpret": "Use Secret Manager to store and retrieve sensitive configuration data, enabling centralized management, audit logs, and access control." },
  "100": { "about": "Implement encryption at-rest with a balance of key management complexity and control.", "interpret": "Use Google default encryption for non-sensitive data (zero management overhead) and Cloud KMS for sensitive data (key management and control)." },
  "101": { "about": "Join banking data with credit score data while obfuscating sensitive data and preserving referential integrity.", "interpret": "Use Cloud DLP with Format-Preserving Encryption (FPE) to tokenize sensitive fields while maintaining the ability to join the datasets." },
  "102": { "about": "Assign minimal permissions to an office manager for payment matching and billing alerts.", "interpret": "Grant 'Billing Account Costs Manager' (to manage billing alerts) and 'Billing Account Viewer' (to view costs) to follow the principle of least privilege." },
  "103": { "about": "Manage secrets for Prod and Non-Prod with environment separation and control over key rotation.", "interpret": "Use separate projects for Prod and Non-Prod, enforce secret-level IAM bindings for access control, and use customer-managed encryption keys (CMEK) in KMS." },
  "104": { "about": "Address concerns about internal Google employees accessing company data on Google Cloud.", "interpret": "Enable Access Transparency logs to see when Google employees access your data, and Access Approval to require explicit approval for access." },
  "105": { "about": "Authenticate gcloud CLI using a third-party SAML identity provider.", "interpret": "Configure Workforce Identity Federation to use the third-party IdP to authenticate users to GCP via SAML." },
  "106": { "about": "Delegate access management by business unit at scale, using on-premises AD, ensuring users lose access when moving.", "interpret": "Organize projects in folders for each business unit, assign permissions to Google Groups at the folder level, and use GCDS for user/group sync." },
  "107": { "about": "Scan GKE applications weekly for OWASP vulnerabilities with authentication using Google accounts.", "interpret": "Use Web Security Scanner, which supports OWASP scanning and Google-account authentication." },
  "108": { "about": "Transfer data at 50 Gbps between on-premises and Google Cloud securely.", "interpret": "Use Dedicated Interconnect to meet the high bandwidth requirement of 50 Gbps." },
  "109": { "about": "Authenticate DNS lookups to prevent DDoS and cache poisoning.", "interpret": "Enable DNSSEC in Cloud DNS to provide cryptographic authentication of DNS records." },
  "110": { "about": "Confirm unauthorized access and determine activity for a compromised service account key.", "interpret": "Use Logs Explorer to query Data Access and Admin Activity audit logs for the service account." },
  "111": { "about": "Identify network anomalies and traffic patterns within and across VPCs in production.", "interpret": "Enable VPC Flow Logs on subnets to monitor traffic patterns, and consider Packet Mirroring for deeper packet inspection." },
  "112": { "about": "Replicate user/group lifecycle from on-premises LDAP to Cloud Identity and disable manually created users.", "interpret": "Configure GCDS to suspend users in Cloud Identity who are not present in LDAP, and run it as a recurring task." },
  "113": { "about": "Troubleshoot 'access denied' for GKE/Compute instances to BigQuery datasets protected by VPC-SC.", "interpret": "The perimeter in Project A is blocking access. Add the project containing the Compute instances to the perimeter, or create a perimeter bridge." },
  "114": { "about": "Detect firewall rules that are overlapped by other rules.", "interpret": "Use Firewall Insights in the Network Intelligence Center to identify shadowed or redundant firewall rules." },
  "115": { "about": "Grant minimal view-only access to security logs (Admin, Data Access, Access Transparency) for SOC team.", "interpret": "Assign the 'roles/logging.privateLogViewer' role, which provides access to all logs, including private ones." },
  "116": { "about": "Resolve error when exporting logs to Cloud Storage bucket with uniform bucket-level access.", "interpret": "Ensure the log sink's service account has the 'Storage Object Creator' (roles/storage.objectCreator) role on the bucket." },
  "117": { "about": "Minimize risk of CI/CD credentials being stolen.", "interpret": "Use a custom service account for CI/CD and restrict the creation of service account keys by using organization policy." },
  "118": { "about": "Inspect traffic between untrusted and trusted network segments using a virtual firewall appliance.", "interpret": "Use a VPC network with multiple network interfaces on the firewall appliance to route traffic between segments." },
  "119": { "about": "Enable SSH access to bastion host without a public IP.", "interpret": "Use Identity-Aware Proxy (IAP) TCP forwarding to securely tunnel SSH traffic over IAP without needing public IPs." },
  "120": { "about": "Enable VPC-SC in a mode that doesn't block access, for testing perimeter changes.", "interpret": "Use the 'dry run' mode to observe potential violations without actually blocking any traffic." },
  "121": { "about": "Explore network flows AND payloads in a VPC.", "interpret": "Use Packet Mirroring to capture raw traffic (including payloads) to a load balancer or collector for deeper inspection." },
  "122": { "about": "Secure network communication between web and app tiers, autoscaling compliant, no instance-admin tampering.", "interpret": "Use service accounts as identities for VPC firewall rules, which remain consistent even if instance tags or IP addresses change." },
  "123": { "about": "Connect on-premises to Google Cloud privately, access Google APIs via private endpoints, restricted by VPC-SC.", "interpret": "Use a Dedicated or Partner Interconnect, and configure the on-premises DNS to resolve *.googleapis.com to the restricted.googleapis.com IP range." },
  "124": { "about": "Anonymize PHI in a way that is not reversible, preserving analytical utility, not character set/length.", "interpret": "Use Cloud DLP with cryptographic hashing to achieve irreversible anonymization while allowing for joins based on hash equality." },
  "125": { "about": "Prevent vulnerable container images from deploying to GKE, automated and cost-efficient.", "interpret": "Use Artifact Analysis for scanning and Binary Authorization to enforce attestations (e.g., 'scan-passed') before deployment." },
  "126": { "about": "Maintain client IP by default with standard network tier.", "interpret": "TCP/UDP Network Load Balancing preserves the client IP address." },
  "127": { "about": "Prevent accidental deletion of Shared VPC host project.", "interpret": "Enable the 'compute.restrictXpnProjectLienRemoval' organization policy to prevent the removal of liens that protect host projects." },
  "128": "Test firewall rules to determine if they are working properly.", "interpret": "Enable VPC Flow Logs and use Logs Explorer to verify if traffic is being allowed or denied as intended." },
  "129": { "about": "Grant access to external partner users while enforcing domain-restricted sharing.", "interpret": "Add the partner's organization ID as an exception in the 'domain restricted sharing' organization policy at the project or folder level." },
  "130": { "about": "Requirements to use Cloud Armor security policies.", "interpret": "Cloud Armor policies require an external HTTP(S) load balancer and the backend service load balancing scheme must be EXTERNAL." },
  "131": "Reduce need for public IPs on Compute Engine instances that need internet access.", "interpret": "Use Cloud NAT to provide egress internet connectivity to instances without public IP addresses." },
  "132": "Export login/audit logs to SIEM in near real-time, across all organization projects.", "interpret": "Create an aggregate log sink at the organization level, with Pub/Sub as the destination to provide near real-time ingestion to the SIEM." },
  "133": "Restrict data residency for a workload to specific regions, requiring granular control at folder level.", "interpret": "Set the Resource Location Restriction organization policy constraint at the folder level to limit where resources can be created." },
  "134": "Connect on-premises to Google Cloud privately, access Google APIs via private endpoints, restricted by VPC-SC.", "interpret": "Use a Cloud Interconnect, and configure DNS for restricted.googleapis.com, which is required for VPC Service Controls." },
  "135": "Encrypt data-at-rest with a balance of key management complexity (CMEK vs. GMEK) and key control.", "interpret": "Use Google default encryption for non-sensitive data, and CMEK (Cloud KMS) for sensitive data requiring rotation and key control." },
  "136": "Reduce impact of a compromised KMS key.", "interpret": "Enable automatic key rotation (to limit the time a key version is valid) and disable/revoke compromised key versions." },
  "137": "Restrict data residency for a workload with granular control at project level.", "interpret": "Set the Resource Location Restriction organization policy constraint at the project level to be as granular as possible." },
  "138": "Monitor API calls that read configuration or metadata in Cloud SQL.", "interpret": "Review Data Access audit logs, as these track API calls that read data or metadata." },
  "139": "Filter and move log files containing PII to a secure bucket, accessible only to admin.", "interpret": "Use Cloud Storage event triggers to call a Cloud Function that invokes DLP API to inspect files; if PII is detected, move to a secure bucket." },
  "140": "Automate deletion of data after a specific retention period in Cloud Storage, minimizing costs.", "interpret": "Use Cloud Storage Object Lifecycle Management with an 'Age' condition and a 'Delete' action." },
  "141": { "about": "Detect crypto mining and common misconfigurations using SCC.", "interpret": "Use Event Threat Detection (for crypto mining) and Security Health Analytics (for misconfigurations) in Security Command Center." },
  "142": { "about": "Implement secure 2SV protecting against person-in-the-middle attacks.", "interpret": "Use Titan Security Keys, which use FIDO U2F for cryptographic authentication that prevents phishing." },
  "143": { "about": "Secure network connection between GCE instances in separate organizations.", "interpret": "Use VPC peering or Cloud VPN between the VPCs, which keeps traffic private and allows encryption." },
  "144": { "about": "Preparation steps before migrating projects to a new organization node.", "interpret": "Identify inherited IAM roles on projects and remove project-level custom IAM roles to avoid conflicts or permissions issues." },
  "145": { "about": "Ensure customer data at rest resides within specific geographic boundaries.", "interpret": "Use the Resource Location Restriction organization policy to limit where resources can be created." },
  "146": { "about": "Prevent developers from creating user-managed service account keys.", "interpret": "Use an organization policy to restrict or disable the creation of service account keys (`constraints/iam.disableServiceAccountKeyCreation`)." },
  "147": { "about": "Reset a user's access when they lose their 2SV second factor.", "interpret": "Generate a backup code or temporarily disable 2SV for the user, then ensure they set up a new second factor." },
  "148": { "about": "Enforce access control policies for applications and resources.", "interpret": "Identity-Aware Proxy (IAP) is used to control access to applications and resources based on identity and context." },
  "149": { "about": "Update VPC-SC perimeter with new access level without disruption.", "interpret": "Use 'dry run' mode to validate the new access level policy before enforcing it." },
  "150": { "about": "Reduce internet exposure of VMs in a Shared VPC while serving external users.", "interpret": "Deploy an external HTTP(S) load balancer in the host project, which acts as a secure ingress point for the managed instance group." },
  "151": { "about": "Implement crypto-shredding (deleting encryption keys) for PII deletion.", "interpret": "Use customer-managed encryption keys (CMEK) and delete the key in Cloud KMS to make the encrypted data irrecoverable." },
  "152": { "about": "Centralize production logs and search/analyze them.", "interpret": "Create an aggregate sink at the folder level and export logs to a dedicated log bucket for centralized analysis." },
  "153": { "about": "Initial setup steps for using Cloud External Key Manager (Cloud EKM).", "interpret": "First, create or use an existing key with a unique URI in the external partner system, then grant Google Cloud access to it." },
  "154": { "about": "Allow internet access for VM instances without public IPs for updates.", "interpret": "Use Cloud NAT to allow private VMs to reach the internet for necessary updates without giving them public IPs." },
  "155": { "about": "Prevent Cloud Storage buckets from being publicly available.", "interpret": "Enforce 'Public Access Prevention' at the bucket/project level and 'Domain Restricted Sharing' in an organization policy." },
  "156": { "about": "Integrate on-premises AD with Google Cloud for authentication and lifecycle management.", "interpret": "Use GCDS to sync users and groups, and SAML integration with Cloud Identity for SSO." },
  "157": { "about": "Best practices for Super Admin accounts.", "interpret": "Use physical tokens (FIDO2) for MFA and use non-privileged accounts for day-to-day work." },
  "158": { "about": "Retain application logs for 12 years in EU.", "interpret": "Configure a custom retention policy on a log bucket in a log-hosting project located in an EU region." },
  "159": { "about": "Redact PII data while preserving referential integrity for analytics.", "interpret": "Use Cloud DLP with cryptographic hashing or tokenization, and then store the de-identified data in BigQuery." },
  "160": { "about": "Encryption solutions where keys are not stored in the same cloud as data.", "interpret": "Cloud EKM (External Key Manager) and Customer-Supplied Encryption Keys (CSEK) keep key control outside the cloud provider." },
  "161": { "about": "Encryption strategy for compliance, managing keys for various GCP services.", "interpret": "Customer-managed encryption keys (CMEK) provide the best balance of control and integration with GCP services." },
  "162": { "about": "IAM role for IAP access to HTTPS resources.", "interpret": "Assign the 'IAP-Secured Web App User' role to allow access to HTTPS resources protected by IAP." },
  "163": { "about": "Troubleshoot firewall rule shadowing (traffic allowed despite rules).", "interpret": "Check for higher priority rules that are allowing the traffic before the deny rules take effect." },
  "164": { "about": "Restrict use of default networks in new projects.", "interpret": "Use the organization policy constraint `constraints/compute.skipDefaultNetworkCreation` to prevent default network creation." },
  "165": { "about": "Best practices for IAM authentication and authorization.", "interpret": "Use Cloud Identity with SSO/SAML integration, and apply least privilege using predefined IAM roles." },
  "166": { "about": "Inspect IP packet data for malicious content.", "interpret": "Use Packet Mirroring to send traffic to a network security appliance for inspection." },
  "167": { "about": "Identify denied load balancer types based on hierarchy policies.", "interpret": "Policies cascade; check all levels of the hierarchy to see which denies apply to the specific resource." },
  "168": { "about": "Protect sensitive Cloud Storage data from exfiltration and unauthorized access (Projects A to B).", "interpret": "Enable VPC-SC around projects A and B, including Cloud Storage API in the perimeter." },
  "169": "Separate duties for network resource management.", "interpret": "Use a Shared VPC, where the network team manages the host project, and developers are granted Network User role in the service projects." },
  "170": { "about": "Manage unmanaged consumer accounts that use the corporate domain.", "interpret": "Use the Transfer Tool for Unmanaged Users to prompt those users to join the corporate account." },
  "171": { "about": "Enforce use of specific, hardened OS images.", "interpret": "Use an organization policy to restrict image sources, and grant 'compute.imageUser' role only to the trusted project." },
  "172": { "about": "Access strategy for DevOps to investigate issues with least-privilege.", "interpret": "Use custom IAM roles with limited permissions, or use service account impersonation to grant temporary access." },
  "173": { "about": "Encryption key management with FIPS 140-2 Level 3, regional redundancy, and rotation.", "interpret": "Customer-managed encryption keys (CMEK) with Cloud HSM provide FIPS 140-2 Level 3 and key control/rotation." },
  "174": { "about": "Explore network payloads and headers in GCP.", "interpret": "Use Packet Mirroring to capture traffic, then use a tool like Cloud IDS or third-party appliance to analyze it." },
  "175": { "about": "End-to-end encryption (transit, use, rest) in GCP.", "interpret": "Use Client-side encryption for rest/use, and TLS/Confidential Computing for transit/use." },
  "176": { "about": "Prevent public Cloud Storage buckets proactively.", "interpret": "Enable the 'Public Access Prevention' organization policy constraint at the organization level." },
  "177": { "about": "Identify network anomalies and capture payloads.", "interpret": "Use Packet Mirroring to capture traffic for inspection." },
  "178": { "about": "Anonymize sensitive compensation data, preserving interval data but obfuscating dates.", "interpret": "Use format-preserving encryption (FPE) to shift dates or values while keeping the format for analysis." },
  "179": { "about": "Access Google APIs privately from on-premises, using restricted APIs.", "interpret": "Configure DNS for restricted.googleapis.com, which is required for VPC Service Controls and private access to Google APIs." },
  "180": { "about": "Deliver provenance for software builds.", "interpret": "Use Cloud Build to generate SLSA level 3 provenance, which ensures the build process is documented and untampered." },
  "181": { "about": "Patch VMs with private IPs daily.", "interpret": "Use VM Manager (OS Config) to automate patch management for VMs without public IPs." },
  "182": { "about": "Extract a list of VMs with critical OS security updates available.", "interpret": "Use the OS Config agent to generate a patch status dashboard or extract the data for reports." },
  "183": { "about": "Obfuscate dates for start/stop intervals while preserving intervals for analytics.", "interpret": "Use Cloud DLP with format-preserving encryption to obfuscate dates while maintaining the integrity of the start/stop intervals." },
  "184": "Prevent BigQuery data exfiltration by restricting access to authorized IPs.", "interpret": "Use VPC Service Controls and an Access Level based on source IP address to restrict BigQuery access." },
  "185": { "about": "Ensure OS images used in projects are trusted.", "interpret": "Use the 'compute.trustedImageProjects' organization policy constraint to restrict images to trusted projects only." },
  "186": { "about": "Grant read access to external image for deployment into a perimeter.", "interpret": "Update the perimeter to include an Egress rule allowing access to the external image project via `compute.googleapis.com`." },
  "187": { "about": "Remove access with a compromised service account key immediately.", "interpret": "Disable the compromised service account key to stop its use; deletion is also an option but disabling is faster." },
  "188": { "about": "Scan container images and share reports without external exposure.", "interpret": "Enable Artifact Registry vulnerability scanning and use Artifact Analysis to view/share reports internally." },
  "189": { "about": "Limit traffic from clients based on time interval (rate limiting) to protect availability.", "interpret": "Use Cloud Armor with a rate-based rule to limit requests from clients over a specific time window." },
  "190": { "about": "Set up and enforce SAML SSO for Cloud Identity.", "interpret": "Configure the SAML profile with IdP sign-in URL, upload certificate, and ensure Entity ID and ACS URL match in IdP." },
  "191": { "about": "Access Cloud Console only from corporate-issued devices with valid certificates.", "interpret": "Use Context-Aware Access policies based on device certificate status and device management state." },
  "192": { "about": "CI/CD pipelines on GKE accessing GCP APIs securely.", "interpret": "Use GKE Workload Identity to map GKE service accounts to IAM service accounts." },
  "193": { "about": "Remove PII from files older than 12 months in Cloud Storage and archive them.", "interpret": "Use Cloud DLP for PII inspection and redaction/anonymization, and then use GCS Lifecycle Management to move them to archive storage." },
  "194": { "about": "Manage consumer accounts (using corporate domain) with Cloud Identity.", "interpret": "Use the transfer tool for unmanaged accounts, or mandate that users change their email addresses." },
  "195": { "about": "Identify principals who can change firewall rules.", "interpret": "Use Policy Analyzer to query IAM roles/permissions like 'compute.firewalls.update' or 'compute.firewalls.delete'." },
  "196": { "about": "Migrate files from GMEK to CMEK quickly/efficiently.", "interpret": "Update the bucket encryption policy to CMEK and perform a rewrite of the objects to apply the new encryption." },
  "197": { "about": "Ensure only trusted container images are deployed on Cloud Run.", "interpret": "Enable Binary Authorization on Cloud Run and enforce it using policies that check image signatures." },
  "198": { "about": "Enable private access for on-premises hosts to Google APIs, minimizing costs/optimizing efficiency.", "interpret": "Use a dedicated or Partner Interconnect to connect to Google Cloud, and then route requests to Google APIs privately." },
  "199": { "about": "Analyze IAP logs for potential intrusions.", "interpret": "Use Cloud Logging to analyze 'Policy Denied' audit logs, which capture attempts to bypass IAP access controls." },
  "200": { "about": "Enforce CMEK for all new Cloud Storage resources.", "interpret": "Use the organization policy constraint `constraints/gcp.restrictStorageNonCmekServices` and set it to deny for storage." },
  "201": { "about": "Design logs management for 200 projects, providing visibility and configuration tracking.", "interpret": "Use an aggregate log sink at the organization level, routing logs to a centralized log bucket for analysis." },
  "202": { "about": "Prevent common misconfigurations like OPEN_MYSQL_PORT.", "interpret": "Use hierarchical firewall policies at the organization/folder level to deny traffic to sensitive ports by default." },
  "203": { "about": "Keep instance logs within Europe, in a specific region.", "interpret": "Create a log bucket in the desired region (e.g., europe-west4) and configure a sink to route logs to that bucket." },
  "204": { "about": "Detect crypto mining.", "interpret": "Enable Event Threat Detection in Security Command Center, which includes detectors for crypto mining." },
  "205": { "about": "Prevent identity spoofing for workload identity federation.", "interpret": "Use immutable attributes in attribute mappings and limit which external identities can impersonate specific service accounts." },
  "206": { "about": "Restrict BigQuery access based on row/column permissions.", "interpret": "Use row-level access policies (for rows) and policy tags/data catalog (for columns) to restrict data access." },
  "207": { "about": "Provide internet access to VMs without public IPs for image builds.", "interpret": "Provision a Cloud NAT gateway in the VPC, allowing egress traffic for VMs without public IPs." },
  "208": { "about": "Investigate and remediate public Cloud Storage buckets.", "interpret": "Change bucket permissions, query audit logs to see if unauthorized access occurred, and use Public Access Prevention to block future occurrences." },
  "209": { "about": "Ensure only trusted container images are deployed on GKE.", "interpret": "Use Binary Authorization to enforce that images are signed by a trusted authority before deployment." },
  "210": { "about": "Audit public network assets quickly.", "interpret": "Use Cloud Asset Inventory to identify public network assets, then use a vulnerability scanner on those specific assets." },
  "211": { "about": "GDPR compliance, data residency, and sovereign operations in EU.", "interpret": "Use resource location restrictions and Key Access Justifications to control data location and access." },
  "212": { "about": "Migrate unmanaged users to Cloud Identity.", "interpret": "Use the transfer tool for unmanaged users to invite them to merge their account into the managed domain." },
  "213": { "about": "Access GCP from GitHub Actions securely.", "interpret": "Configure workload identity federation between GitHub and GCP, allowing GitHub to impersonate a service account." },
  "214": { "about": "Encrypt data while in use by VMs (enforced).", "interpret": "Implement an organization policy constraint that requires all VMs to be created as Confidential VMs." },
  "215": { "about": "Prevent external users from being added to specific groups.", "interpret": "Configure the group settings in Google Workspace/Cloud Identity to 'allow members only from within the organization'." },
  "216": { "about": "Automated evaluation against CIS benchmark, disabling irrelevant controls.", "interpret": "Use Security Command Center and mute irrelevant findings so they do not impact the compliance posture." },
  "217": { "about": "Route internet traffic through on-premises, securely, with high bandwidth.", "interpret": "Use Cloud Interconnect, and configure on-premises firewall to handle the internet-bound traffic." },
  "218": { "about": "Prevent modification of environment from unattended laptops.", "interpret": "Set short session timeout for Google Cloud console sessions to force frequent re-authentication." },
  "219": { "about": "Encryption key management with external provider, visibility, and denial.", "interpret": "Use Cloud EKM with Key Access Justifications, which allows external control and auditing of key requests." },
  "220": { "about": "Grant access across VPC-SC perimeters, least privilege.", "interpret": "Use a perimeter ingress policy to allow specific service accounts or resources to communicate across perimeters." },
  "221": { "about": "Troubleshoot why a VM was created with an external IP despite a policy.", "interpret": "Check if an organization policy override at the project level is allowing the behavior." },
  "222": { "about": "Implement Workload Identity Federation (WIF) with on-premises ADFS.", "interpret": "Set up a workload identity pool with ADFS as a provider, and allow principals in the pool to impersonate a service account." },
  "223": { "about": "Minimize risk of open gcloud CLI sessions.", "interpret": "Set the reauthentication frequency for session control to a short duration (e.g., 1 hour)." },
  "224": { "about": "Secure remote SSH access to VMs without public IPs.", "interpret": "Use IAP (Identity-Aware Proxy) TCP forwarding to tunnel SSH traffic." },
  "225": { "about": "Permanent retention of record data in Cloud Storage.", "interpret": "Enable bucket lock and a retention policy, ensuring it cannot be modified or deleted." },
  "226": { "about": "Protect VMs against boot/kernel malware and memory-in-use reads.", "interpret": "Use Shielded VMs and Confidential VMs, and enforce this via organization policy." },
  "227": { "about": "Reduce risk of cookie replay attacks.", "interpret": "Enforce Security Key (FIDO2) authentication and use shorter session/access token durations." },
  "228": { "about": "Confidential, external key control, encryption in use.", "interpret": "Use Cloud EKM for external key control and Confidential VMs for memory encryption." },
  "229": { "about": "GDPR compliance: restrict resource location to EU.", "interpret": "Use the Resource Location Restriction organization policy to restrict resource creation to EU regions." },
  "230": { "about": "Secrets residency (EU) with high availability.", "interpret": "Create secrets with a user-managed replication policy, selecting only the desired EU regions." },
  "231": { "about": "External control and valid rationale for key access.", "interpret": "Use Cloud EKM (External Key Manager) integrated with an on-premises HSM, enabled with Key Access Justifications (KAJ)." },
  "232": { "about": "IAM design for audit log access.", "interpret": "Grant log viewer roles to security team at Org level, and developers at the folder level (least privilege)." },
  "233": { "about": "Automate patching and patch management visibility.", "interpret": "Use VM Manager (OS patch management) to automate patching and view reports centrally." },
  "234": { "about": "IAM design for BigQuery access.", "interpret": "Use curated datasets and assign BigQuery Data Viewer role; maintain separate projects or datasets to control access." },
  "235": { "about": "Troubleshoot why a Cloud Storage bucket cannot access a CMEK key.", "interpret": "CMEK keys and Cloud Storage buckets must be in the same region." },
  "236": { "about": "Regulated workloads: data residency, access, support geography.", "interpret": "Use Assured Workloads to enforce compliance, data location, and access controls." },
  "237": { "about": "Keys generated/stored outside Google, integrate with many services.", "interpret": "Use Cloud External Key Manager (Cloud EKM)." },
  "238": { "about": "Prevent phishing through fake login pages.", "interpret": "Use security keys (FIDO2/U2F) which are resistant to phishing as they verify the origin/URL." },
  "239": { "about": "Restrict egress connections from VPC to a specific CIDR range.", "interpret": "Use a hierarchical firewall policy to deny all egress and explicitly allow egress to the target CIDR." },
  "240": { "about": "Scale issuance of certificates from on-premises PKI for load balancers.", "interpret": "Use subordinate CAs in Google Certificate Authority Service (CAS) anchored to the on-premises root CA." },
  "241": { "about": "Secure access for batch jobs with least privilege.", "interpret": "Use service account impersonation to generate temporary, least-privilege tokens for each job." },
  "242": { "about": "Result of granting access across organization boundaries with policies.", "interpret": "Organization policies are restrictive; if terramearth.com is denied by a policy on the folder, access is denied even if it's allowed on the project." },
  "243": { "about": "Expose internal app to users securely with auth.", "interpret": "Use an Application Load Balancer with IAP (Identity-Aware Proxy) enabled." },
  "244": { "about": "BigQuery access during specific working hours.", "interpret": "Use IAM conditions in the policy binding to limit access to specific times." },
  "245": { "about": "Access Google services from private VMs without internet.", "interpret": "Enable Private Google Access on the subnet." },
  "246": { "about": "Block container deployment based on vulnerability scores.", "interpret": "Use Binary Authorization to enforce policies based on vulnerability scans." },
  "247": { "about": "Control access to Cloud Run app with SSO.", "interpret": "Use an Application Load Balancer with IAP enabled." },
  "248": { "about": "Investigate suspicious service account login.", "interpret": "Use Security Command Center to identify threats and correlate with Cloud Audit Logs." },
  "249": { "about": "Configuration review and security responsibilities for AI service.", "interpret": "Review IAM, data handling, and monitoring/logging controls under the shared responsibility model." },
  "250": { "about": "Downgrade storage class of objects automatically to reduce cost.", "interpret": "Use Cloud Storage Lifecycle Management policy with a 'SetStorageClass' action." },
  "251": { "about": "Access GCP from on-premises using existing identity provider (workforce identity).", "interpret": "Use Workforce Identity Federation to map external identities to GCP IAM roles." },
  "252": { "about": "Mitigate data exfiltration for PII in cloud.", "interpret": "Use Cloud DLP for PII identification/redaction, and VPC-SC to create a perimeter to prevent exfiltration." },
  "253": { "about": "Chatbot PII prevention.", "interpret": "Use Cloud DLP API for real-time PII detection and redaction in both chatbot inputs and outputs." },
  "254": { "about": "Access GCP from multiple clouds using short-lived credentials.", "interpret": "Use Workload Identity Federation with a provider for each cloud." },
  "255": { "about": "Mitigate side-channel attacks for sensitive financial application.", "interpret": "Use Confidential VMs to provide hardware-based memory encryption." },
  "256": { "about": "Copy data across VPC-SC perimeters safely.", "interpret": "Configure a perimeter bridge between the perimeters to allow communication across them." },
  "257": { "about": "GKE pods accessing Cloud Storage.", "interpret": "Use GKE Workload Identity to map Kubernetes service accounts to IAM service accounts." },
  "258": { "about": "Context-aware access based on device management and IP.", "interpret": "Create an Access Level in Access Context Manager that requires compliant devices and specific IP ranges." },
  "259": { "about": "Restrict BigQuery access based on row-level permissions.", "interpret": "Use row-level access policies (BigQuery security policies) to filter data based on user identity." },
  "260": { "about": "Secure location data storage and residency.", "interpret": "Use regional buckets for residency and Cloud DLP to scan/filter location data before storage." },
  "261": { "about": "Granular egress control for Cloud Run services.", "interpret": "Use hierarchical firewall policies and Cloud NAT to control egress traffic, blocking unwanted external access." },
  "262": { "about": "Security controls for incoming/internal traffic to a web app.", "interpret": "Cloud Firewall for incoming traffic, Cloud Armor for WAF, and Cloud IDS for monitoring." },
  "263": { "about": "Automated enforcement of VM hardening/patching.", "interpret": "Use VM Manager for automated patching and image hardening; use central image repository." },
  "264": { "about": "Investigate blocked Cloud Armor requests.", "interpret": "Enable logging for the security policy in Cloud Armor to analyze the requests that were blocked." },
  "265": { "about": "Detect deviations for PCI compliance.", "interpret": "Use Security Command Center with compliance monitoring (PCI DSS) to detect deviations." },
  "266": { "about": "Least privilege authorization scheme for admins.", "interpret": "Use custom IAM roles tailored to the specific tasks of the administrators, following least privilege." },
  "267": { "about": "Custom signing key in HSM outside GCP for Access Approval.", "interpret": "Use Cloud EKM integrated with an external HSM to sign Access Approval requests." },
  "268": { "about": "Granular access to BigQuery/Cloud Storage.", "interpret": "Use IAM roles (project/dataset/bucket level) for authorization." },
  "269": { "about": "Alert on suspicious outbound traffic to domains.", "interpret": "Use Cloud Armor or a network firewall policy with Threat Intelligence to block/alert on egress to malicious domains." },
  "270": { "about": "Regulated healthcare data requirements.", "interpret": "Use Assured Workloads for the environment, and enable both Cloud Audit Logs and Access Transparency." },
  "271": { "about": "Export logs to SIEM (push, real-time, fault-tolerant).", "interpret": "Use Log Sinks to route logs to Pub/Sub, then use Dataflow to ingest into the SIEM, providing fault tolerance and re-playability." },
  "272": { "about": "Restrict Compute Engine location to EU.", "interpret": "Use organization policy 'Resource Location Restriction' to enforce EU region-only deployments." },
  "273": { "about": "Encrypt training data with regional keys, controlled by organization.", "interpret": "Use Customer-Managed Encryption Keys (CMEK) for all data handled by Vertex AI." },
  "274": { "about": "Detect healthcare data in non-EU Cloud Storage.", "interpret": "Use Sensitive Data Protection (Cloud DLP) to scan for healthcare data and analyze the region of the bucket." },
  "275": { "about": "Workforce Identity Federation for partners.", "interpret": "Use Workforce Identity Federation to federate the partner's IdP with Google Cloud." },
  "276": { "about": "Secure network isolation for dev/prod, central entry point.", "interpret": "Separate VPCs per environment, and use a central 'hub' VPC for the entry point, peering it to others." },
  "277": { "about": "Enforce strong password policy.", "interpret": "Update the organization password management settings in Google Workspace/Admin Console." },
  "278": { "about": "Understand shared responsibility.", "interpret": "Refer to the shared responsibility documentation based on the cloud service model (IaaS, PaaS, SaaS)." },
  "279": { "about": "Fix on-premises access to private Artifact Registry.", "interpret": "Ensure on-premises DNS resolves private Google API domains to the correct internal IP ranges." },
  "280": { "about": "Limit access to Cloud Run app (groups + IP range).", "interpret": "Create an Access Level for context-aware access (groups + IP) and apply it to the application's IAP policy." },
  "281": { "about": "Fix Secure Web Proxy access from Linux instance.", "interpret": "Ensure the application/instance explicitly uses the proxy URL for outbound requests." },
  "282": { "about": "Route logs from _Default to a new log bucket efficiently.", "interpret": "Edit the sink configuration for the _Default sink and update the destination to the new log bucket." },
  "283": { "about": "Identify common misconfigurations centrally.", "interpret": "Use Security Health Analytics in SCC to identify common security misconfigurations." },
  "284": { "about": "Detect secrets in Cloud Function environment variables.", "interpret": "Use Sensitive Data Protection (Cloud DLP) to scan Cloud Function configuration for secrets." },
  "285": { "about": "Monitor admin activity, log changes, trace unauthorized changes.", "interpret": "Enable Cloud Audit Logs (Admin Activity, Data Access) and Security Command Center threat detection." },
  "286": { "about": "Support testing with real transactions, minimize PII risk.", "interpret": "Use Cloud DLP to de-identify PII and FPE to tokenize sensitive fields." },
  "287": { "about": "Audit key usage, ability to deny requests independently.", "interpret": "Use Cloud External Key Manager (EKM) with Key Access Justifications." },
  "288": { "about": "Manage customer identities for app.", "interpret": "Use Identity Platform (CIAM) to manage both customer and workforce identities." },
  "289": { "about": "Secure storage buckets (varying access, audit, key control).", "interpret": "Use IAM for access, versioning/audit logs for compliance, and CMEK (KMS) for key control." },
  "290": { "about": "Restrict BigQuery access at folder level.", "interpret": "Use a scoped policy with a service perimeter, and assign the team the necessary IAM permissions to manage the scoped policy." },
  "291": { "about": "Access GCP using 3rd party IdP, SSO, attribute-based permissions.", "interpret": "Use Workforce Identity Federation and attribute mapping based on CEL." },
  "292": { "about": "TLS interception for incoming web app traffic.", "interpret": "Use Cloud Next Generation Firewall (NGFW) Enterprise to enable TLS interception." },
  "293": { "about": "Manage temporary partner access.", "interpret": "Use Workforce Identity Federation to federate the partner's IdP with Google Cloud." },
  "294": { "about": "End-to-end encryption for user credentials.", "interpret": "Use TLS (HTTPS) on the load balancer to secure transit from client to GCP." },
  "295": { "about": "Ensure container compliance before deployment.", "interpret": "Use Binary Authorization with attestations (scan-passed) to ensure only compliant images are deployed." },
  "296": { "about": "Identify greatest risk in cloud environment.", "interpret": "Principals with broad IAM roles that allow VM management without hardening/guardrails represent the highest risk." },
  "297": { "about": "Manage IAM and Org policies at scale.", "interpret": "Use a folder hierarchy with inherited/templated policies to ensure consistency and scalability." },
  "298": { "about": "Visibility into IAM changes and user activity.", "interpret": "Enable Cloud Audit Logs, and export to a SIEM for correlation and analysis." },
  "299": { "about": "Isolate external app from internal systems.", "interpret": "Use separate projects, and use VPC Peering to access only required internal resources." },
  "300": { "about": "Network architecture for 3-tier app (security, remote maintenance, least privilege).", "interpret": "Separate VPCs per tier, peering for communication, IAP for secure remote management." },
  "301": { "about": "Separation of duties (Dev vs Network Admin).", "interpret": "Use custom IAM roles to assign minimal required permissions to each group." },
  "302": { "about": "Access policy for a project with PHI data.", "interpret": "Create a scoped access policy, perimeter, and access levels (IP ranges) for the folder." },
  "303": { "about": "Deny traffic from malicious IP ranges.", "interpret": "Use Cloud Armor with a deny rule for the malicious IP range." },
  "304": { "about": "Delegate organization policy management.", "interpret": "Use organization policy tags and IAM conditions to restrict access to those policies to team members." },
  "305": { "about": "Update AI Workbench instances automatically.", "interpret": "Enforce organization policies that require auto-updates." },
  "306": { "about": "Detection strategy for key rotation compliance.", "interpret": "Use Security Command Center with findings (e.g., key-rotation) to alert on non-compliance." },
  "307": { "about": "Security controls for AI/ML pipeline.", "interpret": "De-identify data with Cloud DLP and use IAM policies for access control." },
  "308": { "about": "Redact PII in reports.", "interpret": "Use Cloud DLP to discover and transform PII in the report data." },
  "309": { "about": "Secure data in use (memory) for financial application.", "interpret": "Enable Confidential VM instances for all nodes handling sensitive computations." },
  "310": { "about": "Compliance maintenance for regulated industry.", "interpret": "Use Assured Workloads to enforce compliant configurations." },
  "311": { "about": "Automated vulnerability scanning in pipeline.", "interpret": "Use Artifact Analysis for scanning and Binary Authorization for enforcement." },
  "312": { "about": "Export logs to SIEM (push, subset of logs, data exposure risk).", "interpret": "Create log sinks with filters and export to Pub/Sub for SIEM ingestion." },
  "313": { "about": "Prevent Shared VPC exfiltration.", "interpret": "Use organization policy 'Restrict Shared VPC Host Projects' to limit which projects can be host projects." },
  "314": { "about": "Encrypt data while in use (mandatory organization-wide).", "interpret": "Enforce Confidential VM via organization policy." },
  "315": { "about": "Enhance security for ML pipeline (container images, CI/CD).", "interpret": "Use Artifact Analysis/Binary Authorization for container security." },
  "316": { "about": "Secure network for database servers.", "interpret": "Use a private subnet in a VPC and assign private IP addresses only." },
  "317": { "about": "Fix MACsec error on Cloud Interconnect.", "interpret": "Ensure that the MACsec pre-shared key is synchronized correctly on both sides." },
  "318": { "about": "Strongest security for highly sensitive data.", "interpret": "Use client-side encryption, Cloud KMS for keys, and Cloud HSM for cryptographic operations." },
  "319": { "about": "Enforce Binary Authorization for Cloud Run.", "interpret": "Enable Binary Authorization on Cloud Run and enforce it using organization policy." },
  "320": { "about": "Grant variable access to GCS buckets from GCE.", "interpret": "Grant permissions via IAM policies on the specific buckets, based on the VM service account." },
  "321": { "about": "Manage security policies at scale for AI development.", "interpret": "Use Security Command Center with compliance monitoring and organization policies." },
  "322": { "about": "Prevent corporate users from creating unmanaged accounts.", "interpret": "Create Cloud Identity accounts for users and prevent the creation of unmanaged accounts." },
  "323": { "about": "Design team-based permissions adhering to least privilege.", "interpret": "Grant folder-level IAM roles (e.g., Folder Admin) to team service accounts for their assigned projects." },
  "324": { "about": "Restrict resource creation to EU region for specific workload.", "interpret": "Use organization policy 'Resource Location Restriction' at the project or folder level." },
  "325": { "about": "Resilience against web attacks (IAP, perimeter, traffic control).", "interpret": "Cloud Armor (WAF/DDoS), IAP (access control), and VPC firewall rules." },
  "326": { "about": "Automate GKE node updates.", "interpret": "Enable node auto-upgrades in GKE node pool configuration." },
  "327": { "about": "Grant GKE pods access to GCP services.", "interpret": "Use GKE Workload Identity to map Kubernetes service accounts to IAM." },
  "328": { "about": "Minimize risk of compromised service account keys.", "interpret": "Use a secret manager for key rotation and limit access to key creation/storage." },
  "329": { "about": "Secure connection from Cloud Run to Cloud SQL.", "interpret": "Use Cloud SQL Auth Proxy to securely connect to Cloud SQL using private IP." },
  "330": { "about": "Monitor/control egress to external web services.", "interpret": "Use Secure Web Proxy to filter and log outbound requests to external FQDNs." },
  "331": { "about": "Automate image approval for GKE.", "interpret": "Use Binary Authorization with scanning attestations." },
  "332": { "about": "Log vendor and administrative access.", "interpret": "Enable Access Transparency for all services." },
  "333": { "about": "Enforce context-aware access for Cloud Storage.", "interpret": "Use Access Context Manager to define device-based access levels." },
  "334": { "about": "Prevent/detect information leakage with Vertex AI.", "interpret": "Use Model Armor to protect endpoints and review SCC logs." },
  "335": { "about": "Restrict access to GCS buckets outside org.", "interpret": "Use principal access boundaries to restrict resource access to your organization only." },
  "336": { "about": "Update Cloud Storage data to CMEK.", "interpret": "Create CMEK and perform a rewrite of the objects to apply new encryption." },
  "337": { "about": "Integrate 3rd party IdP for SSO (Workforce).", "interpret": "Use Workforce Identity Federation to federate the IdP with GCP." },
  "338": { "about": "Ensure GKE nodes run the latest release.", "interpret": "Verify upgrade settings and node pool auto-upgrade configuration." },
  "339": { "about": "Secure communication for hybrid 3-tier app.", "interpret": "Establish Dedicated Interconnect for private, secure communication." },
  "340": { "about": "Opt out of model tuning in Vertex AI.", "interpret": "Vertex AI models do not use your data for tuning by default; confirm settings." },
  "341": { "about": "Robust perimeter security and web app protection.", "interpret": "Cloud Armor (WAF), Cloud Firewall (network), and IAP (access)." },
  "342": { "about": "Regulated low-overhead encryption for hybrid.", "interpret": "Use dedicated Cloud Interconnect with MACsec for high-performance encryption." },
  "343": { "about": "Auditor access to security logs efficiently.", "interpret": "Use BigQuery with Cloud Storage external tables." },
  "344": { "about": "Enforce 2SV for super admins.", "interpret": "Enable 2SV enforcement in the Admin Console for the designated OU." },
  "345": { "about": "Private API access from on-premises.", "interpret": "Configure private.googleapis.com or restricted.googleapis.com in on-premises DNS." },
  "346": { "about": "Least privilege temporary access for batch job.", "interpret": "Use least-privilege IAM roles and service account impersonation." },
  "347": { "about": "Runtime threat detection (malicious scripts/libraries).", "interpret": "Enable Container Threat Detection in Security Command Center Premium." },
  "348": { "about": "Secure handling of temporary policy exceptions.", "interpret": "Use organizational policies at the folder level to override parent policies locally." },
  "349": { "about": "Phased 2SV rollout.", "interpret": "Use Google Groups to control the phased rollout of 2SV." },
  "350": { "about": "Automated image security pipeline.", "interpret": "Use Binary Authorization to enforce vulnerability scanning results." },
  "351": { "about": "BigQuery least privilege access at folder level.", "interpret": "Assign BigQuery Data Viewer at the folder level." },
  "352": { "about": "Protect web app from L7 attacks.", "interpret": "Configure Cloud Armor with WAF/OWASP rules." },
  "353": { "about": "Data de-identification for PII.", "interpret": "Use Cloud DLP with format-preserving encryption." },
  "354": { "about": "Master keys in HSM outside GCP.", "interpret": "Use Cloud EKM." },
  "355": { "about": "Detect compliance misconfigurations in folder.", "interpret": "Create a Posture file and enforce it at the folder level." },
  "356": { "about": "Export authentication logs in near real-time.", "interpret": "Use Log Sinks with Pub/Sub." },
  "357": { "about": "Service account IAM for frontend/backend interaction.", "interpret": "Separate SA per service; permit frontend SA to call backend SA." },
  "358": { "about": "Context-aware access evaluation.", "interpret": "Configure access levels and test with dry-run perimeter." },
  "359": { "about": "Control Cloud Storage at project level.", "interpret": "Use Context-Aware Access policies applied to the project." },
  "360": { "about": "Improve password security.", "interpret": "Check 'Enforce strong password' in Admin Console." },
  "361": { "about": "Isolate AI model endpoint to defined projects.", "interpret": "Use Private Service Connect to expose the load balancer securely." }
};
