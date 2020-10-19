This is an example using Event delegation in Cypress. The example test will click on a container at the exact coords of a child element.

### Installation

```
yarn install
```

### Testing

```
yarn cypress open
```

There are 2 examples:

- `example.spec.js`: Gets the relative coordinates of one element to another. Any action could be preformed from there
- `alias-example.spec.js`: Wraps up a `click` action right into the utility function, but has less nesting.
