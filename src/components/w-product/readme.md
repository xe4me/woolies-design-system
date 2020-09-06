# w-product



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type       | Default     |
| --------- | --------- | ----------- | ---------- | ----------- |
| `product` | --        |             | `IProduct` | `undefined` |


## Events

| Event       | Description | Type                    |
| ----------- | ----------- | ----------------------- |
| `addToCard` |             | `CustomEvent<IProduct>` |
| `addToList` |             | `CustomEvent<IProduct>` |


## Dependencies

### Used by

 - [w-app](../w-app)

### Depends on

- [w-box](../w-box)
- [w-typography](../w-typography)
- [w-btn](../w-btn)

### Graph
```mermaid
graph TD;
  w-product --> w-box
  w-product --> w-typography
  w-product --> w-btn
  w-app --> w-product
  style w-product fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
