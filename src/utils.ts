export function secondsToString(num: number) {
	const minutes = String(Math.floor(num / 60)).padStart(2, '0');
	const secondsWithMillis = (num % 60).toFixed(3).split('.');
	const seconds = secondsWithMillis[0].padStart(2, '0');
	const millis = secondsWithMillis[1];

	return `${minutes}:${seconds}.${millis}`;
}

export function secondsToNumber(stmp: string): number {
	const nums = stmp.split(':').map((x) => Number.parseFloat(x));
	return nums[1] + nums[0] * 60;
}

export function range(a: number, b: number): number[] {
	// Array of integers between and including a and b, with a <= b
	return Array.from({length: b - a + 1}, (_, i) => a + i) as number[];
}

export function hasTimeOverlap(a: number[], b: number[]) {
	// Calculate if two time windows [tStart, tEnd] overlap
	return b[0] < a[0] ? b[1] > a[0] : b[0] <= a[1];
}