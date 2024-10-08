import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9af'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '523'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f6d'),
            routes: [
              {
                path: '/docs/category/enviar-correos',
                component: ComponentCreator('/docs/category/enviar-correos', '81e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/programar-tareas',
                component: ComponentCreator('/docs/category/programar-tareas', 'ab0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/enviar-correos/Invoce',
                component: ComponentCreator('/docs/enviar-correos/Invoce', '3c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/enviar-correos/New order',
                component: ComponentCreator('/docs/enviar-correos/New order', '216'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/enviar-correos/Publicity',
                component: ComponentCreator('/docs/enviar-correos/Publicity', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/programar-tareas/execute',
                component: ComponentCreator('/docs/programar-tareas/execute', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/programar-tareas/modificar',
                component: ComponentCreator('/docs/programar-tareas/modificar', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/programar-tareas/tareas',
                component: ComponentCreator('/docs/programar-tareas/tareas', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/programar-tareas/todas_tareas',
                component: ComponentCreator('/docs/programar-tareas/todas_tareas', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
