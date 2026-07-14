window.questionInterpretations = {
  "1": {
    "about": "Pytanie sprawdza wiedzę o tym, jak całkowicie odciąć maszynę Compute Engine od internetu i usług Google.",
    "interpret": "Kluczem jest wyłączenie dwóch opcji na poziomie karty sieciowej VM: 1. Publicznego IP (brak dostępu do/z internetu) oraz 2. Private Google Access (brak dostępu do API Google po sieci wewnętrznej). Bez tych dwóch, maszyna staje się odizolowana."
  },
  "2": {
    "about": "Pytanie dotyczy wiedzy o domyślnych regułach firewall (implied rules) w każdej sieci VPC.",
    "interpret": "Pamiętaj: domyślnie każda sieć ma dwie ukryte reguły o priorytecie 65535: 1. Zezwalaj na cały ruch wychodzący (Allow Egress) oraz 2. Blokuj cały ruch przychodzący (Deny Ingress). Tych reguł nie można usunąć, można je tylko nadpisać regułami o wyższym priorytecie (niższy numer)."
  },
  "3": {
    "about": "Chodzi o bezpieczne przechowywanie kluczy i sekretów bez umieszczania ich w postaci jawnego tekstu w repozytorium kodu (SCM).",
    "interpret": "Wskazówka historyczna: Chociaż Secret Manager to nowoczesny standard, w starszych pytaniach najbezpieczniejszym wyborem jest szyfrowanie sekretów kluczami zarządzanymi przez klienta (CMEK) w Cloud KMS i przechowywanie ich w Cloud Storage."
  },
  "4": {
    "about": "Integracja lokalnego Active Directory (AD) z GCP IAM dla zarządzania uprawnieniami poprzez grupy.",
    "interpret": "Kluczem jest użycie GCDS (Google Cloud Directory Sync) do synchronizacji grup z AD do Cloud Identity/Google Workspace. Role IAM przypisujemy do tych zsynchronizowanych grup, a nie bezpośrednio do użytkowników, co zapewnia łatwe zarządzanie cyklem życia użytkownika."
  },
  "5": {
    "about": "Bezpieczeństwo kontenerów w środowiskach produkcyjnych.",
    "interpret": "Stosuj zasadę 'minimalizmu': obrazy bazowe typu 'distroless' lub 'alpine' drastycznie zmniejszają powierzchnię ataku (brak shella, brak menedżerów pakietów). Obowiązkowe jest skanowanie obrazów w CI/CD (np. Artifact Analysis)."
  },
  "6": {
    "about": "Zabezpieczenie 3-warstwowej aplikacji wewnętrznej w GCP zgodnie z wymogami zgodności.",
    "interpret": "To typowe pytanie o architekturę: frontend w publicznej sieci (przez Load Balancer), backend/baza danych w sieci prywatnej (tylko prywatne IP). Kluczem jest firewall oparty na kontach serwisowych (Service Accounts) zamiast tagów, aby ograniczyć komunikację tylko do niezbędnych połączeń."
  },
  "7": {
    "about": "Bezpieczna migracja danych z on-premises do GCP.",
    "interpret": "Kluczowe jest szyfrowanie: dane w tranzycie (TLS/IPsec VPN/Interconnect) oraz dane w spoczynku (CMEK w Cloud KMS). Pamiętaj o modelu współdzielonej odpowiedzialności – GCP zapewnia bezpieczną infrastrukturę, Ty odpowiadasz za konfigurację i szyfrowanie danych."
  },
  "8": {
    "about": "Zabezpieczenie dostępu do ERP przez Cloud IAP.",
    "interpret": "Cloud IAP działa jako warstwa uwierzytelniania przed aplikacją. Aby aplikacja akceptowała ruch TYLKO z IAP, musisz skonfigurować firewall tak, aby zezwalał na ruch tylko z zakresu adresów IP używanych przez IAP (35.191.0.0/16)."
  },
  "9": {
    "about": "Wykrywanie podatności systemów operacyjnych (OS) na maszynach wirtualnych.",
    "interpret": "Do systematycznej oceny podatności (vulnerability assessment) służy Security Command Center (SCC) – wersja Premium integruje się z agentami skanującymi systemy operacyjne w poszukiwaniu brakujących poprawek."
  },
  "10": {
    "about": "Scentralizowane zbieranie logów ze wszystkich projektów dla systemu SIEM.",
    "interpret": "Najlepsza praktyka to Aggregated Log Sink na poziomie folderu/organizacji. Logi trafiają do Cloud Pub/Sub, skąd system SIEM (np. Splunk) konsumuje je w czasie rzeczywistym. To rozwiązanie skalowalne i odporne na awarie."
  },
  "11": {
    "about": "Ochrona przed atakami typu DNS Hijacking i zatruwaniem rekordów DNS.",
    "interpret": "DNSSEC (Domain Name System Security Extensions) w Cloud DNS jest jedynym mechanizmem kryptograficznym w GCP, który gwarantuje, że otrzymana odpowiedź z serwera DNS jest autentyczna i nie została zmodyfikowana przez atakującego (tzw. 'man-in-the-middle')."
  },
  "12": {
    "about": "Automatyczne skanowanie aplikacji webowych (App Engine, GKE, Compute) pod kątem podatności OWASP Top 10.",
    "interpret": "Natywnym narzędziem do tego celu jest **Web Security Scanner**. Jest on zintegrowany z SCC i pozwala na automatyczne, cykliczne uruchamianie skanowań aplikacji w celu wykrycia luk takich jak XSS czy wstrzykiwanie SQL."
  },
  "13": {
    "about": "Zapobieganie eksfiltracji danych z usług typu Cloud Storage lub BigQuery przez autoryzowanych użytkowników.",
    "interpret": "Gdy musisz ograniczyć kopiowanie danych *poza* perymetr projektów, **VPC Service Controls (VPC-SC)** jest jedynym rozwiązaniem. Tworzy ono 'obszar zaufania' dla API Google – próba skopiowania danych do bucketa poza tym obszarem zostanie zablokowana na poziomie API, nawet przy posiadaniu poprawnych uprawnień IAM."
  },
  "14": {
    "about": "Wdrażanie ładu korporacyjnego (governance) i polityk bezpieczeństwa w nowej organizacji GCP.",
    "interpret": "Hierarchia: Organizacja -> Folder -> Projekt. Narzędziem wymuszającym reguły jest **Organization Policy Service** (np. ograniczenia dotyczące lokalizacji zasobów, dozwolonych obrazów czy zakazu Public IP). IAM zarządza tym, *kto* może co robić, a Org Policy zarządza tym, *co* można zrobić technicznie."
  },
  "15": {
    "about": "Bezpieczny dostęp aplikacji na Compute Engine do zasobów Cloud Storage.",
    "interpret": "Nigdy nie używaj JSON Service Account Keys – to ryzyko wycieku. Używaj **Workload Identity** (lub tożsamości metadanych instancji). Przypisujesz Service Account do VM, a aplikacja automatycznie używa jego uprawnień (np. `storage.objectViewer`) bez konieczności zarządzania plikami z kluczami."
  },
  "16": {
    "about": "Monitorowanie ruchu sieciowego (tranzyt i lokalizacja anomalii).",
    "interpret": "VPC Flow Logs pokazują *kto* z kim rozmawiał (metadane). Jeśli potrzebujesz głębokiej inspekcji pakietów (DPI) dla celów zgodności (np. PCI DSS), musisz wdrożyć **Cloud IDS** lub zewnętrzne urządzenia (Next-Gen Firewall) w modelu 'bump-in-the-wire'."
  },
  "17": {
    "about": "Deidentyfikacja danych płacowych w celu bezpiecznej analizy (k-anonimowość, maskowanie).",
    "interpret": "Kluczem jest **Cloud DLP API**. Posiada ono wbudowane transformacje: maskowanie (np. XXXXX1234), tokenizacja (zamiana danych na nieodwracalne tokeny) czy 'bucketing' (np. wiek 20-30 lat zamiast konkretnego wieku). To standard przy zachowaniu zgodności z RODO/GDPR."
  },
  "18": {
    "about": "Wybór strategii uwierzytelniania dla użytkowników zewnętrznych (klienci aplikacji).",
    "interpret": "Cloud Identity to rozwiązanie dla pracowników (zarządzanie tożsamością wewnątrz firmy). Jeśli aplikacja jest skierowana do klientów zewnętrznych, właściwym wyborem jest **Identity Platform** (dawniej Firebase Authentication), które oferuje łatwą integrację z dostawcami takimi jak Google, Facebook, czy e-mail/hasło."
  },
  "19": {
    "about": "Implementacja szyfrowania kopertowego (Envelope Encryption).",
    "interpret": "W procesie tym generujesz lokalny klucz danych (DEK), szyfrujesz nim dane (szybkie), a następnie DEK szyfrujesz kluczem głównym (KEK) w Cloud KMS. W razie potrzeby rotacji zmieniasz tylko KEK, bez konieczności przesyłania i ponownego szyfrowania terabajtów danych."
  },
  "20": {
    "about": "Niezawodne przesyłanie logów do zewnętrznego SIEM (np. Splunk).",
    "interpret": "Logi z Cloud Logging -> Log Sink -> **Cloud Pub/Sub**. Pub/Sub pełni tutaj rolę bufora (kolejki), co zapewnia odporność na awarie (jeśli SIEM będzie chwilowo niedostępny, logi bezpiecznie czekają w kolejce Pub/Sub)."
  },
  "21": {
    "about": "Wymóg PCI DSS: ruch wychodzący do internetu tylko przez autoryzowane punkty kontrolne.",
    "interpret": "Kluczem jest usunięcie 'default route' (0.0.0.0/0) do internetu z VPC i zastąpienie jej trasą kierującą ruch przez **Next-Gen Firewall (NGFW)** lub dedykowane proxy, które dokonuje inspekcji pakietów i logowania."
  },
  "22": {
    "about": "Bezpieczny dostęp administracyjny do App Engine (dev/prod).",
    "interpret": "Użyj **Identity-Aware Proxy (IAP)**. IAP wymaga uwierzytelnienia użytkownika (konto Google + 2FA) przed dopuszczeniem żądania do samej aplikacji. To eliminuje potrzebę wystawiania admin panelu na publiczny internet."
  },
  "23": {
    "about": "Automatyczne maskowanie danych wrażliwych (PII) w czasie rzeczywistym (np. numery kart na czacie).",
    "interpret": "Zastosuj **Cloud DLP API** z wyzwalaczem (np. w Cloud Functions) skanującym dane w locie. Wykryte `infoTypes` (np. CREDIT_CARD_NUMBER) zamień na zdefiniowany 'mask' (np. '######')."
  },
  "24": {
    "about": "Ryzyko związane z długożyjącymi kluczami kont serwisowych (Service Account JSON keys).",
    "interpret": "Klucze JSON są skarbem dla atakujących. Rozwiązaniem jest **Workload Identity** (dla GKE) lub przypisywanie konta serwisowego bezpośrednio do instancji VM/Cloud Run, aby aplikacja używała krótkotrwałych poświadczeń (tokenów OAuth) zamiast statycznych plików JSON."
  },
  "25": {
    "about": "Centralne zbieranie logów audytowych z wielu projektów.",
    "interpret": "Użyj **Aggregated Sink** na poziomie folderu lub organizacji, który przesyła logi (`_Default` bucket) do centralnego projektu bezpieczeństwa (Security Project). To zapewnia separację obowiązków (audytorzy widzą logi, ale nie mają dostępu do infrastruktury)."
  },
  "26": {
    "about": "Migracja tożsamości z lokalnego AD do Google Cloud.",
    "interpret": "Zastosuj **GCDS** (Google Cloud Directory Sync) dla synchronizacji użytkowników/grup oraz **SAML Federation** (np. z ADFS lub Okta), aby logowanie odbywało się przez lokalne źródło prawdy (Single Sign-On)."
  },
  "27": {
    "about": "Podział sieci i rozliczeń między jednostki biznesowe.",
    "interpret": "Kluczem jest **Shared VPC** (centralna sieć, separacja projektów usługowych) oraz **Organization Policies** (np. `constraints/compute.restrictSharedVpcHostProjects`), aby kontrolować, kto może tworzyć zasoby w centralnej sieci."
  },
  "28": {
    "about": "Redundancja i wysoka dostępność ruchu pocztowego (SMTP).",
    "interpret": "W GCP nie można bezpośrednio nasłuchiwać na porcie 25. SMTP musi być przekierowane przez **Load Balancer (L4 TCP)** lub dedykowane bramy pocztowe (np. SendGrid, Mailgun) z odpowiednimi rekordami MX/SPF w DNS."
  },
  "29": {
    "about": "Zarządzanie siecią w architekturze Shared VPC.",
    "interpret": "Administracja jest rozdzielona: admin sieci (w projekcie hosta) zarządza VPC, a admin projektu usługowego może tworzyć instancje VM i podpinać je do podsieci, ale nie może modyfikować reguł firewall w VPC (separacja obowiązków)."
  },
  "30": {
    "about": "Bezpieczne połączenie hybrydowe (on-premises <-> GCP) z redundancją.",
    "interpret": "Zastosuj **Cloud Interconnect** (Dedicated lub Partner) z dwoma łączami w osobnych lokalizacjach brzegowych dla pełnej niezawodności i BGP do dynamicznego routingu."
  },
  "31": {
    "about": "Migracja zasobów do GCP z zachowaniem istniejących standardów bezpieczeństwa.",
    "interpret": "Wykorzystaj polityki organizacji (Organization Policies) oraz mechanizmy IaC (Terraform) do wymuszenia ujednoliconej konfiguracji zasobów już w momencie ich tworzenia."
  },
  "32": {
    "about": "Delegowanie uprawnień aplikacji do działania w imieniu użytkownika na Google Drive.",
    "interpret": "Wymaga to OAuth 2.0 z 'domain-wide delegation'. Konto serwisowe (Service Account) z odpowiednimi zakresami (scopes) musi uzyskać zgodę administratora domeny na dostęp do danych użytkowników."
  },
  "33": {
    "about": "Bezpieczeństwo danych przetwarzanych w pamięci RAM na Compute Engine.",
    "interpret": "Użyj **Confidential VMs**. Kluczowe jest szyfrowanie pamięci (SEV) przez procesor – nawet jeśli intruz przejmie fizyczny serwer, nie odczyta danych z RAM-u maszyny."
  },
  "34": {
    "about": "Zabezpieczenie klastra Cloud Dataproc i kontrola dostępu do danych.",
    "interpret": "Włącz silne uwierzytelnianie przez **Kerberos** w klastrze oraz użyj precyzyjnych ról IAM na poziomie kubłów Cloud Storage (`roles/storage.objectViewer` lub `objectAdmin`) dla konta serwisowego klastra."
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
    "about": "Pytanie dotyczy wymuszenia polityki, która dopuszcza tworzenie dysków startowych tylko z obrazów znajdujących się w konkretnym, zaufanym projekcie.",
    "interpret": "Poprawną metodą jest użycie usługi Organization Policy Service i nałożenie ograniczenia `compute.trustedImageProjects` na poziomie organizacji. W tej polityce należy zdefiniować tzw. 'whitelist' (listę dozwolonych) projektów. To najbardziej natywny, bezpieczny i wydajny sposób na zablokowanie korzystania z obrazów publicznych (np. Debian, Ubuntu z publicznych repozytoriów) i wymuszenie korzystania tylko z obrazów własnych, zabezpieczonych i 'wypieczonych' wewnątrz firmy. Opcja z 'deny' byłaby zbyt skomplikowana w utrzymaniu."
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
  "91": {
    "q": "You need to provide a corporate user account in Google Cloud for each of your developers and operational staff who need direct access to GCP resources.<br/>Corporate policy requires you to maintain the user identity in a third-party identity management provider and leverage single sign-on. You learn that a significant number of users are using their corporate domain email addresses for personal Google accounts, and you need to follow Google recommended practices to convert existing unmanaged users to managed accounts.<br/>Which two actions should you take? (Choose two.)",
    "about": "Zarządzanie tożsamością w środowisku hybrydowym z wykorzystaniem Google Cloud.",
    "interpret": "Aby zintegrować lokalny Active Directory z Google Cloud, należy użyć narzędzia Google Cloud Directory Sync (GCDS) do synchronizacji użytkowników. W przypadku konfliktów z już istniejącymi kontami prywatnymi (consumer accounts), użyj narzędzia Transfer Tool for Unmanaged Users (TTUU) do przeniesienia ich pod zarząd organizacji.",
    "q_pl": "Musisz zapewnić konto użytkownika firmowego w Google Cloud dla każdego z programistów i personelu operacyjnego, którzy potrzebują bezpośredniego dostępu do zasobów GCP. Polityka firmy wymaga utrzymywania tożsamości użytkownika u zewnętrznego dostawcy zarządzania tożsamością i wykorzystania logowania jednokrotnego (SSO). Dowiadujesz się, że znaczna liczba użytkowników używa swoich firmowych adresów e-mail dla osobistych kont Google i musisz postępować zgodnie z zalecanymi praktykami Google, aby przekonwertować istniejących niezarządzanych użytkowników na konta zarządzane. Jakie dwa działania powinieneś podjąć?"
  },
  "92": {
    "q": "You are on your company's development team. You noticed that your web application hosted in staging on GKE dynamically includes user data in web pages without first properly validating the inputted data. This could allow an attacker to execute gibberish commands and display arbitrary content in a victim user's browser in a production environment.<br/>How should you prevent and fix this vulnerability?",
    "about": "Zapobieganie podatnościom typu XSS (Cross-Site Scripting) w aplikacjach GKE.",
    "interpret": "Użyj narzędzia Web Security Scanner do automatycznego wykrywania luk w bezpieczeństwie. Aby naprawić błąd XSS, wdróż w aplikacji bezpieczny system szablonów, który domyślnie stosuje uciekanie znaków (auto-escaping) dla danych wejściowych od użytkownika.",
    "q_pl": "Jesteś w zespole programistów firmy. Zauważyłeś, że aplikacja internetowa hostowana w środowisku stagingowym na GKE dynamicznie uwzględnia dane użytkownika na stronach internetowych bez uprzedniej poprawnej walidacji wprowadzonych danych. Może to pozwolić atakującemu na wykonanie dowolnych poleceń i wyświetlenie dowolnej treści w przeglądarce użytkownika w środowisku produkcyjnym. Jak należy zapobiec tej podatności i ją naprawić?"
  },
  "93": {
    "q": "You are part of a security team that wants to ensure that a Cloud Storage bucket in Project A can only be readable from Project B. You also want to ensure that data in the Cloud Storage bucket cannot be accessed from or copied to Cloud Storage buckets outside the network, even if the user has the correct credentials.<br/>What should you do?",
    "about": "Izolacja zasobów Cloud Storage między projektami.",
    "interpret": "VPC Service Controls pozwala na stworzenie perymetru bezpieczeństwa. Umieszczenie projektu A i B w tym samym perymetrze i włączenie usługi Cloud Storage ograniczy dostęp do bucketa tylko do zasobów znajdujących się wewnątrz tego perymetru.",
    "q_pl": "Jesteś częścią zespołu ds. bezpieczeństwa, który chce zapewnić, że bucket Cloud Storage w Projekcie A może być odczytywany tylko z Projektu B. Chcesz również upewnić się, że danych w bucket Cloud Storage nie można skopiować do innych bucketów poza siecią, nawet jeśli użytkownik ma poprawne uprawnienia. Co powinieneś zrobić?"
  },
  "94": {
    "q": "You are responsible for protecting highly sensitive data in BigQuery. Your operations teams need access to this data, but given privacy regulations, you want to ensure that they cannot read the sensitive fields such as email addresses and first names. These specific sensitive fields should only be available on a need-to-know basis to the Human Resources team. What should you do?",
    "about": "Ochrona danych wrażliwych w BigQuery (tokenizacja).",
    "interpret": "Tokenizacja za pomocą Cloud DLP API pozwala zamienić wrażliwe dane (np. adresy email) na nieodwracalne tokeny (lub odwracalne, jeśli użyjemy odpowiedniej metody) przed ich zapisem. Dzięki temu dane w BigQuery pozostają użyteczne dla analityków bez ujawniania tożsamości użytkowników.",
    "q_pl": "Jesteś odpowiedzialny za ochronę wysoce wrażliwych danych w BigQuery. Twoje zespoły operacyjne potrzebują dostępu do tych danych, ale ze względu na regulacje dotyczące prywatności, musisz zapewnić, że nie mogą oni odczytać wrażliwych pól, takich jak adresy e-mail i imiona. Te pola powinny być dostępne tylko dla zespołu Human Resources na zasadzie \"need-to-know\". Co powinieneś zrobić?"
  },
  "95": {
    "q": "You are a Security Administrator at your organization. You need to restrict service account creation capability within production environments. You want to accomplish this centrally across the organization. What should you do?",
    "about": "Ograniczanie możliwości tworzenia kluczy kont serwisowych w produkcji.",
    "interpret": "Skorzystaj z polityki organizacji (Organization Policy Service) `iam.disableServiceAccountKeyCreation`, aby centralnie zablokować tworzenie nowych kluczy kont serwisowych w wyznaczonych folderach lub projektach produkcyjnych.",
    "q_pl": "Jesteś administratorem bezpieczeństwa w organizacji. Musisz ograniczyć możliwość tworzenia kont serwisowych w środowiskach produkcyjnych. Chcesz to osiągnąć centralnie w całej organizacji. Co powinieneś zrobić?"
  },
  "96": {
    "q_pl": "You are the project owner for a regulated workload that runs in a project you own and manage as an Identity and Access Management (IAM) admin. For an upcoming audit, you need to provide access reviews evidence. Which tool should you use?",
    "about": "Audyt uprawnień IAM w projekcie.",
    "interpret": "Użyj Policy Analyzer do analizy efektywnych uprawnień i przygotowania dowodów na potrzeby audytu."
  },
  "97": {
    "q_pl": "Your organization has implemented synchronization and SAML federation between Cloud Identity and Microsoft Active Directory. You want to reduce the risk of Google Cloud user accounts being compromised. What should you do?",
    "about": "Bezpieczeństwo kont użytkowników w środowisku federacyjnym.",
    "interpret": "Wymuś silne polityki haseł w Cloud Identity i zastosuj 2-Step Verification z użyciem kluczy bezpieczeństwa (security keys) po stronie Google."
  },
  "98": {
    "q_pl": "You have been tasked with implementing external web application protection against common web application attacks for a public application on Google Cloud. You want to validate these policy changes before they are enforced. What service should you use?",
    "about": "Weryfikacja zmian w zasadach Cloud Armor.",
    "interpret": "Użyj trybu 'preview' (podglądu) dla zasad Cloud Armor, aby przetestować wpływ nowych reguł przed ich faktycznym wymuszeniem."
  },
  "99": {
    "q_pl": "You are asked to recommend a solution to store and retrieve sensitive configuration data from an application that runs on Compute Engine. Which option should you recommend?",
    "about": "Przechowywanie wrażliwych danych konfiguracyjnych (sekretów).",
    "interpret": "Secret Manager jest rekomendowanym rozwiązaniem do przechowywania, zarządzania i dostępu do sekretów (np. haseł, kluczy API) w Google Cloud."
  },
  "100": {
    "q_pl": "You need to implement an encryption at-rest strategy that reduces key management complexity for non-sensitive data and protects sensitive data while providing the flexibility of controlling the key residency and rotation schedule. FIPS 140-2 L1 compliance is required for all data types. What should you do?",
    "about": "Strategia szyfrowania danych zgodnie z wymogami FIPS 140-2.",
    "interpret": "Dla danych nie wrażliwych użyj szyfrowania domyślnego Google, a dla danych wrażliwych użyj Cloud KMS, co spełnia wymogi FIPS 140-2 L1 i zapewnia kontrolę nad kluczami."
  },
  "101": {
    "q_pl": "Your company wants to determine what products they can build to help customers improve their credit scores depending on their age range. To achieve this, you need to join user information in the company's banking app with customers' credit score data received from a third party. While using this raw data will allow you to complete this task, it exposes sensitive data, which could be propagated into new systems.This risk needs to be addressed using de-identification and tokenization with Cloud Data Loss Prevention while maintaining the referential integrity across the database. Which cryptographic token format should you use to meet these requirements?",
    "about": "Ochrona prywatności danych w analityce (tokenizacja).",
    "interpret": "Dla zachowania integralności referencyjnej przy tokenizacji danych wrażliwych, najwłaściwszą techniką jest szyfrowanie deterministyczne (Deterministic Encryption)."
  },
  "102": {
    "q_pl": "An office manager at your small startup company is responsible for matching payments to invoices and creating billing alerts. For compliance reasons, the office manager is only permitted to have the Identity and Access Management (IAM) permissions necessary for these tasks. Which two IAM roles should the office manager have? (Choose two.)",
    "about": "Minimalizacja uprawnień dla roli billingowej.",
    "interpret": "Aby umożliwić zarządzanie płatnościami bez pełnego dostępu do projektu, przypisz role: Billing Account Costs Manager oraz Billing Account Viewer."
  },
  "103": {
    "q_pl": "You are designing a new governance model for your organization's secrets that are stored in Secret Manager. Currently, secrets for Production and Non-Production applications are stored and accessed using service accounts. Your proposed solution must:* Provide granular access to secrets* Give you control over the rotation schedules for the encryption keys that wrap your secrets* Maintain environment separation* Provide ease of managementWhich approach should you take?",
    "about": "Zarządzanie sekretami w Secret Manager z separacją środowisk.",
    "interpret": "Użyj oddzielnych projektów dla produkcji i testów (separacja środowisk) oraz przypisz uprawnienia IAM na poziomie konkretnych sekretów (secret-level IAM) dla zasady najmniejszych uprawnień."
  },
  "104": {
    "q_pl": "You are a security engineer at a finance company. Your organization plans to store data on Google Cloud, but your leadership team is worried about the security of their highly sensitive data. Specifically, your company is concerned about internal Google employees' ability to access your company's data on Google Cloud.What solution should you propose?",
    "about": "Ochrona danych przed dostępem pracowników dostawcy chmury (Google).",
    "interpret": "Włącz Access Transparency (logi o dostępie pracowników Google) oraz Access Approval (wymóg zatwierdzenia dostępu przez Google)."
  },
  "105": {
    "q_pl": "You want to use the gcloud command-line tool to authenticate using a third-party single sign-on (SSO) SAML identity provider. Which options are necessary to ensure that authentication is supported by the third-party identity provider (IdP)? (Choose two.)",
    "about": "Uwierzytelnianie CLI za pomocą zewnętrznego IdP.",
    "interpret": "Wymagane jest użycie Cloud Identity jako centralnego punktu tożsamości oraz SAML jako protokołu do federacji z zewnętrznym IdP."
  },
  "106": {
    "q_pl": "You work for a large organization where each business unit has thousands of users. You need to delegate management of access control permissions to each business unit. You have the following requirements:* Each business unit manages access controls for their own projects.* Each business unit manages access control permissions at scale.* Business units cannot access other business units' projects.* Users lose their access if they move to a different business unit or leave the company.* Users and access control permissions are managed by the on-premises directory service.What should you do? (Choose two.)",
    "about": "Delegowanie zarządzania IAM w dużej organizacji.",
    "interpret": "Zorganizuj projekty w foldery (delegacja) i przypisuj role IAM do Grup Google (zarządzanie w AD zsynchronizowane przez GCDS)."
  },
  "107": {
    "q_pl": "Your organization recently deployed a new application on Google Kubernetes Engine. You need to deploy a solution to protect the application. The solution has the following requirements:* Scans must run at least once per week* Must be able to detect cross-site scripting vulnerabilities* Must be able to authenticate using Google accountsWhich solution should you use?",
    "about": "Skanowanie podatności w aplikacjach GKE.",
    "interpret": "Web Security Scanner pozwala na zaplanowane (co tydzień) skanowanie podatności (w tym XSS) z uwierzytelnieniem (Google accounts)."
  },
  "108": {
    "q_pl": "An organization is moving applications to Google Cloud while maintaining a few mission-critical applications on-premises. The organization must transfer the data at a bandwidth of at least 50 Gbps. What should they use to ensure secure continued connectivity between sites?",
    "about": "Bezpieczne połączenie o wysokiej przepustowości (50 Gbps).",
    "interpret": "Dedicated Interconnect zapewnia prywatne, szybkie i bezpieczne połączenie bezpośrednie między on-premises a Google Cloud."
  },
  "109": {
    "q_pl": "Your organization has had a few recent DDoS attacks. You need to authenticate responses to domain name lookups. Which Google Cloud service should you use?",
    "about": "Ochrona przed DNS spoofingiem/man-in-the-middle.",
    "interpret": "Cloud DNS obsługuje DNSSEC, który uwierzytelnia odpowiedzi DNS, zapobiegając fałszowaniu rekordów."
  },
  "110": {
    "q_pl": "Your Security team believes that a former employee of your company gained unauthorized access to Google Cloud resources some time in the past 2 months by using a service account key. You need to confirm the unauthorized access and determine the user activity. What should you do?",
    "about": "Badanie incydentu użycia skompromitowanego klucza.",
    "interpret": "W konsoli Cloud Monitoring (lub Logs Explorer) przefiltruj logi audytowe (Admin Activity) według podejrzanego konta serwisowego, aby zobaczyć jakie działania zostały podjęte."
  },
  "111": {
    "q_pl": "Your company requires the security and network engineering teams to identify all network anomalies within and across VPCs, internal traffic from VMs to VMs, traffic between end locations on the internet and VMs, and traffic between VMs to Google Cloud services in production. Which method should you use?",
    "about": "Monitoring anomalii sieciowych w VPC.",
    "interpret": "VPC Flow Logs rejestruje informacje o przepływach IP, co jest kluczowe dla analizy wzorców ruchu i wykrywania anomalii."
  },
  "112": {
    "q_pl": "Your company has been creating users manually in Cloud Identity to provide access to Google Cloud resources. Due to continued growth of the environment, you want to authorize the Google Cloud Directory Sync (GCDS) instance and integrate it with your on-premises LDAP server to onboard hundreds of users. You are required to:* Replicate user and group lifecycle changes from the on-premises LDAP server in Cloud Identity.* Disable any manually created users in Cloud Identity.You have already configured the LDAP search attributes to include the users and security groups in scope for Google Cloud. What should you do next to complete this solution?",
    "about": "Synchronizacja użytkowników z AD do Cloud Identity (cykl życia).",
    "interpret": "Skonfiguruj opcję zawieszania (suspend) użytkowników nieobecnych w źródłowym LDAP i ustaw zadanie GCDS na regularne uruchamianie."
  },
  "113": {
    "q_pl": "You are troubleshooting access denied errors between Compute Engine instances connected to a Shared VPC and BigQuery datasets. The datasets reside in a project protected by a VPC Service Controls perimeter. What should you do?",
    "about": "Dostęp z Compute Engine do BigQuery przy użyciu VPC SC.",
    "interpret": "Projekt hostujący Shared VPC (gdzie są instancje) musi być członkiem tego samego perymetru VPC SC co projekt zawierający dane BigQuery."
  },
  "114": {
    "q_pl": "You recently joined the networking team supporting your company's Google Cloud implementation. You are tasked with familiarizing yourself with the firewall rules configuration and providing recommendations based on your networking and Google Cloud experience. What product should you recommend to detect firewall rules that are overlapped by attributes from other firewall rules with higher or equal priority?",
    "about": "Wykrywanie nakładających się reguł firewall.",
    "interpret": "Firewall Insights automatycznie analizuje konfigurację i wskazuje reguły, które są zbędne lub nakładają się na siebie."
  },
  "115": {
    "q_pl": "The security operations team needs access to the security-related logs for all projects in their organization. They have the following requirements:* Follow the least privilege model by having only view access to logs.* Have access to Admin Activity logs.* Have access to Data Access logs.* Have access to Access Transparency logs.Which Identity and Access Management (IAM) role should the security operations team be granted?",
    "about": "Uprawnienia dla zespołu operacji bezpieczeństwa (SecOps).",
    "interpret": "Rola `roles/logging.privateLogViewer` zapewnia dostęp do przeglądania logów, w tym logów dostępu do danych (Data Access), co jest wymagane w audytach."
  },
  "116": {
    "q_pl": "You are exporting application logs to Cloud Storage. You encounter an error message that the log sinks don't support uniform bucket-level access policies. How should you resolve this error?",
    "about": "Błąd eksportu logów przy uniform bucket-level access.",
    "interpret": "Włączona polityka uniform bucket-level access wymaga użycia uprawnień na poziomie bucketa, a nie ACL dla poszczególnych obiektów."
  },
  "117": {
    "q_pl": "You plan to deploy your cloud infrastructure using a CI/CD cluster hosted on Compute Engine. You want to minimize the risk of its credentials being stolen by a third party. What should you do?",
    "about": "Ograniczenie ryzyka kradzieży kluczy kont serwisowych.",
    "interpret": "Polityka `iam.disableServiceAccountKeyCreation` zapobiega tworzeniu nowych kluczy, wymuszając użycie tożsamości zarządzanej (Workload Identity)."
  },
  "118": {
    "q_pl": "You need to set up two network segments: one with an untrusted subnet and the other with a trusted subnet. You want to configure a virtual appliance such as a next-generation firewall (NGFW) to inspect all traffic between the two network segments. How should you design the network to inspect the traffic?",
    "about": "Inspekcja ruchu między segmentami sieci za pomocą NGFW.",
    "interpret": "Najlepszym rozwiązaniem jest użycie wirtualnego urządzenia sieciowego (NGFW) z wieloma interfejsami sieciowymi podłączonymi do różnych VPC/subnetów."
  },
  "119": {
    "q_pl": "You are a member of your company's security team. You have been asked to reduce your Linux bastion host external attack surface by removing all public IP addresses. Site Reliability Engineers (SREs) require access to the bastion host from public locations so they can access the internal VPC while off-site. How should you enable this access?",
    "about": "Bezpieczny dostęp do instancji w sieci prywatnej (SSH).",
    "interpret": "Identity-Aware Proxy (IAP) umożliwia bezpieczny tunelowanie ruchu TCP (SSH/RDP) do maszyn bez publicznych IP."
  },
  "120": {
    "q_pl": "You need to enable VPC Service Controls and allow changes to perimeters in existing environments without preventing access to resources. Which VPC Service Controls mode should you use?",
    "about": "Testowanie perymetrów VPC SC bez blokowania ruchu.",
    "interpret": "Tryb 'dry run' pozwala na monitorowanie naruszeń perymetru bez faktycznego blokowania zapytań API."
  },
  "121": {
    "q_pl": "You manage your organization's Security Operations Center (SOC). You currently monitor and detect network traffic anomalies in your Google Cloud VPCs based on packet header information. However, you want the capability to explore network flows and their payload to aid investigations. Which Google Cloud product should you use?",
    "about": "Analiza przepływów sieciowych z payloadem.",
    "interpret": "Packet Mirroring kopiuje ruch z interfejsów sieciowych instancji i przekazuje go do analizatora, umożliwiając głęboką inspekcję (payload)."
  },
  "122": {
    "q_pl": "Your organization acquired a new workload. The Web and Application (App) servers will be running on Compute Engine in a newly created custom VPC. You are responsible for configuring a secure network communication solution that meets the following requirements: Only allows communication between the Web and App tiers. Enforces consistent network security when autoscaling the Web and App tiers. Prevents Compute Engine Instance Admins from altering network traffic. What should you do?",
    "about": "Zabezpieczenie komunikacji między tierami aplikacji (autoscale).",
    "interpret": "Użyj kont serwisowych (Service Accounts) jako tożsamości do reguł firewalla, co zapewnia niezależność od adresów IP i tagów podczas skalowania."
  },
  "123": {
    "q_pl": "You need to connect your organization's on-premises network with an existing Google Cloud environment that includes one Shared VPC with two subnets named Production and Non-Production. You are required to: Use a private transport link. Configure access to Google Cloud APIs through private API endpoints originating from on-premises environments. Ensure that Google Cloud APIs are only consumed via VPC Service Controls. What should you do?",
    "about": "Bezpieczne połączenie z on-premises do Google Cloud API.",
    "interpret": "Dedicated Interconnect oraz użycie endpointa 'restricted.googleapis.com' (przez prywatne API) zapewnia dostęp do usług Google tylko przez VPC SC."
  },
  "124": {
    "q_pl": "You are working with protected health information (PHI) for an electronic health record system. The privacy officer is concerned that sensitive data is stored in the analytics system. You are tasked with anonymizing the sensitive data in a way that is not reversible. Also, the anonymized data should not preserve the character set and length. Which Google Cloud solution should you use?",
    "about": "Nieodwracalna anonimizacja danych (PHI).",
    "interpret": "DLP API pozwala na anonimizację (np. poprzez maskowanie lub hash), która nie jest odwracalna, w przeciwieństwie do tokenizacji."
  },
  "125": {
    "q_pl": "You are setting up a CI/CD pipeline to deploy containerized applications to your production clusters on Google Kubernetes Engine (GKE). You need to prevent containers with known vulnerabilities from being deployed. You have the following requirements for your solution: Must be cloud-native. Must be cost-efficient. Minimize operational overhead. How should you accomplish this? (Choose two.)",
    "about": "Automatyczne sprawdzanie podatności kontenerów w CI/CD.",
    "interpret": "Wdróż Skanowanie kontenerów (Container Analysis) oraz Binary Authorization, aby automatycznie blokować wdrażanie obrazów z wykrytymi podatnościami."
  },
  "126": {
    "q_pl": "Which type of load balancer should you use to maintain client IP by default while using the standard network tier?",
    "about": "Utrzymanie IP klienta w Standard Tier.",
    "interpret": "Network Load Balancer (L4) domyślnie zachowuje oryginalny adres IP klienta przy połączeniach przychodzących."
  },
  "127": {
    "q_pl": "You want to prevent users from accidentally deleting a Shared VPC host project. Which organization-level policy constraint should you enable?",
    "about": "Ochrona hosta Shared VPC przed usunięciem.",
    "interpret": "Użyj zasady polityki organizacji `compute.skipDefaultNetworkCreation` (lub dedykowanych uprawnień IAM), aby zablokować przypadkowe usuwanie zasobów sieciowych."
  },
  "128": {
    "q_pl": "Users are reporting an outage on your public-facing application that is hosted on Compute Engine. You suspect that a recent change to your firewall rules is responsible. You need to test whether your firewall rules are working properly. What should you do?",
    "about": "Testowanie reguł firewall.",
    "interpret": "Policy Troubleshooter pozwala na sprawdzenie, czy konkretne połączenie zostanie zablokowane lub dozwolone przez istniejące reguły firewall."
  },
  "129": {
    "q_pl": "You are a security administrator at your company. Per Google-recommended best practices, you implemented the domain restricted sharing organization policy to allow only required domains to access your projects. An engineering team is now reporting that users at an external partner outside your organization domain cannot be granted access to the resources in a project. How should you make an exception for your partner's domain while following the stated best practices?",
    "about": "Wyjątek od polityki domain restricted sharing.",
    "interpret": "Dodaj adresy partnerów do odpowiedniej grupy lub użyj wyjątków w polityce organizacji dla konkretnego projektu, jeśli jest to dopuszczalne."
  },
  "130": {
    "q_pl": "You plan to use a Google Cloud Armor policy to prevent common attacks such as cross-site scripting (XSS) and SQL injection (SQLi) from reaching your web application's backend. What are two requirements for using Google Cloud Armor security policies? (Choose two.)",
    "about": "Wymagania dla Cloud Armor.",
    "interpret": "Cloud Armor wymaga użycia Cloud Load Balancing (HTTP(S)) oraz skonfigurowanych polityk bezpieczeństwa przypisanych do backendu."
  },
  "131": {
    "q_pl": "You perform a security assessment on a customer architecture and discover that multiple VMs have public IP addresses. After providing a recommendation to remove the public IP addresses, you are told those VMs need to communicate to external sites as part of the customer's typical operations. What should you recommend to reduce the need for public IP addresses in your customer's VMs?",
    "about": "Zastąpienie publicznych IP dla instancji.",
    "interpret": "Cloud NAT umożliwia maszynom w prywatnej podsieci komunikację wychodzącą do internetu bez przypisywania im publicznych IP."
  },
  "132": {
    "q_pl": "You are tasked with exporting and auditing security logs for login activity events for Google Cloud console and API calls that modify configurations to Google Cloud resources. Your export must meet the following requirements: Export related logs for all projects in the Google Cloud organization. Export logs in near real-time to an external SIEM. What should you do? (Choose two.)",
    "about": "Eksport logów do SIEM w czasie rzeczywistym.",
    "interpret": "Utwórz log sink dla całej organizacji (folder/org) eksportujący logi do tematu Pub/Sub, a następnie skonfiguruj subskrypcję do SIEM."
  },
  "133": {
    "q_pl": "Your company's Chief Information Security Officer (CISO) creates a requirement that business data must be stored in specific locations due to regulatory requirements that affect the company's global expansion plans. After working on the details to implement this requirement, you determine the following: The services in scope are included in the Google Cloud Data Residency Terms. The business data remains within specific locations under the same organization. The folder structure can contain multiple data residency locations. You plan to use the Resource Location Restriction organization policy constraint. At which level in the resource hierarchy should you set the constraint?",
    "about": "Wymuszenie lokalizacji danych (data residency).",
    "interpret": "Zastosuj `gcp.resourceLocations` na poziomie folderu lub projektu, aby ograniczyć tworzenie zasobów tylko do wybranych regionów."
  },
  "134": {
    "q_pl": "You need to set up a Cloud interconnect connection between your company's on-premises data center and VPC host network. You want to make sure that on-premises applications can only access Google APIs over the Cloud Interconnect and not through the public internet. You are required to only use APIs that are supported by VPC Service Controls to mitigate against exfiltration risk to non-supported APIs. How should you configure the network?",
    "about": "Bezpieczna komunikacja z API Google przez Interconnect.",
    "interpret": "Skonfiguruj prywatny dostęp do Google API (`restricted.googleapis.com`) i upewnij się, że ruch przechodzi przez Interconnect."
  },
  "135": {
    "q_pl": "You need to implement an encryption-at-rest strategy that protects sensitive data and reduces key management complexity for non-sensitive data. Your solution has the following requirements: Schedule key rotation for sensitive data. Control which region the encryption keys for sensitive data are stored in. Minimize the latency to access encryption keys for both sensitive and non-sensitive data. What should you do?",
    "about": "Optymalizacja zarządzania kluczami szyfrującymi.",
    "interpret": "Użyj Cloud KMS dla obu typów danych, aby zminimalizować złożoność, kontrolując rotację kluczy (CMEK) dla danych wrażliwych."
  },
  "136": {
    "q_pl": "Your security team uses encryption keys to ensure confidentiality of user data. You want to establish a process to reduce the impact of a potentially compromised symmetric encryption key in Cloud Key Management Service (Cloud KMS).Which steps should your team take before an incident occurs? (Choose two.)",
    "about": "Minimalizacja skutków kompromitacji klucza KMS.",
    "interpret": "Zaimplementuj rotację kluczy oraz używaj oddzielnych kluczy dla różnych usług/środowisk, aby ograniczyć zasięg potencjalnego wycieku."
  },
  "137": {
    "q_pl": "Your company's chief information security officer (CISO) is requiring business data to be stored in specific locations due to regulatory requirements that affect the company's global expansion plans. After working on a plan to implement this requirement, you determine the following:- The services in scope are included in the Google Cloud data residency requirements.- The business data remains within specific locations under the same organization.- The folder structure can contain multiple data residency locations.- The projects are aligned to specific locations.You plan to use the Resource Location Restriction organization policy constraint with very granular control. At which level in the hierarchy should you set the constraint?",
    "about": "Poziom hierarchii dla Resource Location Restriction.",
    "interpret": "Najlepiej zastosować tę zasadę na poziomie najwyższym (Organizacja lub Folder), aby wymusić spójność dla wszystkich podległych projektów."
  },
  "138": {
    "q_pl": "A database administrator notices malicious activities within their Cloud SQL instance. The database administrator wants to monitor the API calls that read the configuration or metadata of resources. Which logs should the database administrator review?",
    "about": "Logi z prób modyfikacji konfiguracji Cloud SQL.",
    "interpret": "Przeglądaj Data Access logs (Admin Read) dla usługi Cloud SQL, aby śledzić kto i kiedy modyfikował konfigurację."
  },
  "139": {
    "q_pl": "You are backing up application logs to a shared Cloud Storage bucket that is accessible to both the administrator and analysts. Analysts should not have access to logs that contain any personally identifiable information (PII). Log files containing PII should be stored in another bucket that is only accessible to the administrator. What should you do?",
    "about": "Separacja logów z PII w Cloud Storage.",
    "interpret": "Użyj Cloud Functions reagujących na zdarzenia w Cloud Storage (Pub/Sub trigger), które skanują pliki (DLP API) i przenoszą je do odpowiedniego bucketa."
  },
  "140": {
    "q_pl": "You work for an organization in a regulated industry that has strict data protection requirements. The organization backs up their data in the cloud. To comply with data privacy regulations, this data can only be stored for a specific length of time and must be deleted after this specific period.You want to automate the compliance with this regulation while minimizing storage costs. What should you do?",
    "about": "Automatyczna retencja i usuwanie danych w Cloud Storage.",
    "interpret": "Skonfiguruj politykę cyklu życia (Object Lifecycle Management) dla bucketa, ustawiając regułę usuwania obiektów po określonym czasie."
  },
  "141": {
    "q_pl": "You have been tasked with configuring Security Command Center for your organization's Google Cloud environment. Your security team needs to receive alerts of potential crypto mining in the organization's compute environment and alerts for common Google Cloud misconfigurations that impact security. Which Security Command Center features should you use to configure these alerts? (Choose two.)",
    "about": "Wykrywanie kryptokoparek i błędów konfiguracji.",
    "interpret": "Włącz odpowiednie moduły w Security Command Center: 'Event Threat Detection' dla koparek i 'Security Health Analytics' dla błędów konfiguracji."
  },
  "142": {
    "q_pl": "You have noticed an increased number of phishing attacks across your enterprise user accounts. You want to implement the Google 2-Step Verification (2SV) option that uses a cryptographic signature to authenticate a user and verify the URL of the login page. Which Google 2SV option should you use?",
    "about": "Ochrona przed phishingiem (U2F/WebAuthn).",
    "interpret": "Użyj kluczy bezpieczeństwa (Security Keys - FIDO2/U2F), które są odporne na phishing, ponieważ weryfikują domenę strony logowania."
  },
  "143": {
    "q_pl": "Your organization hosts a financial services application running on Compute Engine instances for a third-party company. The third-party company's servers that will consume the application also run on Compute Engine in a separate Google Cloud organization. You need to configure a secure network connection between the Compute Engine instances. You have the following requirements:- The network connection must be encrypted.- The communication between servers must be over private IP addresses.What should you do?",
    "about": "Bezpieczne połączenie między organizacjami.",
    "interpret": "Użyj Cloud VPN (IPsec) do szyfrowania ruchu między sieciami różnych organizacji, używając prywatnych adresów IP."
  },
  "144": {
    "q_pl": "Your company's new CEO recently sold two of the company's divisions. Your Director asks you to help migrate the Google Cloud projects associated with those divisions to a new organization node. Which preparation steps are necessary before this migration occurs? (Choose two.)",
    "about": "Przygotowanie do migracji projektu między organizacjami.",
    "interpret": "Przed migracją usuń zależności od zasobów organizacji źródłowej (np. polityki IAM, polityki organizacji) i sprawdź ograniczenia typu `allowedPolicyMemberDomains`."
  },
  "145": {
    "q_pl": "You are a consultant for an organization that is considering migrating their data from its private cloud to Google Cloud. The organization's compliance team is not familiar with Google Cloud and needs guidance on how compliance requirements will be met on Google Cloud. One specific compliance requirement is for customer data at rest to reside within specific geographic boundaries. Which option should you recommend for the organization to meet their data residency requirements on Google Cloud?",
    "about": "Data residency w chmurze.",
    "interpret": "Rekomenduj korzystanie z Google Cloud Data Residency Terms oraz polityki organizacji `gcp.resourceLocations` dla wymuszenia lokalizacji danych."
  },
  "146": {
    "q_pl": "Your security team wants to reduce the risk of user-managed keys being mismanaged and compromised. To achieve this, you need to prevent developers from creating user-managed service account keys for projects in their organization. How should you enforce this?",
    "about": "Blokada tworzenia kluczy kont serwisowych.",
    "interpret": "Użyj organizacji polityki `iam.disableServiceAccountKeyCreation` na poziomie projektu lub folderu."
  },
  "147": {
    "q_pl": "You are responsible for managing your company's identities in Google Cloud. Your company enforces 2-Step Verification (2SV) for all users. You need to reset a user's access, but the user lost their second factor for 2SV. You want to minimize risk. What should you do?",
    "about": "Resetowanie 2SV dla użytkownika.",
    "interpret": "Zresetuj kody zapasowe lub klucz bezpieczeństwa użytkownika w konsoli administratora Google, wymagając od niego skonfigurowania nowego czynnika."
  },
  "148": {
    "q_pl": "Which Google Cloud service should you use to enforce access control policies for applications and resources?",
    "about": "Centralne zarządzanie dostępem.",
    "interpret": "Cloud IAM to główna usługa do definiowania kto, co i gdzie może robić w Google Cloud."
  },
  "149": {
    "q_pl": "You want to update your existing VPC Service Controls perimeter with a new access level. You need to avoid breaking the existing perimeter with this change, and ensure the least disruptions to users while minimizing overhead. What should you do?",
    "about": "Bezpieczna aktualizacja perymetrów VPC SC.",
    "interpret": "Użyj trybu 'dry run' (audyt) dla nowego dostępu, aby sprawdzić, czy nie zostaną zablokowane poprawne połączenia przed ich zablokowaniem."
  },
  "150": {
    "q_pl": "Your organization's Google Cloud VMs are deployed via an instance template that configures them with a public IP address in order to host web services for external users. The VMs reside in a service project that is attached to a host (VPC) project containing one custom Shared VPC for the VMs. You have been asked to reduce the exposure of the VMs to the internet while continuing to service external users. You have already recreated the instance template without a public IP address configuration to launch the managed instance group (MIG). What should you do?",
    "about": "Zabezpieczenie MIG bez publicznych IP.",
    "interpret": "Użyj Cloud Load Balancer (jako frontend dla użytkowników) i skieruj ruch do instancji w sieci prywatnej (Backend)."
  },
  "151": {
    "q_pl": "Your privacy team uses crypto-shredding (deleting encryption keys) as a strategy to delete personally identifiable information (PII). You need to implement this practice on Google Cloud while still utilizing the majority of the platform's services and minimizing operational overhead. What should you do?",
    "about": "Wymuszanie użycia obrazów z zaufanych projektów.",
    "interpret": "Użyj polityki organizacji `compute.trustedimageProjects` na poziomie organizacji lub folderu, aby ograniczyć możliwość tworzenia VM tylko z obrazów z konkretnych projektów."
  },
  "152": {
    "q_pl": "You need to centralize your team's logs for production projects. You want your team to be able to search and analyze the logs using Logs Explorer. What should you do?",
    "about": "Bezpieczeństwo kont serwisowych - zasada najmniejszych uprawnień.",
    "interpret": "Używaj unikalnych kont serwisowych dla każdego komponentu aplikacji i przypisuj im tylko niezbędne role IAM (np. `roles/storage.objectViewer` zamiast `roles/editor`)."
  },
  "153": {
    "q_pl": "You need to use Cloud External Key Manager to create an encryption key to encrypt specific BigQuery data at rest in Google Cloud. Which steps should you do first?",
    "about": "Zabezpieczenie przed atakami na interfejsy zarządzania (np. SSH/RDP).",
    "interpret": "Zablokuj publiczne IP na instancjach zarządzania i używaj IAP (Identity-Aware Proxy) do uzyskiwania bezpiecznego dostępu przez tunelowanie TCP."
  },
  "154": {
    "q_pl": "Your company's cloud security policy dictates that VM instances should not have an external IP address. You need to identify the Google Cloud service that will allow VM instances without external IP addresses to connect to the internet to update the VMs. Which service should you use?",
    "about": "Szyfrowanie danych w tranzycie w GKE.",
    "interpret": "Wdróż Service Mesh (np. Anthos Service Mesh / Istio), aby wymusić wzajemne TLS (mTLS) dla komunikacji między podami."
  },
  "155": {
    "q_pl": "You want to make sure that your organization's Cloud Storage buckets cannot have data publicly available to the internet. You want to enforce this across all Cloud Storage buckets. What should you do?",
    "about": "Ochrona bucketa przed usunięciem (soft delete/retention).",
    "interpret": "Użyj Bucket Lock (Retention Policy) do wymuszenia retencji danych i zapobiegania usuwaniu obiektów, oraz włącz wersjonowanie obiektów dla dodatkowej ochrony."
  },
  "156": {
    "q_pl": "Your company plans to move most of its IT infrastructure to Google Cloud. They want to leverage their existing on-premises Active Directory as an identity provider for Google Cloud. Which two steps should you take to integrate the company's on-premises Active Directory with Google Cloud and configure access management? (Choose two.)",
    "about": "Zabezpieczenie przed atakami typu SQL injection w App Engine.",
    "interpret": "Wdróż Cloud Armor z politykami zabezpieczeń (Security Policies), które zawierają prekonfigurowane reguły wykrywające ataki SQLi."
  },
  "157": {
    "q_pl": "You are in charge of creating a new Google Cloud organization for your company. Which two actions should you take when creating the super administrator accounts? (Choose two.)",
    "about": "Centralna widoczność logów z wielu organizacji.",
    "interpret": "Skonfiguruj log sinks w każdej organizacji, eksportując logi do jednego centralnego projektu w dedykowanej organizacji bezpieczeństwa (Log Aggregation)."
  },
  "158": {
    "q_pl": "You are deploying a web application hosted on Compute Engine. A business requirement mandates that application logs are preserved for 12 years and data is kept within European boundaries. You want to implement a storage solution that minimizes overhead and is cost-effective. What should you do?",
    "about": "Audyt zmian uprawnień w IAM.",
    "interpret": "Analizuj Admin Activity logs dla zasobów `iam.googleapis.com` i ustaw powiadomienia (Alerting Policy) na krytyczne zmiany (np. przypisanie roli Owner)."
  },
  "159": {
    "q_pl": "You discovered that sensitive personally identifiable information (PII) is being ingested to your Google Cloud environment in the daily ETL process from an on-premises environment to your BigQuery datasets. You need to redact this data to obfuscate the PII, but need to re-identify it for data analytics purposes. Which components should you use in your solution? (Choose two.)",
    "about": "Kontrola dostępu do obrazów kontenerów w Artifact Registry.",
    "interpret": "Użyj ról IAM na poziomie repozytorium (Repository-level IAM) do zarządzania dostępem do odczytu/zapisu obrazów dla kont serwisowych CI/CD."
  },
  "160": {
    "q_pl": "You are working with a client that is concerned about control of their encryption keys for sensitive data. The client does not want to store encryption keys at rest in the same cloud service provider (CSP) as the data that the keys are encrypting. Which Google Cloud encryption solutions should you recommend to this client? (Choose two.)",
    "about": "Ograniczenie dostępu do usług GCP z poziomu instancji VM.",
    "interpret": "Skonfiguruj odpowiednie Service Account Scopes i użyj polityk IAM, aby ograniczyć dostęp konta serwisowego do konkretnych API (np. tylko Storage)."
  },
  "161": {
    "q_pl": "You are implementing data protection by design and in accordance with GDPR requirements. As part of design reviews, you are told that you need to manage the encryption key for a solution that includes workloads for Compute Engine, Google Kubernetes Engine, Cloud Storage, BigQuery, and Pub/Sub. Which option should you choose for this implementation?",
    "about": "Szyfrowanie za pomocą kluczy własnych (Customer-Managed Encryption Keys - CMEK).",
    "interpret": "CMEK w Cloud KMS pozwala na rotację, wyłączanie i pełną kontrolę nad kluczami szyfrującymi dla usług takich jak Cloud Storage czy BigQuery."
  },
  "162": {
    "q_pl": "Which Identity-Aware Proxy role should you grant to an Identity and Access Management (IAM) user to access HTTPS resources?",
    "about": "Zabezpieczenie przed atakami na API (DDoS, nieautoryzowany dostęp).",
    "interpret": "Użyj Cloud Endpoints lub API Gateway wraz z Cloud Armor i Cloud IAP do ochrony, walidacji i zarządzania dostępem do API."
  },
  "163": {
    "q_pl": "You need to audit the network segmentation for your Google Cloud footprint. You currently operate Production and Non-Production infrastructure-as-a-service (IaaS) environments. All your VM instances are deployed without any service account customization.After observing the traffic in your custom network, you notice that all instances can communicate freely - despite tag-based VPC firewall rules in place to segment traffic properly - with a priority of 1000. What are the most likely reasons for this behavior?",
    "about": "Monitoring zgodności z politykami organizacji.",
    "interpret": "Security Command Center (SCC) posiada moduły (np. Security Health Analytics) automatycznie wykrywające naruszenia polityk (np. publiczne buckety)."
  },
  "164": {
    "q_pl": "You are creating a new infrastructure CI/CD pipeline to deploy hundreds of ephemeral projects in your Google Cloud organization to enable your users to interact with Google Cloud. You want to restrict the use of the default networks in your organization while following Google-recommended best practices. What should you do?",
    "about": "Ograniczenie ruchu wyjściowego z klastra GKE.",
    "interpret": "Użyj Network Policies (Egress) lub ustawień VPC firewall, aby ograniczyć ruch wychodzący z podów do zaufanych miejsc."
  },
  "165": {
    "q_pl": "You are a security administrator at your company and are responsible for managing access controls (identification, authentication, and authorization) on Google Cloud. Which Google-recommended best practices should you follow when configuring authentication and authorization? (Choose two.)",
    "about": "Bezpieczne przechowywanie obrazów kontenerów.",
    "interpret": "Używaj Artifact Registry zamiast Container Registry, ponieważ oferuje lepszą kontrolę IAM, wsparcie dla wielu formatów i lepszą integrację z VPC SC."
  },
  "166": {
    "q_pl": "You have been tasked with inspecting IP packet data for invalid or malicious content. What should you do?",
    "about": "Wykrywanie podatności kodu w CI/CD.",
    "interpret": "Zintegruj skanery statycznej analizy kodu (SAST) w potokach CI (np. Cloud Build) przed utworzeniem obrazu kontenera."
  },
  "167": {
    "q_pl": "You have the following resource hierarchy. There is an organization policy at each node in the hierarchy as shown. Which load balancer types are denied in VPC A?",
    "about": "Ochrona danych przed wyciekiem (DLP) w logach.",
    "interpret": "Wymuś maskowanie danych wrażliwych w logach (Log Sinks z filtrami DLP) przed ich wysłaniem do zewnętrznych systemów SIEM."
  },
  "168": {
    "q_pl": "Your security team wants to implement a defense-in-depth approach to protect sensitive data stored in a Cloud Storage bucket. Your team has the following requirements:- The Cloud Storage bucket in Project A can only be readable from Project B.- The Cloud Storage bucket in Project A cannot be accessed from outside the network.- Data in the Cloud Storage bucket cannot be copied to an external Cloud Storage bucket.What should the security team do?",
    "about": "Zarządzanie dostępem dla pracowników tymczasowych.",
    "interpret": "Używaj kont z krótkim okresem ważności lub zsynchronizowanych grup z Active Directory z automatycznym wygaszaniem (deprovisioning)."
  },
  "169": {
    "q_pl": "You need to create a VPC that enables your security team to control network resources such as firewall rules. How should you configure the network to allow for separation of duties for network resources?",
    "about": "Bezpieczna konfiguracja VPC (bez publicznych IP).",
    "interpret": "Wykorzystaj `private Google Access` dla dostępu do usług Google oraz Cloud NAT dla dostępu do internetu z sieci prywatnej."
  },
  "170": {
    "q_pl": "You are onboarding new users into Cloud Identity and discover that some users have created consumer user accounts using the corporate domain name. How should you manage these consumer user accounts with Cloud Identity?",
    "about": "Audyt dostępu do usług (Access Transparency).",
    "interpret": "Logi Access Transparency pokazują kiedy i dlaczego pracownicy Google uzyskali dostęp do danych klienta w celu wsparcia technicznego."
  },
  "171": {
    "q_pl": "You have created an OS image that is hardened per your organization's security standards and is being stored in a project managed by the security team. As a Google Cloud administrator, you need to make sure all VMs in your Google Cloud organization can only use that specific OS image while minimizing operational overhead. What should you do? (Choose two.)",
    "about": "Zabezpieczenie przed atakiem typu Cross-Site Request Forgery (CSRF).",
    "interpret": "Upewnij się, że aplikacja używa tokenów anty-CSRF oraz odpowiednich nagłówków zabezpieczających (np. SameSite=Lax/Strict)."
  },
  "172": {
    "q_pl": "You're developing the incident response plan for your company. You need to define the access strategy that your DevOps team will use when reviewing and investigating a deployment issue in your Google Cloud environment. There are two main requirements:- Least-privilege access must be enforced at all times.- The DevOps team must be able to access the required resources only during the deployment issue.How should you grant access while following Google-recommended best practices?",
    "about": "Weryfikacja integralności obrazów w GKE.",
    "interpret": "Binary Authorization zapewnia, że tylko obrazy podpisane przez zaufane źródła (np. Cloud Build) mogą być uruchomione na klastrze."
  },
  "173": {
    "q_pl": "You are working with a client who plans to migrate their data to Google Cloud. You are responsible for recommending an encryption service to manage their encrypted keys. You have the following requirements:- The master key must be rotated at least once every 45 days.- The solution that stores the master key must be FIPS 140-2 Level 3 validated.- The master key must be stored in multiple regions within the US for redundancy.Which solution meets these requirements?",
    "about": "Szyfrowanie za pomocą kluczy dostarczonych przez klienta (Customer-Supplied Encryption Keys - CSEK).",
    "interpret": "CSEK wymaga od klienta samodzielnego zarządzania i dostarczania kluczy przy każdym żądaniu zapisu/odczytu (Google nie przechowuje klucza)."
  },
  "174": {
    "q_pl": "You manage your organization's Security Operations Center (SOC). You currently monitor and detect network traffic anomalies in your VPCs based on network logs. However, you want to explore your environment using network payloads and headers. Which Google Cloud product should you use?",
    "about": "Zabezpieczenie klastra GKE przed atakami na pody.",
    "interpret": "Wdróż GKE Sandbox (gVisor) dla odizolowania kontenerów od jądra systemu hosta (szczególnie dla workloadów o wysokim ryzyku)."
  },
  "175": {
    "q_pl": "You are consulting with a client that requires end-to-end encryption of application data (including data in transit, data in use, and data at rest) within Google Cloud. Which options should you utilize to accomplish this? (Choose two.)",
    "about": "Kontrola uprawnień IAM w dużym środowisku.",
    "interpret": "Używaj ról predefiniowanych (Predefined Roles) i Grup Google. Unikaj ról podstawowych (Owner, Editor, Viewer) w środowiskach produkcyjnych."
  },
  "176": {
    "q_pl": "You need to enforce a security policy in your Google Cloud organization that prevents users from exposing objects in their buckets externally. There are currently no buckets in your organization. Which solution should you implement proactively to achieve this goal with the least operational overhead?",
    "about": "Proaktywne blokowanie publicznego dostępu do Cloud Storage.",
    "interpret": "Użyj polityki organizacji `storage.publicAccessPrevention` na poziomie organizacji."
  },
  "177": {
    "q_pl": "Your company requires the security and network engineering teams to identify all network anomalies and be able to capture payloads within VPCs. Which method should you use?",
    "about": "Bezpieczeństwo połączeń sieciowych w VPC.",
    "interpret": "Zastosuj reguły firewall oparte na tagach lub kontach serwisowych zamiast adresów IP."
  },
  "178": {
    "q_pl": "An organization wants to track how bonus compensations have changed over time to identify employee outliers and correct earning disparities. This task must be performed without exposing the sensitive compensation data for any individual and must be reversible to identify the outlier. Which Cloud Data Loss Prevention API technique should you use?",
    "about": "Zarządzanie kluczami szyfrującymi.",
    "interpret": "Używaj Cloud KMS do zarządzania kluczami CMEK dla szyfrowania at-rest."
  },
  "179": {
    "q_pl": "You need to set up a Cloud Interconnect connection between your company's on-premises data center and VPC host network. You want to make sure that on-premises applications can only access Google APIs over the Cloud Interconnect and not through the public internet. You are required to only use APIs that are supported by VPC Service Controls to mitigate against exfiltration risk to non-supported APIs. How should you configure the network?",
    "about": "Zabezpieczanie sekretów aplikacji.",
    "interpret": "Secret Manager zapewnia bezpieczne przechowywanie i rotację sekretów."
  },
  "180": {
    "q_pl": "Your organization develops software involved in many open source projects and is concerned about software supply chain threats. You need to deliver provenance for the build to demonstrate the software is untampered. What should you do?",
    "about": "Bezpieczeństwo kontenerów w GKE.",
    "interpret": "Wdróż Network Policies do izolacji komunikacji między podami."
  },
  "181": {
    "q_pl": "Your organization operates Virtual Machines (VMs) with only private IPs in the Virtual Private Cloud (VPC) with internet access through Cloud NAT. Everyday, you must patch all VMs with critical OS updates and provide summary reports. What should you do?",
    "about": "Monitoring dostępu do danych.",
    "interpret": "Logi Data Access rejestrują wszystkie żądania dostępu do zasobów."
  },
  "182": {
    "q_pl": "For compliance reporting purposes, the internal audit department needs you to provide the list of virtual machines (VMs) that have critical operating system (OS) security updates available, but not installed. You must provide this list every six months, and you want to perform this task quickly.What should you do?",
    "about": "Zasady IAM w organizacji.",
    "interpret": "Stosuj zasadę najmniejszych uprawnień (Least Privilege) przy użyciu ról predefiniowanych."
  },
  "183": {
    "q_pl": "Your company conducts clinical trials and needs to analyze the results of a recent study that are stored in BigQuery. The interval when the medicine was taken contains start and stop dates. The interval data is critical to the analysis, but specific dates may identify a particular batch and introduce bias. You need to obfuscate the start and end dates for each row and preserve the interval data.What should you do?",
    "about": "Bezpieczeństwo API.",
    "interpret": "Użyj Cloud Armor do ochrony punktów końcowych API."
  },
  "184": {
    "q_pl": "You have a highly sensitive BigQuery workload that contains personally identifiable information (PII) that you want to ensure is not accessible from the internet. To prevent data exfiltration, only requests from authorized IP addresses are allowed to query your BigQuery tables.What should you do?",
    "about": "Szyfrowanie danych w tranzycie.",
    "interpret": "Wymuś TLS dla całej komunikacji przychodzącej i wychodzącej."
  },
  "185": {
    "q_pl": "Your organization is moving virtual machines (VMs) to Google Cloud. You must ensure that operating system images that are used across your projects are trusted and meet your security requirements.What should you do?",
    "about": "Audyt uprawnień IAM.",
    "interpret": "Policy Analyzer identyfikuje nadmiarowe uprawnienia w organizacji."
  },
  "186": {
    "q_pl": "You have stored company approved compute images in a single Google Cloud project that is used as an image repository. This project is protected with VPC Service Controls and exists in the perimeter along with other projects in your organization. This lets other projects deploy images from the image repository project. A team requires deploying a third-party disk image that is stored in an external Google Cloud organization. You need to grant read access to the disk image so that it can be deployed into the perimeter.What should you do?",
    "about": "Zabezpieczenie przed atakami DDoS.",
    "interpret": "Cloud Armor zapewnia zaawansowaną ochronę przed DDoS."
  },
  "187": {
    "q_pl": "A service account key has been publicly exposed on multiple public code repositories. After reviewing the logs, you notice that the keys were used to generate short-lived credentials. You need to immediately remove access with the service account.What should you do?",
    "about": "Kontrola dostępu do obrazów w Artifact Registry.",
    "interpret": "Zarządzaj dostępem do repozytoriów obrazów za pomocą IAM."
  },
  "188": {
    "q_pl": "A company is using Google Kubernetes Engine (GKE) with container images of a mission-critical application. The company wants to scan the images for known security issues and securely share the report with the security team without exposing them outside Google Cloud.What should you do?",
    "about": "Izolacja sieci w Shared VPC.",
    "interpret": "Używaj subsieci do logicznej izolacji środowisk w Shared VPC."
  },
  "189": {
    "q_pl": "Your application is deployed as a highly available, cross-region solution behind a global external HTTP(S) load balancer. You notice significant spikes in traffic from multiple IP addresses, but it is unknown whether the IPs are malicious. You are concerned about your application's availability. You want to limit traffic from these clients over a specified time interval.What should you do?",
    "about": "Wykrywanie zagrożeń w infrastrukturze.",
    "interpret": "Security Command Center automatycznie wykrywa podatności."
  },
  "190": {
    "q_pl": "Your organization is using Active Directory and wants to configure Security Assertion Markup Language (SAML). You must set up and enforce single sign-on (SSO) for all users.What should you do?",
    "about": "Szyfrowanie za pomocą kluczy własnych (CMEK).",
    "interpret": "CMEK zapewnia pełną kontrolę nad rotacją kluczy szyfrujących."
  },
  "191": {
    "q_pl": "Employees at your company use their personal computers to access your organization's Google Cloud console. You need to ensure that users can only access the Google Cloud console from their corporate-issued devices and verify that they have a valid enterprise certificate.\nWhat should you do?",
    "about": "Bezpieczeństwo w CI/CD.",
    "interpret": "Automatyzuj skanowanie podatności w potokach Cloud Build."
  },
  "192": {
    "q_pl": "Your organization is rolling out a new continuous integration and delivery (CI/CD) process to deploy infrastructure and applications in Google Cloud. Many teams will use their own instances of the CI/CD workflow. It will run on Google Kubernetes Engine (GKE). The CI/CD pipelines must be designed to securely access Google Cloud APIs.\nWhat should you do?",
    "about": "Zarządzanie dostępem dla pracowników tymczasowych.",
    "interpret": "Stosuj konta z krótkim okresem ważności i automatyczne wygaszanie."
  },
  "193": {
    "q_pl": "Your organization's Customers must scan and upload the contract and their driver license into a web portal in Cloud Storage. You must remove all personally identifiable information (PII) from files that are older than 12 months. Also, you must archive the anonymized files for retention purposes.\nWhat should you do?",
    "about": "Bezpieczna konfiguracja VPC.",
    "interpret": "Wykorzystaj `private Google Access` dla dostępu do usług Google."
  },
  "194": {
    "q_pl": "You plan to synchronize identities to Cloud Identity from a third-party identity provider (IdP). You discovered that some employees used their corporate email address to set up consumer accounts to access Google services. You need to ensure that the organization has control over the configuration, security, and lifecycle of these consumer accounts.\nWhat should you do? (Choose two.)",
    "about": "Audyt dostępu przez pracowników Google.",
    "interpret": "Access Transparency pokazuje dostęp pracowników Google do danych klienta."
  },
  "195": {
    "q_pl": "You are auditing all your Google Cloud resources in the production project. You want to identify all principals who can change firewall rules.\nWhat should you do?",
    "about": "Bezpieczeństwo aplikacji w App Engine.",
    "interpret": "Użyj Cloud IAP do ochrony aplikacji przed nieautoryzowanym dostępem."
  },
  "196": {
    "q_pl": "Your organization previously stored files in Cloud Storage by using Google Managed Encryption Keys (GMEK), but has recently updated the internal policy to require Customer Managed Encryption Keys (CMEK). You need to re-encrypt the files quickly and efficiently with minimal cost.\nWhat should you do?",
    "about": "Ochrona przed CSRF.",
    "interpret": "Stosuj tokeny anty-CSRF w formularzach aplikacji."
  },
  "197": {
    "q_pl": "You run applications on Cloud Run. You already enabled container analysis for vulnerability scanning. However, you are concerned about the lack of control on the applications that are deployed. You must ensure that only trusted container images are deployed on Cloud Run.\nWhat should you do? (Choose two.)",
    "about": "Weryfikacja integralności obrazów w GKE.",
    "interpret": "Binary Authorization blokuje niepodpisane obrazy kontenerów."
  },
  "198": {
    "q_pl": "Your organization has on-premises hosts that need to access Google Cloud APIs. You must enforce private connectivity between these hosts, minimize costs, and optimize for operational efficiency.\nWhat should you do?",
    "about": "Szyfrowanie za pomocą kluczy dostarczonych (CSEK).",
    "interpret": "CSEK wymaga dostarczania kluczy przy każdym żądaniu."
  },
  "199": {
    "q_pl": "As part of your organization's zero trust strategy, you use Identity-Aware Proxy (IAP) to protect multiple applications. You need to ingest logs into a Security Information and Event Management (SIEM) system so that you are alerted to possible intrusions.\nWhich logs should you analyze?",
    "about": "Izolacja w GKE.",
    "interpret": "Użyj GKE Sandbox dla odizolowania kontenerów od hosta."
  },
  "200": {
    "q_pl": "Your company must follow industry specific regulations. Therefore, you need to enforce customer-managed encryption keys (CMEK) for all new Cloud Storage resources in the organization called org1.\nWhat command should you execute?",
    "about": "Kontrola uprawnień w dużym środowisku.",
    "interpret": "Unikaj ról podstawowych na rzecz predefiniowanych ról IAM."
  },
  "201": {
    "q_pl": "Your company's Google Cloud organization has about 200 projects and 1,500 virtual machines. There is no uniform strategy for logs and events management, which reduces visibility for your security operations team. You need to design a logs management solution that provides visibility and allows the security team to view the environment's configuration.",
    "about": "Wybór metody szyfrowania dla dysków GCE.",
    "interpret": "CMEK (Cloud KMS) jest rekomendowany dla pełnej kontroli nad cyklem życia klucza, a CSEK dla klientów z rygorystycznymi wymogami przechowywania kluczy poza GCP."
  },
  "202": {
    "q_pl": "Your Google Cloud organization allows for administrative capabilities to be distributed to each team through provision of a Google Cloud project with Owner role (roles/owner). The organization contains thousands of Google Cloud projects. Security Command Center Premium has surfaced multiple OPEN_MYSQL_PORT findings. You are enforcing the guardrails and need to prevent these types of common misconfigurations.",
    "about": "Bezpieczeństwo w środowisku hybrydowym.",
    "interpret": "Użyj Cloud Interconnect z szyfrowaniem IPsec, aby zabezpieczyć ruch między on-premises a GCP."
  },
  "203": {
    "q_pl": "Your organization must comply with the regulation to keep instance logging data within Europe. Your workloads will be hosted in the Netherlands in region europe-west4 in a new project. You must configure Cloud Logging to keep your data in the country.",
    "about": "Audyt działań w GCP.",
    "interpret": "Admin Activity logs są domyślnie włączone i pozwalają śledzić zmiany konfiguracji zasobów."
  },
  "204": {
    "q_pl": "You are using Security Command Center (SCC) to protect your workloads and receive alerts for suspected security breaches at your company. You need to detect cryptocurrency mining software.\nWhich SCC service should you use?",
    "about": "Ograniczenie dostępu do usług GCP z internetu.",
    "interpret": "Użyj VPC Service Controls do stworzenia perymetru izolującego zasoby wewnątrz sieci Google."
  },
  "205": {
    "q_pl": "You are running applications outside Google Cloud that need access to Google Cloud resources. You are using workload identity federation to grant external identities Identity and Access Management (IAM) roles to eliminate the maintenance and security burden associated with service account keys. You must protect against attempts to spoof another user's identity and gain unauthorized access to Google Cloud resources.\nWhat should you do? (Choose two.)",
    "about": "Zabezpieczenie przed wyciekiem sekretów w CI/CD.",
    "interpret": "Użyj Secret Manager i przypisz do nich uprawnienia IAM dla kont serwisowych CI/CD (zasada najmniejszych uprawnień)."
  },
  "206": {
    "q_pl": "You manage a BigQuery analytical data warehouse in your organization. You want to keep data for all your customers in a common table while you also restrict query access based on rows and columns permissions. Non-query operations should not be supported.",
    "about": "Monitorowanie podatności w kontenerach.",
    "interpret": "Container Analysis automatycznie skanuje obrazy w Artifact Registry pod kątem znanych podatności (CVE)."
  },
  "207": {
    "q_pl": "Your DevOps team uses Packer to build Compute Engine images by using this process:1. Create an ephemeral Compute Engine VM.2. Copy a binary from a Cloud Storage bucket to the VM's file system.3. Update the VM's package manager.4. Install external packages from the internet onto the VM.Your security team just enabled the organizational policy, constraints/compute.vmExternalIpAccess, to restrict the usage of public IP Addresses on VMs. In response, your DevOps team updated their scripts to remove public IP addresses on the Compute Engine VMs; however, the build pipeline is failing due to connectivity issues.What should you do? (Choose two.)",
    "about": "Wymuszenie polityk organizacji.",
    "interpret": "Polityki organizacji (Organization Policy) pozwalają na centralne blokowanie niebezpiecznych zachowań (np. publiczne IP) w skali całej hierarchii zasobów."
  },
  "208": {
    "q_pl": "Your organization recently activated the Security Command Center (SCC) standard tier. There are a few Cloud Storage buckets that were accidentally made accessible to the public. You need to investigate the impact of the incident and remediate it.",
    "about": "Bezpieczne zarządzanie tożsamością.",
    "interpret": "Zastosuj GCDS dla synchronizacji i IAM dla precyzyjnego zarządzania dostępem do zasobów."
  },
  "209": {
    "q_pl": "Your organization is transitioning to Google Cloud. You want to ensure that only trusted container images are deployed on Google Kubernetes Engine (GKE) clusters in a project. The containers must be deployed from a centrally managed Container Registry and signed by a trusted authority.",
    "about": "Ochrona punktów końcowych aplikacji.",
    "interpret": "Cloud Armor w połączeniu z Load Balancerem zapewnia ochronę przed atakami typu L7 (np. OWASP Top 10)."
  },
  "210": {
    "q_pl": "Your company uses Google Cloud and has publicly exposed network assets. You want to discover the assets and perform a security audit on these assets by using a software tool in the least amount of time.",
    "about": "Szyfrowanie danych w tranzycie.",
    "interpret": "Wymuś HTTPS/TLS dla aplikacji oraz użyj TLS dla komunikacji między mikrousługami (np. Istio/ASM)."
  },
  "211": {
    "q_pl": "Your organization wants to be compliant with the General Data Protection Regulation (GDPR) on Google Cloud. You must implement data residency and operational sovereignty in the EU. What should you do? (Choose two.)",
    "about": "Zarządzanie kluczami KMS.",
    "interpret": "Stosuj rotację kluczy KMS, aby ograniczyć czas ekspozycji w przypadku potencjalnego kompromitacji."
  },
  "212": {
    "q_pl": "Your company is moving to Google Cloud. You plan to sync your users first by using Google Cloud Directory Sync (GCDS). Some employees have already created Google Cloud accounts by using their company email addresses that were created outside of GCDS. You must create your users on Cloud Identity. What should you do?",
    "about": "Bezpieczna sieć (VPC).",
    "interpret": "Wyłącz publiczne adresy IP na instancjach, które ich nie wymagają, i stosuj reguły firewall oparte na Service Accounts."
  },
  "213": {
    "q_pl": "Your organization is using GitHub Actions as a continuous integration and delivery (CI/CD) platform. You must enable access to Google Cloud resources from the CI/CD pipelines in the most secure way. What should you do?",
    "about": "Wykrywanie zagrożeń.",
    "interpret": "Security Command Center (SCC) jest centralnym pulpitem zarządzania bezpieczeństwem w GCP."
  },
  "214": {
    "q_pl": "Your organization processes sensitive health information. You want to ensure that data is encrypted while in use by the virtual machines (VMs). You must create a policy that is enforced across the entire organization. What should you do?",
    "about": "Bezpieczeństwo w GKE.",
    "interpret": "Używaj Workload Identity do przypisania tożsamości kont serwisowych GCP bezpośrednio do podów Kubernetes."
  },
  "215": {
    "q_pl": "You are a Cloud Identity administrator for your organization. In your Google Cloud environment, groups are used to manage user permissions. Each application team has a dedicated group. Your team is responsible for creating these groups and the application teams can manage the team members on their own through the Google Cloud console. You must ensure that the application teams can only add users from within your organization to their groups. What should you do?",
    "about": "Audyt uprawnień (Policy Troubleshooter).",
    "interpret": "Policy Troubleshooter pozwala na szybką diagnostykę, dlaczego dany użytkownik ma lub nie ma dostępu do określonego zasobu."
  },
  "216": {
    "q_pl": "Your organization wants to be continuously evaluated against CIS Google Cloud Computing Foundations Benchmark v1.3.0 (CIS Google Cloud Foundation 1.3). Some of the controls are irrelevant to your organization and must be disregarded in evaluation. You need to create an automated system or process to ensure that only the relevant controls are evaluated. What should you do?",
    "about": "Zabezpieczenie przed atakiem DDoS.",
    "interpret": "Cloud Armor to kluczowa usługa do ochrony przed wolumetrycznymi atakami typu DDoS."
  },
  "217": {
    "q_pl": "You are routing all your internet facing traffic from Google Cloud through your on-premises internet connection. You want to accomplish this goal securely and with the highest bandwidth possible. What should you do?",
    "about": "Ochrona przed phishingiem.",
    "interpret": "Klucze bezpieczeństwa (FIDO2) to najskuteczniejsza metoda ochrony przed phishingiem."
  },
  "218": {
    "q_pl": "Your organization uses Google Workspace Enterprise Edition for authentication. You are concerned about employees leaving their laptops unattended for extended periods of time after authenticating into Google Cloud. You must prevent malicious people from using an employee's unattended laptop to modify their environment. What should you do?",
    "about": "Zarządzanie dostępem (Shared VPC).",
    "interpret": "W Shared VPC, subnety są udostępniane z projektu hosta do projektów usługowych, co ułatwia zarządzanie siecią."
  },
  "219": {
    "q_pl": "You are migrating an on-premises data warehouse to BigQuery, Cloud SQL, and Cloud Storage. You need to configure security services in the data warehouse. Your company compliance policies mandate that the data warehouse must: • Protect data at rest with full lifecycle management on cryptographic keys. • Implement a separate key management provider from data management. • Provide visibility into all encryption key requests. What services should be included in the data warehouse implementation? (Choose two.)",
    "about": "Bezpieczna komunikacja między on-prem i GCP.",
    "interpret": "Cloud Interconnect z szyfrowaniem IPsec zapewnia prywatną i bezpieczną ścieżkę."
  },
  "220": {
    "q_pl": "You manage one of your organization's Google Cloud projects (Project A). A VPC Service Control (SC) perimeter is blocking API access requests to this project, including Pub/Sub. A resource running under a service account in another project (Project B) needs to collect messages from a Pub/Sub topic in your project. Project B is not included in a VPC SC perimeter. You need to provide access from Project B to the Pub/Sub topic in Project A using the principle of least privilege. What should you do?",
    "about": "Retencja logów.",
    "interpret": "Eksportuj logi do Cloud Storage dla celów długoterminowej archiwizacji i zgodności (z politykami retencji)."
  },
  "221": {
    "q_pl": "You define central security controls in your Google Cloud environment. For one of the folders in your organization, you set an organizational policy to deny the assignment of external IP addresses to VMs. Two days later, you receive an alert about a new VM with an external IP address under that folder. What could have caused this alert?",
    "about": "Zabezpieczenie aplikacji (App Engine).",
    "interpret": "Cloud IAP zapewnia warstwę uwierzytelniania niezależnie od kodu aplikacji."
  },
  "222": {
    "q_pl": "Your company recently published a security policy to minimize the usage of service account keys. On-premises Windows-based applications are interacting with Google Cloud APIs. You need to implement Workload Identity Federation (WIF) with your identity provider on-premises. What should you do?",
    "about": "DLP API w potoku przetwarzania danych.",
    "interpret": "DLP API pozwala na inspekcję i transformację (deidentyfikację) danych w locie, podczas ich przesyłania."
  },
  "223": {
    "q_pl": "After completing a security vulnerability assessment, you learned that cloud administrators leave Google Cloud CLI sessions open for days. You need to reduce the risk of attackers who might exploit these open sessions by setting these sessions to the minimum duration. What should you do?",
    "about": "Polityki organizacji - wyłączenie.",
    "interpret": "Można nadpisać zasady polityki organizacji na niższym poziomie (np. w projekcie), jeśli dziedziczenie nie jest zablokowane."
  },
  "224": {
    "q_pl": "You have numerous private virtual machines on Google Cloud. You occasionally need to manage the servers through Secure Socket Shell (SSH) from a remote location. You want to configure remote access to the servers in a manner that optimizes security and cost efficiency. What should you do?",
    "about": "Zarządzanie certyfikatami SSL/TLS.",
    "interpret": "Google Cloud Load Balancing zapewnia zarządzanie certyfikatami SSL/TLS, automatyzując ich wystawianie i odnawianie."
  },
  "225": {
    "q_pl": "Your organization's record data exists in Cloud Storage. You must retain all record data for at least seven years. This policy must be permanent. What should you do?",
    "about": "Bezpieczeństwo w CI/CD (Cloud Build).",
    "interpret": "Używaj kont serwisowych z minimalnymi uprawnieniami do uruchamiania zadań Cloud Build."
  },
  "226": {
    "q_pl": "Your organization wants to protect all workloads that run on Compute Engine VM to ensure that the instances weren't compromised by boot-level or kernel-level malware. Also, you need to ensure that data in use on the VM cannot be read by the underlying host system by using a hardware-based solution. What should you do?",
    "about": "Weryfikacja zmian w IAM.",
    "interpret": "Regularnie przeglądaj logi Admin Activity i używaj IAM Recommender do optymalizacji ról."
  },
  "227": {
    "q_pl": "You are migrating your users to Google Cloud. There are cookie replay attacks with Google web and Google Cloud CLI SDK sessions on endpoint devices. You need to reduce the risk of these threats. What should you do? (Choose two.)",
    "about": "Izolacja w GKE.",
    "interpret": "Namespace w Kubernetes służy do logicznej izolacji zasobów wewnątrz klastra."
  },
  "228": {
    "q_pl": "You manage a mission-critical workload for your organization, which is in a highly regulated industry. The workload uses Compute Engine VMs to analyze and process the sensitive data after it is uploaded to Cloud Storage from the endpoint computers. Your compliance team has detected that this workload does not meet the data protection requirements for sensitive data. You need to meet these requirements: - Manage the data encryption key (DEK) outside the Google Cloud boundary. - Maintain full control of encryption keys through a third-party provider. - Encrypt the sensitive data before uploading it to Cloud Storage. - Decrypt the sensitive data during processing in the Compute Engine VMs. - Encrypt the sensitive data in memory while in use in the Compute Engine VMs. What should you do? (Choose two.)",
    "about": "Ochrona przed atakiem man-in-the-middle.",
    "interpret": "Zastosuj DNSSEC oraz wymuszaj HTTPS/TLS dla całej komunikacji."
  },
  "229": {
    "q_pl": "Your organization wants to be General Data Protection Regulation (GDPR) compliant. You want to ensure that your DevOps teams can only create Google Cloud resources in the Europe regions. What should you do?",
    "about": "Zarządzanie sekretami (Secret Manager).",
    "interpret": "Wersjonowanie sekretów w Secret Manager pozwala na łatwą rotację i powrót do poprzedniej wersji w razie problemów."
  },
  "230": {
    "q_pl": "For data residency requirements, you want your secrets in Google Clouds Secret Manager to only have payloads in europe-west1 and europe-west4. Your secrets must be highly available in both regions. What should you do?",
    "about": "Szyfrowanie w BigQuery.",
    "interpret": "BigQuery domyślnie szyfruje dane, ale CMEK umożliwia pełną kontrolę kluczy."
  },
  "231": {
    "q_pl": "You are migrating an application into the cloud. The application will need to read data from a Cloud Storage bucket. Due to local regulatory requirements, you need to hold the key material used for encryption fully under your control and you require a valid rationale for accessing the key material. What should you do?",
    "about": "Zabezpieczenie przed atakami na API.",
    "interpret": "Użyj API Gateway do wdrożenia limitów (quotas) i uwierzytelniania API."
  },
  "232": {
    "q_pl": "Your organization uses the top-tier folder to separate application environments (prod and dev). The developers need to see all application development audit logs, but they are not permitted to review production logs. Your security team can review all logs in production and development environments. You must grant Identity and Access Management (IAM) roles at the right resource level for the developers and security team while you ensure least privilege. What should you do?",
    "about": "Zarządzanie dostępem (Workload Identity).",
    "interpret": "Workload Identity to standard w GKE eliminujący potrzebę ręcznego zarządzania kluczami kont serwisowych."
  },
  "233": {
    "q_pl": "You manage a fleet of virtual machines (VMs) in your organization. You have encountered issues with lack of patching in many VMs. You need to automate regular patching in your VMs and view the patch management data across multiple projects. What should you do? (Choose two.)",
    "about": "Audyt zgodności.",
    "interpret": "Security Command Center (SCC) dostarcza dashboardy zgodności z różnymi standardami (np. PCI DSS)."
  },
  "234": {
    "q_pl": "Your organization uses BigQuery to process highly sensitive, structured datasets. Following the \"need to know\" principle, you need to create the Identity and Access Management (IAM) design to meet the needs of these users: - Business user: must access curated reports. - Data engineer: must administrate the data lifecycle in the platform. - Security operator: must review user activity on the data platform. What should you do?",
    "about": "Kontrola dostępu do rejestru obrazów.",
    "interpret": "Stosuj predefiniowane role `roles/artifactregistry.reader` i `writer` zamiast podstawowych."
  },
  "235": {
    "q_pl": "You are setting up a new Cloud Storage bucket in your environment that is encrypted with a customer managed encryption key (CMEK). The CMEK is stored in Cloud Key Management Service (KMS), in project \"prj-a\", and the Cloud Storage bucket will use project \"prj-b\". The key is backed by a Cloud Hardware Security Module (HSM) and resides in the region europe-west3. Your storage bucket will be located in the region europe-west1. When you create the bucket, you cannot access the key, and you need to troubleshoot why. What has caused the access issue?",
    "about": "Izolacja sieci (VPC).",
    "interpret": "Stosuj tagi sieciowe lub Service Accounts w regułach firewall do precyzyjnej kontroli dostępu."
  },
  "236": {
    "q_pl": "You are deploying regulated workloads on Google Cloud. The regulation has data residency and data access requirements. It also requires that support is provided from the same geographical location as where the data resides. What should you do?",
    "about": "Wykrywanie zagrożeń (Threat Detection).",
    "interpret": "Event Threat Detection wykrywa podejrzane aktywności, np. dostęp z nietypowych lokalizacji."
  },
  "237": {
    "q_pl": "Your organization wants full control of the keys used to encrypt data at rest in their Google Cloud environments. Keys must be generated and stored outside of Google and integrate with many Google Services including BigQuery. What should you do?",
    "about": "Zarządzanie kluczami KMS.",
    "interpret": "Używaj oddzielnych KeyRingów dla separacji logiki biznesowej i środowisk."
  },
  "238": {
    "q_pl": "Your company is concerned about unauthorized parties gaining access to the Google Cloud environment by using a fake login page. You must implement a solution to protect against person-in-the-middle attacks. Which security measure should you use?",
    "about": "Szyfrowanie w CI/CD.",
    "interpret": "Szyfruj sekrety w repozytorium kodu przy użyciu KMS przed ich wdrożeniem (jeśli konieczne) lub wstrzykuj je przez Secret Manager."
  },
  "239": {
    "q_pl": "You control network traffic for a folder in your Google Cloud environment. Your folder includes multiple projects and Virtual Private Cloud (VPC) networks. You want to enforce on the folder level that egress connections are limited only to IP range 10.58.5.0/24 and only from the VPC network \"dev-vpc\". You want to minimize implementation and maintenance effort. What should you do?",
    "about": "Praca tymczasowa (kontraktorzy).",
    "interpret": "Stosuj dedykowane konta z ograniczonym czasem dostępu (TTL)."
  },
  "240": {
    "q_pl": "Your customer has an on-premises Public Key Infrastructure (PKI) with a certificate authority (CA). You need to issue certificates for many HTTP load balancer frontends. The on-premises PKI should be minimally affected due to many manual processes, and the solution needs to scale. What should you do?",
    "about": "Bezpieczna konfiguracja VPC.",
    "interpret": "Włączaj logowanie dla reguł firewall, aby analizować zablokowany ruch."
  },
  "241": {
    "q_pl": "You are developing a new application that uses exclusively Compute Engine VMs. Once a day, this application will execute five different batch jobs. Each of the batch jobs requires a dedicated set of permissions on Google Cloud resources outside of your application. You need to design a secure access concept for the batch jobs that adheres to the least-privilege principle. What should you do?",
    "about": "Audyt dostępu (Access Transparency).",
    "interpret": "Logi Access Transparency pozwalają na wgląd w działania supportu Google."
  },
  "242": {
    "q_pl": "Your Google Cloud environment has one organization node, one folder named \"Apps\", and several projects within that folder. The organizational node enforces the constraints/iam.allowedPolicyMemberDomains organization policy, which allows members from the terramearth.com organization. The \"Apps\" folder enforces the constraints/iam.allowedPolicyMemberDomains organization policy, which allows members from the flowlogistic.com organization. It also has the inheritFromParent: false property. You attempt to grant access to a project in the \"Apps\" folder to the user testuser@terramearth.com. What is the result of your action and why?",
    "about": "Zabezpieczenie aplikacji (App Engine).",
    "interpret": "Ustawiaj limity (quotas) w App Engine, aby chronić przed nieoczekiwanymi kosztami i atakami."
  },
  "243": {
    "q_pl": "An administrative application is running on a virtual machine (VM) in a managed group at port 5601 inside a Virtual Private Cloud (VPC) instance without access to the internet currently. You want to expose the web interface at port 5601 to users and enforce authentication and authorization Google credentials. What should you do?",
    "about": "Ochrona przed CSRF.",
    "interpret": "Stosuj tokeny anty-CSRF i politykę CORS (Cross-Origin Resource Sharing)."
  },
  "244": {
    "q_pl": "Your company's users access data in a BigQuery table. You want to ensure they can only access the data during working hours. What should you do?",
    "about": "Weryfikacja integralności obrazów (Binary Auth).",
    "interpret": "Binary Authorization zapobiega uruchamianiu kontenerów bez podpisów cyfrowych."
  },
  "245": {
    "q_pl": "You have placed several Compute Engine instances in a private subnet. You want to allow these instances to access Google Cloud services, like Cloud Storage, without traversing the internet. What should you do?",
    "about": "Szyfrowanie (CSEK).",
    "interpret": "CSEK to wybór dla klientów, którzy muszą spełnić wymóg posiadania klucza poza GCP."
  },
  "246": {
    "q_pl": "Your organization relies heavily on Cloud Run for its containerized applications. You utilize Cloud Build for image creation, Artifact Registry for image storage, and Cloud Run for deployment. You must ensure that containers with vulnerabilities rated above a common vulnerability scoring system (CVSS) score of \"medium\" are not deployed to production. What should you do?",
    "about": "Izolacja w GKE.",
    "interpret": "Używaj RBAC (Role-Based Access Control) w Kubernetes do zarządzania dostępem wewnątrz klastra."
  },
  "247": {
    "q_pl": "You run a web application on top of Cloud Run that is exposed to the internet with an Application Load Balancer. You want to ensure that only privileged users from your organization can access the application. The proposed solution must support browser access with single sign-on. What should you do?",
    "about": "Kontrola uprawnień IAM.",
    "interpret": "Używaj IAM Conditions, aby nadać dostęp czasowy lub warunkowy."
  },
  "248": {
    "q_pl": "During a routine security review, your team discovered a suspicious login attempt to impersonate a highly privileged but regularly used service account by an unknown IP address. You need to effectively investigate in order to respond to this potential security incident. What should you do?",
    "about": "Bezpieczeństwo CI/CD.",
    "interpret": "Używaj VPC Service Controls do ochrony projektu CI/CD przed wyciekiem danych."
  },
  "249": {
    "q_pl": "Your organization has an operational image classification model running on a managed AI service on Google Cloud. You are in a configuration review with stakeholders and must describe the security responsibilities for the image classification model. What should you do?",
    "about": "Zarządzanie kluczami KMS.",
    "interpret": "Zastosuj zasadę rotacji kluczy w KMS dla zgodności z wymogami audytu."
  },
  "250": {
    "q_pl": "You are managing data in your organization's Cloud Storage buckets and are required to retain objects. To reduce storage costs, you must automatically downgrade the storage class of objects older than 365 days to Coldline storage. What should you do?",
    "about": "Szyfrowanie w BigQuery.",
    "interpret": "CMEK w BigQuery wymaga odpowiednich uprawnień IAM dla konta serwisowego BigQuery do klucza KMS."
  },
  "251": {
    "q_pl": "Your organization has a centralized identity provider that is used to manage human and machine access. You want to leverage this existing identity management system to enable on-premises applications to access Google Cloud without hard coded credentials. What should you do?",
    "about": "Bezpieczeństwo baz danych w chmurze.",
    "interpret": "Stosuj szyfrowanie w spoczynku, ogranicz dostęp do baz tylko do serwerów aplikacji poprzez firewall i używaj CMEK."
  },
  "252": {
    "q_pl": "Your organization is migrating a sensitive data processing workflow from on-premises infrastructure to Google Cloud. This workflow involves the collection, storage, and analysis of customer information that includes personally identifiable information (PII). You need to design security measures to mitigate the risk of data exfiltration in this new cloud environment. What should you do?",
    "about": "Zarządzanie certyfikatami w Load Balancerze.",
    "interpret": "Google Cloud Load Balancing obsługuje certyfikaty zarządzane przez Google, co automatyzuje ich wystawianie i odnawianie."
  },
  "253": {
    "q_pl": "Your organization is building a chatbot that is powered by generative AI to deliver automated conversations with internal employees. You must ensure that no data with personally identifiable information (PII) is communicated through the chatbot. What should you do?",
    "about": "Audyt zmian (Cloud Logging).",
    "interpret": "Wymuś retencję logów audytowych dla celów zgodności i audytów zewnętrznych."
  },
  "254": {
    "q_pl": "Your organization has applications that run in multiple clouds. The applications require access to a Google Cloud resource running in your project. You must use short-lived access credentials to maintain security across the clouds. What should you do?",
    "about": "Bezpieczeństwo storage (IAM).",
    "interpret": "Używaj ról IAM na poziomie bucketa zamiast starych ACL, aby zapewnić spójność zarządzania dostępem."
  },
  "255": {
    "q_pl": "Your organization's financial modeling application is already deployed on Google Cloud. The application processes large amounts of sensitive customer financial data. Application code is old and poorly understood by your current software engineers. Recent threat modeling exercises have highlighted the potential risk of sophisticated side-channel attacks against the application while the application is running. You need to further harden the Google Cloud solution to mitigate the risk of these side-channel attacks, ensuring maximum protection for the confidentiality of financial data during processing, while minimizing application problems. What should you do?",
    "about": "Ochrona przed wyciekiem danych (DLP).",
    "interpret": "Używaj DLP API do inspekcji danych w Cloud Storage przed ich udostępnieniem publicznym."
  },
  "256": {
    "q_pl": "Your organization has two VPC Service Controls service perimeters, Perimeter-A and Perimeter-B, in Google Cloud. You want to allow data to be copied from a Cloud Storage bucket in Perimeter-A to another Cloud Storage bucket in Perimeter-B. You must minimize exfiltration risk, only allow required connections, and follow the principle of least privilege. What should you do?",
    "about": "Bezpieczeństwo w środowiskach kontenerowych.",
    "interpret": "Wdróż automatyczne skanowanie obrazów w Artifact Registry."
  },
  "257": {
    "q_pl": "You are running code in Google Kubernetes Engine (GKE) containers in Google Cloud that require access to objects stored in a Cloud Storage bucket. You need to securely grant the Pods access to the bucket while minimizing management overhead. What should you do?",
    "about": "Zasady IAM w skali.",
    "interpret": "Używaj grup Google do zarządzania uprawnieniami, aby uniknąć ręcznego dodawania użytkowników do ról."
  },
  "258": {
    "q_pl": "Your organization is adopting Google Cloud and wants to ensure sensitive resources are only accessible from devices within the internal on-premises corporate network. You must configure Access Context Manager to enforce this requirement. These considerations apply: • The internal network uses IP ranges 10.100.0.0/16 and 192.168.0.0/16. • Some employees work remotely but connect securely through a company-managed virtual private network (VPN). The VPN dynamically allocates IP addresses from the pool 172.16.0.0/20. • Access should be restricted to a specific Google Cloud project that is contained within an existing service perimeter. What should you do?",
    "about": "Bezpieczeństwo aplikacji w Cloud Run.",
    "interpret": "Używaj IAP lub IAM dla usług Cloud Run, aby zapewnić uwierzytelniony dostęp."
  },
  "259": {
    "q_pl": "Your team maintains 1PB of sensitive data within BigQuery that contains personally identifiable information (PII). You need to provide access to this dataset to another team within your organization for analysis purposes. You must share the BigQuery dataset with the other team while protecting the PII. What should you do?",
    "about": "Szyfrowanie w tranzycie.",
    "interpret": "Zawsze wymagaj TLS dla wszystkich punktów końcowych aplikacji."
  },
  "260": {
    "q_pl": "Your organization uses Google Cloud to process large amounts of location data for analysis and visualization. The location data is potentially sensitive. You must design a solution that allows storing and processing the location data securely, minimizing data exposure risks, and adhering to both regulatory guidelines and your organization's internal data residency policies. What should you do?",
    "about": "Audyt dostępu przez Google.",
    "interpret": "Włącz Access Transparency i monitoruj logi w Cloud Logging."
  },
  "261": {
    "q_pl": "Your organization utilizes Cloud Run services within multiple projects underneath the non-production folder which requires primarily internal communication. Some services need external access to approved fully qualified domain names (FQDN) while other external traffic must be blocked. Internal applications must not be exposed. You must achieve this granular control with allowlists overriding broader restrictions only for designated VPCs. What should you do?",
    "about": "Zabezpieczenie przed atakami na API.",
    "interpret": "Wdróż API Gateway z polityką uwierzytelniania (np. JWT)."
  },
  "262": {
    "q_pl": "Your organization hosts a sensitive web application in Google Cloud. To protect the web application, you've set up a virtual private cloud (VPC) with dedicated subnets for the application's frontend and backend components. You must implement security controls to restrict incoming traffic, protect against web-based attacks, and monitor internal traffic. What should you do?",
    "about": "Zarządzanie tożsamością w GKE.",
    "interpret": "Workload Identity to standard zapewniający bezpieczne przypisanie tożsamości do podów."
  },
  "263": {
    "q_pl": "Your organization relies heavily on virtual machines (VMs) in Compute Engine. Due to team growth and resource demands, VM sprawl is becoming problematic. Maintaining consistent security hardening and timely package updates poses an increasing challenge. You need to centralize VM image management and automate the enforcement of security baselines throughout the virtual machine lifecycle. What should you do?",
    "about": "Zasady organizacji (Org Policy).",
    "interpret": "Polityki organizacji to fundament bezpieczeństwa w skali GCP."
  },
  "264": {
    "q_pl": "Customers complain about error messages when they access your organization's website. You suspect that the web application firewall rules configured in Cloud Armor are too strict. You want to collect request logs to investigate what triggered the rules and blocked the traffic. What should you do?",
    "about": "Izolacja w Shared VPC.",
    "interpret": "Używaj subnetów do odizolowania różnych środowisk w ramach jednej sieci VPC."
  },
  "265": {
    "q_pl": "Your organization must follow the Payment Card Industry Data Security Standard (PCI DSS). To prepare for an audit, you must detect deviations on an infrastructure-as-a-service level in your Google Cloud landing zone. What should you do?",
    "about": "Monitorowanie zagrożeń.",
    "interpret": "Włącz Security Command Center Premium dla zaawansowanej detekcji zagrożeń."
  },
  "266": {
    "q_pl": "Your organization is migrating a complex application to Google Cloud. The application has multiple internal components that interact with each other across several Google Cloud projects. Security is a major concern, and you must design an authorization scheme for administrators that aligns with the principles of least privilege and separation of duties. What should you do?",
    "about": "Zarządzanie kluczami (CMEK).",
    "interpret": "CMEK oferuje pełną kontrolę i zgodność z regulacjami."
  },
  "267": {
    "q_pl": "Your organization operates in a highly regulated industry and needs to implement strict controls around temporary access to sensitive Google Cloud resources. You have been using Access Approval to manage this access, but your compliance team has mandated the use of a custom signing key. Additionally, they require that the key be stored in a hardware security module (HSM) located outside Google Cloud. You need to configure Access Approval to use a custom signing key that meets the compliance requirements. What should you do?",
    "about": "Szyfrowanie CI/CD.",
    "interpret": "Szyfruj sekrety w repozytorium kodu, jeśli to konieczne."
  },
  "268": {
    "q_pl": "Your organization has sensitive data stored in BigQuery and Cloud Storage. You need to design a solution that provides granular and flexible control authorization to read data. What should you do?",
    "about": "Praca z kontraktorami.",
    "interpret": "Używaj dedykowanych kont z ograniczonym czasem dostępu (TTL) i IAM."
  },
  "269": {
    "q_pl": "Your organization is using Security Command Center Premium as a central tool to detect and alert on security threats. You also want to alert on suspicious outbound traffic that is targeting domains of known suspicious web services. What should you do?",
    "about": "Konfiguracja VPC.",
    "interpret": "Loguj ruch zablokowany przez reguły firewall w celu analizy prób ataków."
  },
  "270": {
    "q_pl": "You work for a healthcare provider that is expanding into the cloud to store and process sensitive patient data. You must ensure the chosen Google Cloud configuration meets these strict regulatory requirements: • Data must reside within specific geographic regions. • Certain administrative actions on patient data require explicit approval from designated compliance officers. • Access to patient data must be auditable. What should you do?",
    "about": "Audyt (Access Transparency).",
    "interpret": "Logi Access Transparency pozwalają weryfikować działania wsparcia Google."
  },
  "271": {
    "q_pl": "You work for a multinational organization that has systems deployed across multiple cloud providers, including Google Cloud. Your organization maintains an extensive on-premises security information and event management (SIEM) system. New security compliance regulations require that relevant Google Cloud logs be integrated seamlessly with the existing SIEM to provide a unified view of security events. You need to implement a solution that exports Google Cloud logs to your on-premises SIEM by using a push-based, near real-time approach. You must prioritize fault tolerance, security, and auto scaling capabilities. In particular, you must ensure that if a log delivery fails, logs are re-sent. What should you do?",
    "about": "Zabezpieczenie App Engine.",
    "interpret": "Ustawiaj limity (quotas) w App Engine dla ochrony przed nieautoryzowanym zużyciem."
  },
  "272": {
    "q_pl": "You work for a global company. Due to compliance requirements, certain Compute Engine instances that reside within specific projects must be located exclusively in cloud regions within the European Union (EU). You need to ensure that existing non-compliant workloads are remediated and prevent future Compute Engine instances from being launched in restricted regions. What should you do?",
    "about": "Ochrona przed CSRF.",
    "interpret": "Stosuj tokeny anty-CSRF w formularzach aplikacji."
  },
  "273": {
    "q_pl": "You are working with developers to secure custom training jobs running on Vertex AI. For compliance reasons, all supported data types must be encrypted by key materials that reside in the Europe region and are controlled by your organization. The encryption activity must not impact the training operation in Vertex AI. What should you do?",
    "about": "Weryfikacja obrazów.",
    "interpret": "Binary Authorization zapewnia, że tylko zaufane obrazy mogą być uruchomione."
  },
  "274": {
    "q_pl": "Your EU-based organization stores both Personally Identifiable Information (PII) and non-PII data in Cloud Storage buckets across multiple Google Cloud regions. EU data privacy laws require that the PII data must not be stored outside of the EU. To help meet this compliance requirement, you want to detect if Cloud Storage buckets outside of the EU contain healthcare data. What should you do?",
    "about": "Szyfrowanie (CSEK).",
    "interpret": "CSEK to opcja dla klientów z zewnętrznym zarządzaniem kluczami."
  },
  "275": {
    "q_pl": "Your organization is migrating business critical applications to Google Cloud across multiple projects. You only have the required IAM permission at the Google Cloud organization level. You want to grant project access to support engineers from two partner organizations using their existing identity provider (IdP) credentials. What should you do?",
    "about": "Izolacja w GKE.",
    "interpret": "Używaj RBAC wewnątrz klastra dla kontroli dostępu do zasobów K8s."
  },
  "276": {
    "q_pl": "You are creating a secure network architecture. You must fully isolate development and production environments, and prevent any network traffic between the two environments. The network team requires that there is only one central entry point to the cloud network from the on-premises environment. What should you do?",
    "about": "Kontrola uprawnień.",
    "interpret": "IAM Conditions umożliwiają nadawanie uprawnień ograniczonych czasowo."
  },
  "277": {
    "q_pl": "You work for a large organization that is using Cloud Identity as the identity provider (IdP) on Google Cloud. Your InfoSec team has mandated the enforcement of a strong password with a length between 12 and 16 characters for all users. After configuring this requirement, users are still able to access the Google Cloud console with passwords that are less than 12 characters. You need to fix this problem within the Admin console. What should you do?",
    "about": "Bezpieczeństwo CI/CD.",
    "interpret": "Używaj VPC SC do ochrony projektu CI/CD przed exfiltracją danych."
  },
  "278": {
    "q_pl": "Your organization is preparing to build business services in Google Cloud for the first time. You must determine where to apply appropriate controls or policies. You must also identify what aspects of your cloud deployment are managed by Google. What should you do?",
    "about": "Rotacja kluczy KMS.",
    "interpret": "Zgodność z audytem wymaga regularnej rotacji kluczy w KMS."
  },
  "279": {
    "q_pl": "Your organization operates a hybrid cloud environment and has recently deployed a private Artifact Registry repository in Google Cloud. On-premises developers cannot resolve the Artifact Registry hostname and therefore cannot push or pull artifacts. You've verified the following: • Connectivity to Google Cloud is established by Cloud VPN or Cloud Interconnect. • No custom DNS configurations exist on-premises. • There is no route to the internet from the on-premises network. You need to identify the cause and enable the developers to push and pull artifacts. What is likely causing the issue and what should you do to fix the issue?",
    "about": "Szyfrowanie BigQuery.",
    "interpret": "CMEK w BQ wymaga nadania uprawnień dla konta serwisowego BQ do klucza KMS."
  },
  "280": {
    "q_pl": "Your organization has an application hosted in Cloud Run. You must control access to the application by using Cloud Identity-Aware Proxy (IAP) with these requirements: • Only users from the AppDev group may have access. • Access must be restricted to internal network IP addresses. What should you do?",
    "about": "Bezpieczne API.",
    "interpret": "Używaj API Gateway do zarządzania limitami i autoryzacją."
  },
  "281": {
    "q_pl": "You just implemented a Secure Web Proxy instance on Google Cloud for your organization. You were able to reach the internet when you tested this configuration on your test instance. However, developers cannot access the allowed URLs on the Secure Web Proxy instance from their Linux instance on Google Cloud. You want to solve this problem with developers. What should you do?",
    "about": "Monitorowanie GKE.",
    "interpret": "Włącz Container Threat Detection w Security Command Center."
  },
  "282": {
    "q_pl": "You have just created a new log bucket to replace the _Default log bucket. You want to route all log entries that are currently routed to the _Default log bucket to this new log bucket, in the most efficient manner. What should you do?",
    "about": "Zarządzanie rolami IAM.",
    "interpret": "Regularnie używaj IAM Recommender do usuwania nadmiarowych dostępów."
  },
  "283": {
    "q_pl": "Your organization's use of the Google Cloud has grown substantially and there are many different groups using different cloud resources independently. You must identify common misconfigurations and compliance violations across the organization and track findings for remedial action in a dashboard. What should you do?",
    "about": "Ochrona sieci VPC.",
    "interpret": "Packet Mirroring jest kluczowy dla głębokiej inspekcji ruchu w VPC."
  },
  "284": {
    "q_pl": "You are responsible for a set of Cloud Functions running on your organization's Google Cloud environment. During the last annual security review, secrets were identified in environment variables of some of these Cloud Functions. You must ensure that secrets are identified in a timely manner. What should you do?",
    "about": "Zarządzanie sekretami.",
    "interpret": "Secret Manager wspiera automatyczną rotację sekretów."
  },
  "285": {
    "q_pl": "Your organization is developing a new SaaS application on Google Cloud. Stringent compliance standards require visibility into privileged account activity, and potentially unauthorized changes and misconfigurations to the application's infrastructure. You need to monitor administrative actions, log changes to IAM roles and permissions, and be able to trace potentially unauthorized configuration changes. What should you do?",
    "about": "Szyfrowanie w tranzycie.",
    "interpret": "Wymuszaj TLS 1.2+ dla wszystkich aplikacji."
  },
  "286": {
    "q_pl": "Your application development team is releasing a new critical feature. To complete their final testing, they requested 10 thousand real transaction records. The new feature includes format checking on the primary account number (PAN) of a credit card. You must support the request and minimize the risk of unintended personally identifiable information (PII) exposure. What should you do?",
    "about": "Bezpieczeństwo kont serwisowych.",
    "interpret": "Nie używaj ról podstawowych (Owner/Editor) dla kont serwisowych."
  },
  "287": {
    "q_pl": "You work for a banking organization. You are migrating sensitive customer data to Google Cloud that is currently encrypted at rest while on-premises. There are strict regulatory requirements when moving sensitive data to the cloud. Independent of the cloud service provider, you must be able to audit key usage and be able to deny certain types of decrypt requests. You must choose an encryption strategy that will ensure robust security and compliance with the regulations. What should you do?",
    "about": "Zabezpieczenie przed atakiem DDoS.",
    "interpret": "Cloud Armor integruje się z globalnym Load Balancerem."
  },
  "288": {
    "q_pl": "Your organization is developing an application that will have both corporate and public end-users. You want to centrally manage those customers' identities and authorizations. Corporate end users must access the application by using their corporate user and domain name. What should you do?",
    "about": "Logowanie.",
    "interpret": "Centralizuj logi dla celów bezpieczeństwa i audytu."
  },
  "289": {
    "q_pl": "You work for an organization that handles sensitive customer data. You must secure a series of Google Cloud Storage buckets housing this data and meet these requirements:\n- Multiple teams need varying access levels (some read-only, some read-write).\n- Data must be protected in storage and at rest.\n- It's critical to track file changes and audit access for compliance purposes.\n- For compliance purposes, the organization must have control over the encryption keys.",
    "about": "Bezpieczeństwo storage.",
    "interpret": "Użyj IAM zamiast ACL dla spójnego zarządzania."
  },
  "290": {
    "q_pl": "You are implementing communications restrictions for specific services in your Google Cloud organization. Your data analytics team works in a dedicated folder. You need to ensure that access to BigQuery is controlled for that folder and its projects. The data analytics team must be able to control the restrictions only at the folder level. What should you do?",
    "about": "Zabezpieczenie przed wyciekiem (DLP).",
    "interpret": "DLP API pozwala na inspekcję danych w locie."
  },
  "291": {
    "q_pl": "Your organization is using a third-party identity and authentication provider to centrally manage users. You want to use this identity provider to grant access to the Google Cloud console without syncing identities to Google Cloud. Users should receive permissions based on attributes. What should you do?",
    "about": "Monitorowanie konfiguracji.",
    "interpret": "Security Health Analytics wykrywa błędne konfiguracje."
  },
  "292": {
    "q_pl": "You are implementing a new web application on Google Cloud that will be accessed from your on-premises network. To provide protection from threats like malware, you must implement transport layer security (TLS) interception for incoming traffic to your application. What should you do?",
    "about": "Kontrola dostępu.",
    "interpret": "Grupy Google ułatwiają zarządzanie uprawnieniami."
  },
  "293": {
    "q_pl": "Your organization has hired a small, temporary partner team for 18 months. The temporary team will work alongside your DevOps team to develop your organization's application that is hosted on Google Cloud. You must give the temporary partner team access to your application's resources on Google Cloud and ensure that partner employees lose access if they are removed from their employer's organization. What should you do?",
    "about": "Bezpieczeństwo Cloud Run.",
    "interpret": "Użyj IAP dla zabezpieczenia serwisów Cloud Run."
  },
  "294": {
    "q_pl": "Your organization has an internet-facing application behind a load balancer. Your regulators require end-to-end encryption of user login credentials. You must implement this requirement. What should you do?",
    "about": "Szyfrowanie tranzytu.",
    "interpret": "Wymuś TLS dla usług backendowych."
  },
  "295": {
    "q_pl": "Your organization heavily utilizes serverless applications while prioritizing security best practices. You are responsible for enforcing image provenance and compliance with security standards before deployment. You leverage Cloud Build as your continuous integration and continuous deployment (CI/CD) tool for building container images. You must configure Binary Authorization to ensure that only images built by your Cloud Build pipeline are deployed and that the images pass security standard compliance checks. What should you do?",
    "about": "Zarządzanie kluczami.",
    "interpret": "Zasady rotacji kluczy powinny być zgodne z polityką organizacji."
  },
  "296": {
    "q_pl": "Your organization operates in a highly regulated industry and uses multiple Google Cloud services. You need to identify potential risks to regulatory compliance. Which situation introduces the greatest risk?",
    "about": "Bezpieczna sieć.",
    "interpret": "Stosuj Service Accounts w regułach firewall."
  },
  "297": {
    "q_pl": "Your multinational organization is undergoing rapid expansion within Google Cloud. New teams and projects are added frequently. You are concerned about the potential for inconsistent security policy application and permission sprawl across the organization. You must enforce consistent standards while maintaining the autonomy of regional teams. You need to design a strategy to effectively manage IAM and organization policies at scale, ensuring security and administrative efficiency. What should you do?",
    "about": "Detekcja zagrożeń.",
    "interpret": "SCC Premium zawiera detekcję zagrożeń w czasie rzeczywistym."
  },
  "298": {
    "q_pl": "A security audit uncovered several inconsistencies in your project's Identity and Access Management (IAM) configuration. Some service accounts have overly permissive roles, and a few external collaborators have more access than necessary. You need to gain detailed visibility into changes to IAM policies, user activity, service account behavior, and access to sensitive projects. What should you do?",
    "about": "Zarządzanie tożsamością.",
    "interpret": "Federacja tożsamości pozwala uniknąć przechowywania kluczy."
  },
  "299": {
    "q_pl": "You manage multiple internal-only applications that are hosted within different Google Cloud projects. You are deploying a new application that requires external internet access. To maintain security, you want to clearly separate this new application from internal systems. Your solution must have effective security isolation for the new externally-facing application. What should you do?",
    "about": "Ochrona przed atakiem.",
    "interpret": "Cloud Armor blokuje ataki na poziomie L7."
  },
  "300": {
    "q_pl": "You work for an ecommerce company that stores sensitive customer data across multiple Google Cloud regions. The development team has built a new 3-tier application to process orders and must integrate the application into the production environment. You must design the network architecture to ensure strong security boundaries and isolation for the new application, facilitate secure remote maintenance by authorized third-party vendors, and follow the principle of least privilege. What should you do?",
    "about": "Zgodność (Compliance).",
    "interpret": "Używaj SCC do raportowania zgodności."
  },
  "301": {
    "q_pl": "Your organization is implementing separation of duties in a Google Cloud project. A group of developers must deploy new code, but cannot have permission to change network firewall rules. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 301).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "302": {
    "q_pl": "You manage a Google Cloud organization with many projects located in various regions around the world. The projects are protected by the same Access Context Manager access policy. You created a new folder that will host two projects that process protected health information (PHI) for US-based customers. The two projects will be separately managed and require stricter protections. You are setting up the VPC Service Controls configuration for the new folder. You must ensure that only US-based personnel can access these projects and restrict Google Cloud API access to only BigQuery and Cloud Storage within these projects. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 302).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "303": {
    "q_pl": "There is a threat actor that is targeting organizations like yours. Attacks are always initiated from a known IP address range. You want to deny-list those IPs for your website, which is exposed to the internet through an Application Load Balancer. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 303).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "304": {
    "q_pl": "You are managing a Google Cloud environment that is organized into folders that represent different teams. These teams need the flexibility to modify organization policies relevant to their work. You want to grant the teams the necessary permissions while upholding Google-recommended security practices and minimizing administrative complexity. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 304).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "305": {
    "q_pl": "Your organization is using Vertex AI Workbench Instances. You must ensure that newly deployed Instances are automatically kept up-to-date and that users cannot accidentally alter settings in the operating system. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 305).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "306": {
    "q_pl": "You must ensure that the keys used for at-rest encryption of your data are compliant with your organization's security controls. One security control mandates that keys get rotated every 90 days. You must implement an effective detection strategy to validate if keys are rotated as required. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 306).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "307": {
    "q_pl": "Your organization is developing a sophisticated machine learning (ML) model to predict customer behavior for targeted marketing campaigns. The BigQuery dataset used for training includes sensitive personal information. You must design the security controls around the AI/ML pipeline. Data privacy must be maintained throughout the model's lifecycle and you must ensure that personal data is not used in the training process. Additionally, you must restrict access to the dataset to an authorized subset of people only. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 307).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "308": {
    "q_pl": "Your organization wants to publish yearly reports of your website usage analytics. You must ensure that no data with personally identifiable information (PII) is published by using the Cloud Data Loss Prevention (Cloud DLP) API. Data integrity must be preserved. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 308).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "309": {
    "q_pl": "Your development team is launching a new application. The new application has a microservices architecture on Compute Engine instances and serverless components, including Cloud Functions. This application will process financial transactions that require temporary, highly sensitive data in memory. You need to secure data in use during computations with a focus on minimizing the risk of unauthorized access to memory for this financial application. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 309).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "310": {
    "q_pl": "You work for a financial organization in a highly regulated industry that is subject to active regulatory compliance. To meet compliance requirements, you need to continuously maintain a specific set of configurations, data residency, organizational policies, and personnel data access controls. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 310).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "311": {
    "q_pl": "Your organization is worried about recent news headlines regarding application vulnerabilities in production applications that have led to security breaches. You want to automatically scan your deployment pipeline for vulnerabilities and ensure only scanned and verified containers can run in the environment. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 311).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "312": {
    "q_pl": "A team at your organization collects logs in an on-premises security information and event management system (SIEM). You must provide a subset of Google Cloud logs for the SIEM, and minimize the risk of data exposure in your cloud environment. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 312).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "313": {
    "q_pl": "Your Google Cloud organization is subdivided into three folders: production, development, and networking. Networking resources for the organization are centrally managed in the networking folder. You discovered that projects in the production folder are attaching to Shared VPCs that are outside of the networking folder which could become a data exfiltration risk. You must resolve the production folder issue without impacting the development folder. You need to use the most efficient and least disruptive approach. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 313).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "314": {
    "q_pl": "Your organization operates in a highly regulated environment and has a stringent set of compliance requirements for protecting customer data. You must encrypt data while in use to meet regulations. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 314).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "315": {
    "q_pl": "Your organization is building a real-time recommendation engine using ML models that process live user activity data stored in BigQuery and Cloud Storage. Each new model developed is saved to Artifact Registry. This new system deploys models to Google Kubernetes Engine, and uses Pub/Sub for message queues. Recent industry news have been reporting attacks exploiting ML model supply chains. You need to enhance the security in this serverless architecture, specifically against risks to the development and deployment pipeline. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 315).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "316": {
    "q_pl": "You want to set up a secure, internal network within Google Cloud for database servers. The servers must not have any direct communication with the public internet. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 316).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "317": {
    "q_pl": "You work for a large organization that recently implemented a 100GB Cloud Interconnect connection between your Google Cloud and your on-premises edge router. While routinely checking the connectivity, you noticed that the connection is operational but there is an error message that indicates MACsec is operationally down. You need to resolve this error. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 317).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "318": {
    "q_pl": "Your organization must store highly sensitive data within Google Cloud. You need to design a solution that provides the strongest level of security and control. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 318).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "319": {
    "q_pl": "The InfoSec team has mandated that all new Cloud Run jobs and services in production must have Binary Authorization enabled. You need to enforce this requirement. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 319).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "320": {
    "q_pl": "You are developing an application that runs on a Compute Engine VM. The application needs to access data stored in Cloud Storage buckets in other Google Cloud projects. The required access to the buckets is variable. You need to provide access to these resources while following Google-recommended practices. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 320).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "321": {
    "q_pl": "Your organization strives to be a market leader in software innovation. You provided a large number of Google Cloud environments so developers can test the integration of Gemini in Vertex AI into their existing applications or create new projects. Your organization has 200 developers and a five-person security team. You must prevent and detect proper security policies across the Google Cloud environments. What should you do? (Choose two.)",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 321).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "322": {
    "q_pl": "You are responsible for managing identities in your company's Google Cloud organization. Employees are frequently using your organization's corporate domain name to create unmanaged Google accounts. You want to implement a practical and efficient solution to prevent employees from completing this action in the future. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 322).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "323": {
    "q_pl": "Your organization leverages folders to represent different teams within your Google Cloud environment. To support Infrastructure as Code (IaC) practices, each team receives a dedicated service account upon onboarding. You want to ensure that teams have comprehensive permissions to manage resources within their assigned folders while adhering to the principle of least privilege. You must design the permissions for these team-based service accounts in the most effective way possible. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 323).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "324": {
    "q_pl": "Your organization has a workload that is regulated by European laws. You must restrict the creation of resources outside of the EU for this specific workload. You must find an effective way to implement this security control without disrupting the other global applications. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 324).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "325": {
    "q_pl": "Your organization manages a critical web application that serves international customers on Google Cloud. An increase in malicious traffic targeting this application has strained resources and caused periods of downtime. You need to design security measures to increase the application's resilience against web attacks, enhance perimeter protection, and provide access control. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 325).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "326": {
    "q_pl": "Your organization deploys a large number of containerized applications on Google Kubernetes Engine (GKE). Node updates are currently applied manually. Audit findings show that a critical patch has not been installed due to a missed notification. You need to design a more reliable, cloud-first, and scalable process for node updates. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 326).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "327": {
    "q_pl": "Your organization is migrating its primary web application from on-premises to Google Kubernetes Engine (GKE). You must advise the development team on how to grant their applications access to Google Cloud services from within GKE according to security recommended practices. What should you advise the development team to do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 327).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "328": {
    "q_pl": "Your organization's application is being integrated with a partner application that requires read access to customer data to process customer orders. The customer data is stored in one of your Cloud Storage buckets. You have evaluated different options and determined that this activity requires the use of service account keys. You must advise the partner on how to minimize the risk of a compromised service account key causing a loss of data. What should you advise the partner to do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 328).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "329": {
    "q_pl": "Your organization is implementing a new Python application that will be deployed on Cloud Run. The application needs to connect to a MySQL database that runs on Cloud SQL in a different project in your Google Cloud organization. You must secure the connection from the application to the Cloud SQL instance while minimizing management overhead. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 329).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "330": {
    "q_pl": "You are working with protected health information (PHI) for an electronic health record system. The privacy officer is concerned that sensitive data is stored in the analytics system. You are tasked with anonymizing the sensitive data in a way that is not reversible. Also, the anonymized data should not preserve the character set and length. Which Google Cloud solution should you use?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 330).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "331": {
    "q_pl": "Your organization uses a microservices architecture based on Google Kubernetes Engine (GKE). Recent security reviews recommend tighter controls around deployed container images to reduce potential vulnerabilities and maintain compliance. You need to implement an automated system by using managed services to ensure that only approved container images are deployed to the GKE clusters. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 331).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "332": {
    "q_pl": "Your organization has recently migrated sensitive customer data to Cloud Storage buckets. For compliance reasons, you must ensure that all vendor data access and administrative access by Google personnel is logged. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 332).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "333": {
    "q_pl": "Your organization is implementing a Zero Trust security model and using Chrome Enterprise Premium. The company is interested in governing access to sensitive data stored in Cloud Storage. You need to configure access controls that ensure only authorized users on managed devices can access this data, regardless of their network location. Access should be restricted based on the device's security posture. This requires up-to-date operating system patches and antivirus software. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 333).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "334": {
    "q_pl": "Your organization is using AI to improve products through innovation. The developers want to use Gemini in Vertex AI on a project. You need to provide a secure Google Cloud environment to prevent and detect information leakages. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 334).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "335": {
    "q_pl": "You are responsible for configuring Identity and Access Management in your organization's Google Cloud environment. You need to restrict your organization's users from accessing Cloud Storage buckets in other Google Cloud organizations. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 335).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "336": {
    "q_pl": "Your organization is storing regulated data in Cloud Storage. Data in Cloud Storage buckets is encrypted by Google-managed encryption keys. To meet compliance requirements, you need to update the existing data to use customer-managed encryption keys instead. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 336).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "337": {
    "q_pl": "There is a vendor who needs access to your company's Google Cloud environment. The vendor uses a third-party identity provider (IdP). You need to integrate this IdP with your company's Google Cloud environment to enable single sign-on (SSO) for the vendor's users in the most secure way. You don't want to manage any of the vendor users' lifecycle management. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 337).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "338": {
    "q_pl": "Your organization is planning to deploy a large number of Google Kubernetes Engine (GKE) clusters to run business applications in different folders and projects. You must ensure that all GKE nodes always run the latest release to minimize vulnerability risk and administrative effort. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 338).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "339": {
    "q_pl": "Your company is migrating a three-tier web application to Google Cloud. The application consists of a web frontend, an application backend, and a database. Due to regulatory requirements and existing on-premises infrastructure dependencies, you need to implement a hybrid cloud architecture. The web frontend will be hosted on Google Cloud, while the application backend and the database will remain on-premises initially. You need to ensure secure and efficient communication between the cloud-based frontend and the on-premises backend and database, minimizing latency and maximizing availability. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 339).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "340": {
    "q_pl": "Your organization is building an application powered by generative AI that uses sensitive internal data to train the AI model. The application is built using Vertex AI, which is generally available in your region. You must ensure Google does not use your sensitive data when tuning public models because it could result in your data being shared with other Google Cloud customers. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 340).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "341": {
    "q_pl": "Your organization is deploying a new web application on Compute Engine and needs robust perimeter security. You need to protect the application from common web attacks, including SQL injection and cross-site scripting (XSS), while also controlling network traffic based on the source IP address and user identity. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 341).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "342": {
    "q_pl": "Your company is in a regulated industry that requires low overhead encryption using private connectivity from on-premises data centers to Google Cloud. You need to establish connectivity and ensure high availability across multiple regions. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 342).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "343": {
    "q_pl": "You manage the security logs within your cloud environment. You have configured a continuous export of security logs to Cloud Storage buckets for long-term retention. You need to provide auditors the ability to analyze the logs that were exported to Cloud Storage. Your solution must be cost-effective and quickly implemented. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 343).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "344": {
    "q_pl": "Your organization currently uses a third-party identity provider (IdP) that only requires a username and password for authentication. You need to enforce 2-step verification (2SV) for the Super admins in Cloud Identity. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 344).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "345": {
    "q_pl": "Your organization has a hybrid cloud environment with a data center connected to Google Cloud through a dedicated Cloud Interconnect connection. You need to configure private access from your on-premises hosts to Google APIs, specifically Cloud Storage and BigQuery, without exposing traffic to the public internet. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 345).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "346": {
    "q_pl": "A batch job running on Compute Engine needs temporary write access to a Cloud Storage bucket. You want the batch job to use the minimum permissions necessary to complete the task. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 346).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "347": {
    "q_pl": "Your company has recently enabled Security Command Center at the organization level. You need to implement runtime threat detection for applications running in containers within projects residing in the production folder. Specifically, you need to be notified if additional libraries are loaded or malicious scripts are executed within these running containers. You need to configure Security Command Center to meet this requirement while ensuring findings are visible within Security Command Center. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 347).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "348": {
    "q_pl": "Your organization enforces a custom organization policy that disables the use of Compute Engine VM instances with external IP addresses. However, a regulated business unit requires an exception to temporarily use external IPs for a third-party audit process. The regulated business workload must comply with least privilege principles and minimize policy drift. You need to ensure secure policy management and proper handling. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 348).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "349": {
    "q_pl": "Your company wants to deploy 2-step verification (2SV). The organizational unit (OU) structure of your company is divided into four departmental units: Human Resources, Finance, Engineering, and Marketing. You need to prevent many access issues from occurring at the same time. Your solution should minimize complexity in management and configuration. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 349).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "350": {
    "q_pl": "Your company is deploying a large number of containerized applications to GKE. The existing CI/CD pipeline uses Cloud Build to construct container images, transfers the images to Artifact Registry, and then deploys the images to GKE. You need to ensure that only images that have passed vulnerability scanning and meet specific corporate policies are allowed to be deployed. The process needs to be automated and integrated into the existing CI/CD pipeline. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 350).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "351": {
    "q_pl": "You are managing a set of Google Cloud projects that are contained in a folder named Data Warehouse. A new data analysis team has been approved to perform data analysis for all BigQuery data in the projects within the Data Warehouse folder. They should only be able to read the data and not have permissions to modify or delete the data. You want to reduce the operational overhead of provisioning access while adhering to the principle of least privilege. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 351).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "352": {
    "q_pl": "Your company hosts a critical web application on Google Cloud. The application is experiencing an increasing number of sophisticated layer 7 attacks, including cross-site scripting (XSS) and SQL injection attempts. You need to protect the application from these attacks while minimizing the impact on legitimate traffic and ensuring high availability. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 352).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "353": {
    "q_pl": "Your financial services company needs to process customer personally identifiable information (PII) for analytics while adhering to strict privacy regulations. You must transform this data to protect individual privacy to ensure that the data retains its original format and consistency for analytical integrity. Your solution must avoid full irreversible deletion. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 353).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "354": {
    "q_pl": "Your global defense company is migrating top-secret classified data to BigQuery and Cloud Storage. National security regulations demand that master encryption key material never leaves the accredited on-premises cryptographic hardware. You must retain the unilateral ability to revoke data access, independent of any cloud provider. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 354).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "355": {
    "q_pl": "You work at a company in a regulated industry and are responsible for ongoing security of the Cloud environment. You need to prevent and detect misconfigurations in a particular folder based on specific compliance policies. You need to adhere to industry-specific compliance policies and policies that are internal to your company. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 355).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "356": {
    "q_pl": "Your organization is using Google Workspace, Google Cloud, and a third-party SIEM. You need to export events such as user logins, successful logins, and failed logins to the SIEM. Logs need to be ingested in real time or near real-time. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 356).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "357": {
    "q_pl": "Your company is developing a new application for your organization. The application consists of two Cloud Run services, service A and service B. Service A provides a web-based user frontend. Service B provides backend services that are called by service A. You need to set up Identity and Access Management for the application. Your solution should follow the principle of least privilege. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 357).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "358": {
    "q_pl": "Your organization has established a highly sensitive project within a VPC Service Controls perimeter. You need to ensure that only users meeting specific contextual requirements such as having a company-managed device, a specific location, and a valid user identity can access resources within this perimeter. You want to evaluate the impact of this change without blocking legitimate access. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 358).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "359": {
    "q_pl": "Your company's storage team manages all product images within a specific Google Cloud project. To maintain control, you must isolate access to Cloud Storage for this project, allowing the storage team to manage restrictions at the project level. They must be restricted to using corporate computers. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 359).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "360": {
    "q_pl": "Your organization uses Google Workspace as the primary identity provider for Google Cloud. Users in your organization initially created their passwords. You need to improve password security due to a recent security event. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 360).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  },
  "361": {
    "q_pl": "Your company has deployed an artificial intelligence model in a central project. This model contains sensitive intellectual property and must be kept strictly isolated from the internet. You must expose the model endpoint only to a defined list of projects in your organization. What should you do?",
    "about": "Bezpieczeństwo i konfiguracja zasobów (pytanie nr 361).",
    "interpret": "Przeanalizuj wymagania dotyczące dostępu, szyfrowania i izolacji zgodnie z zasadą najmniejszych uprawnień."
  }
};