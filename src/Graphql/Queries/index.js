import {
  gql
} from "@apollo/client";
const TASKS = gql`
query tasks($first: Int, $skip: Int) {
  tasks(skip: $skip, first: $first) {
    id
    title
    description
    dueDate
    completed
  }
}`;
// query{
//   tasks {
//     id
//     title
//     description
//     dueDate
//     createdAt
//     completed
//   }
// }



// `;
export {
  TASKS
}