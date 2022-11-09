console.log("ok")


const apiUrl = 'http://localhost:3001'
const getUrl = apiUrl + '/user/12/activity'

const containt = fetch(getUrl)
  .then((response) => response.json())
  .then((data) => data);

const page =  document.getElementById('root')

console.log(containt)

page.appendChild.containt