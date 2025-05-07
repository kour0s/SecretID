import { useParams } from "react-router-dom";

function Room() {
  const { roomID } = useParams();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Salle : {roomID}</h2>
      <p className="mt-4 text-gray-600">D'autres joueurs peuvent rejoindre cette salle.</p>
    </div>
  );
}

export default Room;
