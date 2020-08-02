const targetURL = 'http://localhost:8081/producer_mapper/configs';

export const getProducerMappingList = () =>
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
            var producerMappingList = result;
            return producerMappingList;
        });
