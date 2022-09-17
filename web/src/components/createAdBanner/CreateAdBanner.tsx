import { MagnifyingGlassPlus } from "phosphor-react";

const CreateAdBanner = () => {
  return (
    <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 self-stretch flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <button className="py-3 px-4 flex items-center gap-3  bg-violet-500 hover:bg-violet-600 text-white rounded">
          <MagnifyingGlassPlus size={24} />
          Publicar anuncio
        </button>
      </div>
    </div>
  );
};

export default CreateAdBanner;