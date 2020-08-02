const targetURL = 'http://localhost:8081/connection/configs/consumer';

export const getConsumerConnectionList = () =>
    fetch(targetURL, {
        method: 'GET'
        // mode: 'cors',
        // headers: headers
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then((result) => {
            var consumerConnectionList = result;
            return consumerConnectionList;
        });
