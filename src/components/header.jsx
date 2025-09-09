import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const produtos = [
    {
        title: "Forest",
        href: "#",
        description: "Ajuda a manter o foco de forma divertida."
    },
    {
        title: "ClickUp",
        href: "#",
        description: "Organize tarefas e metas em um só lugar."
    },
    {
        title: "Habitica",
        href: "#",
        description: "Torna a organização mais motivadora."
    },

]

export default function Header() {
    return (
        <>
            <header>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </>

    )
}