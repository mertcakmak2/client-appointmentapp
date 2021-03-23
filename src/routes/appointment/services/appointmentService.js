import service from 'axios';

const api =  "http://" + window.location.hostname + ":5000/";

const getAppointments = () => {
    return new Promise((resolve) => {
        var endPoint = api + "api/appointment"
        service.get(endPoint).then(response => {
            resolve(response)
        }).catch(error => {
            resolve(error);
        })
    })
}

const getAppointmentById = (appointmentId) => {
    return new Promise((resolve) => {
        var endPoint = api + "api/appointment/" + appointmentId
        service.get(endPoint).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error);
        })
    })
}

const saveAppointment = (appointmentJson) => {
    return new Promise((resolve) => {
        var endPoint = api + "api/appointment"
        service.post(endPoint, appointmentJson).then(response => {
            resolve(response)
        }).catch(error => {
            resolve(error);
        })
    })
}

const deleteAppointmentById = (appointmentId) => {
    return new Promise((resolve) => {
        var endPoint = api + "api/appointment/" + appointmentId
        service.delete(endPoint).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error);
        })
    })
}

export default {
    getAppointments,
    getAppointmentById,
    saveAppointment,
    deleteAppointmentById
}