import { Button } from "@/_comp/ui/Button";
import { Card, CardBody, CardHeader, CardTitle } from "@/_comp/ui/Card";
import { Checkbox } from "@/_comp/ui/Checkbox";
import { Input } from "@/_comp/ui/Input";
import { Label } from "@/_comp/ui/Label";

export default function CardForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
        <p className="text-sm text-zinc-500">
          We will publish this links on your profile!
        </p>
      </CardHeader>
      <CardBody className="space-y-6 mt-3">
        <form id="form" className="space-y-5">
          <div className="grid gap-4">
            <div className="flex flex-col space-y-1">
              <Label>Twitter</Label>
              <Input type="text" placeholder="twitter.com/askides" />
            </div>
            <div className="flex flex-col space-y-1">
              <Label>Facebook</Label>
              <Input type="text" placeholder="facebook.com/tesla" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Checkbox id="candidates" />
              <Label htmlFor="candidates">
                I want to be sponsored on the dashboard.
              </Label>
            </div>
          </div>
        </form>

        <Button size="base" form="form">
          Submit
        </Button>
      </CardBody>
    </Card>
  );
}
