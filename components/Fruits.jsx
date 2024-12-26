import Happy from "./Happy";
import Sad from "./Sad";

export default function Fruits() {
  let display = true;
  return display ? <Happy /> : <Sad />;
}
