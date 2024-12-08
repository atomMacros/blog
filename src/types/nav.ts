

type LinkRel = '_blank' | '_self'

// define base nav item
export interface NavItem {
    text: string
    // @TODO
    ariaLabel?: string;
}

// nav item for list 
export interface NavGroup<T> extends NavItem {
    children: T[]
}

export interface NavLink extends NavItem {
    link: string;
    icon?: string | boolean
    rel?: LinkRel
}

export type NavbarItem = NavLink;
export type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
export type NavbarConfig = (NavbarItem | NavbarGroup | string)[];
// resolved
export type ResolvedNavbarItem = NavbarItem | NavGroup<ResolvedNavbarItem>;