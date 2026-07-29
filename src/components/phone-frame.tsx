interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto">
      <div className="relative w-[280px] h-[580px] bg-zinc-900 rounded-[36px] border-[6px] border-zinc-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-900 rounded-b-xl z-20" />
        <div className="w-full h-full overflow-y-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
