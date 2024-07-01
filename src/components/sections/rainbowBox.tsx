export const RainbowBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative z-10 mb-10 rounded-2xl shadow-lg ring-1 ring-slate-900/10 lg:flex-none">
      <div
        dir="ltr"
        className="absolute -bottom-px left-1/2 flex h-[2px] w-full -translate-x-1/2 -hue-rotate-90"
      >
        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
      </div>
      <div className="relative rounded-2xl bg-white px-4 py-8 sm:px-8">
        {children}
      </div>
    </div>
  );
};
