import { getJoke } from "../../services";

export default function handler(req, res) {
  res.status(200).json({ joke: getJoke() });
}
