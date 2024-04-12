const CheckDate = require('../functions/CheckDate');
describe("CheckDateTest", () => {
    test("0/1/2001 (d/m/y)", () => {
        expect(CheckDate(0, 1, 2001)).toBe(false);
    });
    test("32/1/2001 (d/m/y)", () => {
        expect(CheckDate(32, 1, 2001)).toBe(false);
    });
    test("29/02/2001 (d/m/y)", () => {
        expect(CheckDate(29, 2, 2001)).toBe(false);
    });
    test("29/13/2001 (d/m/y)", () => {
        expect(CheckDate(29, 13, 2001)).toBe(false);
    });
    test("29/1/999 (d/m/y)", () => {
        expect(CheckDate(29, 1, 999)).toBe(false);
    });
    test("29/1/3001 (d/m/y)", () => {
        expect(CheckDate(29, 1, 3001)).toBe(false);
    });
    test("1/1/1000 (d/m/y)", () => {
        expect(CheckDate(1, 1, 1000)).toBe(true);
    });
    test("29/2/2001 (d/m/y)", () => {
        expect(CheckDate(29, 2, 2001)).toBe(false);
    });
    test("29/2/2000 (d/m/y)", () => {
        expect(CheckDate(29, 2, 2000)).toBe(true);
    });
    test("31/2/2000 (d/m/y)", () => {
        expect(CheckDate(31, 2, 2000)).toBe(false);
    });
    test("30/4/2000 (d/m/y)", () => {
        expect(CheckDate(30, 4, 2000)).toBe(true);
    });
    test("30/2/2000 (d/m/y)", () => {
        expect(CheckDate(30, 2, 2000)).toBe(false);
    });
    test("31/12/3000 (d/m/y)", () => {
        expect(CheckDate(31, 12, 3000)).toBe(true);
    });
})