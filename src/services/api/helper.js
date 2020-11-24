export function formatHopital(hopital) {
    return hopital.map((element) => {
      return {
        id_hopital: element.id,
        name: element.name,
        adress: element.adress,
        email: element.email,
        image: element.image,
        heure_ouverture: element.heure_ouverture,
        heure_fermeture: element.heure_ouverture,
        latitude: element.latitude,
        longitude: element.longitude,
        phone: element.phone,
        description: element.description,
      };
    });
  }
  
  export function formatSpecialite(specialite) {
    return specialite.map((element) => {
      return {
        id_specialite: element.id,
        nom: element.name,
        description: element.description,
      };
    });
  }