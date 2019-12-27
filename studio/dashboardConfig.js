export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e05e59423a010ec03502c04',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4m5dfqk5',
                  apiId: 'f65affab-cb73-4ce3-a848-19de7edc664c'
                },
                {
                  buildHookId: '5e05e594ee2d9ff79d0fcdc5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uj8vhwsb',
                  apiId: 'cf655a7c-dfc4-4f9d-b53b-e08ccd6d45df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/test123test123test123test/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uj8vhwsb.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
