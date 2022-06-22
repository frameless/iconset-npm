'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var loader = require('@frameless/icon-web-component-stencil/loader');

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
const UtrechtIconActueel = /*@__PURE__*/ defineContainer('utrecht-icon-actueel', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAfval = /*@__PURE__*/ defineContainer('utrecht-icon-afval', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAfvalContainer = /*@__PURE__*/ defineContainer('utrecht-icon-afval-container', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAfvalOphaal = /*@__PURE__*/ defineContainer('utrecht-icon-afval-ophaal', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAfvalScheiden = /*@__PURE__*/ defineContainer('utrecht-icon-afval-scheiden', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAfvalkalender = /*@__PURE__*/ defineContainer('utrecht-icon-afvalkalender', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAgenda = /*@__PURE__*/ defineContainer('utrecht-icon-agenda', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAirborne = /*@__PURE__*/ defineContainer('utrecht-icon-airborne', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAttentie = /*@__PURE__*/ defineContainer('utrecht-icon-attentie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconAuto = /*@__PURE__*/ defineContainer('utrecht-icon-auto', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBedrijventerrein = /*@__PURE__*/ defineContainer('utrecht-icon-bedrijventerrein', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBegroting = /*@__PURE__*/ defineContainer('utrecht-icon-begroting', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBelastingen = /*@__PURE__*/ defineContainer('utrecht-icon-belastingen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBevolking = /*@__PURE__*/ defineContainer('utrecht-icon-bevolking', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBevrijding = /*@__PURE__*/ defineContainer('utrecht-icon-bevrijding', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBezwaarEnBeroep = /*@__PURE__*/ defineContainer('utrecht-icon-bezwaar-en-beroep', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBijstandsuitkering = /*@__PURE__*/ defineContainer('utrecht-icon-bijstandsuitkering', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBladerenOpruimen = /*@__PURE__*/ defineContainer('utrecht-icon-bladeren-opruimen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBouwenEnVerbouwen = /*@__PURE__*/ defineContainer('utrecht-icon-bouwen-en-verbouwen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBrandgevaar = /*@__PURE__*/ defineContainer('utrecht-icon-brandgevaar', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconBuitengebied = /*@__PURE__*/ defineContainer('utrecht-icon-buitengebied', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconComputerregeling = /*@__PURE__*/ defineContainer('utrecht-icon-computerregeling', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconContactGemeente = /*@__PURE__*/ defineContainer('utrecht-icon-contact-gemeente', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconContainer = /*@__PURE__*/ defineContainer('utrecht-icon-container', undefined);
const UtrechtIconDocumenten = /*@__PURE__*/ defineContainer('utrecht-icon-documenten', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconDuurzaamheid = /*@__PURE__*/ defineContainer('utrecht-icon-duurzaamheid', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconEconomieWerkInkomen = /*@__PURE__*/ defineContainer('utrecht-icon-economie-werk-inkomen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconEikenprocessie = /*@__PURE__*/ defineContainer('utrecht-icon-eikenprocessie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconEnergietransitie = /*@__PURE__*/ defineContainer('utrecht-icon-energietransitie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconEvenementen = /*@__PURE__*/ defineContainer('utrecht-icon-evenementen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconFiets = /*@__PURE__*/ defineContainer('utrecht-icon-fiets', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconFormule1 = /*@__PURE__*/ defineContainer('utrecht-icon-formule-1', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGebruikerCentraal = /*@__PURE__*/ defineContainer('utrecht-icon-gebruiker-centraal', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGebruikerIngelogd = /*@__PURE__*/ defineContainer('utrecht-icon-gebruiker-ingelogd', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGebruikersvraag = /*@__PURE__*/ defineContainer('utrecht-icon-gebruikersvraag', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGemeenteraad = /*@__PURE__*/ defineContainer('utrecht-icon-gemeenteraad', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGemivaLocatie = /*@__PURE__*/ defineContainer('utrecht-icon-gemiva-locatie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGezicht = /*@__PURE__*/ defineContainer('utrecht-icon-gezicht', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGladheid = /*@__PURE__*/ defineContainer('utrecht-icon-gladheid', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGrafiek = /*@__PURE__*/ defineContainer('utrecht-icon-grafiek', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconGrofvuil = /*@__PURE__*/ defineContainer('utrecht-icon-grofvuil', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconHondenbelasting = /*@__PURE__*/ defineContainer('utrecht-icon-hondenbelasting', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconHorecavergunningen = /*@__PURE__*/ defineContainer('utrecht-icon-horecavergunningen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconHuis = /*@__PURE__*/ defineContainer('utrecht-icon-huis', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconHuisEnOmgeving = /*@__PURE__*/ defineContainer('utrecht-icon-huis-en-omgeving', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconHulpmiddelenVinden = /*@__PURE__*/ defineContainer('utrecht-icon-hulpmiddelen-vinden', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconIdkaart = /*@__PURE__*/ defineContainer('utrecht-icon-idkaart', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconInEnOmUwHuis = /*@__PURE__*/ defineContainer('utrecht-icon-in-en-om-uw-huis', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconInformatie = /*@__PURE__*/ defineContainer('utrecht-icon-informatie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconInformatieEnBetalen = /*@__PURE__*/ defineContainer('utrecht-icon-informatie-en-betalen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconInkomen = /*@__PURE__*/ defineContainer('utrecht-icon-inkomen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconJeugd = /*@__PURE__*/ defineContainer('utrecht-icon-jeugd', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconKerstbomen = /*@__PURE__*/ defineContainer('utrecht-icon-kerstbomen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconKindEnFamilie = /*@__PURE__*/ defineContainer('utrecht-icon-kind-en-familie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconKoningsdag = /*@__PURE__*/ defineContainer('utrecht-icon-koningsdag', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconKopenEnHuren = /*@__PURE__*/ defineContainer('utrecht-icon-kopen-en-huren', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconKopenEnVerkopen = /*@__PURE__*/ defineContainer('utrecht-icon-kopen-en-verkopen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconLeerlingenvervoer = /*@__PURE__*/ defineContainer('utrecht-icon-leerlingenvervoer', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconLetOp = /*@__PURE__*/ defineContainer('utrecht-icon-let-op', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconLiefdadigheid = /*@__PURE__*/ defineContainer('utrecht-icon-liefdadigheid', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconLocatie = /*@__PURE__*/ defineContainer('utrecht-icon-locatie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconManege = /*@__PURE__*/ defineContainer('utrecht-icon-manege', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMeeuwenoverlast = /*@__PURE__*/ defineContainer('utrecht-icon-meeuwenoverlast', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMelding = /*@__PURE__*/ defineContainer('utrecht-icon-melding', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMeldingOpenbareRuimte = /*@__PURE__*/ defineContainer('utrecht-icon-melding-openbare-ruimte', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMobiliteit = /*@__PURE__*/ defineContainer('utrecht-icon-mobiliteit', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMonitorAgrofood = /*@__PURE__*/ defineContainer('utrecht-icon-monitor-agrofood', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMonitorDuurzaamheid = /*@__PURE__*/ defineContainer('utrecht-icon-monitor-duurzaamheid', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMonitorSociaal = /*@__PURE__*/ defineContainer('utrecht-icon-monitor-sociaal', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMonitorVirus = /*@__PURE__*/ defineContainer('utrecht-icon-monitor-virus', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconMonitorWoningmarkt = /*@__PURE__*/ defineContainer('utrecht-icon-monitor-woningmarkt', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconNatuurLandschap = /*@__PURE__*/ defineContainer('utrecht-icon-natuur-landschap', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconNieuwsbrief = /*@__PURE__*/ defineContainer('utrecht-icon-nieuwsbrief', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOmgeving = /*@__PURE__*/ defineContainer('utrecht-icon-omgeving', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOmgevingsvergunning = /*@__PURE__*/ defineContainer('utrecht-icon-omgevingsvergunning', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOnderhoud = /*@__PURE__*/ defineContainer('utrecht-icon-onderhoud', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOndernemen = /*@__PURE__*/ defineContainer('utrecht-icon-ondernemen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOnderscheidingen = /*@__PURE__*/ defineContainer('utrecht-icon-onderscheidingen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOnderwijs = /*@__PURE__*/ defineContainer('utrecht-icon-onderwijs', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOpeningstijden = /*@__PURE__*/ defineContainer('utrecht-icon-openingstijden', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOverDeGemeente = /*@__PURE__*/ defineContainer('utrecht-icon-over-de-gemeente', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconOverDeStad = /*@__PURE__*/ defineContainer('utrecht-icon-over-de-stad', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconParkeervoorzieningGehandicapten = /*@__PURE__*/ defineContainer('utrecht-icon-parkeervoorziening-gehandicapten', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconParkeren = /*@__PURE__*/ defineContainer('utrecht-icon-parkeren', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconPaspoort = /*@__PURE__*/ defineContainer('utrecht-icon-paspoort', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconPaspoortIdkaartGecombineerd = /*@__PURE__*/ defineContainer('utrecht-icon-paspoort-idkaart-gecombineerd', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconPrijskaartje = /*@__PURE__*/ defineContainer('utrecht-icon-prijskaartje', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconRaadEnCollege = /*@__PURE__*/ defineContainer('utrecht-icon-raad-en-college', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconReclame = /*@__PURE__*/ defineContainer('utrecht-icon-reclame', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconRecreatie = /*@__PURE__*/ defineContainer('utrecht-icon-recreatie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconRegelingLaagInkomen = /*@__PURE__*/ defineContainer('utrecht-icon-regeling-laag-inkomen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconRijbewijs = /*@__PURE__*/ defineContainer('utrecht-icon-rijbewijs', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconSchoolkostenregeling = /*@__PURE__*/ defineContainer('utrecht-icon-schoolkostenregeling', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconSinterklaas = /*@__PURE__*/ defineContainer('utrecht-icon-sinterklaas', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconSociaalZorgWelzijn = /*@__PURE__*/ defineContainer('utrecht-icon-sociaal-zorg-welzijn', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconSport = /*@__PURE__*/ defineContainer('utrecht-icon-sport', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconSportCultureleActiviteit = /*@__PURE__*/ defineContainer('utrecht-icon-sport-culturele-activiteit', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconSportkledingMuziekinstrumenten = /*@__PURE__*/ defineContainer('utrecht-icon-sportkleding-muziekinstrumenten', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconStationSneltrein = /*@__PURE__*/ defineContainer('utrecht-icon-station-sneltrein', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconStationStoptrein = /*@__PURE__*/ defineContainer('utrecht-icon-station-stoptrein', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconStookverbod = /*@__PURE__*/ defineContainer('utrecht-icon-stookverbod', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconStrand = /*@__PURE__*/ defineContainer('utrecht-icon-strand', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconSubsidie = /*@__PURE__*/ defineContainer('utrecht-icon-subsidie', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconTemperatuurMelding = /*@__PURE__*/ defineContainer('utrecht-icon-temperatuur-melding', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconTrouwenEnGeregistreerdPartnerschap = /*@__PURE__*/ defineContainer('utrecht-icon-trouwen-en-geregistreerd-partnerschap', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconTuinbouw = /*@__PURE__*/ defineContainer('utrecht-icon-tuinbouw', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconUittreksel = /*@__PURE__*/ defineContainer('utrecht-icon-uittreksel', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconUwGemeente = /*@__PURE__*/ defineContainer('utrecht-icon-uw-gemeente', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconUwWijk = /*@__PURE__*/ defineContainer('utrecht-icon-uw-wijk', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVacatures = /*@__PURE__*/ defineContainer('utrecht-icon-vacatures', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVeerboot = /*@__PURE__*/ defineContainer('utrecht-icon-veerboot', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVeiligeWijk = /*@__PURE__*/ defineContainer('utrecht-icon-veilige-wijk', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVergaderen = /*@__PURE__*/ defineContainer('utrecht-icon-vergaderen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVergunningAlgemeen = /*@__PURE__*/ defineContainer('utrecht-icon-vergunning-algemeen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVerhuizen = /*@__PURE__*/ defineContainer('utrecht-icon-verhuizen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVerkiezingen = /*@__PURE__*/ defineContainer('utrecht-icon-verkiezingen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVervoersvoorziening = /*@__PURE__*/ defineContainer('utrecht-icon-vervoersvoorziening', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVirus = /*@__PURE__*/ defineContainer('utrecht-icon-virus', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVluchtelingenOpvang = /*@__PURE__*/ defineContainer('utrecht-icon-vluchtelingen-opvang', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVoeding = /*@__PURE__*/ defineContainer('utrecht-icon-voeding', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVrijwilligerswerk = /*@__PURE__*/ defineContainer('utrecht-icon-vrijwilligerswerk', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconVuurwerk = /*@__PURE__*/ defineContainer('utrecht-icon-vuurwerk', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconWandelen = /*@__PURE__*/ defineContainer('utrecht-icon-wandelen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconWerkzaamheden = /*@__PURE__*/ defineContainer('utrecht-icon-werkzaamheden', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconWijkteam = /*@__PURE__*/ defineContainer('utrecht-icon-wijkteam', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconWinkelen = /*@__PURE__*/ defineContainer('utrecht-icon-winkelen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconWinkelwagen = /*@__PURE__*/ defineContainer('utrecht-icon-winkelwagen', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconWmo = /*@__PURE__*/ defineContainer('utrecht-icon-wmo', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconWozWaarde = /*@__PURE__*/ defineContainer('utrecht-icon-woz-waarde', undefined, [
    'iconTitle',
    'iconTitleId'
]);
const UtrechtIconZwemabonnement = /*@__PURE__*/ defineContainer('utrecht-icon-zwemabonnement', undefined, [
    'iconTitle',
    'iconTitleId'
]);

const UtrechtIconWebComponent = {
    async install() {
        loader.applyPolyfills().then(() => {
            loader.defineCustomElements();
        });
    },
};

exports.UtrechtIconActueel = UtrechtIconActueel;
exports.UtrechtIconAfval = UtrechtIconAfval;
exports.UtrechtIconAfvalContainer = UtrechtIconAfvalContainer;
exports.UtrechtIconAfvalOphaal = UtrechtIconAfvalOphaal;
exports.UtrechtIconAfvalScheiden = UtrechtIconAfvalScheiden;
exports.UtrechtIconAfvalkalender = UtrechtIconAfvalkalender;
exports.UtrechtIconAgenda = UtrechtIconAgenda;
exports.UtrechtIconAirborne = UtrechtIconAirborne;
exports.UtrechtIconAttentie = UtrechtIconAttentie;
exports.UtrechtIconAuto = UtrechtIconAuto;
exports.UtrechtIconBedrijventerrein = UtrechtIconBedrijventerrein;
exports.UtrechtIconBegroting = UtrechtIconBegroting;
exports.UtrechtIconBelastingen = UtrechtIconBelastingen;
exports.UtrechtIconBevolking = UtrechtIconBevolking;
exports.UtrechtIconBevrijding = UtrechtIconBevrijding;
exports.UtrechtIconBezwaarEnBeroep = UtrechtIconBezwaarEnBeroep;
exports.UtrechtIconBijstandsuitkering = UtrechtIconBijstandsuitkering;
exports.UtrechtIconBladerenOpruimen = UtrechtIconBladerenOpruimen;
exports.UtrechtIconBouwenEnVerbouwen = UtrechtIconBouwenEnVerbouwen;
exports.UtrechtIconBrandgevaar = UtrechtIconBrandgevaar;
exports.UtrechtIconBuitengebied = UtrechtIconBuitengebied;
exports.UtrechtIconComputerregeling = UtrechtIconComputerregeling;
exports.UtrechtIconContactGemeente = UtrechtIconContactGemeente;
exports.UtrechtIconContainer = UtrechtIconContainer;
exports.UtrechtIconDocumenten = UtrechtIconDocumenten;
exports.UtrechtIconDuurzaamheid = UtrechtIconDuurzaamheid;
exports.UtrechtIconEconomieWerkInkomen = UtrechtIconEconomieWerkInkomen;
exports.UtrechtIconEikenprocessie = UtrechtIconEikenprocessie;
exports.UtrechtIconEnergietransitie = UtrechtIconEnergietransitie;
exports.UtrechtIconEvenementen = UtrechtIconEvenementen;
exports.UtrechtIconFiets = UtrechtIconFiets;
exports.UtrechtIconFormule1 = UtrechtIconFormule1;
exports.UtrechtIconGebruikerCentraal = UtrechtIconGebruikerCentraal;
exports.UtrechtIconGebruikerIngelogd = UtrechtIconGebruikerIngelogd;
exports.UtrechtIconGebruikersvraag = UtrechtIconGebruikersvraag;
exports.UtrechtIconGemeenteraad = UtrechtIconGemeenteraad;
exports.UtrechtIconGemivaLocatie = UtrechtIconGemivaLocatie;
exports.UtrechtIconGezicht = UtrechtIconGezicht;
exports.UtrechtIconGladheid = UtrechtIconGladheid;
exports.UtrechtIconGrafiek = UtrechtIconGrafiek;
exports.UtrechtIconGrofvuil = UtrechtIconGrofvuil;
exports.UtrechtIconHondenbelasting = UtrechtIconHondenbelasting;
exports.UtrechtIconHorecavergunningen = UtrechtIconHorecavergunningen;
exports.UtrechtIconHuis = UtrechtIconHuis;
exports.UtrechtIconHuisEnOmgeving = UtrechtIconHuisEnOmgeving;
exports.UtrechtIconHulpmiddelenVinden = UtrechtIconHulpmiddelenVinden;
exports.UtrechtIconIdkaart = UtrechtIconIdkaart;
exports.UtrechtIconInEnOmUwHuis = UtrechtIconInEnOmUwHuis;
exports.UtrechtIconInformatie = UtrechtIconInformatie;
exports.UtrechtIconInformatieEnBetalen = UtrechtIconInformatieEnBetalen;
exports.UtrechtIconInkomen = UtrechtIconInkomen;
exports.UtrechtIconJeugd = UtrechtIconJeugd;
exports.UtrechtIconKerstbomen = UtrechtIconKerstbomen;
exports.UtrechtIconKindEnFamilie = UtrechtIconKindEnFamilie;
exports.UtrechtIconKoningsdag = UtrechtIconKoningsdag;
exports.UtrechtIconKopenEnHuren = UtrechtIconKopenEnHuren;
exports.UtrechtIconKopenEnVerkopen = UtrechtIconKopenEnVerkopen;
exports.UtrechtIconLeerlingenvervoer = UtrechtIconLeerlingenvervoer;
exports.UtrechtIconLetOp = UtrechtIconLetOp;
exports.UtrechtIconLiefdadigheid = UtrechtIconLiefdadigheid;
exports.UtrechtIconLocatie = UtrechtIconLocatie;
exports.UtrechtIconManege = UtrechtIconManege;
exports.UtrechtIconMeeuwenoverlast = UtrechtIconMeeuwenoverlast;
exports.UtrechtIconMelding = UtrechtIconMelding;
exports.UtrechtIconMeldingOpenbareRuimte = UtrechtIconMeldingOpenbareRuimte;
exports.UtrechtIconMobiliteit = UtrechtIconMobiliteit;
exports.UtrechtIconMonitorAgrofood = UtrechtIconMonitorAgrofood;
exports.UtrechtIconMonitorDuurzaamheid = UtrechtIconMonitorDuurzaamheid;
exports.UtrechtIconMonitorSociaal = UtrechtIconMonitorSociaal;
exports.UtrechtIconMonitorVirus = UtrechtIconMonitorVirus;
exports.UtrechtIconMonitorWoningmarkt = UtrechtIconMonitorWoningmarkt;
exports.UtrechtIconNatuurLandschap = UtrechtIconNatuurLandschap;
exports.UtrechtIconNieuwsbrief = UtrechtIconNieuwsbrief;
exports.UtrechtIconOmgeving = UtrechtIconOmgeving;
exports.UtrechtIconOmgevingsvergunning = UtrechtIconOmgevingsvergunning;
exports.UtrechtIconOnderhoud = UtrechtIconOnderhoud;
exports.UtrechtIconOndernemen = UtrechtIconOndernemen;
exports.UtrechtIconOnderscheidingen = UtrechtIconOnderscheidingen;
exports.UtrechtIconOnderwijs = UtrechtIconOnderwijs;
exports.UtrechtIconOpeningstijden = UtrechtIconOpeningstijden;
exports.UtrechtIconOverDeGemeente = UtrechtIconOverDeGemeente;
exports.UtrechtIconOverDeStad = UtrechtIconOverDeStad;
exports.UtrechtIconParkeervoorzieningGehandicapten = UtrechtIconParkeervoorzieningGehandicapten;
exports.UtrechtIconParkeren = UtrechtIconParkeren;
exports.UtrechtIconPaspoort = UtrechtIconPaspoort;
exports.UtrechtIconPaspoortIdkaartGecombineerd = UtrechtIconPaspoortIdkaartGecombineerd;
exports.UtrechtIconPrijskaartje = UtrechtIconPrijskaartje;
exports.UtrechtIconRaadEnCollege = UtrechtIconRaadEnCollege;
exports.UtrechtIconReclame = UtrechtIconReclame;
exports.UtrechtIconRecreatie = UtrechtIconRecreatie;
exports.UtrechtIconRegelingLaagInkomen = UtrechtIconRegelingLaagInkomen;
exports.UtrechtIconRijbewijs = UtrechtIconRijbewijs;
exports.UtrechtIconSchoolkostenregeling = UtrechtIconSchoolkostenregeling;
exports.UtrechtIconSinterklaas = UtrechtIconSinterklaas;
exports.UtrechtIconSociaalZorgWelzijn = UtrechtIconSociaalZorgWelzijn;
exports.UtrechtIconSport = UtrechtIconSport;
exports.UtrechtIconSportCultureleActiviteit = UtrechtIconSportCultureleActiviteit;
exports.UtrechtIconSportkledingMuziekinstrumenten = UtrechtIconSportkledingMuziekinstrumenten;
exports.UtrechtIconStationSneltrein = UtrechtIconStationSneltrein;
exports.UtrechtIconStationStoptrein = UtrechtIconStationStoptrein;
exports.UtrechtIconStookverbod = UtrechtIconStookverbod;
exports.UtrechtIconStrand = UtrechtIconStrand;
exports.UtrechtIconSubsidie = UtrechtIconSubsidie;
exports.UtrechtIconTemperatuurMelding = UtrechtIconTemperatuurMelding;
exports.UtrechtIconTrouwenEnGeregistreerdPartnerschap = UtrechtIconTrouwenEnGeregistreerdPartnerschap;
exports.UtrechtIconTuinbouw = UtrechtIconTuinbouw;
exports.UtrechtIconUittreksel = UtrechtIconUittreksel;
exports.UtrechtIconUwGemeente = UtrechtIconUwGemeente;
exports.UtrechtIconUwWijk = UtrechtIconUwWijk;
exports.UtrechtIconVacatures = UtrechtIconVacatures;
exports.UtrechtIconVeerboot = UtrechtIconVeerboot;
exports.UtrechtIconVeiligeWijk = UtrechtIconVeiligeWijk;
exports.UtrechtIconVergaderen = UtrechtIconVergaderen;
exports.UtrechtIconVergunningAlgemeen = UtrechtIconVergunningAlgemeen;
exports.UtrechtIconVerhuizen = UtrechtIconVerhuizen;
exports.UtrechtIconVerkiezingen = UtrechtIconVerkiezingen;
exports.UtrechtIconVervoersvoorziening = UtrechtIconVervoersvoorziening;
exports.UtrechtIconVirus = UtrechtIconVirus;
exports.UtrechtIconVluchtelingenOpvang = UtrechtIconVluchtelingenOpvang;
exports.UtrechtIconVoeding = UtrechtIconVoeding;
exports.UtrechtIconVrijwilligerswerk = UtrechtIconVrijwilligerswerk;
exports.UtrechtIconVuurwerk = UtrechtIconVuurwerk;
exports.UtrechtIconWandelen = UtrechtIconWandelen;
exports.UtrechtIconWebComponent = UtrechtIconWebComponent;
exports.UtrechtIconWerkzaamheden = UtrechtIconWerkzaamheden;
exports.UtrechtIconWijkteam = UtrechtIconWijkteam;
exports.UtrechtIconWinkelen = UtrechtIconWinkelen;
exports.UtrechtIconWinkelwagen = UtrechtIconWinkelwagen;
exports.UtrechtIconWmo = UtrechtIconWmo;
exports.UtrechtIconWozWaarde = UtrechtIconWozWaarde;
exports.UtrechtIconZwemabonnement = UtrechtIconZwemabonnement;
//# sourceMappingURL=index.cjs.js.map
