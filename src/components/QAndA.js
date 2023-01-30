import { decode } from "html-entities";
export default function QAndA(props) {
  /* Decode html entities to display characters. */
  function formatData(data) {
    return decode(data);
  }

  return (
    <div className="q-and-a">
    </div>
  );
}
