const { default: axios } = require('axios')
require('dotenv').config()

const URL1 = process.env.WEBSITE_URL1
const URL2 = process.env.WEBSITE_URL2
const URL3 = process.env.WEBSITE_URL3
const URL4 = process.env.WEBSITE_URL4

const callAllBackendUrl = async () => {
    const urls = [URL1, URL2, URL3, URL4]

    const results = await Promise.allSettled(
        urls.map(url => axios.get(url))
    )

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Server ${index + 1} started successfully`)
        } else {
            console.log(`Server ${index + 1} failed: ${result.reason.message}`)
        }
    })

    return true
}

callAllBackendUrl()

module.exports = callAllBackendUrl