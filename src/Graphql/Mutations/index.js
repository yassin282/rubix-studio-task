import {
  gql
} from "@apollo/client";
const CREATE_TASK = gql`
  mutation createTask($input: TaskCreateInput!) {
    createTask(data: $input){
      id
      title
      description
      completed
    }
    
  }  
  `;
const DELETE_TASK = gql`
  mutation($id: ID! ) {
      deleteTask(where: { id:$id }) {
        id
      
      }
    }
  `;

const EDIT_TASK = gql`
mutation ($id:ID!,$data: TaskUpdateInput!) {
    updateTask(
      where: { id: $id}
      data: $data    
    ) {
      id
      title
      dueDate
      description
      completed
    }
  }`;
export { CREATE_TASK, EDIT_TASK, DELETE_TASK }