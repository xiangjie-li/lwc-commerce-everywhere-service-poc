const targetURL = 'http://localhost:8081/consumer_mapper/configs';

export const getConsumerMappingList = () =>
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
            var consumerMappingList = result;
            return consumerMappingList;
        });
