import { Card, CardBody, CardHeader, CardTitle } from "@/_comp/ui/Card";
import { Input } from "@/_comp/ui/Input";
import { Label } from "@/_comp/ui/Label";
import { Button } from "../ui/Button";

export default function CardForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardBody className="space-y-5">
        <form id="form" className="space-y-5">
          <div className="grid gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Twitter</Label>
              <Input type="text" placeholder="twitter.com/askides" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Facebook</Label>
              <Input type="text" placeholder="facebook.com/tesla" />
            </div>
          </div>
        </form>

        <Button form="form">Submit</Button>
      </CardBody>
    </Card>
  );
}
