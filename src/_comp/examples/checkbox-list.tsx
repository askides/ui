import { Checkbox } from "@/_comp/ui/Checkbox";
import { Label } from "@/_comp/ui/Label";

export default function CheckboxList() {
  return (
    <div>
      <Label>Choose some colors</Label>
      <div className="space-y-3 mt-1.5">
        <div className="flex gap-x-2 items-center">
          <Checkbox defaultChecked className="text-violet-500" id="violet" />
          <Label htmlFor="violet">Violet</Label>
        </div>
        <div className="flex gap-x-2 items-center">
          <Checkbox defaultChecked className="text-yellow-500" id="yellow" />
          <Label htmlFor="yellow">Yellow</Label>
        </div>
        <div className="flex gap-x-2 items-center">
          <Checkbox className="text-blue-500" id="blue" />
          <Label htmlFor="blue">Blue</Label>
        </div>
        <div className="flex gap-x-2 items-center">
          <Checkbox defaultChecked className="text-red-500" id="red" />
          <Label htmlFor="red">Red</Label>
        </div>
      </div>
    </div>
  );
}
