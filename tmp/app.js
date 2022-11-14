console.log("ok")


const apiUrl = 'http://localhost:3001'
const getUrl = apiUrl + '/user/12/activity'

async function getData() {
    await fetch(getUrl)
    .then(response => response.json())
    .then(data => {
        // const mom = JSON.stringify(data)
        const mom = data
        console.log(data.data.userId)
        console.log(mom.data)


        const html = document.createElement('div')
        html.innerHTML= mom.data.userId

    })
    .catch(error => console.log(error));
}

getData()

const page =  document.getElementById('root')

page.appendChild.html