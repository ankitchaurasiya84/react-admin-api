import * as React from "react";
import { Admin, ListGuesser, SearchInput, EmailField, Resource, List, Datagrid, TextField, Create, SimpleForm, TextInput } from 'react-admin';
import {dataProvider} from './dataProvider'; // Make sure this is the correct path to your dataProvider

// Define your filters with a SearchInput
const UserFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search by email" />
];

// User List with Filters
const UserList = (props) => (
    <List {...props} filters={UserFilters} title="User List">
        <Datagrid rowClick="edit">
            <TextField source="email" />
            <EmailField source="password" />
        </Datagrid>
    </List>
);

// Main App Component
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="getlogin" list={UserList} />
    </Admin>
);

export default App;
