import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Contact01Page from "../contact-01/contact-01"

const footerLinks = [
  {
    title: "Visão Geral",
    href: "#",
  },
  {
    title: "Preços",
    href: "#",
  },
  {
    title: "Ajuda",
    href: "#",
  },
  {
    title: "Privacidade",
    href: "#",
  },
];

const Footer04Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Contact01Page />
      </div>
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div
            className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
              <img src="/favicon.ico" alt="Minha Logo" className="h-30 w-auto" />

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} className="text-muted-foreground hover:text-foreground">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-medium">Mantenha-se atualizado</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="Coloque seu e-mail" />
                <Button className="bg-[#FF7A1A] text-white px-1 py-1 rounded-lg hover:bg-[#123C60] transition sm:px-4 sm:py-2">Se inscreva</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div
            className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Zenith
              </Link>
              . Todos os direitos não reservados.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer04Page;
