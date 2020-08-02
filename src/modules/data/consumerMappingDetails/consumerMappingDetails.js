export const getConsumerMapping = (consumerName, configName) =>
    fetch(
        'http://localhost:8081/consumer_mapper/config/' +
            consumerName +
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
            var consumerMappingConfig = result;
            return consumerMappingConfig;
        });
