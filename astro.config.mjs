import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    site: "https://medicatusb.com",
    // base: "/medicat-website",
    integrations: [tailwind(), image({
        serviceEntryPoint: "@astrojs/image/sharp"
    }), mdx(), sitemap(), svelte(), partytown(), compress()]
});
