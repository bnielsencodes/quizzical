
export default function QAndA(props) {

  function handleSelectAnswer(answer) {
    if (props.item.checked) {
      return;
    }
    props.selectAnswer(props.id, answer);
  }

    return (
      </button>
    );
  });

  return (
    <div className="q-and-a">
    </div>
  );
}
