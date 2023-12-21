// (GET) Full UserList
export const myFetchGetRequest = async () => {
  try {
    const response = await fetch('https://dummyapi.io/data/v1/user', {
      method: 'GET',
      headers: {'app-id': '657fd4972be2bb46640d615f'},
    });
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};

// (POST) Add User
export const myFetchPostRequest = async () => {
  try {
    const response = await fetch('https://dummyapi.io/data/v1/user/create', {
      method: 'POST',
      headers: {
        'app-id': '657fd4972be2bb46640d615f',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'naimishpatel45@example.com',
        firstName: 'dssd',
        lastName: 'dsds',
      }),
    });
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};

// (PUT)
export const myFetchPutRequest = async () => {
  try {
    const response = await fetch('https://dummyapi.io/data/v1/user/:id', {
      method: 'PUT',
      headers: {
        'app-id': '657fd4972be2bb46640d615f',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'fenil',
        lastName: 'ramani',
      }),
    });
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};
