import {
    SET_MAINTENANCE_LATLON,
    SET_CATEGORIES,
    START_LOADING,
    STOP_LOADING,
    SET_PROPERTIES,
    SET_UNITS,
    SET_REQUEST_ADDED,
    SET_CATEGORY_TICKETS,
    SET_TICKET_DETAILS,
} from '../types/apiTypes';
import { maintenanceUrl } from '../../lib/constatnts';

const URL = maintenanceUrl;

export const getCategories = (token) => {
    const url = `${URL}getCategories`;
    return dispatch => {
        dispatch(setStartLoading('getCategories'));
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    dispatch(setCategories(parsedRes.data));
                    console.log('getCategories: ', parsedRes);
                }
                console.log('getCategories: ', parsedRes);
                dispatch(setStopLoading('getCategories'));
            })
            .catch(err => {
                console.log('getCategories err: ', err);
                dispatch(setStopLoading('getCategories'));
            });
    };
};

export const getProperties = (token) => {
    const url = `${URL}getProperties`;
    console.log('sdkhfgsjdf')
    return dispatch => {
        dispatch(setStartLoading('getProperties'));
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    let properties = [];
                    parsedRes.data.forEach(element => {
                        properties.push({ key: element.id, value: { text: element.title, key: element.id }, label: element.title })
                    })
                    dispatch(setProperties(properties));
                    console.log('getProperties: ', parsedRes);
                }
                console.log('getProperties: ', parsedRes);
                dispatch(setStopLoading('getProperties'));
            })
            .catch(err => {
                console.log('getProperties err: ', err);
                dispatch(setStopLoading('getProperties'));
            });
    };
};

export const getUnits = (token, propertyID) => {
    const url = `${URL}getUnits/${propertyID}`;
    console.log('propertyID: ', propertyID)
    return dispatch => {
        dispatch(setStartLoading('getUnits'));
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    let properties = [];
                    parsedRes.data.forEach(element => {
                        properties.push({ key: element.id, value: { text: element.number, key: element.id }, label: element.number })
                    })
                    dispatch(setUnits(properties));
                    // console.log('getUnits: ', parsedRes, properties);
                }
                console.log('getUnits: ', parsedRes);
                dispatch(setStopLoading('getUnits'));
            })
            .catch(err => {
                console.log('getUnits err: ', err);
                dispatch(setStopLoading('getUnits'));
            });
    };
};

export const sendImage = (token, data, requestData) => {
    const url = `${URL}saveFiles`;
    console.log('image: ', data)
    return dispatch => {
        dispatch(setStartLoading('sendImage'));
        fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'multipart/form-data',
                'token': token
            },
            body: data
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    requestData.image = parsedRes.data[0];
                    console.log('requestData: ', requestData, requestData)
                    dispatch(maintenanceRequest(token, requestData));
                }
                console.log("sendImage t: ", parsedRes);
                dispatch(setStopLoading('sendImage'));
            })
            .catch(err => {
                console.log('sendImage err: ', err)
                dispatch(setStopLoading('sendImage'));
            });
    };
};

export const maintenanceRequest = (token, data) => {
    const url = `${URL}saveTicket`;
    return dispatch => {
        dispatch(setStartLoading('maintenanceRequest'));
        fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                property_id: data.property_id,
                unit_id: data.unit_id,
                category_id: data.category_id,
                image: data.image,
                property_location: data.property_location,
                property_latitude: data.property_latitude,
                property_longitude: data.property_longitude,
                notes: data.notes
            })
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    dispatch(setRequestAdded(true));
                } else {
                    dispatch(setRequestAdded(false));
                }
                console.log("maintenanceRequest: ", parsedRes, data);
                dispatch(setStopLoading('maintenanceRequest'));
            })
            .catch(err => {
                console.log('maintenanceRequest err: ', err)
                dispatch(setStopLoading('maintenanceRequest'));
            });
    };
};

export const getCategoryTickets = (token, categoryID) => {
    const url = `${URL}getTicketsByCategory/${categoryID}`;
    console.log('categoryID: ', categoryID);
    return dispatch => {
        dispatch(setStartLoading('getCategoryTickets'));
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    dispatch(setCategoryTickets(parsedRes.data));
                }
                console.log('getCategoryTickets: ', parsedRes);
                dispatch(setStopLoading('getCategoryTickets'));
            })
            .catch(err => {
                console.log('getCategoryTickets err: ', err);
                dispatch(setStopLoading('getCategoryTickets'));
            });
    };
};

export const getTicketDetails = (token, ticketID) => {
    const url = `${URL}viewTicket/${ticketID}`;
    return dispatch => {
        dispatch(setStartLoading('getTicketDetails'));
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    dispatch(setTicketDetails(parsedRes.data));
                }
                console.log('getTicketDetails: ', parsedRes);
                dispatch(setStopLoading('getTicketDetails'));
            })
            .catch(err => {
                console.log('getTicketDetails err: ', err);
                dispatch(setStopLoading('getTicketDetails'));
            });
    };
};

export const setMaintenanceLatlon = (data) => {
    return {
        type: SET_MAINTENANCE_LATLON,
        latlon: data
    };
};


export const setCategories = (data) => {
    return {
        type: SET_CATEGORIES,
        categories: data
    };
};

export const setStartLoading = data => {
    return {
        type: START_LOADING,
        value: data
    };
};

export const setStopLoading = data => {
    return {
        type: STOP_LOADING,
        value: data
    };
};

export const setProperties = data => {
    return {
        type: SET_PROPERTIES,
        properties: data
    };
};

export const setUnits = data => {
    return {
        type: SET_UNITS,
        units: data
    };
};

export const setRequestAdded = data => {
    return {
        type: SET_REQUEST_ADDED,
        isRequestAdded: data
    };
};

export const setCategoryTickets = data => {
    return {
        type: SET_CATEGORY_TICKETS,
        categoryTickets: data
    };
};

export const setTicketDetails = data => {
    return {
        type: SET_TICKET_DETAILS,
        ticketDetails: data
    };
};
