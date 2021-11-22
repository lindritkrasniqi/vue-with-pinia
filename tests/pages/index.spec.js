import { mount, enableAutoUnmount } from "@vue/test-utils";
import { beforeEach, afterEach, expect } from "@jest/globals";
import Component from "~~/index";
import authPlugin from "~/plugins/auth";
import { createTestingPinia } from "@pinia/testing";

let wrapper;

beforeEach(() => {
  wrapper = mount(Component, {
    global: { plugins: [createTestingPinia(), authPlugin] },
    shallow: true,
  });
});

enableAutoUnmount(afterEach);

describe("Test suite for index page", () => {
  it("is a vue component", () => expect(wrapper.vm).toBeTruthy());

  it("match snapshot", () => expect(wrapper.html()).toMatchSnapshot());
});
