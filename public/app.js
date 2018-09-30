// Grab the articles as a json
// $.getJSON("/articles", function(data) {
//   // For each one
//   // console.log(data);
//
//   let $articles = $('#articles');
//   data.forEach(function (article) {
//     let articleDiv = $("<article class='media'>");
//     let figure = $("<figure>", {
//       class: 'media-left',
//       text: article.imageUrl
//     }).append($("<p class='image is-64x64'>",{
//
//     }))
//     // let content = $("div",{
//     //   class: 'media-content',
//     //   text: $("div",{
//     //     class: 'content',
//     //     text: `<p> <h2>${article.title}</h2></p>`
//     //   })
//     // })
//
//
//     let title = `<h2 class="title"> ${article.title} </h2>`;
//     let link = `<a href="http://news.mit.edu/${article.link}" target="_blank">${article.link}</a>`
//     let summary = `<p>${article.summary}"</p>`
//     articleDiv.append(title);
//     articleDiv.append(link);
//     articleDiv.append(articleDiv);
//     $articles.append(articleDiv);
//
//   })
//   //
//   //
//   // for (var i = 0; i < data.length; i++) {
//   //   // Display the apropos information on the page
//   //   $("#articles").append("<p data-id='" + data[i]._id + "'>"
//   //     + data[i].title + "<br />" + data[i].link + "</p>");
//   // }
// });

