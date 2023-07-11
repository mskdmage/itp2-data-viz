class Report {

    constructor(title, dataset) {
        this.name = title;
        this.id = title.toLowerCase().replace(/\t|\n|\r|\s/g, '-').replace(/!|\?|#|\$|%|:|\.|,|;|'|"/g, '');
        this.dataset = dataset;
        this.visualizations = [];
    }

    calculateQuadrants() {
        
    }

    draw() {
        push();
        noStroke();
        textAlign('center', 'center');
        textSize(16);
        fill("FFFFFF");
        text(this.name, width/2, height/2);
        text(this.id, width/3, height/3);
        pop();
        // for (let visualization of this.visualizations) {
        //     visualization.draw(dataset);
        // }
    }

    destroy() {

    }

    resize() {

    }

    update() {
        
    }

}