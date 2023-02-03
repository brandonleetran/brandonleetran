// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'
import Logo from '../logo';

export default function Page() {
  return (
    <div className="prose">
      <h2>Skills</h2>
      <div className="flex-wrap flex gap-x-5">
        <Logo path="/logos/html.png" />
        <Logo path="/logos/css-3.png" />
        <Logo path="/logos/js.png" />
        <Logo path="/logos/bootstrap.png" />
        <Logo path="/logos/tailwind.png" />
        <Logo path="/logos/react.png" />
        <Logo path="/logos/next.png" />
        <Logo path="/logos/java.png" />
        <Logo path="/logos/c-sharp.png" />
        <Logo path="/logos/aws.png" />
        <Logo path="/logos/github.png" />
        <Logo path="/logos/vs.png" />
        <Logo path="/logos/vscode.png" />
      </div>
      <h2>Qualifications</h2>
      <p>In Development</p>
      <h2>Blog</h2>
      <p>In Development</p>
      <h2>Get In Touch</h2>
      <p>In Development</p>
    </div>
  );
}