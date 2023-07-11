let gallery;
let config;

function setup() {
  // Create a canvas to fill the content div from index.html.
  let canvasContainer = select('#app');
  let {width, height} = canvasContainer.size();
  let c = createCanvas(width, height);
  c.parent('app');

  gallery = new Gallery();
  gallery.addReport(new Report('"Organized Crime: Ecuador?"', 'There'));
  gallery.addReport(new Report('Report 2', 'There'));
}

function draw() {
  background("#070A0F");
  if (gallery.selectedReport != null) {
    gallery.selectedReport.draw();
  }
}