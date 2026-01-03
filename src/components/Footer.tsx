interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="py-6 px-6 bg-slate-950 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} {name}. All rights reserved.
    </footer>
  );
}
