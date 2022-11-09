export const _ = {
	cls(value: string) {
		return value
			.replace(/\s+/gm, ' ')
			.split(' ')
			.filter((condition) => typeof condition === 'string')
			.join(' ')
			.trim()
	},
}
