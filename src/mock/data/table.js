import Mock from 'mockjs'
const Users = [];
const list = [{name:'aaa',id:'111'},{name:'aaa',id:'111'},{name:'aaa',id:'111'}]
for (let i = 0; i < 10; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    'status|1-2': true
  }));
}

export { Users , list };
