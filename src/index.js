import EasyHTTP from './easyhttp3';

const http = new EasyHTTP();

//Get Users
http
  .get('http://localhost:3000/users/')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
};

// Create User
// http
//   .post('http://localhost:3000/users', data)
//   .then(returnData => console.log(returnData))
//   .catch(err => console.log(err));

//Update User
// http
//   .put('http://localhost:3000/users/2', data)
//   .then(returnData => console.log(returnData))
//   .catch(err => console.log(err));

// Delete User
// http
//   .delete('http://localhost:3000/users/11')
//   .then(returnData => console.log(returnData))
//   .catch(err => console.log(err));
