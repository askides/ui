import { Card, CardBody, CardHeader, CardTitle } from "@/_comp/ui/Card";

export default function CardDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello There!</CardTitle>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-zinc-800 leading-relaxed">
          Greetings, visitors! Prepare for a card-tastic adventure full of
          whimsy and laughter. Enjoy the magic! ✨🃏
        </p>
      </CardBody>
    </Card>
  );
}
