import { expect, it } from "vitest";

it("テストの検証", () => {
	expect(add()).toBe(0);
	expect(add(1)).toBe(1);
	expect(add(1, 2, 3)).toBe(6);
});

const add = (...args: number[]) => args.reduce((acc, cur) => acc + cur, 0);
