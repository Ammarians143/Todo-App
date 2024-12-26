import { useState } from "react";

export default function Happy() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h1>I am Happy</h1>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        {name.firstName}
        <hr />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        {name.lastName}
      </form>
    </div>
  );
}
