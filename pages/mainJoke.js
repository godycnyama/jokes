import { useState } from "react";
import { getJoke } from "../services/jokesService";

export default function MainJoke(props) {
  const [joke, setJoke] = useState(props.initialJoke);

  async function refresh() {
    const res = await fetch(`${url}/api/joke`);
    const body = await res.json();
    setJoke(body.text);
  }

  return (
    <main>
      <h3>Dad says..</h3>
      <p>{joke}</p>
      <button type="button" onClick={() => refresh()}>
        Tell me another one
      </button>
    </main>
  );
}

export async function getServerSideProps(context) {
  const joke = getJoke(context.req);
  return {
    props: {
      initialJoke: joke.text,
    },
  };
}
