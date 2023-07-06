import { Card, CardBody, CardHeader, CardTitle } from "@/_comp/ui/Card";
import { Button } from "../ui/Button";

export default function CardRounded() {
  return (
    <Card className="rounded-3xl max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Action Required!</CardTitle>
      </CardHeader>
      <CardBody className="space-y-5">
        <p className="text-sm leading-relaxed text-center max-w-xs mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-2">
          <Button className="rounded-xl justify-center w-full">Confirm</Button>
        </div>
      </CardBody>
    </Card>
  );
}
