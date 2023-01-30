import { useState, useEffect } from "react";
import { decode } from "html-entities";
export default function QAndA(props) {
  const [question] = useState(formatData(props.item.question));
  /* Decode html entities to display characters. */
  function formatData(data) {
    return decode(data);
  }

  return (
    <div className="q-and-a">
      <p className="question">{question}</p>
    </div>
  );
}
