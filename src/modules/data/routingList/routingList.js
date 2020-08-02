const targetURL = 'http://localhost:8081/routing/configs';

export const getRoutingList = () =>
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
            var routingList = result;
            return routingList;
        });
