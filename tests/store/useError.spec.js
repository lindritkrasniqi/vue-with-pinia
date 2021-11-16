import { useErrorStore } from "~/store/useError";
import { beforeEach, expect } from "@jest/globals";
import { setActivePinia, createPinia } from "pinia";

let error;

beforeEach(() => {
  setActivePinia(createPinia());

  error = useErrorStore();
});

describe("use error Store test suites", () => {
  it("is message null", () => expect(error.message).toBeNull());

  it("is errors empty object", () => expect(error.errors).toMatchObject({}));
});
