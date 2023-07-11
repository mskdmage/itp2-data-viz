class Gallery {
    constructor() {
        this.reports = [];
        this.selectedReport = null;
    }

    addReport(report) {
        if (!report.hasOwnProperty('id') && !report.hasOwnProperty('name')) {
            alert('Your report lacks a name and id.');
        }

        if (this.findReportIndex(report.id) != null) {
            alert(`The report has a duplicate id: ${report.id}`);
        }

        this.reports.push(report);

        let menuItem = createElement('li', report.name);
        menuItem.addClass('menu-item');
        menuItem.id(report.id);
        
        menuItem.mouseOver((e) => {
            let element = select('#' + e.srcElement.id);
            element.addClass('hover');
        });

        //Event Handlers

        menuItem.mouseOut((e) => {
            let element = select('#' + e.srcElement.id);
            element.removeClass('hover');
        });

        menuItem.mouseClicked((e) => {
            let menuItems = selectAll('.menu-item');

            for (let item of menuItems) {
                item.removeClass('selected');
            }

            let element = select('#' + e.srcElement.id);
            element.addClass('selected');
            this.selectReport(e.srcElement.id);
        });

        let reportMenu = select('#report-menu');
        reportMenu.child(menuItem);

        if (report.hasOwnProperty('preload')) {
            report.preload();
        }
    }

    findReportIndex(reportId) {
        for (let i=0; i < this.reports.length; i++) {
            if (this.reports[i].id === reportId) return i;
        }

        return null;
    }

    selectReport(reportId) {
        let reportIndex = this.findReportIndex(reportId);

        if (reportIndex != null) {
            if (this.selectedReport != null && this.selectedReport.hasOwnProperty('destroy')) {
              this.selectedReport.destroy();
            }

            this.selectedReport = this.reports[reportIndex];

            if (this.selectedReport.hasOwnProperty('setup')) {
                this.selectedReport.setup();
            }

            loop();
        }
    }
}