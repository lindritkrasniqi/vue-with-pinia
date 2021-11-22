import { mount, enableAutoUnmount } from "@vue/test-utils";
import { beforeEach, afterEach, expect, jest } from "@jest/globals";
import Component from "~~/accounts/logout";
import { createTestingPinia } from "@pinia/testing";

let wrapper;

beforeEach(() => {
  wrapper = mount(Component, {
    global: {
      plugins: [createTestingPinia],
      mocks: {
        useRouter: jest.fn(() => ({
          push: jest.fn(),
        })),
      },
    },
  });
});

enableAutoUnmount(afterEach);

describe("Test suite for accounts logout page", () => {
  it("is a vue component", () => expect(wrapper.vm).toBeTruthy());

  it("match snapshot", () => expect(wrapper.html()).toMatchSnapshot());
});
