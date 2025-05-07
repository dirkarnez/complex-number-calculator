[complex-number-calculator](https://dirkarnez.github.io/complex-number-calculator/)
===================================================================================
[cmath — Mathematical functions for complex numbers — Python 3.12.0 documentation](https://docs.python.org/3/library/cmath.html)

### Tutorials
- [《火柴人vs数学》深度解析（一）欧拉公式 - YouTube](https://www.youtube.com/watch?v=1R3P3DLTlWE)
- [最美的数学公式是哪个？自然数是如何拓展出复数的？李永乐老师讲欧拉公式 - YouTube](https://www.youtube.com/watch?v=eEiNep19W5U)
- [Standards Mapping - Common Core Math | Khan Academy](https://www.khanacademy.org/standards/CCSS.Math/HSN.CN#HSN.CN.A.3)
- !!!!!!!!!![Lecture 21: Three-Phase Systems, Part 1 - YouTube](https://www.youtube.com/watch?v=Ih92AK1D-2M)
  - &t=615
- [量子力學會用虛數複數 Imaginary number, Complex number Masterclass【量乜子外傳】｜廣東話科普 - YouTube](https://www.youtube.com/watch?v=SCbQFKDF3Kg)
- https://stanford.edu/~boyd/ee102/complex-primer.pdf
- https://www.electronics-tutorials.ws/accircuits/complex-numbers.html
- https://eepower.com/power-electronics-textbook/vol-i-electrical-power-systems-design/chapter-2-analysis-ac-systems/complex-numbers-phasors-and-phase-shift/#
- https://gubner.ece.wisc.edu/notes/MagnitudeAndPhaseOfComplexNumbers.pdf
- https://www.mathworks.com/help/comm/ref/complexphaseshift.html

### Ready to use
- [matplotlib.online | Create online plots with python and matplotlib](https://matplotlib.online/project?id=0)

### TODOs
- [ ] phase difference
```javascript
function phaseDifference(polar1, polar2) {
  // polar1 and polar2 are objects with properties r (magnitude) and theta (angle in radians)
  
  const theta1 = polar1.theta; // Phase angle of the first complex number
  const theta2 = polar2.theta; // Phase angle of the second complex number
  
  // Calculate phase difference
  const deltaTheta = theta2 - theta1;
  
  // Normalize the phase difference to be within -π to π
  const normalizedDeltaTheta = ((deltaTheta + Math.PI) % (2 * Math.PI)) - Math.PI;
  
  return normalizedDeltaTheta;
}

// Example usage:
const complex1 = { r: 5, theta: Math.PI / 4 }; // r = 5, θ = 45 degrees
const complex2 = { r: 3, theta: Math.PI / 2 }; // r = 3, θ = 90 degrees

const difference = phaseDifference(complex1, complex2);
console.log(`Phase Difference: ${difference} radians`);
```
      

- [ ] convert to time axis
