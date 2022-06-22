'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var loader = require('@wip/iconset-web-component/loader');

const UPDATE_VALUE_EVENT = 'update:modelValue';
const MODEL_VALUE = 'modelValue';
const ROUTER_LINK_VALUE = 'routerLink';
const NAV_MANAGER = 'navManager';
const ROUTER_PROP_PREFIX = 'router';
/**
 * Starting in Vue 3.1.0, all properties are
 * added as keys to the props object, even if
 * they are not being used. In order to correctly
 * account for both value props and v-model props,
 * we need to check if the key exists for Vue <3.1.0
 * and then check if it is not undefined for Vue >= 3.1.0.
 * See https://github.com/vuejs/vue-next/issues/3889
 */
const EMPTY_PROP = Symbol();
const DEFAULT_EMPTY_PROP = { default: EMPTY_PROP };
const getComponentClasses = (classes) => {
    return (classes === null || classes === void 0 ? void 0 : classes.split(' ')) || [];
};
const getElementClasses = (ref, componentClasses, defaultClasses = []) => {
    var _a;
    return [...Array.from(((_a = ref.value) === null || _a === void 0 ? void 0 : _a.classList) || []), ...defaultClasses]
        .filter((c, i, self) => !componentClasses.has(c) && self.indexOf(c) === i);
};
/**
* Create a callback to define a Vue component wrapper around a Web Component.
*
* @prop name - The component tag name (i.e. `ion-button`)
* @prop componentProps - An array of properties on the
* component. These usually match up with the @Prop definitions
* in each component's TSX file.
* @prop customElement - An option custom element instance to pass
* to customElements.define. Only set if `includeImportCustomElements: true` in your config.
* @prop modelProp - The prop that v-model binds to (i.e. value)
* @prop modelUpdateEvent - The event that is fired from your Web Component when the value changes (i.e. ionChange)
* @prop externalModelUpdateEvent - The external event to fire from your Vue component when modelUpdateEvent fires. This is used for ensuring that v-model references have been
* correctly updated when a user's event callback fires.
*/
const defineContainer = (name, defineCustomElement, componentProps = [], modelProp, modelUpdateEvent, externalModelUpdateEvent) => {
    /**
    * Create a Vue component wrapper around a Web Component.
    * Note: The `props` here are not all properties on a component.
    * They refer to whatever properties are set on an instance of a component.
    */
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const Container = vue.defineComponent((props, { attrs, slots, emit }) => {
        var _a;
        let modelPropValue = props[modelProp];
        const containerRef = vue.ref();
        const classes = new Set(getComponentClasses(attrs.class));
        const onVnodeBeforeMount = (vnode) => {
            // Add a listener to tell Vue to update the v-model
            if (vnode.el) {
                const eventsNames = Array.isArray(modelUpdateEvent) ? modelUpdateEvent : [modelUpdateEvent];
                eventsNames.forEach((eventName) => {
                    vnode.el.addEventListener(eventName.toLowerCase(), (e) => {
                        modelPropValue = (e === null || e === void 0 ? void 0 : e.target)[modelProp];
                        emit(UPDATE_VALUE_EVENT, modelPropValue);
                        /**
                         * We need to emit the change event here
                         * rather than on the web component to ensure
                         * that any v-model bindings have been updated.
                         * Otherwise, the developer will listen on the
                         * native web component, but the v-model will
                         * not have been updated yet.
                         */
                        if (externalModelUpdateEvent) {
                            emit(externalModelUpdateEvent, e);
                        }
                    });
                });
            }
        };
        const currentInstance = vue.getCurrentInstance();
        const hasRouter = (_a = currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.appContext) === null || _a === void 0 ? void 0 : _a.provides[NAV_MANAGER];
        const navManager = hasRouter ? vue.inject(NAV_MANAGER) : undefined;
        const handleRouterLink = (ev) => {
            const { routerLink } = props;
            if (routerLink === EMPTY_PROP)
                return;
            if (navManager !== undefined) {
                let navigationPayload = { event: ev };
                for (const key in props) {
                    const value = props[key];
                    if (props.hasOwnProperty(key) && key.startsWith(ROUTER_PROP_PREFIX) && value !== EMPTY_PROP) {
                        navigationPayload[key] = value;
                    }
                }
                navManager.navigate(navigationPayload);
            }
            else {
                console.warn('Tried to navigate, but no router was found. Make sure you have mounted Vue Router.');
            }
        };
        return () => {
            modelPropValue = props[modelProp];
            getComponentClasses(attrs.class).forEach(value => {
                classes.add(value);
            });
            const oldClick = props.onClick;
            const handleClick = (ev) => {
                if (oldClick !== undefined) {
                    oldClick(ev);
                }
                if (!ev.defaultPrevented) {
                    handleRouterLink(ev);
                }
            };
            let propsToAdd = {
                ref: containerRef,
                class: getElementClasses(containerRef, classes),
                onClick: handleClick,
                onVnodeBeforeMount: (modelUpdateEvent) ? onVnodeBeforeMount : undefined
            };
            /**
             * We can use Object.entries here
             * to avoid the hasOwnProperty check,
             * but that would require 2 iterations
             * where as this only requires 1.
             */
            for (const key in props) {
                const value = props[key];
                if (props.hasOwnProperty(key) && value !== EMPTY_PROP) {
                    propsToAdd[key] = value;
                }
            }
            if (modelProp) {
                /**
                 * If form value property was set using v-model
                 * then we should use that value.
                 * Otherwise, check to see if form value property
                 * was set as a static value (i.e. no v-model).
                 */
                if (props[MODEL_VALUE] !== EMPTY_PROP) {
                    propsToAdd = Object.assign(Object.assign({}, propsToAdd), { [modelProp]: props[MODEL_VALUE] });
                }
                else if (modelPropValue !== EMPTY_PROP) {
                    propsToAdd = Object.assign(Object.assign({}, propsToAdd), { [modelProp]: modelPropValue });
                }
            }
            return vue.h(name, propsToAdd, slots.default && slots.default());
        };
    });
    Container.displayName = name;
    Container.props = {
        [ROUTER_LINK_VALUE]: DEFAULT_EMPTY_PROP
    };
    componentProps.forEach(componentProp => {
        Container.props[componentProp] = DEFAULT_EMPTY_PROP;
    });
    if (modelProp) {
        Container.props[MODEL_VALUE] = DEFAULT_EMPTY_PROP;
        Container.emits = [UPDATE_VALUE_EVENT, externalModelUpdateEvent];
    }
    return Container;
};

/* eslint-disable */
const OpengemeentenIconActueel = /*@__PURE__*/ defineContainer('opengemeenten-icon-actueel', undefined);
const OpengemeentenIconAfval = /*@__PURE__*/ defineContainer('opengemeenten-icon-afval', undefined);
const OpengemeentenIconAfvalContainer = /*@__PURE__*/ defineContainer('opengemeenten-icon-afval-container', undefined);
const OpengemeentenIconAfvalOphaal = /*@__PURE__*/ defineContainer('opengemeenten-icon-afval-ophaal', undefined);
const OpengemeentenIconAfvalScheiden = /*@__PURE__*/ defineContainer('opengemeenten-icon-afval-scheiden', undefined);
const OpengemeentenIconAfvalkalender = /*@__PURE__*/ defineContainer('opengemeenten-icon-afvalkalender', undefined);
const OpengemeentenIconAgenda = /*@__PURE__*/ defineContainer('opengemeenten-icon-agenda', undefined);
const OpengemeentenIconAirborne = /*@__PURE__*/ defineContainer('opengemeenten-icon-airborne', undefined);
const OpengemeentenIconAttentie = /*@__PURE__*/ defineContainer('opengemeenten-icon-attentie', undefined);
const OpengemeentenIconAuto = /*@__PURE__*/ defineContainer('opengemeenten-icon-auto', undefined);
const OpengemeentenIconBedrijventerrein = /*@__PURE__*/ defineContainer('opengemeenten-icon-bedrijventerrein', undefined);
const OpengemeentenIconBegroting = /*@__PURE__*/ defineContainer('opengemeenten-icon-begroting', undefined);
const OpengemeentenIconBelastingen = /*@__PURE__*/ defineContainer('opengemeenten-icon-belastingen', undefined);
const OpengemeentenIconBevolking = /*@__PURE__*/ defineContainer('opengemeenten-icon-bevolking', undefined);
const OpengemeentenIconBevrijding = /*@__PURE__*/ defineContainer('opengemeenten-icon-bevrijding', undefined);
const OpengemeentenIconBezwaarEnBeroep = /*@__PURE__*/ defineContainer('opengemeenten-icon-bezwaar-en-beroep', undefined);
const OpengemeentenIconBijstandsuitkering = /*@__PURE__*/ defineContainer('opengemeenten-icon-bijstandsuitkering', undefined);
const OpengemeentenIconBladerenOpruimen = /*@__PURE__*/ defineContainer('opengemeenten-icon-bladeren-opruimen', undefined);
const OpengemeentenIconBouwenEnVerbouwen = /*@__PURE__*/ defineContainer('opengemeenten-icon-bouwen-en-verbouwen', undefined);
const OpengemeentenIconBrandgevaar = /*@__PURE__*/ defineContainer('opengemeenten-icon-brandgevaar', undefined);
const OpengemeentenIconBuitengebied = /*@__PURE__*/ defineContainer('opengemeenten-icon-buitengebied', undefined);
const OpengemeentenIconComputerregeling = /*@__PURE__*/ defineContainer('opengemeenten-icon-computerregeling', undefined);
const OpengemeentenIconContactGemeente = /*@__PURE__*/ defineContainer('opengemeenten-icon-contact-gemeente', undefined);
const OpengemeentenIconContainer = /*@__PURE__*/ defineContainer('opengemeenten-icon-container', undefined);
const OpengemeentenIconDocumenten = /*@__PURE__*/ defineContainer('opengemeenten-icon-documenten', undefined);
const OpengemeentenIconDuurzaamheid = /*@__PURE__*/ defineContainer('opengemeenten-icon-duurzaamheid', undefined);
const OpengemeentenIconEconomieWerkInkomen = /*@__PURE__*/ defineContainer('opengemeenten-icon-economie-werk-inkomen', undefined);
const OpengemeentenIconEikenprocessie = /*@__PURE__*/ defineContainer('opengemeenten-icon-eikenprocessie', undefined);
const OpengemeentenIconEnergietransitie = /*@__PURE__*/ defineContainer('opengemeenten-icon-energietransitie', undefined);
const OpengemeentenIconEvenementen = /*@__PURE__*/ defineContainer('opengemeenten-icon-evenementen', undefined);
const OpengemeentenIconF1 = /*@__PURE__*/ defineContainer('opengemeenten-icon-f-1', undefined);
const OpengemeentenIconFiets = /*@__PURE__*/ defineContainer('opengemeenten-icon-fiets', undefined);
const OpengemeentenIconGebruikerCentraal = /*@__PURE__*/ defineContainer('opengemeenten-icon-gebruiker-centraal', undefined);
const OpengemeentenIconGebruikerIngelogd = /*@__PURE__*/ defineContainer('opengemeenten-icon-gebruiker-ingelogd', undefined);
const OpengemeentenIconGebruikersvraag = /*@__PURE__*/ defineContainer('opengemeenten-icon-gebruikersvraag', undefined);
const OpengemeentenIconGemeenteraad = /*@__PURE__*/ defineContainer('opengemeenten-icon-gemeenteraad', undefined);
const OpengemeentenIconGemivaLocatie = /*@__PURE__*/ defineContainer('opengemeenten-icon-gemiva-locatie', undefined);
const OpengemeentenIconGezicht = /*@__PURE__*/ defineContainer('opengemeenten-icon-gezicht', undefined);
const OpengemeentenIconGladheid = /*@__PURE__*/ defineContainer('opengemeenten-icon-gladheid', undefined);
const OpengemeentenIconGrafiek = /*@__PURE__*/ defineContainer('opengemeenten-icon-grafiek', undefined);
const OpengemeentenIconGrofvuil = /*@__PURE__*/ defineContainer('opengemeenten-icon-grofvuil', undefined);
const OpengemeentenIconHondenbelasting = /*@__PURE__*/ defineContainer('opengemeenten-icon-hondenbelasting', undefined);
const OpengemeentenIconHorecavergunningen = /*@__PURE__*/ defineContainer('opengemeenten-icon-horecavergunningen', undefined);
const OpengemeentenIconHuis = /*@__PURE__*/ defineContainer('opengemeenten-icon-huis', undefined);
const OpengemeentenIconHuisEnOmgeving = /*@__PURE__*/ defineContainer('opengemeenten-icon-huis-en-omgeving', undefined);
const OpengemeentenIconHulpmiddelenVinden = /*@__PURE__*/ defineContainer('opengemeenten-icon-hulpmiddelen-vinden', undefined);
const OpengemeentenIconIdkaart = /*@__PURE__*/ defineContainer('opengemeenten-icon-idkaart', undefined);
const OpengemeentenIconInEnOmUwHuis = /*@__PURE__*/ defineContainer('opengemeenten-icon-in-en-om-uw-huis', undefined);
const OpengemeentenIconInformatie = /*@__PURE__*/ defineContainer('opengemeenten-icon-informatie', undefined);
const OpengemeentenIconInformatieEnBetalen = /*@__PURE__*/ defineContainer('opengemeenten-icon-informatie-en-betalen', undefined);
const OpengemeentenIconInkomen = /*@__PURE__*/ defineContainer('opengemeenten-icon-inkomen', undefined);
const OpengemeentenIconJeugd = /*@__PURE__*/ defineContainer('opengemeenten-icon-jeugd', undefined);
const OpengemeentenIconKerstbomen = /*@__PURE__*/ defineContainer('opengemeenten-icon-kerstbomen', undefined);
const OpengemeentenIconKindEnFamilie = /*@__PURE__*/ defineContainer('opengemeenten-icon-kind-en-familie', undefined);
const OpengemeentenIconKoningsdag = /*@__PURE__*/ defineContainer('opengemeenten-icon-koningsdag', undefined);
const OpengemeentenIconKopenEnHuren = /*@__PURE__*/ defineContainer('opengemeenten-icon-kopen-en-huren', undefined);
const OpengemeentenIconKopenEnVerkopen = /*@__PURE__*/ defineContainer('opengemeenten-icon-kopen-en-verkopen', undefined);
const OpengemeentenIconLeerlingenvervoer = /*@__PURE__*/ defineContainer('opengemeenten-icon-leerlingenvervoer', undefined);
const OpengemeentenIconLetOp = /*@__PURE__*/ defineContainer('opengemeenten-icon-let-op', undefined);
const OpengemeentenIconLiefdadigheid = /*@__PURE__*/ defineContainer('opengemeenten-icon-liefdadigheid', undefined);
const OpengemeentenIconLocatie = /*@__PURE__*/ defineContainer('opengemeenten-icon-locatie', undefined);
const OpengemeentenIconManege = /*@__PURE__*/ defineContainer('opengemeenten-icon-manege', undefined);
const OpengemeentenIconMeeuwenoverlast = /*@__PURE__*/ defineContainer('opengemeenten-icon-meeuwenoverlast', undefined);
const OpengemeentenIconMelding = /*@__PURE__*/ defineContainer('opengemeenten-icon-melding', undefined);
const OpengemeentenIconMeldingOpenbareRuimte = /*@__PURE__*/ defineContainer('opengemeenten-icon-melding-openbare-ruimte', undefined);
const OpengemeentenIconMobiliteit = /*@__PURE__*/ defineContainer('opengemeenten-icon-mobiliteit', undefined);
const OpengemeentenIconMonitorAgrofood = /*@__PURE__*/ defineContainer('opengemeenten-icon-monitor-agrofood', undefined);
const OpengemeentenIconMonitorDuurzaamheid = /*@__PURE__*/ defineContainer('opengemeenten-icon-monitor-duurzaamheid', undefined);
const OpengemeentenIconMonitorSociaal = /*@__PURE__*/ defineContainer('opengemeenten-icon-monitor-sociaal', undefined);
const OpengemeentenIconMonitorVirus = /*@__PURE__*/ defineContainer('opengemeenten-icon-monitor-virus', undefined);
const OpengemeentenIconMonitorWoningmarkt = /*@__PURE__*/ defineContainer('opengemeenten-icon-monitor-woningmarkt', undefined);
const OpengemeentenIconNatuurLandschap = /*@__PURE__*/ defineContainer('opengemeenten-icon-natuur-landschap', undefined);
const OpengemeentenIconNieuwsbrief = /*@__PURE__*/ defineContainer('opengemeenten-icon-nieuwsbrief', undefined);
const OpengemeentenIconOmgeving = /*@__PURE__*/ defineContainer('opengemeenten-icon-omgeving', undefined);
const OpengemeentenIconOmgevingsvergunning = /*@__PURE__*/ defineContainer('opengemeenten-icon-omgevingsvergunning', undefined);
const OpengemeentenIconOnderhoud = /*@__PURE__*/ defineContainer('opengemeenten-icon-onderhoud', undefined);
const OpengemeentenIconOndernemen = /*@__PURE__*/ defineContainer('opengemeenten-icon-ondernemen', undefined);
const OpengemeentenIconOnderscheidingen = /*@__PURE__*/ defineContainer('opengemeenten-icon-onderscheidingen', undefined);
const OpengemeentenIconOnderwijs = /*@__PURE__*/ defineContainer('opengemeenten-icon-onderwijs', undefined);
const OpengemeentenIconOpeningstijden = /*@__PURE__*/ defineContainer('opengemeenten-icon-openingstijden', undefined);
const OpengemeentenIconOverDeGemeente = /*@__PURE__*/ defineContainer('opengemeenten-icon-over-de-gemeente', undefined);
const OpengemeentenIconOverDeStad = /*@__PURE__*/ defineContainer('opengemeenten-icon-over-de-stad', undefined);
const OpengemeentenIconParkeervoorzieningGehandicapten = /*@__PURE__*/ defineContainer('opengemeenten-icon-parkeervoorziening-gehandicapten', undefined);
const OpengemeentenIconParkeren = /*@__PURE__*/ defineContainer('opengemeenten-icon-parkeren', undefined);
const OpengemeentenIconPaspoort = /*@__PURE__*/ defineContainer('opengemeenten-icon-paspoort', undefined);
const OpengemeentenIconPaspoortIdkaartGecombineerd = /*@__PURE__*/ defineContainer('opengemeenten-icon-paspoort-idkaart-gecombineerd', undefined);
const OpengemeentenIconPrijskaartje = /*@__PURE__*/ defineContainer('opengemeenten-icon-prijskaartje', undefined);
const OpengemeentenIconRaadEnCollege = /*@__PURE__*/ defineContainer('opengemeenten-icon-raad-en-college', undefined);
const OpengemeentenIconReclame = /*@__PURE__*/ defineContainer('opengemeenten-icon-reclame', undefined);
const OpengemeentenIconRecreatie = /*@__PURE__*/ defineContainer('opengemeenten-icon-recreatie', undefined);
const OpengemeentenIconRegelingLaagInkomen = /*@__PURE__*/ defineContainer('opengemeenten-icon-regeling-laag-inkomen', undefined);
const OpengemeentenIconRijbewijs = /*@__PURE__*/ defineContainer('opengemeenten-icon-rijbewijs', undefined);
const OpengemeentenIconSchoolkostenregeling = /*@__PURE__*/ defineContainer('opengemeenten-icon-schoolkostenregeling', undefined);
const OpengemeentenIconSinterklaas = /*@__PURE__*/ defineContainer('opengemeenten-icon-sinterklaas', undefined);
const OpengemeentenIconSociaalZorgWelzijn = /*@__PURE__*/ defineContainer('opengemeenten-icon-sociaal-zorg-welzijn', undefined);
const OpengemeentenIconSport = /*@__PURE__*/ defineContainer('opengemeenten-icon-sport', undefined);
const OpengemeentenIconSportCultureleActiviteit = /*@__PURE__*/ defineContainer('opengemeenten-icon-sport-culturele-activiteit', undefined);
const OpengemeentenIconSportkledingMuziekinstrumenten = /*@__PURE__*/ defineContainer('opengemeenten-icon-sportkleding-muziekinstrumenten', undefined);
const OpengemeentenIconStationSneltrein = /*@__PURE__*/ defineContainer('opengemeenten-icon-station-sneltrein', undefined);
const OpengemeentenIconStationStoptrein = /*@__PURE__*/ defineContainer('opengemeenten-icon-station-stoptrein', undefined);
const OpengemeentenIconStookverbod = /*@__PURE__*/ defineContainer('opengemeenten-icon-stookverbod', undefined);
const OpengemeentenIconStrand = /*@__PURE__*/ defineContainer('opengemeenten-icon-strand', undefined);
const OpengemeentenIconSubsidie = /*@__PURE__*/ defineContainer('opengemeenten-icon-subsidie', undefined);
const OpengemeentenIconTemperatuurMelding = /*@__PURE__*/ defineContainer('opengemeenten-icon-temperatuur-melding', undefined);
const OpengemeentenIconTrouwenEnGeregistreerdPartnerschap = /*@__PURE__*/ defineContainer('opengemeenten-icon-trouwen-en-geregistreerd-partnerschap', undefined);
const OpengemeentenIconTuinbouw = /*@__PURE__*/ defineContainer('opengemeenten-icon-tuinbouw', undefined);
const OpengemeentenIconUittreksel = /*@__PURE__*/ defineContainer('opengemeenten-icon-uittreksel', undefined);
const OpengemeentenIconUwGemeente = /*@__PURE__*/ defineContainer('opengemeenten-icon-uw-gemeente', undefined);
const OpengemeentenIconUwWijk = /*@__PURE__*/ defineContainer('opengemeenten-icon-uw-wijk', undefined);
const OpengemeentenIconVacatures = /*@__PURE__*/ defineContainer('opengemeenten-icon-vacatures', undefined);
const OpengemeentenIconVeerboot = /*@__PURE__*/ defineContainer('opengemeenten-icon-veerboot', undefined);
const OpengemeentenIconVeiligeWijk = /*@__PURE__*/ defineContainer('opengemeenten-icon-veilige-wijk', undefined);
const OpengemeentenIconVergaderen = /*@__PURE__*/ defineContainer('opengemeenten-icon-vergaderen', undefined);
const OpengemeentenIconVergunningAlgemeen = /*@__PURE__*/ defineContainer('opengemeenten-icon-vergunning-algemeen', undefined);
const OpengemeentenIconVerhuizen = /*@__PURE__*/ defineContainer('opengemeenten-icon-verhuizen', undefined);
const OpengemeentenIconVerkiezingen = /*@__PURE__*/ defineContainer('opengemeenten-icon-verkiezingen', undefined);
const OpengemeentenIconVervoersvoorziening = /*@__PURE__*/ defineContainer('opengemeenten-icon-vervoersvoorziening', undefined);
const OpengemeentenIconVirus = /*@__PURE__*/ defineContainer('opengemeenten-icon-virus', undefined);
const OpengemeentenIconVluchtelingenOpvang = /*@__PURE__*/ defineContainer('opengemeenten-icon-vluchtelingen-opvang', undefined);
const OpengemeentenIconVoeding = /*@__PURE__*/ defineContainer('opengemeenten-icon-voeding', undefined);
const OpengemeentenIconVrijwilligerswerk = /*@__PURE__*/ defineContainer('opengemeenten-icon-vrijwilligerswerk', undefined);
const OpengemeentenIconVuurwerk = /*@__PURE__*/ defineContainer('opengemeenten-icon-vuurwerk', undefined);
const OpengemeentenIconWandelen = /*@__PURE__*/ defineContainer('opengemeenten-icon-wandelen', undefined);
const OpengemeentenIconWerkzaamheden = /*@__PURE__*/ defineContainer('opengemeenten-icon-werkzaamheden', undefined);
const OpengemeentenIconWijkteam = /*@__PURE__*/ defineContainer('opengemeenten-icon-wijkteam', undefined);
const OpengemeentenIconWinkelen = /*@__PURE__*/ defineContainer('opengemeenten-icon-winkelen', undefined);
const OpengemeentenIconWinkelwagen = /*@__PURE__*/ defineContainer('opengemeenten-icon-winkelwagen', undefined);
const OpengemeentenIconWmo = /*@__PURE__*/ defineContainer('opengemeenten-icon-wmo', undefined);
const OpengemeentenIconWozWaarde = /*@__PURE__*/ defineContainer('opengemeenten-icon-woz-waarde', undefined);
const OpengemeentenIconZwemabonnement = /*@__PURE__*/ defineContainer('opengemeenten-icon-zwemabonnement', undefined);

const UtrechtIconWebComponent = {
    async install() {
        loader.applyPolyfills().then(() => {
            loader.defineCustomElements();
        });
    },
};

exports.OpengemeentenIconActueel = OpengemeentenIconActueel;
exports.OpengemeentenIconAfval = OpengemeentenIconAfval;
exports.OpengemeentenIconAfvalContainer = OpengemeentenIconAfvalContainer;
exports.OpengemeentenIconAfvalOphaal = OpengemeentenIconAfvalOphaal;
exports.OpengemeentenIconAfvalScheiden = OpengemeentenIconAfvalScheiden;
exports.OpengemeentenIconAfvalkalender = OpengemeentenIconAfvalkalender;
exports.OpengemeentenIconAgenda = OpengemeentenIconAgenda;
exports.OpengemeentenIconAirborne = OpengemeentenIconAirborne;
exports.OpengemeentenIconAttentie = OpengemeentenIconAttentie;
exports.OpengemeentenIconAuto = OpengemeentenIconAuto;
exports.OpengemeentenIconBedrijventerrein = OpengemeentenIconBedrijventerrein;
exports.OpengemeentenIconBegroting = OpengemeentenIconBegroting;
exports.OpengemeentenIconBelastingen = OpengemeentenIconBelastingen;
exports.OpengemeentenIconBevolking = OpengemeentenIconBevolking;
exports.OpengemeentenIconBevrijding = OpengemeentenIconBevrijding;
exports.OpengemeentenIconBezwaarEnBeroep = OpengemeentenIconBezwaarEnBeroep;
exports.OpengemeentenIconBijstandsuitkering = OpengemeentenIconBijstandsuitkering;
exports.OpengemeentenIconBladerenOpruimen = OpengemeentenIconBladerenOpruimen;
exports.OpengemeentenIconBouwenEnVerbouwen = OpengemeentenIconBouwenEnVerbouwen;
exports.OpengemeentenIconBrandgevaar = OpengemeentenIconBrandgevaar;
exports.OpengemeentenIconBuitengebied = OpengemeentenIconBuitengebied;
exports.OpengemeentenIconComputerregeling = OpengemeentenIconComputerregeling;
exports.OpengemeentenIconContactGemeente = OpengemeentenIconContactGemeente;
exports.OpengemeentenIconContainer = OpengemeentenIconContainer;
exports.OpengemeentenIconDocumenten = OpengemeentenIconDocumenten;
exports.OpengemeentenIconDuurzaamheid = OpengemeentenIconDuurzaamheid;
exports.OpengemeentenIconEconomieWerkInkomen = OpengemeentenIconEconomieWerkInkomen;
exports.OpengemeentenIconEikenprocessie = OpengemeentenIconEikenprocessie;
exports.OpengemeentenIconEnergietransitie = OpengemeentenIconEnergietransitie;
exports.OpengemeentenIconEvenementen = OpengemeentenIconEvenementen;
exports.OpengemeentenIconF1 = OpengemeentenIconF1;
exports.OpengemeentenIconFiets = OpengemeentenIconFiets;
exports.OpengemeentenIconGebruikerCentraal = OpengemeentenIconGebruikerCentraal;
exports.OpengemeentenIconGebruikerIngelogd = OpengemeentenIconGebruikerIngelogd;
exports.OpengemeentenIconGebruikersvraag = OpengemeentenIconGebruikersvraag;
exports.OpengemeentenIconGemeenteraad = OpengemeentenIconGemeenteraad;
exports.OpengemeentenIconGemivaLocatie = OpengemeentenIconGemivaLocatie;
exports.OpengemeentenIconGezicht = OpengemeentenIconGezicht;
exports.OpengemeentenIconGladheid = OpengemeentenIconGladheid;
exports.OpengemeentenIconGrafiek = OpengemeentenIconGrafiek;
exports.OpengemeentenIconGrofvuil = OpengemeentenIconGrofvuil;
exports.OpengemeentenIconHondenbelasting = OpengemeentenIconHondenbelasting;
exports.OpengemeentenIconHorecavergunningen = OpengemeentenIconHorecavergunningen;
exports.OpengemeentenIconHuis = OpengemeentenIconHuis;
exports.OpengemeentenIconHuisEnOmgeving = OpengemeentenIconHuisEnOmgeving;
exports.OpengemeentenIconHulpmiddelenVinden = OpengemeentenIconHulpmiddelenVinden;
exports.OpengemeentenIconIdkaart = OpengemeentenIconIdkaart;
exports.OpengemeentenIconInEnOmUwHuis = OpengemeentenIconInEnOmUwHuis;
exports.OpengemeentenIconInformatie = OpengemeentenIconInformatie;
exports.OpengemeentenIconInformatieEnBetalen = OpengemeentenIconInformatieEnBetalen;
exports.OpengemeentenIconInkomen = OpengemeentenIconInkomen;
exports.OpengemeentenIconJeugd = OpengemeentenIconJeugd;
exports.OpengemeentenIconKerstbomen = OpengemeentenIconKerstbomen;
exports.OpengemeentenIconKindEnFamilie = OpengemeentenIconKindEnFamilie;
exports.OpengemeentenIconKoningsdag = OpengemeentenIconKoningsdag;
exports.OpengemeentenIconKopenEnHuren = OpengemeentenIconKopenEnHuren;
exports.OpengemeentenIconKopenEnVerkopen = OpengemeentenIconKopenEnVerkopen;
exports.OpengemeentenIconLeerlingenvervoer = OpengemeentenIconLeerlingenvervoer;
exports.OpengemeentenIconLetOp = OpengemeentenIconLetOp;
exports.OpengemeentenIconLiefdadigheid = OpengemeentenIconLiefdadigheid;
exports.OpengemeentenIconLocatie = OpengemeentenIconLocatie;
exports.OpengemeentenIconManege = OpengemeentenIconManege;
exports.OpengemeentenIconMeeuwenoverlast = OpengemeentenIconMeeuwenoverlast;
exports.OpengemeentenIconMelding = OpengemeentenIconMelding;
exports.OpengemeentenIconMeldingOpenbareRuimte = OpengemeentenIconMeldingOpenbareRuimte;
exports.OpengemeentenIconMobiliteit = OpengemeentenIconMobiliteit;
exports.OpengemeentenIconMonitorAgrofood = OpengemeentenIconMonitorAgrofood;
exports.OpengemeentenIconMonitorDuurzaamheid = OpengemeentenIconMonitorDuurzaamheid;
exports.OpengemeentenIconMonitorSociaal = OpengemeentenIconMonitorSociaal;
exports.OpengemeentenIconMonitorVirus = OpengemeentenIconMonitorVirus;
exports.OpengemeentenIconMonitorWoningmarkt = OpengemeentenIconMonitorWoningmarkt;
exports.OpengemeentenIconNatuurLandschap = OpengemeentenIconNatuurLandschap;
exports.OpengemeentenIconNieuwsbrief = OpengemeentenIconNieuwsbrief;
exports.OpengemeentenIconOmgeving = OpengemeentenIconOmgeving;
exports.OpengemeentenIconOmgevingsvergunning = OpengemeentenIconOmgevingsvergunning;
exports.OpengemeentenIconOnderhoud = OpengemeentenIconOnderhoud;
exports.OpengemeentenIconOndernemen = OpengemeentenIconOndernemen;
exports.OpengemeentenIconOnderscheidingen = OpengemeentenIconOnderscheidingen;
exports.OpengemeentenIconOnderwijs = OpengemeentenIconOnderwijs;
exports.OpengemeentenIconOpeningstijden = OpengemeentenIconOpeningstijden;
exports.OpengemeentenIconOverDeGemeente = OpengemeentenIconOverDeGemeente;
exports.OpengemeentenIconOverDeStad = OpengemeentenIconOverDeStad;
exports.OpengemeentenIconParkeervoorzieningGehandicapten = OpengemeentenIconParkeervoorzieningGehandicapten;
exports.OpengemeentenIconParkeren = OpengemeentenIconParkeren;
exports.OpengemeentenIconPaspoort = OpengemeentenIconPaspoort;
exports.OpengemeentenIconPaspoortIdkaartGecombineerd = OpengemeentenIconPaspoortIdkaartGecombineerd;
exports.OpengemeentenIconPrijskaartje = OpengemeentenIconPrijskaartje;
exports.OpengemeentenIconRaadEnCollege = OpengemeentenIconRaadEnCollege;
exports.OpengemeentenIconReclame = OpengemeentenIconReclame;
exports.OpengemeentenIconRecreatie = OpengemeentenIconRecreatie;
exports.OpengemeentenIconRegelingLaagInkomen = OpengemeentenIconRegelingLaagInkomen;
exports.OpengemeentenIconRijbewijs = OpengemeentenIconRijbewijs;
exports.OpengemeentenIconSchoolkostenregeling = OpengemeentenIconSchoolkostenregeling;
exports.OpengemeentenIconSinterklaas = OpengemeentenIconSinterklaas;
exports.OpengemeentenIconSociaalZorgWelzijn = OpengemeentenIconSociaalZorgWelzijn;
exports.OpengemeentenIconSport = OpengemeentenIconSport;
exports.OpengemeentenIconSportCultureleActiviteit = OpengemeentenIconSportCultureleActiviteit;
exports.OpengemeentenIconSportkledingMuziekinstrumenten = OpengemeentenIconSportkledingMuziekinstrumenten;
exports.OpengemeentenIconStationSneltrein = OpengemeentenIconStationSneltrein;
exports.OpengemeentenIconStationStoptrein = OpengemeentenIconStationStoptrein;
exports.OpengemeentenIconStookverbod = OpengemeentenIconStookverbod;
exports.OpengemeentenIconStrand = OpengemeentenIconStrand;
exports.OpengemeentenIconSubsidie = OpengemeentenIconSubsidie;
exports.OpengemeentenIconTemperatuurMelding = OpengemeentenIconTemperatuurMelding;
exports.OpengemeentenIconTrouwenEnGeregistreerdPartnerschap = OpengemeentenIconTrouwenEnGeregistreerdPartnerschap;
exports.OpengemeentenIconTuinbouw = OpengemeentenIconTuinbouw;
exports.OpengemeentenIconUittreksel = OpengemeentenIconUittreksel;
exports.OpengemeentenIconUwGemeente = OpengemeentenIconUwGemeente;
exports.OpengemeentenIconUwWijk = OpengemeentenIconUwWijk;
exports.OpengemeentenIconVacatures = OpengemeentenIconVacatures;
exports.OpengemeentenIconVeerboot = OpengemeentenIconVeerboot;
exports.OpengemeentenIconVeiligeWijk = OpengemeentenIconVeiligeWijk;
exports.OpengemeentenIconVergaderen = OpengemeentenIconVergaderen;
exports.OpengemeentenIconVergunningAlgemeen = OpengemeentenIconVergunningAlgemeen;
exports.OpengemeentenIconVerhuizen = OpengemeentenIconVerhuizen;
exports.OpengemeentenIconVerkiezingen = OpengemeentenIconVerkiezingen;
exports.OpengemeentenIconVervoersvoorziening = OpengemeentenIconVervoersvoorziening;
exports.OpengemeentenIconVirus = OpengemeentenIconVirus;
exports.OpengemeentenIconVluchtelingenOpvang = OpengemeentenIconVluchtelingenOpvang;
exports.OpengemeentenIconVoeding = OpengemeentenIconVoeding;
exports.OpengemeentenIconVrijwilligerswerk = OpengemeentenIconVrijwilligerswerk;
exports.OpengemeentenIconVuurwerk = OpengemeentenIconVuurwerk;
exports.OpengemeentenIconWandelen = OpengemeentenIconWandelen;
exports.OpengemeentenIconWerkzaamheden = OpengemeentenIconWerkzaamheden;
exports.OpengemeentenIconWijkteam = OpengemeentenIconWijkteam;
exports.OpengemeentenIconWinkelen = OpengemeentenIconWinkelen;
exports.OpengemeentenIconWinkelwagen = OpengemeentenIconWinkelwagen;
exports.OpengemeentenIconWmo = OpengemeentenIconWmo;
exports.OpengemeentenIconWozWaarde = OpengemeentenIconWozWaarde;
exports.OpengemeentenIconZwemabonnement = OpengemeentenIconZwemabonnement;
exports.UtrechtIconWebComponent = UtrechtIconWebComponent;
//# sourceMappingURL=index.cjs.js.map
