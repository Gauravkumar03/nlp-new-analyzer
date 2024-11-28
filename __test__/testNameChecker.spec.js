import { checkForName } from "../src/client/js/nameChecker.js";

describe('checkForName function', () => {
    test('returns true for a valid URL', () => {
        const validURL = 'https://example.com';
        const result = checkForName(validURL);
        expect(result).toBe(true);
    });

    test('returns false for an invalid URL', () => {
        const invalidURL = 'invalid-url';
        const result = checkForName(invalidURL);
        expect(result).toBe(false);
    });

    test('returns false for an empty string', () => {
        const emptyString = '';
        const result = checkForName(emptyString);
        expect(result).toBe(false);
    });

    test('returns true for a valid URL with query parameters', () => {
        const validURLWithQuery = 'https://example.com?query=test';
        const result = checkForName(validURLWithQuery);
        expect(result).toBe(true);
    });
});