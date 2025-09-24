
type AlertProps = {
  message: string;
  // onClose: (ev?: React.MouseEvent | Event) => void;
  // duration?: number; // auto close in ms
  type?: "success"  | "error";
};

export default function Alert({
  message,
  
  type,
}: AlertProps) {
  

  const colors: Record<"success" | "error", string> = {
    success: "bg-black text-white border border-[#00EEEE]",
    error: "bg-black border border-red-500 text-white",
  };

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-5 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center justify-center gap-4 w-[90%] max-w-sm animate-slide-down ${colors[type ?? "success"]}`}
    >
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
