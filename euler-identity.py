import numpy as np
import matplotlib.pyplot as plt

# Input parameter.
n = 100
t = np.pi * np.arange(n) / n
# Complex valued result.
z = np.exp(1j * t)


fig, ax = plt.subplots()
ax.scatter(np.real(z), np.imag(z))
ax.set_aspect("equal")
