# w-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default     |
| -------- | --------- | ----------- | ------- | ----------- |
| `card`   | --        |             | `ICard` | `undefined` |


## Events

| Event       | Description | Type                 |
| ----------- | ----------- | -------------------- |
| `addToCard` |             | `CustomEvent<ICard>` |
| `addToList` |             | `CustomEvent<ICard>` |


## Dependencies

### Used by

 - [w-card-list](../w-card-list)

### Depends on

- [w-box](../w-box)
- [w-typography](../w-typography)
- [w-btn](../w-btn)

### Graph
```mermaid
graph TD;
  w-card --> w-box
  w-card --> w-typography
  w-card --> w-btn
  w-card-list --> w-card
  style w-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
