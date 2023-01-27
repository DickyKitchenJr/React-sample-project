import { render, fireEvent, queryByTestId } from "@testing-library/react";
import Form from "../Form/Form";

describe(Form, () => {
    it('starts with empty strings as values', () => {
        const {getByTestId} = render(<Form/>);
        const firstName = getByTestId('firstName').nodeValue;
        const lastName = getByTestId('lastName').nodeValue;
        const Age = getByTestId('Age').nodeVale;
        expect(firstName).toBeNull;
        expect(lastName).toBeNull;
        expect(Age).toBeNull;
    })

    it('erases the input values after clicking Add To List button', () => {
        const { getByTestId, getByRole } = render(<Form />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const Age = getByTestId("Age");
        fireEvent.change(firstName, {target: {value: "John"}});
        fireEvent.change(lastName, {target: {value: 'Smith'}});
        fireEvent.change(Age, {target: {value: "21"}});
        const Add = getByRole("button", { name: "Add To List" });
        fireEvent.click(Add);
        expect(firstName).toBeNull;
        expect(lastName).toBeNull;
        expect(Age).toBeNull;
    })

    it('adds values to table body when form is completed', () => {
        const { getByTestId, getByRole } = render(<Form />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const Age = getByTestId("Age");
        fireEvent.change(firstName, { target: { value: "John" } });
        fireEvent.change(lastName, { target: { value: "Smith" } });
        fireEvent.change(Age, { target: { value: "21" } });
        const Add = getByRole("button", { name: "Add To List" });
        fireEvent.click(Add);
        const firstNameEntry = getByTestId("firstNameEntry").textContent;
        const lastNameEntry = getByTestId("lastNameEntry").textContent;
        const ageEntry = getByTestId("ageEntry").textContent;
        expect(firstNameEntry).toBe("John");
        expect(lastNameEntry).toBe("Smith");
        expect(ageEntry).toBe("21");
    })

    it('deletes the values when the X button is clicked', () => {
        const { getByTestId, getByRole, queryByTestId } = render(<Form />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const Age = getByTestId("Age");
        fireEvent.change(firstName, { target: { value: "John" } });
        fireEvent.change(lastName, { target: { value: "Smith" } });
        fireEvent.change(Age, { target: { value: "21" } });
        const Add = getByRole("button", { name: "Add To List" });
        fireEvent.click(Add);
        const Delete = getByRole("button", {name: "X"});
        fireEvent.click(Delete);
        const firstNameEntry = queryByTestId("firstNameEntry");
        const lastNameEntry = queryByTestId("lastNameEntry");
        const ageEntry = queryByTestId('ageEntry');
        expect(firstNameEntry).toBeEmptyDOMElement;
        expect(lastNameEntry).toBeEmptyDOMElement;
        expect(ageEntry).toBeEmptyDOMElement;
    })
})