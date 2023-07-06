import { Alert, AlertBody, AlertContent, AlertHead } from "@/_comp/ui/Alert";
import { AlertCircleIcon } from "lucide-react";

export default function AlertCustom() {
  return (
    <Alert className="bg-violet-500 border-violet-500 shadow-none rounded-3xl">
      <AlertCircleIcon className="shrink-0 text-white" />
      <AlertContent>
        <AlertHead className="text-white">
          The violet is too dangerous!
        </AlertHead>
        <AlertBody className="text-white">But we still love it.</AlertBody>
      </AlertContent>
    </Alert>
  );
}
