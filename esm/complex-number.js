export class ComplexNumber {
    #real = 0;
    #imaginery = 0;

    setRectangularForm(real, imaginery) {
        this.#real = real;
        this.#imaginery = imaginery;
    }

    #degreeToRadian(degree) {
        return degree / (180 / Math.PI);
    }

    #radianToDegree(radian) {
        return radian * (180 / Math.PI);
    }

    setPolarForm(amplitude, phaseInDegree) {
        this.#real = amplitude * Math.cos(this.#degreeToRadian(phaseInDegree))
        this.#imaginery = amplitude * Math.sin(this.#degreeToRadian(phaseInDegree));
    }

    setExponentialForm(amplitude, phaseInRadian) {
        this.#real = amplitude * Math.cos(phaseInRadian)
        this.#imaginery = amplitude * Math.sin(phaseInRadian);
    }

    conjugate() { 
        var conjugateComplexNumber = new ComplexNumber();
        conjugateComplexNumber.setRectangularForm(this.#real, 0 - this.#imaginery);
        return conjugateComplexNumber;
    }

    absoluteValue() {
        return Math.sqrt(Math.pow(this.#real, 2) + Math.pow(this.#imaginery, 2))
    }

    phaseInRadian() {
        return Math.atan(this.#imaginery / this.#real);
    }

    phaseInDegree() {
        return this.#radianToDegree(this.phaseInRadian())
    }

    convertToPolarForm() {
        return `${this.absoluteValue()} ∠ ${this.phaseInDegree()})`
    }

    // When using exponential form you should ensure that all angles are measured in radians and not degrees.
    convertToExponentialForm() {
        return `${this.absoluteValue()} * e^(j * ${this.phaseInRadian()})`
    }

    convertToRectangularForm() {
        return `${this.#real} ${this.#imaginery > 0 ? `+ ${this.#imaginery}` : `- ${this.#imaginery * (-1)}`}j`;
    }


    toString() {
        return this.convertToRectangularForm();
    }
}