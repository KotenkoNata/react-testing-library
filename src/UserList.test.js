import {render, screen, within} from "@testing-library/react";
import UserList from "./UserList";

test('render one row per user', ()=>{
    const users = [
        {name: "John", email: "john@example.com"},
        {name: "Jane", email: "Jane@example.com"},
    ]
    render(<UserList users={users} />);

    const rows = within(screen.getByTestId('users')).getAllByRole('row')

    expect(rows).toHaveLength(2)
})

test('render the email and name of each user', ()=>{

})