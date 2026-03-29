#!node_modules/.bin/rolldown --config
import { rolldownConfig } from "@samual/rolldown-config"
import Path from "path"
import { env } from "./scripts/common.js"

export default rolldownConfig(env("TARGET") != "jsr" ? undefined : {
	rolldownOptions: { output: { banner: chunk => `// @ts-self-types="./${Path.basename(chunk.name)}.d.ts"` } },
	terserOptions: { format: { comments: /@ts-self-types/ } }
})
