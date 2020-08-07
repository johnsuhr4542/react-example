export default {
  login: (username, password) => new Promise((resolve, reject) => {
    if (username === 'system' && password === 'system')
      return resolve({ username, authorities: ['ROLE_SYSTEM', 'ROLE_ADMIN'] });
    else
      return reject({ message: 'unauthorized' });
  })
}