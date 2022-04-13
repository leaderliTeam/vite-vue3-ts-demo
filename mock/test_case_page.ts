// test.ts

import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/api/test_case_page',
        method: 'get',
        response: () => {
            return {
                code: 0,
                'list|10': [{
                    'id|+1': 'IVRT2204020001',
                    caseDesc:'@csentence(10)',
                    inputSeq:'mock',
                    expResultRule:'mock',
                    used:'mock',
                    reqId:'mock',
                    tester:'mock',
                    developer:'mock',
                    frontCaseId:'mock',
                    executeNum:'mock',
                    lastExecuteTime:'mock',
                    editState:'mock',
                    
                }]
            };
        }
    }
] as MockMethod[];
