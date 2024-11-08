import { dateOK } from "../src/libs/checkDate.js";
describe("Tests for dateOK", () => {
    it("when year from now is greater than year from response it returns true", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2023, month: 12, day: 31, hours: 23, minutes: 59 };
        expect(dateOK(response, now)).toBe(true)
    })
    it("when month from now is greater than month from response but others are less than response values it returns false", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2024, month: 10, day: 20, hours: 10, minutes: 30 };

        expect(dateOK(response, now)).toBe(false)
    })
    it("When minutes from now are less than minutes from response it returns false", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2024, month: 11, day: 10, hours: 10, minutes: 30 };
        expect(dateOK(response, now)).toBe(false)
    })
    it("when hours from now is greater than hours from response i should return true", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 42 };
        const response = { year: 2024, month: 11, day: 15, hours: 20, minutes: 30 };

        expect(dateOK(response, now)).toBe(true)
    })
    it("when minutes from now are greater than minutes from response, it should retun true", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2024, month: 11, day: 15, hours: 21, minutes: 2 };

        expect(dateOK(response, now)).toBe(true)
    })
    it("when values from now and reponse are equal, it should return true", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        expect(dateOK(response, now)).toBe(true)
    })
    it("when minutes from response are greater than minutes from now, it should return false", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2024, month: 11, day: 15, hours: 21, minutes: 4 };

        expect(dateOK(response, now)).toBe(false)
    })
    it("when hours value from response is greater than hours value from now, it should return false", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2024, month: 11, day: 15, hours: 22, minutes: 0 };

        expect(dateOK(response, now)).toBe(false)
    })
    it("when day value from response is greater than day value from now, it should return false", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 35 };
        const response = { year: 2024, month: 11, day: 16, hours: 10, minutes: 30 };

        expect(dateOK(response, now)).toBe(false)
    })
    it("When month value from reponse is greater than month value from now, it should return false", () => {
        const now = { year: 2024, month: 11, day: 15, hours: 21, minutes: 3 };
        const response = { year: 2024, month: 12, day: 1, hours: 10, minutes: 30 };

        expect(dateOK(response, now)).toBe(false)
    })
    it("When values from now are less than values from response, it should return false", () => {
        const now = { year: 2024, month: 11, day: 11, hours: 12, minutes: 3 };
        const response = { year: 2024, month: 12, day: 15, hours: 30, minutes: 30 };
        expect(dateOK(response, now)).toBe(false)
    })
    it("When values from now are greater than values from response, it should return true", () => {
        const now = { year: 2024, month: 12, day: 16, hours: 18, minutes: 24 };
        const response = { year: 2024, month: 10, day: 9, hours: 14, minutes: 2 };
        expect(dateOK(response, now)).toBe(true)
    })
    it("When hours value and minutes value are 00 and now values are grater, it should return true", () => {
        const now = { year: 2024, month: 12, day: 16, hours: 18, minutes: 2 };
        const response = { year: 2024, month: 10, day: 9, hours: 0, minutes: 0 };
        expect(dateOK(response, now)).toBe(true)
    })
})