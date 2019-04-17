import {default as exo0} from './exo-0/exo';
import {default as exo1} from './exo-1/exo';
import {default as exo2} from './exo-2/exo';
import {default as exo3} from './exo-3/exo';
import {default as exo4} from './exo-4/exo';
import {default as exo5} from './exo-5/exo';
import {default as exo6} from './exo-6/exo';
import {default as exo7} from './exo-7/exo';

export interface Exercise {
    type?: string;
    name: string;
    codelab: string;
    runner: () => any;
    tests: () => Promise<any>;
}

export const exos: Exercise[] = [
    {
        name: "Oldies...",codelab: 'oldies',
        runner: () => exo0("42"),
        tests: () => import( /* webpackChunkName: "test-0" */ './exo-0/exo.spec')
    },
    {
        name: "Hello World",
        codelab: 'hello-world',
        runner: () => exo1(),
        tests: () => import( /* webpackChunkName: "test-1" */ './exo-1/exo.spec')
    },
    {
        name: "Life cycle Hooks",
        codelab: 'lifecycle-hooks',
        runner: () => exo2(),
        tests: () => import( /* webpackChunkName: "test-2" */ './exo-2/exo.spec')
    },
    {
        name: "Attributes",
        codelab: 'attributes',
        runner: () => exo3(),
        tests: () => import( /* webpackChunkName: "test-3" */ './exo-3/exo.spec')
    },
    {
        name: "Observe attributes",
        codelab: 'observe-attributes',
        runner: () => exo4(),
        tests: () => import( /* webpackChunkName: "test-4" */ './exo-4/exo.spec')
    },
    {
        type: "Custom Elements", name: "Events",
        codelab: 'events',
        runner: () => exo5(),
        tests: () => import( /* webpackChunkName: "test-5" */ './exo-5/exo.spec')
    },
    {
        type: "Shadow DOM", name: "Shadow DOM",
        codelab: 'shadow-dom',
        runner: () => exo6(),
        tests: () => import( /* webpackChunkName: "test-6" */ './exo-6/exo.spec')
    },
    {
        type: "HTML Template", name: "HTML Template",
        codelab: 'html-template',
        runner: () => exo7(),
        tests: () => import( /* webpackChunkName: "test-7" */ './exo-7/exo.spec')
    }
];

export const prefix = '#exo-';