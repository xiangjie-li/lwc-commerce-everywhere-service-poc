export const getProducerMapping = (producerName, configName) =>
    fetch(
        'http://localhost:8081/producer_mapper/config/' +
            producerName +
            '/' +
            configName,
        {
            method: 'GET'
            // mode: 'cors',
            // headers: headers
        }
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then((result) => {
            var producerMappingConfig = result;
            return producerMappingConfig;
        });
