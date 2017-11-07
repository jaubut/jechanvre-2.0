const contentful = require('contentful')

const config = {
  space: "nvumcalf96hg",
  accessToken: "403c9efdc90f301f12675589fda251bbff90832fd2dc5d7b92adc786e94ad3cc"
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
