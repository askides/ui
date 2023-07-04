import { Label } from "@/_comp/ui/Label";
import { Select } from "@/_comp/ui/Select";

export default function SelectLabel() {
  return (
    <div className="space-y-1 w-full">
      <Label>Choose Your Favorite Language</Label>
      <Select>
        <option hidden>Select...</option>
        <option value="Node.js">Node.js</option>
        <option value="PHP">PHP</option>
        <option value="Rust">Rust</option>
      </Select>
    </div>
  );
}
