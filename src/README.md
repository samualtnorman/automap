<%
const { readFileSync } = await import("fs")
const { env, getPackageJson } = it.Common

const PackageName =
	env(`TARGET`) == "jsr" ? env(`JSR_NAME`) : getPackageJson().name
%>
# AutoMap
Requires Node.js 20.10+, 22.0+, 24.0+, or above.

## Example
```js
import { AutoMap } from "<%= PackageName %>"

const example = new AutoMap(() => [])

example.get("foo").push("bar")
console.log(example) // AutoMap { "foo" => [ "bar" ] }
```
