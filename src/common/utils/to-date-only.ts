export function toDateOnly(date: Date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
