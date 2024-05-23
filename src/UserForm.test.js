import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event';
import UserForm from "./UserForm";

test('it shows two inputs and a button', ()=>{
    //render the component
    render(<UserForm />);
    //manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //Assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

});

test('it calls onUserAdd when the form is submitted', ()=>{
    const argList = [];

    const callback = (...args)=>{
        argList.push(args)
    }

    render(<UserForm onUserAdd={callback}/>);

    const [nameInput, emailInput] = screen.getAllByRole('textbox');

    user.click(nameInput);
    user.keyboard('jane');

    user.click(emailInput);
    user.keyboard('jane@gmail.com');

    const button = screen.getByRole('button');
    user.click(button);

    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({name: 'jane', email: 'jane@gmail.com'});
})