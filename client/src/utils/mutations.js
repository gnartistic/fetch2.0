import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
    token
    user {
        _id
        email
        firstName
        lastName
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
        _id
        username
        email
        firstName
        lastName
        }
    }
}
`;

export const ADD_TASK = gql`
mutation addTask($taskText: String!) {
    addTask(taskText: $taskText) {
        _id
        taskText
        createdAt
        username
    }
}
`;