import React from "react";
import App from "./App";
import {shallow} from "enzyme";


describe("App", () => {
    it("should render app", () => {
        const appWrapper = shallow(<App/>)
    })
})
