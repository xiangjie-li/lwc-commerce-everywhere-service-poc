// const proxyURL1 = "https://dry-woodland-28213.herokuapp.com/"
// const proxyURL2 = "https://cors-anywhere.herokuapp.com/"

export const getProducerConfig = (producer) =>
    fetch('http://localhost:8081/connection/config/producer/' + producer, {
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
            var producerConfig = result;
            return producerConfig;
        });

// export function getProducerConfig() {
//     return axios.get('http://localhost:8081/connection/config/producer/ecom')
// }

// export const getSession = sessionId => {
//   return sessions.find(session => {
//     return session.id === sessionId;
//   });
// }

// currently I just use pre-defined data, this is not a asychronous call
// export const getProducerConfig = () => {
//     let producerConfig = {
//         "hostName": "staging-functional37-qa.demandware.net",
//         "client_id": "6c957560-464f-4a98-ad0f-5e9662527e27"
//     }
//     return producerConfig;
// }
