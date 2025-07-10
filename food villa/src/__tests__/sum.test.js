import sum from "../components/sum";

test("adds two numbers",() => {
    expect(sum(2,5)).toBe(7);
});