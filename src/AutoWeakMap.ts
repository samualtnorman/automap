export class AutoWeakMap<K extends object, V> extends WeakMap<K, V> {
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

Object.defineProperty(AutoWeakMap.prototype, Symbol.toStringTag, { value: `AutoWeakMap` })
