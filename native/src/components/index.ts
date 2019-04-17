import { MainComponent } from './main/main.webcomponent';
import { NavbarComponent } from './navbar/navbar.webcomponent';

export const components: { [index: string]: Function } = {
    'dvx-main': MainComponent,
    'dvx-navbar': NavbarComponent
};