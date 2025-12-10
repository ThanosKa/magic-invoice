import { describe, expect, it, vi } from "vitest";

import { formatPriceToString, getCurrencySymbol } from "./helpers";

vi.mock("to-words", () => {
  return {
    ToWords: class {
      localeCode: string;

      constructor({ localeCode }: { localeCode: string }) {
        this.localeCode = localeCode;
      }

      convert(value: number) {
        return `words-${this.localeCode}-${value}`;
      }
    },
  };
});

describe("formatPriceToString", () => {
  it("formats positive amounts with words and cents", () => {
    expect(formatPriceToString(123.45, "USD", "en-US")).toBe(
      "words-en-US-123 Dollars and words-en-US-45 Cents"
    );
  });

  it("adds a minus prefix for negative values", () => {
    expect(formatPriceToString(-1, "EUR", "en-US")).toBe(
      "Minus words-en-US-1 Euro"
    );
  });
});

describe("getCurrencySymbol", () => {
  it("returns known symbols or falls back to code", () => {
    expect(getCurrencySymbol("USD")).toBe("$");
    expect(getCurrencySymbol("ZZZ")).toBe("ZZZ ");
  });
});
