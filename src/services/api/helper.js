export function formatHopital(hopital) {
    return hopital.map((element) => {
      return {
        id_hopital: element.id,
        name: element.name,
        adress: element.adress,
        email: element.email,
        image: element.image,
        heure_de_service: element.heure_de_service,
        latitude: element.latitude,
        longitude: element.longitude,
        phone: element.phone,
        description: element.description,
        images: element.images,
        directeur: element.directeur,
        president_surveillance: element.president_surveillance
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