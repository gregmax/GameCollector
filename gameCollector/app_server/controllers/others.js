// GET 'about' page //
module.exports.about = function (req, res) {
  res.render('generic-page', { title: 'About Game Collector' });
};

module.exports.angularApp = function (req, res) {
  res.render('layout', { title: 'Game Collector' });
}