export default interface SignUpUser{
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  email: string;
  password: string;
}