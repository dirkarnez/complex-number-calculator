export class ComplexNumber {
    real = 0;
    imaginery = 0;

    setRectangularForm(real, imaginery) {
        this.real = real;
        this.imaginery = imaginery;
    }

    #degreeToRadian(degree) {
        return Number(degree / (180 / Math.PI)).toFixed(3);
    }

    #radianToDegree(radian) {
        return Number(radian * (180 / Math.PI)).toFixed(3);
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
        let steps = phaseWithPIInRadian/0.5;
        const isLookupable = Number.isInteger(steps);

        if (isLookupable) {
            steps = Number.parseInt(steps);
            
            const indexReal = ((steps % 4) + 4) % 4;
            const lookupReal = [1, 0, -1, 0][indexReal];

            const indexImaginery =  (((steps) % 4) + 4) % 4;
            const lookupImaginery = [0, 1, 0, -1][indexImaginery];

            this.real = amplitude * lookupReal;
            this.imaginery = amplitude * lookupImaginery;
        } else {
            this.real = amplitude * Math.cos(phaseWithPIInRadian * Math.PI);
            this.imaginery = amplitude * Math.sin(phaseWithPIInRadian * Math.PI);
        }
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

    multiplyWithScalar(scalar) {
        var productComplexNumber = new ComplexNumber();
        productComplexNumber.setRectangularForm(this.real * scalar, this.imaginery * scalar);
        return productComplexNumber;
    }

    absoluteValue() {
        return this.humanReadable(Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginery, 2)));
    }

    amplitude() {
        return this.absoluteValue();
    }

    phaseInRadian() {
        return Number(Math.atan(this.imaginery / this.real)).toFixed(3);
    }

    phaseInDegree() {
        return Number(this.#radianToDegree(this.phaseInRadian())).toFixed(3);
    }

    convertToPolarForm() {
        return this.amplitude() != 0 ? `${this.amplitude()} ∠ ${this.phaseInDegree()}°` : 0;
    }
    
    // When using exponential form you should ensure that all angles are measured in radians and not degrees.
    convertToExponentialForm() {
        return `${this.humanReadable(this.absoluteValue())} * e^(j * ${this.phaseInRadian()})`
    }

    humanReadable(num) {
        // return (num < 0.001 && num > -0.001) ? 0 : num;
        return Number(Number((num < 0.001 && num > -0.001) ? 0 : num).toPrecision(3));
    }

    phaseDifference(complexNumberB) {
        return Number(this.phaseInDegree() - complexNumberB.phaseInDegree()).toPrecision(3);
    }

    convertToRectangularForm() {
        return `${this.humanReadable(this.real)} ${this.humanReadable(this.imaginery) >= 0 ? `+ ${this.humanReadable(this.imaginery)}` : `- ${this.humanReadable(this.imaginery * (-1))}`}j`;
    }

    toString() {
        return this.convertToRectangularForm();
    }
}
