import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const produtos = [
  {
    title: "Forest",
    href: "#",
    description: "Ajuda a manter o foco de forma divertida.",
  },
  {
    title: "ClickUp",
    href: "#",
    description: "Organize tarefas e metas em um só lugar.",
  },
  {
    title: "Habitica",
    href: "#",
    description: "Torna a organização mais motivadora.",
  },
]

export default function Header() {
  return (
    <header className="border-b-4 border-b-primary px-4">
      <div className="flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <a href="/" className="mr-2 md:mr-6">
              <img
                src="favicon.ico"
                alt="logo"
                className="w-20 h-16 md:w-15 md:h-15 lg:w-24 lg:h-20"
              />
            </a>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/">Home</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/docs">Docs</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {produtos.map((produto) => (
                    <li key={produto.title} className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href={produto.href}
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            {produto.title}
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            {produto.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <a
            href="/login"
            className="bg-[#FF7A1A] text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            Entrar
          </a>
        </div>
      </div>
    </header>
  )
}
