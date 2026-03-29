export class AutoMap<K, V> extends Map<K, V> {
	readonly #fallbackHandler

	constructor(fallbackHandler: (key: K) => V) {
		super()
		this.#fallbackHandler = fallbackHandler
	}

	override get(key: K): V {
		if (super.has(key))
			return super.get(key)!

		const value = this.#fallbackHandler(key)

		super.set(key, value)

		return value
	}
}

Object.defineProperty(AutoMap.prototype, Symbol.toStringTag, { value: `AutoMap` })
