import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { add }from '../../library/utilities/Storage';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [login] = useMutation(gql`
    mutation Login ($email: String!, $password: String!) {
      signIn(input: { params: {email: $email, password: $password, grantType: "password"}}) {
        user{
          id
          email
        }
        token
      }
    }
  `, {
    onCompleted: (response) => {
      add('token', 'Bareer' + response.signIn.token)
    }
  });
  const onSubmit = ({ email, password }) => {
    login({variables: {email, password}});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("email", {required: true})} />
      <input {...register("password", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  )
};

export default LoginForm;
