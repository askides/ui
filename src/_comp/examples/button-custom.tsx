import { Button } from "@/_comp/ui/Button";

export default function ButtonCustom() {
  return (
    <Button className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 border-none focus:ring-0 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
      Hello There
    </Button>
  );
}
