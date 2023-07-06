import { Card, CardBody, CardHeader, CardTitle } from "@/_comp/ui/Card";
import { Button } from "../ui/Button";

export default function CardDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>We Love Cookies</CardTitle>
      </CardHeader>
      <CardBody className="space-y-5">
        <p>
          Regarding cookies, the good and crunchy ones are excluded from the
          conversation. These cookies ensure the security of our site, improve
          the user experience, and display relevant ads. They will only be
          activated with your consent.
        </p>
        <Button className="rounded-xl justify-center w-full">Confirm</Button>
      </CardBody>
    </Card>
  );
}
