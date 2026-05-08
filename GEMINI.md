# MNmedia Projektplan

## Formål
Dette projekt er en portfolio-hjemmeside for MNmedia, en medieproduktionsvirksomhed.

## Arbejdsgang & Git
- **INGEN AUTOMATISK PUSH:** Du må aldrig køre `git push` uden eksplicit tilladelse fra brugeren. Dette gælder uanset opgavens art.
- **Commits:** Du må gerne forberede og lave commits, når opgaver er færdige, men vent altid på besked før push.
- **Store filer:** Vær opmærksom på filstørrelser (f.eks. videoer), da de kan blokere for pushes til GitHub.

## Statisk Opbygning
Hjemmesiden består af følgende sider og komponenter:

### Sider (src/pages/)
- **Home (`Home.tsx`)**: Forside med hero-sektion, klienter, fordele og CTA.
- **Cases (`Cases.tsx`)**: Portfolio-side der viser tidligere projekter.
- **Proces (`Proces.tsx`)**: Beskrivelse af workflowet fra start til slut.
- **Kontakt (`Kontakt.tsx`)**: Kontaktinformation og en formular til henvendelser.

### Komponenter (src/components/)
- **Navbar (`Navbar.tsx`)**: Hovednavigation med links til alle sider.
- **Footer (`Footer.tsx`)**: Sidefod med info, links og kontaktdata.

### Styling (src/styles/)
- **Global (`global.css`)**: Fælles styles for containere, knapper og typografi.
- **Modul-specifikke CSS filer**: Hver side/komponent har sin egen CSS-fil.

## Teknologier
- React
- TypeScript
- Vite
- React Router Dom
