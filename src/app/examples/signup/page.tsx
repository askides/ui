import { Button } from "@/_comp/ui/Button";
import { Card } from "@/_comp/ui/Card";
import { Input } from "@/_comp/ui/Input";
import { Label } from "@/_comp/ui/Label";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-full flex-1 overflow-y-auto bg-white px-5 md:px-10 py-6 md:py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Sign Up</h2>
        <p className="mt-1 text-lg font-light text-zinc-600">
          An example of the Sign Up page.
        </p>
      </div>

      <div data-role="example-container">
        <Card className="grid md:grid-cols-2 p-5 gap-5">
          <div className="bg-zinc-200 rounded-2xl relative overflow-hidden hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1533619771522-a3a9e28a75df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=75"
              alt="Mount Seceda"
              fill
            />
            <div className="bg-gradient-to-b from-transparent via-black/20 to-black/70 absolute inset-0" />
            <div className="text-xl font-medium text-zinc-100 absolute bottom-5 left-5 right-5 leading-snug">
              I literally love this UI library, i can build stuff in seconds.
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-2xl font-semibold">Get Started</h3>

            <p className="mt-1 text-sm font-light text-zinc-600">
              Create an account an start building cool stuff!
            </p>

            <form id="form" className="space-y-8 mt-8">
              <div className="grid gap-6">
                <div className="flex flex-col space-y-1">
                  <Label>Full Name</Label>
                  <Input type="text" placeholder="Tom Cook" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label>Email</Label>
                  <Input type="email" placeholder="tom.cook@example.com" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label>Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
              </div>

              <Button form="form" className="w-full justify-center">
                Create Account
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
