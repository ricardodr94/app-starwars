
//Tipado de Personajes 

export interface DatosPersonajes {
    count:    number;
    next:     string;
    previous: null;
    results:  PersonajesDTO[];
}

export interface PersonajesDTO {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     Gender;
    homeworld:  string;
    films:      string[];
    species:    string[];
    vehicles:   string[];
    starships:  string[];
    created:    Date;
    edited:     Date;
    url:        string;
    url_images: String
}

export enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
}


//-----------------------------------------------------------------------------
//Tipado de Planetas

export interface DatosPlanetas {
    count:    number;
    next:     string;
    previous: null;
    results:  PlanetasDTO[];
}

export interface PlanetasDTO {
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       string[];
    films:           string[];
    created:         Date;
    edited:          Date;
    url:             string;
    url_images:      string
}


//-----------------------------------------------------------------------------
//Tipado de Naves

export interface DatosNaves {
    count:    number;
    next:     string;
    previous: null;
    results:  NavesDTO[];
}

export interface NavesDTO {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    hyperdrive_rating:      string;
    MGLT:                   string;
    starship_class:         string;
    pilots:                 string[];
    films:                  string[];
    created:                Date;
    edited:                 Date;
    url:                    string;
    url_images:             string
}


//----------------------------------------------------------------
//Tipado de Vehiculos
export interface DatosVehiculos {
    count:    number;
    next:     string;
    previous: null;
    results:  VehiculosDTO[];
}

export interface VehiculosDTO {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    vehicle_class:          string;
    pilots:                 string[];
    films:                  string[];
    created:                Date;
    edited:                 Date;
    url:                    string;
    url_images:             string
}
