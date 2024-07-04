import { useState, useEffect } from "preact/hooks";
function RetrievePasswords() {
  const [id, setID] = useState("");
  const [display, setDisplay] = useState("");

  useEffect(() => {
    console.log("Done");
  }, [display]);

  const now = new Date();
  const [year, month, day] = now.toISOString().split("T")[0].split("-");

  const actualHours = parseInt(now.getHours()),
    actualMinutes = parseInt(now.getMinutes()),
    actualYear = parseInt(year),
    actualMonth = parseInt(month),
    actualDay = parseInt(day);

  const dateOK = (response) => {
    if(actualYear >= response.year && actualMonth >= response.month && actualDay >= response.day && actualHours >= response.hours && actualMinutes >= response.minutes){
      return true
    }
  }

  const getPasswords = async (idFromUser) => {
    try {
      const request = await fetch(`https://hidden-passwords-b3rl.onrender.com/passwords/${idFromUser}`,{
        method:"GET"
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error) 
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisplay("Processing...")

    const response = await getPasswords(id)
    const isDateOK = dateOK(response)
    if(isDateOK){
      setDisplay(response.passwords.join(","))
    }else{
      setDisplay("La fecha aun no ha pasado")
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
