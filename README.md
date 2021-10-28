#  WashIt 










Case: WashIt

WashIt er et  WashIt som ønsker seg et fleksibelt og effektivt system slik at sluttbrukerne kan reservere vasketid og få varsel når en vaskemaskin blir ledig.
Idag har WashIt 12 vaskemaskiner med 3 typer vaskeprogram, som er best definert av temperatur og lengde på vaskeprogrammet:
Kokvask: 60 grader, 90 minutter
Tøyvask: 40 grader, 60 minutter
Håndvask: 30 grader, 20 minutter
Idag bruker WashIt et manuelt system hvor man skriver seg opp på en liste og reserverer en vaskemaskin for en time av gangen. Dette systemet kan gi mye dødtid hvor vaskemaskinene ikke brukes, for eksempel hvis sluttbrukerne ikke bruker sin reserverte vasketid, eller hvis de setter på et vaskeprogram som tar kortere tid enn den tiden de har reservert. 
WashIt ønsker et system hvor
	•	sluttbrukerne skal kunne reservere vaskemaskiner ved å angi type vask
	•	sluttbrukerne skal kunne enkelt avlyse reservasjon
	•	sluttbrukere skal kunne sette seg på venteliste og motta varsel hvis en vaskemaskin blir ledig for deres type vask.




Del 1:
Du skal utvikle en applikasjon som inneholder de nødvendige komponentene som beskrevet ovenfor, og som er nødvendig for at denne skal fungere.

Del 2:
WashIt vil utvide applikasjonen til å inkludere flere tjenester. Eksempelvis: 
	•	Identifisering av sluttbruker, slik at kun den som har reservert vaskemaskinen kan bruke den.
	•	Innsjekk for sluttbruker. Reservasjonen kanselleres etter 15 minutter hvis sluttbrukeren ikke har sjekket inn eller startet maskinen.
	•	Reservasjon av tørketromler

Beskriv hvordan du ser for deg å utvide applikasjonen med funksjonaliteten beskrevet ovenfor.


NB! Du står fritt til å velge selv hvordan applikasjonen skal utvikles, plattform, programmeringsspråk, etc. Ettersom det ikke er spesifisert et design vil funksjonalitet prioriteres høyere enn visuell utforming i denne oppgaven.



## Cloning project

If you want this project locally you can either clone or fork this repo.

```
$ git clone https://github.com/faridaalin/semester-project-2021.git
$ cd semester-project-2021
```

## Dev Setup Client

In the root of your project:

```
$ cd client
```

```
$ yarn
```

1. You will need a mapbox token. Create a free account at [Mapbox](https://www.mapbox.com/), if you don't add the the app will still work, but you will not be able to see map location at https://semester-project-2021.vercel.app/contact.
2. Rename env.example to .env.local
3. Then add you own varibles
4. Use this live API for the project: https://server-faridaalin.vercel.app/api

```
NEXT_PUBLIC_BASE_URL=https://server-faridaalin.vercel.app/api
NEXT_PUBLIC_MAPBOX_TOKEN= your mapbox token...
```

## Serving the project

```
$ yarn run dev
```

Then navigate to Navigate to [localhost:3000](http://localhost:3000)

# Project Features

## Visitor Pages and functionalites

- Homepage
- Search bar typeahead (auto dropdown with hotel names that match what has been typed)
- See a results page with all hotels
- View a specific hotel page which displays all details about the hotel
- An enquiry page either modal or separate page
- A contact page (different to enquiry page) which goes to the admin for Holidaze

## Admin Pages and functionalites

- Login as admin user
- View admin dashboard
- Create, Read, Update, Delete a establishment
- View messages sent from visitors
- View enquires/bookings from vistors

# Technologies

## Front-End

Next.js, CSS Modules

- Deployed with Vercel

## Back-End

MongoDB, Express

- Deployed with Heroku