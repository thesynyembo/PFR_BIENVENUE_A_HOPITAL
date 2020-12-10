export function formatHopital(hopital) {
    return hopital.map((element) => {
      return {
        id_hopital: element.id,
        name: element.name,
        adress: element.adress,
        commune: element.commune,
        email: element.email,
        image: element.image,
        heure_ferme_ouvert: element.heure_ferme_ouvert,
        latitude: element.latitude,
        longitude: element.longitude,
        phone: element.phone,
        description: element.description,
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