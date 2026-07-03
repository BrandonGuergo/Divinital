import { Button } from "@divinital/ui/components/button";
import { Container } from "@divinital/ui/components/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center">
      <Container className="max-w-xl text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for was moved, renamed, or never shipped.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to Divinital</Link>
        </Button>
      </Container>
    </main>
  );
}
