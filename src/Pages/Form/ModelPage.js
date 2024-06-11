import { useState } from "react";
import Form from "./Form";

const ModelPage = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-white">
      <h1 className="text-5xl font-bold mt-4">Popup Model</h1>
      <button
        onClick={() => setShowModel(true)}
        className="bg-indigo-500 px-4 py-2 rounded-lg text-lg"
      >
        Join
      </button>
      {showModel && <Form onClose={() => setShowModel(false)} />}
    </div>
  );
};

export default ModelPage;
