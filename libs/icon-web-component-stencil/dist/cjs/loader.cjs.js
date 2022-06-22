'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5495a336.js');

/*
 Stencil Client Patch Esm v2.16.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["utrecht-icon-container.cjs",[[1,"utrecht-icon-container"]]],["utrecht-icon-actueel.cjs",[[1,"utrecht-icon-actueel"]]],["utrecht-icon-afval.cjs",[[1,"utrecht-icon-afval"]]],["utrecht-icon-afval-container.cjs",[[1,"utrecht-icon-afval-container"]]],["utrecht-icon-afval-ophaal.cjs",[[1,"utrecht-icon-afval-ophaal"]]],["utrecht-icon-afval-scheiden.cjs",[[1,"utrecht-icon-afval-scheiden"]]],["utrecht-icon-afvalkalender.cjs",[[1,"utrecht-icon-afvalkalender"]]],["utrecht-icon-agenda.cjs",[[1,"utrecht-icon-agenda"]]],["utrecht-icon-airborne.cjs",[[1,"utrecht-icon-airborne"]]],["utrecht-icon-attentie.cjs",[[1,"utrecht-icon-attentie"]]],["utrecht-icon-auto.cjs",[[1,"utrecht-icon-auto"]]],["utrecht-icon-bedrijventerrein.cjs",[[1,"utrecht-icon-bedrijventerrein"]]],["utrecht-icon-begroting.cjs",[[1,"utrecht-icon-begroting"]]],["utrecht-icon-belastingen.cjs",[[1,"utrecht-icon-belastingen"]]],["utrecht-icon-bevolking.cjs",[[1,"utrecht-icon-bevolking"]]],["utrecht-icon-bevrijding.cjs",[[1,"utrecht-icon-bevrijding"]]],["utrecht-icon-bezwaar-en-beroep.cjs",[[1,"utrecht-icon-bezwaar-en-beroep"]]],["utrecht-icon-bijstandsuitkering.cjs",[[1,"utrecht-icon-bijstandsuitkering"]]],["utrecht-icon-bladeren-opruimen.cjs",[[1,"utrecht-icon-bladeren-opruimen"]]],["utrecht-icon-bouwen-en-verbouwen.cjs",[[1,"utrecht-icon-bouwen-en-verbouwen"]]],["utrecht-icon-brandgevaar.cjs",[[1,"utrecht-icon-brandgevaar"]]],["utrecht-icon-buitengebied.cjs",[[1,"utrecht-icon-buitengebied"]]],["utrecht-icon-computerregeling.cjs",[[1,"utrecht-icon-computerregeling"]]],["utrecht-icon-contact-gemeente.cjs",[[1,"utrecht-icon-contact-gemeente"]]],["utrecht-icon-documenten.cjs",[[1,"utrecht-icon-documenten"]]],["utrecht-icon-duurzaamheid.cjs",[[1,"utrecht-icon-duurzaamheid"]]],["utrecht-icon-economie-werk-inkomen.cjs",[[1,"utrecht-icon-economie-werk-inkomen"]]],["utrecht-icon-eikenprocessie.cjs",[[1,"utrecht-icon-eikenprocessie"]]],["utrecht-icon-energietransitie.cjs",[[1,"utrecht-icon-energietransitie"]]],["utrecht-icon-evenementen.cjs",[[1,"utrecht-icon-evenementen"]]],["utrecht-icon-f-1.cjs",[[1,"utrecht-icon-f-1"]]],["utrecht-icon-fiets.cjs",[[1,"utrecht-icon-fiets"]]],["utrecht-icon-gebruiker-centraal.cjs",[[1,"utrecht-icon-gebruiker-centraal"]]],["utrecht-icon-gebruiker-ingelogd.cjs",[[1,"utrecht-icon-gebruiker-ingelogd"]]],["utrecht-icon-gebruikersvraag.cjs",[[1,"utrecht-icon-gebruikersvraag"]]],["utrecht-icon-gemeenteraad.cjs",[[1,"utrecht-icon-gemeenteraad"]]],["utrecht-icon-gemiva-locatie.cjs",[[1,"utrecht-icon-gemiva-locatie"]]],["utrecht-icon-gezicht.cjs",[[1,"utrecht-icon-gezicht"]]],["utrecht-icon-gladheid.cjs",[[1,"utrecht-icon-gladheid"]]],["utrecht-icon-grafiek.cjs",[[1,"utrecht-icon-grafiek"]]],["utrecht-icon-grofvuil.cjs",[[1,"utrecht-icon-grofvuil"]]],["utrecht-icon-hondenbelasting.cjs",[[1,"utrecht-icon-hondenbelasting"]]],["utrecht-icon-horecavergunningen.cjs",[[1,"utrecht-icon-horecavergunningen"]]],["utrecht-icon-huis.cjs",[[1,"utrecht-icon-huis"]]],["utrecht-icon-huis-en-omgeving.cjs",[[1,"utrecht-icon-huis-en-omgeving"]]],["utrecht-icon-hulpmiddelen-vinden.cjs",[[1,"utrecht-icon-hulpmiddelen-vinden"]]],["utrecht-icon-idkaart.cjs",[[1,"utrecht-icon-idkaart"]]],["utrecht-icon-in-en-om-uw-huis.cjs",[[1,"utrecht-icon-in-en-om-uw-huis"]]],["utrecht-icon-informatie.cjs",[[1,"utrecht-icon-informatie"]]],["utrecht-icon-informatie-en-betalen.cjs",[[1,"utrecht-icon-informatie-en-betalen"]]],["utrecht-icon-inkomen.cjs",[[1,"utrecht-icon-inkomen"]]],["utrecht-icon-jeugd.cjs",[[1,"utrecht-icon-jeugd"]]],["utrecht-icon-kerstbomen.cjs",[[1,"utrecht-icon-kerstbomen"]]],["utrecht-icon-kind-en-familie.cjs",[[1,"utrecht-icon-kind-en-familie"]]],["utrecht-icon-koningsdag.cjs",[[1,"utrecht-icon-koningsdag"]]],["utrecht-icon-kopen-en-huren.cjs",[[1,"utrecht-icon-kopen-en-huren"]]],["utrecht-icon-kopen-en-verkopen.cjs",[[1,"utrecht-icon-kopen-en-verkopen"]]],["utrecht-icon-leerlingenvervoer.cjs",[[1,"utrecht-icon-leerlingenvervoer"]]],["utrecht-icon-let-op.cjs",[[1,"utrecht-icon-let-op"]]],["utrecht-icon-liefdadigheid.cjs",[[1,"utrecht-icon-liefdadigheid"]]],["utrecht-icon-locatie.cjs",[[1,"utrecht-icon-locatie"]]],["utrecht-icon-manege.cjs",[[1,"utrecht-icon-manege"]]],["utrecht-icon-meeuwenoverlast.cjs",[[1,"utrecht-icon-meeuwenoverlast"]]],["utrecht-icon-melding.cjs",[[1,"utrecht-icon-melding"]]],["utrecht-icon-melding-openbare-ruimte.cjs",[[1,"utrecht-icon-melding-openbare-ruimte"]]],["utrecht-icon-mobiliteit.cjs",[[1,"utrecht-icon-mobiliteit"]]],["utrecht-icon-monitor-agrofood.cjs",[[1,"utrecht-icon-monitor-agrofood"]]],["utrecht-icon-monitor-duurzaamheid.cjs",[[1,"utrecht-icon-monitor-duurzaamheid"]]],["utrecht-icon-monitor-sociaal.cjs",[[1,"utrecht-icon-monitor-sociaal"]]],["utrecht-icon-monitor-virus.cjs",[[1,"utrecht-icon-monitor-virus"]]],["utrecht-icon-monitor-woningmarkt.cjs",[[1,"utrecht-icon-monitor-woningmarkt"]]],["utrecht-icon-natuur-landschap.cjs",[[1,"utrecht-icon-natuur-landschap"]]],["utrecht-icon-nieuwsbrief.cjs",[[1,"utrecht-icon-nieuwsbrief"]]],["utrecht-icon-omgeving.cjs",[[1,"utrecht-icon-omgeving"]]],["utrecht-icon-omgevingsvergunning.cjs",[[1,"utrecht-icon-omgevingsvergunning"]]],["utrecht-icon-onderhoud.cjs",[[1,"utrecht-icon-onderhoud"]]],["utrecht-icon-ondernemen.cjs",[[1,"utrecht-icon-ondernemen"]]],["utrecht-icon-onderscheidingen.cjs",[[1,"utrecht-icon-onderscheidingen"]]],["utrecht-icon-onderwijs.cjs",[[1,"utrecht-icon-onderwijs"]]],["utrecht-icon-openingstijden.cjs",[[1,"utrecht-icon-openingstijden"]]],["utrecht-icon-over-de-gemeente.cjs",[[1,"utrecht-icon-over-de-gemeente"]]],["utrecht-icon-over-de-stad.cjs",[[1,"utrecht-icon-over-de-stad"]]],["utrecht-icon-parkeervoorziening-gehandicapten.cjs",[[1,"utrecht-icon-parkeervoorziening-gehandicapten"]]],["utrecht-icon-parkeren.cjs",[[1,"utrecht-icon-parkeren"]]],["utrecht-icon-paspoort.cjs",[[1,"utrecht-icon-paspoort"]]],["utrecht-icon-paspoort-idkaart-gecombineerd.cjs",[[1,"utrecht-icon-paspoort-idkaart-gecombineerd"]]],["utrecht-icon-prijskaartje.cjs",[[1,"utrecht-icon-prijskaartje"]]],["utrecht-icon-raad-en-college.cjs",[[1,"utrecht-icon-raad-en-college"]]],["utrecht-icon-reclame.cjs",[[1,"utrecht-icon-reclame"]]],["utrecht-icon-recreatie.cjs",[[1,"utrecht-icon-recreatie"]]],["utrecht-icon-regeling-laag-inkomen.cjs",[[1,"utrecht-icon-regeling-laag-inkomen"]]],["utrecht-icon-rijbewijs.cjs",[[1,"utrecht-icon-rijbewijs"]]],["utrecht-icon-schoolkostenregeling.cjs",[[1,"utrecht-icon-schoolkostenregeling"]]],["utrecht-icon-sinterklaas.cjs",[[1,"utrecht-icon-sinterklaas"]]],["utrecht-icon-sociaal-zorg-welzijn.cjs",[[1,"utrecht-icon-sociaal-zorg-welzijn"]]],["utrecht-icon-sport.cjs",[[1,"utrecht-icon-sport"]]],["utrecht-icon-sport-culturele-activiteit.cjs",[[1,"utrecht-icon-sport-culturele-activiteit"]]],["utrecht-icon-sportkleding-muziekinstrumenten.cjs",[[1,"utrecht-icon-sportkleding-muziekinstrumenten"]]],["utrecht-icon-station-sneltrein.cjs",[[1,"utrecht-icon-station-sneltrein"]]],["utrecht-icon-station-stoptrein.cjs",[[1,"utrecht-icon-station-stoptrein"]]],["utrecht-icon-stookverbod.cjs",[[1,"utrecht-icon-stookverbod"]]],["utrecht-icon-strand.cjs",[[1,"utrecht-icon-strand"]]],["utrecht-icon-subsidie.cjs",[[1,"utrecht-icon-subsidie"]]],["utrecht-icon-temperatuur-melding.cjs",[[1,"utrecht-icon-temperatuur-melding"]]],["utrecht-icon-trouwen-en-geregistreerd-partnerschap.cjs",[[1,"utrecht-icon-trouwen-en-geregistreerd-partnerschap"]]],["utrecht-icon-tuinbouw.cjs",[[1,"utrecht-icon-tuinbouw"]]],["utrecht-icon-uittreksel.cjs",[[1,"utrecht-icon-uittreksel"]]],["utrecht-icon-uw-gemeente.cjs",[[1,"utrecht-icon-uw-gemeente"]]],["utrecht-icon-uw-wijk.cjs",[[1,"utrecht-icon-uw-wijk"]]],["utrecht-icon-vacatures.cjs",[[1,"utrecht-icon-vacatures"]]],["utrecht-icon-veerboot.cjs",[[1,"utrecht-icon-veerboot"]]],["utrecht-icon-veilige-wijk.cjs",[[1,"utrecht-icon-veilige-wijk"]]],["utrecht-icon-vergaderen.cjs",[[1,"utrecht-icon-vergaderen"]]],["utrecht-icon-vergunning-algemeen.cjs",[[1,"utrecht-icon-vergunning-algemeen"]]],["utrecht-icon-verhuizen.cjs",[[1,"utrecht-icon-verhuizen"]]],["utrecht-icon-verkiezingen.cjs",[[1,"utrecht-icon-verkiezingen"]]],["utrecht-icon-vervoersvoorziening.cjs",[[1,"utrecht-icon-vervoersvoorziening"]]],["utrecht-icon-virus.cjs",[[1,"utrecht-icon-virus"]]],["utrecht-icon-vluchtelingen-opvang.cjs",[[1,"utrecht-icon-vluchtelingen-opvang"]]],["utrecht-icon-voeding.cjs",[[1,"utrecht-icon-voeding"]]],["utrecht-icon-vrijwilligerswerk.cjs",[[1,"utrecht-icon-vrijwilligerswerk"]]],["utrecht-icon-vuurwerk.cjs",[[1,"utrecht-icon-vuurwerk"]]],["utrecht-icon-wandelen.cjs",[[1,"utrecht-icon-wandelen"]]],["utrecht-icon-werkzaamheden.cjs",[[1,"utrecht-icon-werkzaamheden"]]],["utrecht-icon-wijkteam.cjs",[[1,"utrecht-icon-wijkteam"]]],["utrecht-icon-winkelen.cjs",[[1,"utrecht-icon-winkelen"]]],["utrecht-icon-winkelwagen.cjs",[[1,"utrecht-icon-winkelwagen"]]],["utrecht-icon-wmo.cjs",[[1,"utrecht-icon-wmo"]]],["utrecht-icon-woz-waarde.cjs",[[1,"utrecht-icon-woz-waarde"]]],["utrecht-icon-zwemabonnement.cjs",[[1,"utrecht-icon-zwemabonnement"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
