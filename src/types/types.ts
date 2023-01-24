export class PageInfo {
    currentPage: number = 1
    itemCount: number = 1
    itemsPerPage: number = 18
    totalItems: number = 1
    totalPages: number = 1
};

export class Birdhouse {
    name: string = ""
    coordinates: string = ""
}

export class BirdHouseAPI {
    ubidValue: string = ""
    name: string = ""
    longitude: number = 0
    latitude: number = 0
    lastOccupationUpdate: string = ""
}

export class occupancyAPI {
    id: string = ""
    eggs: number = 0
    birds: number = 0
    created_at: string = ""
}