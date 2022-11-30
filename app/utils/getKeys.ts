export const getKeys = <T extends Record<string, unknown>>(object: T) =>
	Object.keys(object);
