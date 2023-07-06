import { Checkbox } from "@/_comp/ui/Checkbox";
import { Label } from "@/_comp/ui/Label";

export default function CheckboxDefault() {
  return (
    <div className="flex gap-x-2 items-center">
      <Checkbox id="checkbox" />
      <Label htmlFor="checkbox">I followed @askides on Twitter.</Label>
    </div>
  );
}
