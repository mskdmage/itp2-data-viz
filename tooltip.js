function toolTip(content) {
    let xPos = mouseX;
    let yPos = mouseY;

    for (let item in content) {
        let line = `${item} : ${content[item]}`;
        fill('#070A0F');
        stroke('#75FFC6');
        noFill();
        text(line, xPos + 12, yPos - 35);
        yPos += 20;
    }
}