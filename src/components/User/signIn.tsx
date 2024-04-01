import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

const CreateProduct = ({setPopUp}: {setPopUp: any}) => {
  return (
    <div>
      <button
        onClick={() => setPopUp(true)}
        className="flex items-center space-x-2 bg-gray-400"
        style={{background: 'unset', border: 'unset'}}
      >
        <span className="hidden text-xs font-semibold text-neutral-900 md:inline md:text-sm">
          Criar Produto
        </span>
      </button>
    </div>
  );
}

export default CreateProduct