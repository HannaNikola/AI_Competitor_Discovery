export const AiNetworkLoader = () => {
  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      <div className="absolute w-5 h-5 rounded-full bg-button shadow-[0_0_15px_rgba(var(--button-rgb),0.5)] animate-pulse z-10" />

      <div
        className="absolute w-12 h-12 rounded-full border-2 border-button opacity-20 animate-ping"
        style={{ animationDuration: "2s" }}
      />
      <div
        className="absolute w-20 h-20 rounded-full border border-button opacity-10 animate-ping"
        style={{ animationDuration: "3s" }}
      />

      <div
        className="absolute w-full h-full animate-spin"
        style={{ animationDuration: "3s" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-button animate-bounce" />
      </div>

      <div
        className="absolute w-16 h-16 animate-spin"
        style={{ animationDuration: "5s", animationDirection: "reverse" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-button opacity-70 animate-pulse" />
      </div>

      <div
        className="absolute w-20 h-20 animate-spin"
        style={{ animationDuration: "4s", transform: "rotate(45deg)" }}
      >
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-button opacity-60" />
      </div>
    </div>
  );
};
