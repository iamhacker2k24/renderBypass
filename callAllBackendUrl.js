const { default: axios } = require('axios')

require('dotenv').config()
const URL1 = process.env.WEBSITE_URL1
const URL2 = process.env.WEBSITE_URL2
const URL3 = process.env.WEBSITE_URL3
const URL4 = process.env.WEBSITE_URL4
const callAllBackendUrl = async () => {
    try {
        await axios.get(URL1)
        await axios.get(URL2)
        await axios.get(URL3)
        await axios.get(URL4)
        // console.log(res)
        console.log("working")
        return true
    } catch (error) {
        console.log(error.message)
    }
}
callAllBackendUrl()

module.exports = callAllBackendUrl