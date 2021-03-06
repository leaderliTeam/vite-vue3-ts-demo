import { Router, createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';
import { IMenubar } from '@/type/layout';
import LayOut from '@/components/layout/index.vue';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const modules = import.meta.globEager('./modules/*.ts');
const demo: Array<IMenubar> = Object.keys(modules).map((path: string) => modules[path].default);


// console.log(demo);
export const allowRouter: ({ redirect: string; path: string; component: any; children: ({ path: string; component: () => any; meta: { icon: string; title: string }; name: string } | { path: string; component: () => any; meta: { icon: string; title: string }; name: string } | { path: string; component: () => any; meta: { icon: string; title: string }; name: string })[]; meta: { icon: string; title: string }; name: string } | IMenubar | { path: string; component: any; children: { path: string; component: () => any; meta: { icon: string; title: string }; name: string }[]; meta: { icon: string; title: string }; name: string } | { path: string; component: () => any; meta: { show: boolean; title: string }; name: string } | { path: string; component: any; children: { path: string; component: () => any; meta: { icon: string; title: string }; name: string }[]; meta: { icon: string; title: string }; name: string } | { path: string; component: any; children: ({ path: string; component: () => any; meta: { icon: string; title: string }; name: string } | { path: string; component: () => any; meta: { icon: string; title: string }; name: string } | { path: string; component: () => any; meta: { icon: string; title: string }; name: string })[]; meta: { icon: string; title: string }; name: string } | { path: string; component: any; children: ({ path: string; component: () => any; meta: { icon: string; title: string }; name: string } | { path: string; component: () => any; meta: { icon: string; title: string }; name: string })[]; meta: { icon: string; title: string }; name: string })[] = [
    {
        name: '',
        path: '/',
        meta: {
            title: '??????',
            icon: 'HomeFilled'
        },
        component: LayOut,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/itema.vue'),
                meta: {
                    title: '??????',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: '??????',
                    icon: 'Setting'
                }
            },
            {
                path: '/flow',
                name: 'flow',
                component: () => import('@/views/flow/index.vue'),
                meta: {
                    title: '??????',
                    icon: 'Connection'
                }
            }
        ]
    },
    ...demo,
    {
        path: '/404',
        name: '404',
        component: LayOut,
        meta: {
            title: '404',
            icon: 'Warning'
        },
        children: [
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/404/index.vue'),
                meta: {
                    title: '404',
                    icon: 'Warning'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: 'login',
            show: true
        }
    },
    {
        path: '/unify_route',
        name: '????????????',
        component: LayOut,
        meta: {
            title: '????????????',
            icon: 'Operation'
        },
        children:[
            {
                path: '/route_view',
                name: '????????????',
                component: () => import('@/views/unify_route/route_view.vue'),
                meta: {
                    title: '??????????????????',
                    icon: 'Avatar'
                }
            }
        ]
    },
    {
        path: '/jinscene',
        name: 'scene',
        component: LayOut,
        meta: {
            title: '??????',
            icon: 'Setting'
        },
        children: [
            {
                path: '/jinscene',
                name: 'scene',
                component: () => import('@/views/scene/jinscene.vue'),
                meta: {
                    title: '??????',
                    icon: 'Setting'
                }
            },
            {
                path: '/clipboard',
                name: 'clipboard',
                component: () => import('@/views/scene/clipboard.vue'),
                meta: {
                    title: 'clipboard',
                    icon: 'Setting'
                }
            },
            {
                path: '/uploading',
                name: 'upload',
                component: () => import('@/views/scene/uploading.vue'),
                meta: {
                    title: 'uploading',
                    icon: 'Setting'
                }
            }

        ]
    },
    {
        path: '/variable_manage',
        name: '????????????',
        component: LayOut,
        meta: {
            title: '??????????????????',
            icon: 'Operation'
        },
        children:[
            {
                path: '/variable_manage',
                name: '????????????????????????',
                component: () => import('@/views/variable_manage/new_case_variable_page.vue'),
                meta: {
                    title: '????????????????????????',
                    icon: 'Avatar'
                }
            },
            {
                path: '/variable_manage',
                name: '????????????????????????',
                component: () => import('@/views/variable_manage/query_case_variable_page.vue'),
                meta: {
                    title: '????????????????????????',
                    icon: 'Avatar'
                }
            }
        ]
    }
];

const router: Router = createRouter({
    history: createMemoryHistory(),
    routes: allowRouter as RouteRecordRaw[]
});

export default router;
