export const countAppDataFromSlideNumber = slideNumber => {
  switch (slideNumber) {
    case 0:
      return {
        title: "Um welche Art von Immobilie handelt es sich?",
        currentSlideId: "propertyType"
      };
    case 1:
      return {
        title: "Wird die Immobilie aktuell genutzt?",
        currentSlideId: "propertyOccupation"
      };
    case 2:
      return {
        title: "Art des Hauses",
        currentSlideId: "houseType"
      };
    case 3:
      return {
        title: "Art des Grundstücks",
        currentSlideId: "landType"
      };
    case 4:
      return {
        title: "Angaben zu Ihrer Gewerbeimmobilie",
        currentSlideId: "businessType"
      };
    case 5:
      return {
        title: "Ist eine Bebauung möglich?",
        currentSlideId: "buildingType"
      };
    case 6:
      return {
        title: "Wie groß ist die Wohnfläche?",
        currentSlideId: "propertyArea"
      };
    case 7:
      return {
        title: "Angaben zur Nettojahresmiete der Immobilie",
        currentSlideId: "propetyPrice"
      };
    case 8:
      return {
        title: "In welchem Jahr wurde die Immobilie erbaut?",
        currentSlideId: "buildYear"
      };
    case 9:
      return {
        title: "Wie ist der aktuelle Zustand der Immobilie?",
        currentSlideId: "propertyCondition"
      };
    case 10:
      return {
        title: "Gibt es einen Balkon oder eine Terasse",
        currentSlideId: "propertyExtension"
      };
    case 11:
      return {
        title: "Wo befindet sich die Immobilie?",
        currentSlideId: "regionForm"
      };
    case 12:
      return {
        title: "Wie groß ist die Fläche des Grundstücks?",
        currentSlideId: "landArea"
      };
    case 13:
      return {
        title: "Welche Fläche besitzt das Gewerbe?",
        currentSlideId: "shopArea"
      };
    case 14:
      return {
        title: "Wem sollen wir die Bewertung zukommen lassen?",
        currentSlideId: "contactForm"
      };
    case 15:
      return {
        title: "Vielen Dank. Wir haben Ihre Anfrage erhalten!",
        currentSlideId: "thankYouPage"
      };
    case 16:
      return {
        title: "Eigentumsverhältnisse des Grundes?",
        currentSlideId: "ownership"
      };

    default:
      return {
        title: "Um welche Art von Immobilie handelt es sich?",
        currentSlideId: "propertyType"
      };
  }
};
