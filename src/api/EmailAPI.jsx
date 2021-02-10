export const sendEmail = (emailRequest) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(emailRequest)
    }

    return fetch(encodeURI(process.env.REACT_APP_SEND_EMAIL_API_ENDPOINT), requestOptions).then(handleError)
}

const handleError = (response) => {
    if (response.ok) {
        return response;
    }
    return response.json().then((error) => Promise.reject(error));
};