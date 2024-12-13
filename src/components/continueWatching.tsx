interface ContinueWatchingProps {
  onResume: () => void;
  onRestart: () => void;
}

export const ContinueWatching = ({
  onRestart,
  onResume,
}: ContinueWatchingProps) => {
  return (
    <>
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-[2px] z-10 animate-in fade-in duration-300" 
      />
      
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black/80 backdrop-blur-md border border-blue-500/20 text-white p-8 rounded-xl text-center shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-md mx-4">
          <p className="text-lg font-medium tracking-wide text-white">
            Você já começou a assistir esse vídeo
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 gap-3">
            <button
              onClick={onResume}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 border border-blue-400/30 
                       hover:border-blue-400/50 text-white rounded-lg transition-all duration-200 
                       font-medium backdrop-blur-sm hover:shadow-lg hover:-translate-y-0.5 
                       active:translate-y-0"
            >
              Continuar assistindo
            </button>
            
            <button
              onClick={onRestart}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 
                       hover:border-white/20 text-white/90 hover:text-white rounded-lg 
                       transition-all duration-200 font-medium backdrop-blur-sm hover:shadow-lg 
                       hover:-translate-y-0.5 active:translate-y-0"
            >
              Assistir do início
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
