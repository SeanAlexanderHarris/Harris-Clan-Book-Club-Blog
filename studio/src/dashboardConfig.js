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
                  buildHookId: '5ffcd390cf8044008fdacb77',
                  title: 'Sanity Studio',
                  name: 'harris-clan-book-club-blog-studio',
                  apiId: 'e5db61f4-c802-46cf-92f1-8016c879625a'
                },
                {
                  buildHookId: '5ffcd39026f643014b176651',
                  title: 'Blog Website',
                  name: 'harris-clan-book-club-blog',
                  apiId: '452c96b3-6376-4db1-aebf-7831f0cfe868'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SeanAlexanderHarris/Harris-Clan-Book-Club-Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://harris-clan-book-club-blog.netlify.app', category: 'apps' }
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
