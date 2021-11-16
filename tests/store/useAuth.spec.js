import { useAuthStore } from "~/store/useAuth";
import { setActivePinia, createPinia } from "pinia";
import { beforeEach, expect } from "@jest/globals";

let auth;

beforeEach(() => {
  setActivePinia(createPinia());

  auth = useAuthStore();
});

describe("Use Auth Store Test Suite", () => {
  it("is loggedIn false", () => expect(auth.loggedIn).toBeFalsy());

  it("is user null", () => expect(auth.user).toBeNull());
});
