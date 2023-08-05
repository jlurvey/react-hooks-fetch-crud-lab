import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  /* 
    const [questions, setQuestions] = useState([])
  
    //fetch data using useEffect
    useEffect(() => {
      fetch('http://localhost:4000/questions')
        .then((resp) => resp.json())
        .then((data) => setQuestions(data));
    }, []);
  
    function handleAddQuestion(newQuestion) {
      setQuestions([...questions, newQuestion]);
    };
   */
/* 
  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${questions.id}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then(() => onDeleteQuestion(question))
  };
 */
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateQuestion={onUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
