import React from "react";
import { mount, shallow } from "enzyme";
import Counter from "./Counter";
import App from "./App";

describe("Counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    // console.log(wrapper.debug());
  });

  test("render the title of counter", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toEqual("This is a counter app");
  });

  test("render a button with text `+`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("+");
  });

  test("render a button with text `-`", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("-");
  });

  test("render a button with text `reset`", () => {
    expect(wrapper.find("#reset-btn").text()).toBe("Reset");
  });

  test("render initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of reset button and reset counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("2");
    wrapper.find("#reset-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("do not decrement under 0", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("disable decrement button when counter value is 0", () => {
    wrapper.find("#decrement-btn").simulate("click");
    const expected = { disabled: true };
    expect(wrapper.find("#decrement-btn").props()).toMatchObject(expected);
  });

  test("render background color", () => {
    wrapper.find("#aqua").simulate("click");
    expect(wrapper.find(".counterContainer").prop("style")).toHaveProperty(
      "backgroundColor",
      "aqua"
    );
  });
});
