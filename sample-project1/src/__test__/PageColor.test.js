import { render, fireEvent } from "@testing-library/react";
import PageColor from "../PageColorChanger/PageColor";

describe(PageColor, () =>{
    it("has initial values set to hsl(0, 0%, 100%)", () => {
        const {getByTestId} = render(<PageColor/>);
        const color1 = getByTestId('color1').textContent;
        const color2 = getByTestId('color2').textContent;
        expect(color1).toEqual('hsl(0, 0%, 100%)');
        expect(color2).toEqual("hsl(0, 0%, 100%)");
    });

    it('should change the value inside the list elements', () => {
        const {getByRole, getByTestId} = render(<PageColor/>);
        const ClickMe = getByRole("button", {name: "Click Me"});
        fireEvent.click(ClickMe);
        const color1 = getByTestId("color1").textContent;
        const color2 = getByTestId("color2").textContent;
        expect(color1).not.toEqual("hsl(0, 0%, 100%)");
        expect(color2).not.toEqual("hsl(0, 0%, 100%)");
    })

    it('should return the value inside the list elements to original value', () => {
        const { getByRole, getByTestId } = render(<PageColor />);
        const ClickMe = getByRole("button", { name: "Click Me" });
        fireEvent.click(ClickMe);
        const Reset = (getByRole("button", {name: 'Reset'}));
        fireEvent.click(Reset);
        const color1 = getByTestId("color1").textContent;
        const color2 = getByTestId("color2").textContent;
        expect(color1).toEqual("hsl(0, 0%, 100%)");
        expect(color2).toEqual("hsl(0, 0%, 100%)");
    })
})