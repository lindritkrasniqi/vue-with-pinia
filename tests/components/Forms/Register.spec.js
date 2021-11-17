import { mount, enableAutoUnmount } from "@vue/test-utils";
import { beforeEach, afterEach, expect } from "@jest/globals";
import { createTestingPinia } from "@pinia/testing";
import Component from "~/components/Forms/Register";

let wrapper;

beforeEach(() => {
  wrapper = mount(Component, { global: { plugins: [createTestingPinia()] } });
});

enableAutoUnmount(afterEach);

describe("Register form test suite", () => {
  it("is a vue compoent", () => expect(wrapper.vm).toBeTruthy());

  it("match snapshot", () => expect(wrapper.html()).toMatchSnapshot());
});
