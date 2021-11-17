import { mount, enableAutoUnmount } from "@vue/test-utils";
import { beforeEach, afterEach, expect } from "@jest/globals";
import Component from "~/layouts/loggedIn";
import { createTestingPinia } from "@pinia/testing";
import { useAuthStore } from "~/store/useAuth";
import authPlugin from "~/plugins/auth"

let wrapper;

beforeEach(() => {
  wrapper = mount(Component, { global: { plugins: [createTestingPinia(), authPlugin] } });
});

enableAutoUnmount(afterEach);

describe("Test suite for loggedIn layout", () => {
  it("is a vue component", () => expect(wrapper.vm).toBeTruthy());

  it("match snapshot when user is logged out", () => expect(wrapper.html()).toMatchSnapshot());

  it("match snapshot when user is logged in", () => {
    const auth = useAuthStore();

    auth.$state = {
      loggedIn: true,
      user: {
        id: 1,
        name: "Lindrit Krasniqi",
        email: "lindritkrasniqi@example.com",
      },
    };

    expect(wrapper.html()).toMatchSnapshot();
  });
});
