var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
import {
  Users
} from './data/table.js'
let _Users = Users
export default {
  boot() {
    let mock = new MockAdapter(axios);
    mock.onGet('/users').reply(200, {
      users: [{
        id: 1,
        name: 'John Smith'
      }]
    });
    mock.onGet('/table').reply( () => {
      let a = { table: _Users}
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve([200, a])
        }, 10);
      })
    });
    mock.onPost('/changestatus').reply(config => {
        let b = JSON.parse(config.data)
        var t = typeof(b)
        b.params.forEach(i => {
            _Users.some(u => {
                if(u.id === i.id) {
                    u.status = !u.status
                }
            })
        })
        return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,b])
        }, 500);
      })
    })
  }
}
