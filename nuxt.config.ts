export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon', '@nuxtjs/seo', '@nuxthq/studio'],
    content: {
        highlight: {
            theme: 'nord',
            preload: ['js', 'css', 'html', 'md', 'ts', 'tsx', 'vue', 'python', 'ruby', 'java'],
        }
    },
    site: {
        url: 'https://learn.solyn.xyz',
        name: "🌟 Solyn's learning project",
        description: "🍥 Vai ser aqui onde eu vou postar todas as minhas tentativas tentando virar um programador",
        defaultLocale: "pt"

      },
      robots: {
        disallow: ['/_src/', '/_nuxt/', '/_logs/', '/cdn-cgi/'],
        blockNonSeoBots: true,
        credits: false,
        debug: true,
        sitemap: ['/sitemap.xml']
      },
      devtools: {
        enabled: false 
      },
      ogImage: {
        defaults: {
          emojis: 'twemoji'
        },
        componentOptions: {
          global: true,
      },
      },
      schemaOrg: {
        identity: 'Person',
      }
})
