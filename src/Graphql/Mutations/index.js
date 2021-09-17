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
export { CREATE_TASK }