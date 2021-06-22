/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
 const path = require(`path`);

 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions;

   return new Promise((resolve, reject) => {
    graphql(`
      {
        allUserUser {
          nodes {
            id
            display_name
            drupal_id
            field_address
            field_birthday
            field_contributions { processed }
            field_first_name
            field_last_name
            field_notes
            field_phone
          }
        }
      }
    `).then(result => {
      result.data.allUserUser.nodes.forEach(node => {
        console.log(node)
        let path_alias = node.id
        createPage({
          // This is the path, or route, at which the page will be visible.
          path: path_alias,
          // This the path to the file that contains the React component
          // that will be used to render the HTML for the recipe.
          component: path.resolve(`./src/templates/profile.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL
            // variables.
            drupal_id: node.drupal_id,
            displayName: node.display_name,
            firstName: node.field_first_name ? node.field_first_name : 'TestFirst',
            lastName: node.field_last_name ? node.field_last_name : 'TestLast',
            address: node.field_address ? node.field_address : 'TestAddr',
            phone: node.field_phone ? node.field_phone : 'TestPhone',
            birthday: node.field_birthday ? node.field_birthday : 'TestBday',
            bio: node.field_bio ? node.field_bio : 'TestBio',
            notes: node.field_notes ? node.field_notes : 'TestNotes',
            talent: 'Parable of Talents',
            contribution: (node.field_contributions) ? node.field_contributions.processed : 'TestContrib'
          },
        })
      });

      resolve()
    })
  })
};
