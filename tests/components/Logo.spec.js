import { mount, enableAutoUnmount } from "@vue/test-utils";
import { beforeEach, afterEach, expect } from "@jest/globals";
import Component from "~/components/Logo";

let wrapper;

beforeEach(() => {
  wrapper = mount(Component);
});

enableAutoUnmount(afterEach);

describe("Logo component test suite", () => {
  it("is a vue component", () => expect(wrapper.vm).toBeTruthy());
  
  it("match snapshot", () => expect(wrapper.html()).toMatchSnapshot());
});
