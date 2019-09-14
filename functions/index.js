const functions = require('firebase-functions')

//
// # request (application/x-www-form-urlencoded)
// - "language_name": "js",
// - "task_name": "sort",
// - "answer": "コードがそのまま入っている"
//
// # response
// {
//   "result": "ok"
// }
//
exports.submitAnswer = functions.https.onRequest((request, response) => {
  if (request.method !== "POST") {
    return response.status(405).end()
  }
  const requestData = request.body
  const languageName = requestData.language_name
  const taskName = requestData.task_name
  const code = requestData.answer

  const execResult = execAnswer(languageName, taskName, code)
  const result = {
    result: execResult ? 'ok' : 'ng'
  }

  return response.status(201).json(result)
})

// returns bool
const execAnswer = (languageName, taskName, code) => {
  console.log(`language: ${languageName}`)
  console.log(`taskName: ${taskName}`)
  console.log(`code: ${code}`)

  return true
}
