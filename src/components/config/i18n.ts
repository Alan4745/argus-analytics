// src/config/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    //Home
                    "homeTitle1-1": "Discover",
                    "homeTitle1-2": "the power of",
                    "homeTitle2-1": "geo-behavioral",
                    "homeTitle2-2": "intelligence",
                    "homeSubtitle1": "We help you create a clear view of consumer patterns and",
                    "homeSubtitle2": "trends that impact your business",
                    "homeBtnText1": "See our solutions",
                    "homeBtnText2": "More about us",

                    //NavBar 
                    "listTitle1": "Home",
                    "listTitle2": "About us",
                    "listTitle3": "Solutions",
                    "listTitle4": "Pricing",
                    "navbarBtn":"Contact us",

                    //AboutUs
                    "contactUs": "CONTACT US",
                    "makingDecisions": "Making decisions is no longer a gamble",
                    "longEstablishedFact": "It is a long established fact that a reader will be distracted by the readable content met facilisis facilisis eget.",
                    // Testimonials
                    "testimonials": "Testimonials",
                    "satisfiedClient": "Satisfied Client From Big Brands",
                    "longEstablishedFactReader": "It is a long established fact that a reader will be distracted by the readable content.",
                    // Footer
                    "footerText": "It is a long established fact that a reader will be distracted by the readable content. It is a long established fact that a reader.",
                    // Faq
                    "faqTitle": "Frequently Asked Questions",
                    "faqText": "It is a long established fact that a reader will be distracted by the readable content. ",
                    // Pricing
                    "pricingTitle": "Pricing",
                    "pricingSubtitle": "We Provide Various Packages",
                    "pricingText": "Find the one that works best for your business.",
                }
            },
            es: {
                translation: {
                    //Home
                    "homeTitle1-1": "Descubre",
                    "homeTitle1-2": "el poder de la",
                    "homeTitle2-1": "inteligencia",
                    "homeTitle2-2": "geo-comportamental.",
                    "homeSubtitle1": "Te ayudamos a crear una visión clara de los patrones",
                    "homeSubtitle2": "y tendencias de consumo que impactan tu negocio.",
                    "homeBtnText1": " Ve nuestras soluciones",
                    "homeBtnText2": "Más sobre nosotros",

                    //NavBar 
                    "listTitle1": "Inicio",
                    "listTitle2": "Sobre Nosotros",
                    "listTitle3": "Soluciones",
                    "listTitle4": "Precios",
                    "navbarBtn":"Contáctanos",

                    //AboutUs
                    "contactUs": "CONTÁCTENOS",
                    "makingDecisions": "Tomar decisiones ya no es una apuesta",
                    "longEstablishedFact": "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible met facilisis facilisis eget.",
                    // Testimonials
                    "testimonials": "Testimonios",
                    "satisfiedClient": "Cliente Satisfecho de Grandes Marcas",
                    "longEstablishedFactReader": "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible.",
                    // Footer
                    "footerText": "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible. Es un hecho establecido desde hace mucho tiempo que un lector.",
                    // Fagq
                    "faqTitle": "Preguntas Frecuentes",
                    "faqText": "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible. ",
                    // Pricing
                    "pricingTitle": "Precios",
                    "pricingSubtitle": "Ofrecemos Varios Paquetes",
                    "pricingText": "Encuentra el que mejor se adapte a tu negocio.",
                }
            },
            fr: {
                translation: {
                    //Home
                    "homeTitle1-1": "Découvrez",
                    "homeTitle1-2": "la puissance de",
                    "homeTitle2-1": "l’intelligence",
                    "homeTitle2-2": "géo-comportementale.",
                    "homeSubtitle1": "Nous vous aidons à créer une vue claire des modèles",
                    "homeSubtitle2": "et tendances de consommation qui impactent votre entreprise.",
                    "homeBtnText1": "Voir nos solutions",
                    "homeBtnText2": "En savoir plus sur nous",

                    //NavBar 
                    "listTitle1": "Accueil",
                    "listTitle2": "À propos de nous",
                    "listTitle3": "Solutions",
                    "listTitle4": "Tarification",
                    "navbarBtn":"Contactez-nous",

                    //AboutUs
                    "contactUs": "CONTACTEZ-NOUS",
                    "makingDecisions": "Prendre des décisions n'est plus un pari",
                    "longEstablishedFact": "Il est de notoriété publique qu'un lecteur sera distrait par le contenu lisible met facilisis facilisis eget.",
                    // Testimonials
                    "testimonials": "Témoignages",
                    "satisfiedClient": "Client Satisfait de Grandes Marques",
                    "longEstablishedFactReader": "Il est de notoriété publique qu'un lecteur sera distrait par le contenu lisible.",
                    // Footer                    
                    "footerText": "Il est de notoriété publique qu’un lecteur sera distrait par le contenu lisible. Il est de notoriété publique qu’un lecteur.",
                    // Faq
                    "faqTitle": "Questions Fréquemment Posées",
                    "faqText": "Il est de notoriété publique qu’un lecteur sera distrait par le contenu lisible.",
                    // Pricing
                    "pricingTitle": "Tarification",
                    "pricingSubtitle": "Nous Proposons Divers Forfaits",
                    "pricingText": "Trouvez celui qui convient le mieux à votre entreprise.",
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
