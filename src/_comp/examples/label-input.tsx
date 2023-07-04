import { Input } from "@/_comp/ui/Input";
import { Label } from "@/_comp/ui/Label";

export default function LabelInput() {
  return (
    <div className="w-full max-w-sm space-y-1">
      <Label>Twitter</Label>
      <Input type="text" name="username" placeholder="@askides" />
    </div>
  );
}
