# Custom Elements - Slots

## Goals:

- Learn about `<slot>` tag.

## Commands

Server : `npm run start-06`
Tests : `npm test -- -t 06`

## Description

The goal enable named slots in `stencil-card` then use them in `stencil-users`

### Steps stencil-card

1. create three named slots: `title`, `subtitle` and `content` in the right position (see comments in the render method)

### Steps stencil-users

1.  Loop through users and use `stencil-card` named slots to display user's `name`, `location` and `bio` (see comments in the render method)

## Links

- [Slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
- [Named Slots example](https://alligator.io/web-components/composing-slots-named-slots/)

## Next

Try LitElement exercise 

## TODO

Add going further part with Functional Components, Routing, State Management, ...