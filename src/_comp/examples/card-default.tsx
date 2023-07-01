import { Button } from "@/_comp/ui/Button";
import { Card, CardBody, CardHeader, CardTitle } from "@/_comp/ui/Card";

export default function CardDefault() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Hello There!</CardTitle>
      </CardHeader>
      <CardBody className="space-y-5">
        <p className="text-sm text-zinc-800 leading-relaxed">
          Greetings, visitors! Prepare for a card-tastic adventure full of
          whimsy and laughter. Enjoy the magic! ✨🃏
        </p>
        <Button variant="secondary">Follow Us</Button>
      </CardBody>
    </Card>
  );
}
