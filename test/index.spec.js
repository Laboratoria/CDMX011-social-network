/* eslint-disable */

/**
 * @jest-environment jsdom
 */

import { toViewHome } from '../src/components/Home.js';

describe("Colección de test en Home", () => {
    const renderizado = toViewHome();
    it("Test sobre render en Home", () => {
        console.log(renderizado);
        expect(typeof myFunction).toBe("function");
    });
});

