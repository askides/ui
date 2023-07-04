import { Input } from "@/_comp/ui/Input";

export default function InputHint() {
  return (
    <div className="relative w-full">
      <Input type="text" name="subdomain" className="pr-28" />
      <div className="absolute inset-y-0 right-0 flex text-sm items-center pointer-events-none z-10 pr-4">
        <span className="text-gray-500">.withzap.fun</span>
      </div>
    </div>
  );
}
