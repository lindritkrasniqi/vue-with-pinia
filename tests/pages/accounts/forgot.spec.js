import { mount, enableAutoUnmount } from "@vue/test-utils";
import { beforeEach, afterEach, expect } from "@jest/globals";
import Component from "~~/accounts/forgot";

let wrapper;

beforeEach(() => {
  wrapper = mount(Component, { shallow: true });
});

enableAutoUnmount(afterEach);

describe("Test suite for accounts forgot page", () => {
  it("is a vue component", () => expect(wrapper.vm).toBeTruthy());

  it("match snapshot", () => expect(wrapper.html()).toMatchSnapshot());
});
