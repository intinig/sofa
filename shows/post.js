function(doc, req) {  
  // !json templates.post
  // !json blog
  // !code vendor/couchapp/template.js
  // !code vendor/couchapp/path.js

  // we only show html
  return template(templates.post, {
    title : doc.title,
    blogName : blog.title,
    post : doc.html,
    date : doc.created_at,
    author : doc.author,
    assets : assetPath(),
    editPostPath : showPath('edit', doc._id),
		season : doc.season,
		episode : doc.episode,
		video : doc.video,
    index : listPath('index','recent-posts',{})
  });
}