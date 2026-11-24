# Tanediq

Edija Tanona vietne [tanediq.com](https://tanediq.com), publicēta ar GitHub Pages.

| Ceļš | Saturs |
|---|---|
| `/` | Tanediq sākumlapa: darbi, par mani, kontakti |
| `/gramata/` | *AI risinājumu praktiskā pavārgrāmata* (ISBN 978-9934-38-841-5) |
| `/assets/` | Kopīgais stils (`tanediq.css`), skripts (`tanediq.js`) un attēli |

Jaunu apakšlapu pievieno kā mapi ar `index.html`, kas ielādē `../assets/tanediq.css` un `../assets/tanediq.js`.
Tad pievieno tās adresi `sitemap.xml` un atjauno `lastmod` datumu, lai meklētāji to atrastu.

## Meklētāji

- `sitemap.xml` un `robots.txt` ir saknē; galvenā adrese ir `https://tanediq.com/` (www pāradresē uz to).
- Katrai lapai ir `<title>`, `description`, `canonical` un Open Graph dati.
- Strukturētie dati (JSON-LD): sākumlapā WebSite, Organization (Tanediq) un Person (Edijs Tanons); grāmatas lapā Book (ISBN 9789934388415) un BreadcrumbList.

## Logotips

`assets/logo/` satur Tanediq logotipu visos formātos:

| Fails | Lietojums |
|---|---|
| `tanediq-logo.svg` / `.png` | Pilnais logotips (zīme virs nosaukuma) gaišam fonam |
| `tanediq-logo-dark.svg` / `.png` | Tas pats tumšam fonam |
| `tanediq-lockup*.svg` / `.png` | Horizontālā versija (zīme blakus nosaukumam), galvenēm un e-pasta parakstam |
| `tanediq-mark*.svg` / `.png` | Tikai TQ zīme (avatāram, ikonām) |
| `tanediq-wordmark*.svg` | Tikai nosaukums TANEDIQ |
| `tanediq-og.png` | 1200×630 attēls kopīgošanai sociālajos tīklos |
| `icon-512.png` | Kvadrātveida ikona |

SVG ir vektoru formāts (asums jebkurā izmērā). PNG faili ir ar caurspīdīgu fonu.
Krāsas: tumši zila `#001c34`, zaļa `#65d505`, gaišā versija `#f2f5f9`.
