import { useState } from "preact/hooks";
import getTime from "../libs/getTime";
import axios from "axios";

function UploadPasswords() {
  const [fecha, setFecha] = useState("");
  const [passwords, setPasswords] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      yearFromUser,
      monthFromUser,
      dayFromUser,
      hoursFromUser,
      minutesFromUser,
    } = getTime(fecha);

    const parsedPasswords = passwords
      .split("\n")
      .filter((password) => password.trim() !== "");

    axios
      .post(`${import.meta.env.VITE_DEV_HOST}/passwords`, {
        passwordID: crypto.randomUUID(),
        passwords: parsedPasswords,
        year: yearFromUser,
        month: monthFromUser,
        day: dayFromUser,
        hours: hoursFromUser,
        minutes: minutesFromUser,
      })
      .then((res) => {
        setCodigo(res.data.passwordID);
      })
      .catch((err) => alert(err));

    setFecha("");
    setPasswords("");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-y-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-y-4 w-full "
      >
        <input
          type="datetime-local"
          onChange={(e) => setFecha(e.target.value)}
          value={fecha}
          required
        />
        <textarea
          className="w-[70%] border border-black"
          name="passwords"
          id="passwords"
          cols="30"
          rows="10"
          onChange={(e) => setPasswords(e.target.value)}
          required
        ></textarea>
        <input
          type="submit"
          value="Upload"
          className="px-4 py-2 bg-green-500"
        />
      </form>
      {codigo.length > 0 && (
        <div className="flex flex-col items-center justify-center">
          <p>
            Guarda este Codigo es muy importante para recuperar tus contraseñas
          </p>
          <span className="text-red-500">{codigo}</span>
        </div>
      )}
    </div>
  );
}

export default UploadPasswords;
