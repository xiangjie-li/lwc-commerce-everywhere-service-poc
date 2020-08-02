export const getRoutingConfig = (configName) =>
    fetch('http://localhost:8081/routing/config/' + configName, {
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
            var routingConfig = result;
            return routingConfig;
        });
