const CheckDateInMonth = require('../functions/CheckDateInMonth');
describe("CheckDateInMonthTest", () => {
    test("1/2000", () => {
        expect(CheckDateInMonth(2000, 1)).toBe(31);
    });
    test("3/2000", () => {
        expect(CheckDateInMonth(2000, 3)).toBe(31);
    });
    test("5/2000", () => {
        expect(CheckDateInMonth(2000, 5)).toBe(31);
    });
    test("7/2000", () => {
        expect(CheckDateInMonth(2000, 7)).toBe(31);
    });
    test("8/2000", () => {
        expect(CheckDateInMonth(2000, 8)).toBe(31);
    });
    test("10/2000", () => {
        expect(CheckDateInMonth(2000, 10)).toBe(31);
    });
    test("12/2000", () => {
        expect(CheckDateInMonth(2000, 12)).toBe(31);
    });
    test("4/2000", () => {
        expect(CheckDateInMonth(2000, 4)).toBe(30);
    });
    test("6/2000", () => {
        expect(CheckDateInMonth(2000, 6)).toBe(30);
    }
    );
    test("9/2000", () => {
        expect(CheckDateInMonth(2000, 9)).toBe(30);
    });
    test("11/2000", () => {
        expect(CheckDateInMonth(2000, 11)).toBe(30);
    });
    test("2/2000", () => {
        expect(CheckDateInMonth(2000, 2)).toBe(29);
    });
    test("2/2001", () => {
        expect(CheckDateInMonth(2001, 2)).toBe(28);
    });
    test("2/2004", () => {
        expect(CheckDateInMonth(2004, 2)).toBe(29);
    });
    test("2/1900", () => {
        expect(CheckDateInMonth(1900, 2)).toBe(28);
    });
    test("13/2000", () => {
        expect(CheckDateInMonth(2000, 13)).toBe(0);
    });
});