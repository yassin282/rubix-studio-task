import {
  gql
} from "@apollo/client";
const TASKS = gql`
query{
  tasks {
    id
    title
    description
    dueDate
    createdAt
  }
}


  
`;
export { TASKS }