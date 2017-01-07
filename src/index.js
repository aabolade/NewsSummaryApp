articleController = new ArticleController;
articleController.createArticle("First Headline");
articleController.updateHTML();

currentHeadlines = new CurrentArticles();
currentHeadlines.getCurrentArticles();
