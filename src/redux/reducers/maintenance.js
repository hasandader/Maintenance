import {
    SET_MAINTENANCE_LATLON,
    SET_CATEGORIES,
    SET_PROPERTIES,
    SET_UNITS,
    SET_REQUEST_ADDED,
    SET_CATEGORY_TICKETS,
    SET_TICKET_DETAILS,
} from '../types/apiTypes';

const initialState = {
    latlon: { latitude: 24.678367860487278, longitude: 46.67663427069783 },
    categories: [],
    properties: [],
    units: [],
    isRequestAdded: false,
    categoryTickets: [],
    ticketDetails: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAINTENANCE_LATLON:
            return {
                ...state,
                latlon: action.latlon
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };
        case SET_PROPERTIES:
            return {
                ...state,
                properties: action.properties
            };
        case SET_UNITS:
            return {
                ...state,
                units: action.units
            };
        case SET_REQUEST_ADDED:
            return {
                ...state,
                isRequestAdded: action.isRequestAdded
            };
        case SET_CATEGORY_TICKETS:
            return {
                ...state,
                categoryTickets: action.categoryTickets
            };
        case SET_TICKET_DETAILS:
            return {
                ...state,
                ticketDetails: action.ticketDetails
            }
        default:
            return state;
    }
};

export default reducer;