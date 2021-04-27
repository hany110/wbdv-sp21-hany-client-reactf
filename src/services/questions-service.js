const QUIZZES_URL = 'https://wbdv-assignment8-mongo-node.herokuapp.com/api/quizzes';
export const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}
export default api