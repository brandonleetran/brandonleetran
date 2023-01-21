"use client"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './global.module.css';

export default () => (
  <NavigationMenu.Root className={styles.NavigationRoot}>
    <NavigationMenu.List className={styles.NavigationMenuList}>
      <NavigationMenu.Item>
        <NavigationMenu.Link className="NavigationMenuLink" href="/">Home</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link className="NavigationMenuLink" href="/blog">Blog</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link className="NavigationMenuLink" href="/snippets">Snippets</NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);