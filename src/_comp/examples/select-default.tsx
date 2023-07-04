import { Select } from "@/_comp/ui/Select";

export default function SelectDefault() {
  return (
    <Select className="w-full max-w-sm">
      <option value="Node.js">Node.js</option>
      <option value="PHP">PHP</option>
      <option value="Rust">Rust</option>
    </Select>
  );
}
