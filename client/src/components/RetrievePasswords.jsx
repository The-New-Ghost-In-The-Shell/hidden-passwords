import { useState, useEffect } from "preact/hooks";
import getActualTime from "../libs/getActualTime";
import { dateOK } from "../libs/checkDate";
import { getPasswords } from "../libs/getPasswords";
function RetrievePasswords() {
  const [id, setID] = useState("");
  const [display, setDisplay] = useState("");
  const [now, setNow] = useState(getActualTime());

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisplay("Processing...");

    const response = await getPasswords(id);
    const isDateOK = dateOK(response, now);
    if (isDateOK) {
      setDisplay(response.passwords.join(","));
    } else {
      setDisplay("La fecha aun no ha pasado");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center mt-10 flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-y-4 w-full"
      >
        <input
          type="text"
          onChange={(e) => setID(e.target.value)}
          className="w-[70%] border border-black"
          required
        />
        <input
          type="submit"
          value={"Get Passwords"}
          className="px-4 py-2 bg-green-500"
        />
      </form>
      <div>{display}</div>
    </div>
  );
}

export default RetrievePasswords;
