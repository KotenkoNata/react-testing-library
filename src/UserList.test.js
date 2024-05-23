import {render, screen, within} from "@testing-library/react";
import UserList from "./UserList";

test('render one row per user', ()=>{
    const users = [
        {name: "John", email: "john@example.com"},
        {name: "Jane", email: "Jane@example.com"},
    ]
    const {container} = render(<UserList users={users} />);

    const rows = container.querySelectorAll('tbody tr');

    expect(rows).toHaveLength(2)
})

test('render the email and name of each user', ()=>{

})