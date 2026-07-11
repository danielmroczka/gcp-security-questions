## 1. Zarządzanie tożsamością i dostępem (Identity and Access Management - IAM)

### **Cloud Identity / Google Workspace**
* **Opis:** Usługa zarządzania tożsamością jako usługa (IDaaS). Stanowi centralne repozytorium użytkowników i grup w GCP.
* **Istotne na egzaminie:** Zrozumienie różnicy między darmową edycją Cloud Identity a wersją Premium (np. zaawansowane zarządzanie urządzeniami mobilnymi - MDM).
* **Wskazówka:** Super Administratorzy w Cloud Identity powinni być chronieni kluczami sprzętowymi (Security Keys) i nie powinni używać tych kont do codziennych zadań w GCP.

### **Google Cloud Directory Sync (GCDS)**
* **Opis:** Narzędzie do synchronizacji użytkowników i grup z lokalnego katalogu LDAP/Active Directory do Cloud Identity.
* **Istotne na egzaminie:** Synchronizacja jest jednokierunkowa (z AD do Google). Hasła nie są synchronizowane przez GCDS. Do uwierzytelniania w oparciu o hasła z AD należy skonfigurować Single Sign-On (SSO) z użyciem SAML 2.0 (np. AD FS).
* **Wskazówka:** Jeśli pytanie dotyczy integracji tożsamości z lokalnym AD bez migracji haseł, wybierz GCDS + SSO (SAML).

### **Workforce Identity Federation & Workload Identity Federation**
* **Opis:** * **Workforce:** Pozwala zewnętrznym tożsamościom (np. z Azure AD/Entra ID) na logowanie się do GCP.
  * **Workload:** Pozwala aplikacjom działającym poza GCP (np. AWS, on-premise) na dostęp do zasobów GCP bez używania kluczy Service Account.
* **Wskazówka:** Jeśli pytanie sugeruje "eksportowanie kluczy Service Account" do AWS w celu dostępu do Cloud Storage - poprawną i najbezpieczniejszą odpowiedzią ZAWSZE jest użycie Workload Identity Federation, aby uniknąć zarządzania kluczami długoterminowymi.

### **Service Accounts (Konta Usługowe)**
* **Opis:** Specjalny typ konta używany przez aplikacje i wirtualne maszyny (VM) do interakcji z API Google Cloud.
* **Istotne na egzaminie:** Należy unikać domyślnych kont usługowych (Default Service Accounts), ponieważ mają bardzo szerokie uprawnienia (często Editor). Zaleca się tworzenie dedykowanych kont usługowych z uprawnieniami zgodnymi z zasadą najmniejszych przywilejów (Least Privilege).
* **Wskazówka:** Podróbka bezpieczeństwa w pytaniach to użycie kluczy wyeksportowanych w formacie JSON. Unikaj tego, preferuj przypisywanie konta usługowego bezpośrednio do instancji Compute Engine lub GKE (Workload Identity dla GKE).

---

## 2. Bezpieczeństwo Sieci (Network Security)

### **VPC Service Controls (VPC SC)**
* **Opis:** Tworzy wirtualny "obwód bezpieczeństwa" (security perimeter) wokół usług zarządzanych przez Google (jak Cloud Storage, BigQuery), aby zapobiec eksfiltracji danych (Data Exfiltration).
* **Istotne na egzaminie:** Chroni dane przed nieautoryzowanym dostępem z zewnątrz oraz zapobiega skopiowaniu danych z jednego projektu (wewnątrz perymetru) do innego projektu (na zewnątrz).
* **Wskazówka:** Słowo klucz to **"data exfiltration"**. Jeśli w pytaniu mowa o zapobieganiu kradzieży danych z BigQuery przez insidera, odpowiedzią jest VPC Service Controls. Pamiętaj o Ingress/Egress rules dla wyjątków w komunikacji.

### **Cloud Armor**
* **Opis:** Usługa WAF (Web Application Firewall) oraz ochrona przed atakami DDoS na poziomie sieci i aplikacji.
* **Istotne na egzaminie:** Cloud Armor jest ściśle zintegrowany z Global HTTP(S) Load Balancer. Pozwala na blokowanie ruchu na podstawie adresów IP, lokalizacji geograficznej (Geo-IP) oraz chroni przed atakami z listy OWASP Top 10 (np. SQLi, XSS).
* **Wskazówka:** Ochrona aplikacji webowej przed atakami typu SQL Injection = Cloud Armor.

### **Identity-Aware Proxy (IAP)**
* **Opis:** Umożliwia kontrolę dostępu typu Zero Trust (BeyondCorp) do aplikacji webowych oraz maszyn wirtualnych (SSH/RDP) bez używania VPN.
* **Istotne na egzaminie:** Weryfikuje tożsamość użytkownika i kontekst zapytania (np. z jakiego urządzenia się łączy) zanim przepuści ruch.
* **Wskazówka:** Pytania o bezpieczny dostęp do SSH/RDP dla administratorów bez otwierania portów na świat i bez zestawiania VPN -> użyj **IAP TCP forwarding**.

### **Cloud NAT & Cloud Router**
* **Opis:** Zapewnia instancjom bez zewnętrznych adresów IP dostęp do Internetu w celu pobierania aktualizacji.
* **Wskazówka:** Aby zabezpieczyć instancje Compute Engine, usuń z nich publiczne adresy IP i skonfiguruj Cloud NAT do niezbędnej komunikacji wychodzącej (outbound).

### **Packet Mirroring & Cloud IDS**
* **Opis:** * **Packet Mirroring:** Kopiuje ruch sieciowy z VPC (np. ruch między podsieciami) do narzędzi analitycznych firm trzecich.
  * **Cloud IDS:** Natywny system wykrywania intruzów od Google (oparty na technologii Palo Alto).
* **Wskazówka:** Jeśli organizacja chce wysyłać kopię całego ruchu w VPC do swojego istniejącego systemu IDS/IPS w innej sieci lub on-premise -> wybierz **Packet Mirroring**.

---

## 3. Ochrona Danych (Data Security & Cryptography)

### **Cloud KMS (Key Management Service) i Opcje Szyfrowania**
* **Domyślne szyfrowanie:** Wszystkie dane w GCP są szyfrowane w spoczynku (at rest) domyślnie.
* **CMEK (Customer-Managed Encryption Keys):** Klucze są generowane i zarządzane przez klienta w Cloud KMS. Używane w usługach jak GCS, BigQuery, PD.
* **CSEK (Customer-Supplied Encryption Keys):** Klient sam tworzy i przechowuje surowe materiały kryptograficzne on-premise i wysyła je przy każdym żądaniu API. Brak wsparcia KMS.
* **EKM (External Key Manager):** Klucze znajdują się fizycznie w systemie zewnętrznym (np. Thales, Fortanix), poza infrastrukturą Google.
* **Wskazówka:** Zgodność regulacyjna (Compliance) często wymaga CMEK (aby móc audytować użycie klucza w Cloud Audit Logs i w razie potrzeby go obrócić/zniszczyć). EKM wybieramy, gdy regulacje stanowczo zabraniają Google dostępu do materiału klucza.

### **Sensitive Data Protection / Cloud DLP (Data Loss Prevention)**
* **Opis:** Narzędzie do wykrywania, klasyfikowania, maskowania (redaction) i tokenizacji danych wrażliwych (PII, numery kart, PESEL) w tekście, obrazach oraz bazach danych.
* **Istotne na egzaminie:** DLP może skanować całe wiadra GCS i zbiory BigQuery. Używa "InfoTypes" do identyfikacji danych.
* **Wskazówka:** Pytanie o ukrycie numerów kart kredytowych z logów przed ich zapisaniem -> użyj Cloud DLP do "redaction/masking".

### **Secret Manager**
* **Opis:** Bezpieczny magazyn haseł, kluczy API, certyfikatów.
* **Wskazówka:** Nigdy nie koduj haseł na stałe (hardcode) w kodzie źródłowym, nie trzymaj ich w GCS z jawnym dostępem. Zawsze używaj Secret Managera z kontrolą dostępu przez IAM i wersjonowaniem sekretów.

---

## 4. Bezpieczeństwo Operacyjne, Logowanie i Monitorowanie

### **Security Command Center (SCC)**
* **Opis:** Centralny panel zarządzania ryzykiem bezpieczeństwa w GCP.
* **Standard (Darmowy):** Security Health Analytics (znajduje błędne konfiguracje, np. otwarte wiadra GCS, publiczne IP).
* **Premium (Płatny):** Event Threat Detection (analizuje logi w poszukiwaniu np. ataków brute force), Container Threat Detection, Web Security Scanner.
* **Wskazówka:** SCC jest aktywowane na poziomie Organizacji, aby zapewnić pełną widoczność dla wszystkich projektów i folderów.

### **Cloud Audit Logs**
* **Rodzaje logów:**
  1. **Admin Activity:** Loguje wszelkie zmiany zasobów (tworzenie, usuwanie). Domyślnie włączone, darmowe, przechowywane 400 dni.
  2. **Data Access:** Loguje odczytywanie danych. Domyślnie **wyłączone** (ze względu na wolumen logów i koszty), z wyjątkiem BigQuery.
  3. **System Event:** Akcje systemu Google (np. live migration instancji).
  4. **Policy Denied:** Zablokowane żądania przez np. VPC Service Controls.
* **Wskazówka:** Gdy w pytaniu padnie "chcemy wiedzieć KTO ODCZYTAŁ plik z wrażliwymi danymi" -> musisz włączyć **Data Access Logs** dla Cloud Storage.

### **Log Sinks (Zlewy logów)**
* **Opis:** Logi w Cloud Logging można eksportować do zewnętrznych systemów za pomocą Aggregated Sinks (na poziomie Organizacji/Folderu).
* **Cele eksportu (Destinations):**
  * **BigQuery:** Do długoterminowej analityki i dashboardów.
  * **Cloud Storage:** Do taniej, wieloletniej archiwizacji (compliance).
  * **Pub/Sub:** Do przesyłania w czasie rzeczywistym do systemów SIEM firm trzecich (np. Splunk, QRadar).

---

## 5. Zgodność z prawem i Governance (Compliance)

### **Organization Policies**
* **Opis:** Reguły stosowane na poziomie struktury (Organizacja, Folder, Projekt), określające ograniczenia na tworzenie zasobów. Są dziedziczone w dół.
* **Przykłady (Częste na egzaminie):** * `constraints/compute.disableSerialPortAccess` (Blokada portów szeregowych).
  * `constraints/compute.vmExternalIpAccess` (Ograniczenie kto może mieć publiczne IP).
  * `constraints/gcp.resourceLocations` (Wymuszenie lokalizacji, np. tylko "europe-west3").
* **Wskazówka:** W przeciwieństwie do IAM (które mówi, KTO może coś zrobić), Org Policies mówią, CO można zrobić (np. nikt, nawet admin, nie utworzy maszyny w USA, jeśli Org Policy na to nie pozwala).

### **Assured Workloads**
* **Opis:** Pozwala tworzyć środowiska w GCP (foldery), które domyślnie spełniają rygorystyczne wymagania zgodności (np. FedRAMP, HIPAA, IL4).
* **Istotne na egzaminie:** Automatycznie konfiguruje granice danych, odpowiednie szyfrowanie i wsparcie od weryfikowanego personelu z danego regionu.

### **Access Transparency (AXT) & Access Approval**
* **Opis:**
  * **Access Transparency:** Loguje (w trybie zbliżonym do czasu rzeczywistego) przypadki, w których pracownicy wsparcia Google uzyskują dostęp do Twoich danych (np. w ramach rozwiązywania zgłoszenia ticketowego).
  * **Access Approval:** Wymaga od inżynierów Google **uzyskania Twojej wyraźnej zgody (Approve)** zanim uzyskają dostęp do danych w celu rozwiązywania problemów.
* **Wskazówka:** Często pojawia się w kontekście pytania o ścisłe obostrzenia audytowe i nieufność wobec dostawcy chmury (zabezpieczenie przed działaniami wsparcia Google).

---

## 6. Bezpieczeństwo Aplikacji i Środowiska Obliczeniowego (Compute & Containers)

### **Binary Authorization**
* **Opis:** Zapewnia ochronę łańcucha dostaw oprogramowania (software supply chain). Służy w GKE do upewnienia się, że tylko zweryfikowane obrazy kontenerów mogą zostać wdrożone.
* **Działanie:** Obrazy muszą zostać podpisane cyfrowo (Attestations) przed uruchomieniem.
* **Wskazówka:** Jeśli pytanie wspomina o "zapobieganiu uruchamiania nieautoryzowanych, niezaufanych obrazów kontenerów w GKE" -> odpowiedź to **Binary Authorization**.

### **Shielded VMs (Chronione maszyny wirtualne)**
* **Opis:** Oferują sprzętowe zabezpieczenia przed rootkitami i bootkitami dzięki m.in. Secure Boot, vTPM i mechanizmom pomiaru integralności.
* **Wskazówka:** Gdy w pytaniu pojawia się wymóg ochrony na poziomie bootowania jądra systemu operacyjnego (OS kernel level integrity), użyj Shielded VMs.

### **Confidential Computing**
* **Opis:** Szyfruje dane **w trakcie przetwarzania (in use)** w pamięci RAM za pomocą sprzętu firmy AMD (procesory EPYC z technologią SEV).
* **Wskazówka:** Tradycyjne szyfrowanie chroni dane at rest (w spoczynku) i in transit (w locie). Gdy mowa o ochronie "danych w pamięci / podczas przetwarzania" -> **Confidential VMs / Confidential GKE nodes**.

### **GKE Security (Google Kubernetes Engine)**
* **Workload Identity:** Powiązuje Kubernetes Service Accounts (KSA) z Google Cloud Service Accounts (GSA), pozwalając Podom na bezpieczny dostęp do usług (np. GCS) bez umieszczania JSON z kluczem w sekretach K8s.
* **Network Policies:** Definiują reguły zapory sieciowej na poziomie "pod-to-pod" (kto z kim może się komunikować wewnątrz klastra). Domyślnie wszystkie Pody w namespace mogą się ze sobą łączyć.
* **Wskazówka:** Ograniczanie ruchu *pomiędzy* kontenerami w GKE = Kubernetes Network Policies. Przypisywanie ról IAM kontenerom = Workload Identity. Ochrona wdrożeń (odrzucanie nieznanych obrazów) = Binary Authorization.