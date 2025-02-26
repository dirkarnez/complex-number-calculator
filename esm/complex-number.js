export class ComplexNumber {
    real = 0;
    imaginery = 0;

    setRectangularForm(real, imaginery) {
        this.real = real;
        this.imaginery = imaginery;
    }

    #degreeToRadian(degree) {
        return degree / (180 / Math.PI);
    }

    #radianToDegree(radian) {
        return radian * (180 / Math.PI);
    }

    setPolarForm(amplitude, phaseInDegree) {
        this.real = amplitude * Math.cos(this.#degreeToRadian(phaseInDegree))
        this.imaginery = amplitude * Math.sin(this.#degreeToRadian(phaseInDegree));
    }

    setExponentialForm(amplitude, phaseInRadian) {
        if (typeof phaseInRadian == typeof "")
        {
            // leave room for symbolic calculation: (-)n * pi = 3.5
        } 
        else if (!Number.isNaN(phaseInRadian)) 
        {
            this.real = (phaseInRadian == (0.5 * Math.PI) || phaseInRadian == (-0.5 * Math.PI)) ? 0 : amplitude * Math.cos(phaseInRadian);
            this.imaginery = amplitude * Math.sin(phaseInRadian);
        }
    }

    setExponentialFormWithPI(amplitude, phaseWithPIInRadian) { 
        // const index = phaseWithPIInRadian >= 0 ? (phaseWithPIInRadian / 0.5) % 4 : ((phaseWithPIInRadian/0.5) % 4) + 4;
        const indexReal = (((phaseWithPIInRadian/0.5) % 4) + 4) % 4;
        const lookupReal = [1, 0, -1, 0][indexReal];
        this.real = amplitude * (!!lookupReal ? lookupReal : Math.cos(phaseWithPIInRadian * Math.PI));

        const indexImaginery =  (((phaseWithPIInRadian/0.5) % 4) + 4) % 4;
        const lookupImaginery = [0, 1, 0, 0][indexImaginery];
        this.imaginery = amplitude * (!!indexImaginery ? indexImaginery : Math.sin(phaseWithPIInRadian * Math.PI));
    }

    conjugate() { 
        var conjugateComplexNumber = new ComplexNumber();
        conjugateComplexNumber.setRectangularForm(this.real, 0 - this.imaginery);
        return conjugateComplexNumber;
    }

    add(anotherComplexNumber) {
        var sumComplexNumber = new ComplexNumber();
        sumComplexNumber.setRectangularForm(this.real + anotherComplexNumber.real, this.imaginery + anotherComplexNumber.imaginery);
        return sumComplexNumber;
    }

    substract(anotherComplexNumber) {
        var sumComplexNumber = new ComplexNumber();
        sumComplexNumber.setRectangularForm(this.real - anotherComplexNumber.real, this.imaginery - anotherComplexNumber.imaginery);
        return sumComplexNumber;
    }

    absoluteValue() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginery, 2))
    }

    amplitude() {
        return this.absoluteValue();
    }

    phaseInRadian() {
        return Math.atan(this.imaginery / this.real);
    }

    phaseInDegree() {
        return this.#radianToDegree(this.phaseInRadian())
    }

    convertToPolarForm() {
        return `${this.absoluteValue()} ∠ ${this.phaseInDegree()}°`
    }

    // When using exponential form you should ensure that all angles are measured in radians and not degrees.
    convertToExponentialForm() {
        return `${this.absoluteValue()} * e^(j * ${this.phaseInRadian()})`
    }

    convertToRectangularForm() {
        return `${this.real} ${this.imaginery > 0 ? `+ ${this.imaginery}` : `- ${this.imaginery * (-1)}`}j`;
    }

    toString() {
        return this.convertToRectangularForm();
    }
}
