import { Component, State } from '@stencil/core';

interface IUser {
    name: string;
    location: string;
    bio: string;
}

@Component({
    tag: 'stencil-users',
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `,
    shadow: true,
})
export class StencilUsers {
    @State() users: IUser[] = [{
        name: 'Luke Skywalker', location: 'Tatooine', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis posuere venenatis. Vivamus interdum sed justo nec porta. Sed ac sagittis diam. Praesent vestibulum efficitur porta. Aliquam commodo ultricies nibh, at faucibus orci condimentum non. Proin sed dignissim purus.'
    }, {
        name: 'C-3PO', location: 'Tatooine', bio: 'Duis eleifend, elit vitae efficitur vestibulum, tellus eros sollicitudin dolor, a bibendum erat mauris vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In laoreet sodales commodo. Donec nec malesuada arcu, et luctus lacus. '
    }, {
        name: 'R2-D2', location: 'Naboo', bio: 'Duis eleifend, elit vitae efficitur vestibulum, tellus eros sollicitudin dolor, a bibendum erat mauris vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In laoreet sodales commodo. Donec nec malesuada arcu, et luctus lacus. '
    }, {
        name: 'Darth Vader', location: 'Tatooine', bio: 'Quisque vehicula, velit vel pretium consequat, enim nisl molestie tellus, vel ultricies ligula arcu ac ligula. Duis egestas, est vel lobortis faucibus, urna ligula porttitor sem, ornare faucibus nibh nibh et urna. Morbi ac consequat turpis.'
    }, {
        name: 'Leia Organa', location: 'Alderaan', bio: 'Sed eleifend sem a nulla finibus, mollis bibendum lacus congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer volutpat, metus tempor efficitur euismod, velit risus ultricies ante, quis semper felis est in purus. '
    }];

    render() {
        // @todo 3: Loop through users and use `stencil-card` named slots:
        // `title` to display {user.name}
        // `subtitle` to display {user.location}
        // `content` to display {user.bio}
        return (<stencil-card />);
    }
}