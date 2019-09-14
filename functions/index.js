const functions = require('firebase-functions')

exports.submitAnswer = functions.https.onRequest((request, response) => {
  if (request.method !== "POST") {
    return response.status(405).end()
  }


  const result = {
    result: 'ok'
  }
  return response.status(201).json(result)
})
