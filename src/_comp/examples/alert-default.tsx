import { Alert, AlertBody, AlertContent, AlertHead } from "@/_comp/ui/Alert";
import { BracesIcon } from "lucide-react";

export default function AlertDefault() {
  return (
    <Alert>
      <BracesIcon className="shrink-0" />
      <AlertContent>
        <AlertHead>Whoops!</AlertHead>
        <AlertBody>Something goes wrong! Check your fields!</AlertBody>
      </AlertContent>
    </Alert>
  );
}
