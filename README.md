# AutoMap
Requires Node.js 20.10+, 22.0+, 24.0+, or above.

## Example
```js
import { AutoMap } from "@samual/automap"

const example = new AutoMap(() => [])

example.get("foo").push("bar")
console.log(example) // AutoMap { "foo" => [ "bar" ] }
```
