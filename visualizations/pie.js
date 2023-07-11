class PieChart extends Visualization {
    constructor(title, position, dataset, labelsColumn, dataColumn) {
        super(title, position);
        this.data = this.processData(dataset, labelsColumn, dataColumn);
        this.diameter = 0;
    }

    calculateRadians() {
        let total = sum(this.data);
        let radians = [];
        for (let dataPoint of this.data) radians.push((dataPoint/total) * TWO_PI);
        return radians;
    }

    processData(dataset, labelsColumn, dataColumn) {

        let labels = new Set(dataset.getColumn(labelsColumn));        
        let values = [];

        for (let label in this.labels) {
            let coincidences = dataset.findRows(label, labelsColumn);
            let value = 0;
            for (let coincidence of coincidences) {
                value += dataset.getColumn[coincidence];
            }
        }

        
    }

    draw() {
        let angles = this.calculateRadians();
    }
}