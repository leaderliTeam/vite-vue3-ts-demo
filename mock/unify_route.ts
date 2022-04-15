// test.ts

import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/route/findAllRouteRule',
        method: 'get',
        response: () => {
            return {
                code: 0,
                'list|10': [{
                    'id|+1': 1,
                    routeName:'@cname(3)',
                    'priority|+1': 1,
                    routeRule:'夜间技能',
                    skillcode:'@natural(1,100)',
                    routeState:'启用',
                    createTime:'@date',
                    updateTime:'@date'
                }]
            };
        }
    }
] as MockMethod[];
