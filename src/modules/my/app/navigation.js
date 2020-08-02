const navigationItems = {
    home: {
        title: 'Home',
        value: 'home',
        visible: false
    },
    producer: {
        title: 'Producer Connection',
        value: 'producer',
        visible: false
    },
    consumer: {
        title: 'Consumer Connection',
        value: 'consumer',
        visible: false
    },
    mapping: {
        title: 'Data Mapping',
        value: 'mapping',
        visible: false
    },
    routing: {
        title: 'Data Routing',
        value: 'routing',
        visible: false
    }
};

const navigationElements = [
    'home',
    'producer',
    'consumer',
    'mapping',
    'routing'
];

export { navigationItems, navigationElements };
