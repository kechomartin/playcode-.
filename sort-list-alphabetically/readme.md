# UPDATES README 

## SORTING-LIST-ALPHABETICALLY
### The sorting list program can also be created byt the following snippet 

```javascript
const sortObjKey = (obj) => {
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
}

```