export const getConsumerConfig = (consumer) =>
    fetch('http://localhost:8081/connection/config/consumer/' + consumer, {
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
            var consumerConfig = result;
            return consumerConfig;
        });
