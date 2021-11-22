import { mount, enableAutoUnmount } from "@vue/test-utils";
import { beforeEach, afterEach, expect } from "@jest/globals";
import Component from "~~/404";

let wrapper;

beforeEach(() => {
  wrapper = mount(Component);
});

enableAutoUnmount(afterEach);

describe("Test suite for 404 page", () => {
  it("is a vue component", () => expect(wrapper.vm).toBeTruthy());

  it("match snapshot", () => expect(wrapper.html()).toMatchSnapshot());
});
