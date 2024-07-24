import { Eureka } from 'eureka-js-client';

export const client = new Eureka({
    instance:{
        app: 'team-leader-service',
        instanceId: 'team-leader-service-instance',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:3000/info',
        port: {
            '$': 3000,
            '@enabled': true,
        },
        vipAddress: 'team-leader-service',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn'
        }
    },
    eureka: {
        host: '192.168.89.171',
        port: 8761
    }
});