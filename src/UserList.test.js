import {render, screen} from "@testing-library/react";
import UserList from "./UserList";

test('render one row per user', ()=>{
    const users = [
        {name: "John", email: "john@example.com"},
        {name: "Jane", email: "Jane@example.com"},
    ]
    render(<UserList users={users} />);


})

test('render the email and name of each user', ()=>{

})