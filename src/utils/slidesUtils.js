export const countAppDataFromSlideNumber = slideNumber => {
  switch (slideNumber) {
    case 0:
      return {
        title: 'Angaben zur Immobilie',
        currentSlideId: 'propertyType',
      };
    case 1:
      return {
        title: 'Welcher Wohnstatus liegt vor?',
        currentSlideId: 'propertyOccupation',
      };
    case 2:
      return {
        title: 'Angaben zu Ihrem Haus',
        currentSlideId: 'houseType',
      };
    case 3:
      return {
        title: 'Angaben zu Ihrem Grundstück',
        currentSlideId: 'landType',
      };
    case 4:
      return {
        title: 'Angaben zu Ihrer Gewerbeimmobilie',
        currentSlideId: 'businessType',
      };
    case 5:
      return {
        title: 'Ist das Grundstück bebaubar?',
        currentSlideId: 'buildingType',
      };
    case 6:
      return {
        title: 'Welche Wohnfläche besitzt das Objekt?',
        currentSlideId: 'propertyArea',
      };
    case 7:
      return {
        title: 'Wie hoch ist die Nettojahresmiete des Objekts?',
        currentSlideId: 'propetyPrice',
      };
    case 8:
      return {
        title: 'Wann wurde die Immobilie gebaut?',
        currentSlideId: 'buildYear',
      };
    case 9:
      return {
        title: 'In welchem Zustand befindet sich die Immobilie?',
        currentSlideId: 'propertyCondition',
      };
    case 10:
      return {
        title: 'Gibt es einen Balkon oder eine Terrasse?',
        currentSlideId: 'propertyExtension',
      };
    case 11:
      return {
        title: 'In welcher Region befindet sich das Objekt?',
        currentSlideId: 'regionForm',
      };
    case 12:
      return {
        title: 'Welche Fläche besitzt das Grundstück?',
        currentSlideId: 'landArea',
      };
    case 13:
      return {
        title: 'Welche Fläche besitzt das Gewerbe?',
        currentSlideId: 'shopArea',
      };
    case 14:
      return {
        title: 'Wer soll die Bewertung erhalten?',
        currentSlideId: 'contactForm',
      };
    case 15:
      return {
        title: 'Vielen Dank. Wir haben Ihre Anfrage erhalten!',
        currentSlideId: 'thankYouPage',
      };
    case 16:
      return {
        title: 'Eigentumsverhältnisse des Grundes?',
        currentSlideId: 'ownership',
      };

    default:
      return {
        title: 'Angaben zur Immobilie',
        currentSlideId: 'propertyType',
      };
  }
};
