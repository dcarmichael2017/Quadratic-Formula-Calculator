const app = document.getElementById('root')

const img0 = document.createElement('img')
img0.src = "general form.png"
const img1 = document.createElement('img')
img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Quadratic_formula.svg/1200px-Quadratic_formula.svg.png"
const img2 = document.createElement('img')
img2.src = "quad form 2.png"
const img3 = document.createElement('img')
img3.src = "quad form 3.png"
const container = document.createElement('div')
container.setAttribute('class', 'container')

const h1 = document.createElement('h1')
h1.textContent = "Please enter values for a, b and c into the input fields, then press calculate."
const subheader = document.createElement('p')
subheader.textContent = "By Daniel Carmichael"

var variableA = document.createElement("input")
variableA.setAttribute('type', 'text')
variableA.setAttribute("placeholder", "Enter variable A")

var variableB = document.createElement("input")
variableB.setAttribute('type', 'text')
variableB.setAttribute("placeholder", "Enter variable B")

var variableC = document.createElement("input")
variableC.setAttribute('type', 'text')
variableC.setAttribute("placeholder", "Enter variable C")

var calculate = document.createElement("button")
calculate.innerHTML = "Calculate"
calculate.onclick = function () {
    calculateQuadratic()
}

var description1 = document.createElement('p')
description1.textContent = "The general form for the quadratic equation is: "

app.appendChild(h1)
app.appendChild(subheader)
app.appendChild(variableA)
app.appendChild(variableB)
app.appendChild(variableC)
app.appendChild(calculate)

app.appendChild(description1)
app.appendChild(img0)
app.appendChild(container)


var calculateQuadratic = function() 
{
    container.innerHTML = " "

    var root1, root2;

    var a = variableA.value
    var b = variableB.value
    var c = variableC.value

    var discriminant = b * b - 4 * a * c;

    var script = document.getElementById('startTypeSetting')

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a)

        const description2 = document.createElement('p')
        description2.textContent = 'In this case, the discriminant was greater than 0, therefore, the roots are real and different. The equation we used was: '
        const equation = document.createElement('p')
        equation.textContent = `The roots of quadratic equation are ${root1} and ${root2}`
        
        container.appendChild(description2)
        container.appendChild(img1)
        container.appendChild(equation)
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a)
        const description2 = document.createElement('p')
        description2.textContent = 'In this case, the discriminant was equal to 0, therefore, the roots are real and equal. The equation we used was: '
        const equation = document.createElement('p')
        equation.innerHTML = `The roots of quadratic equation are ${root1} and ${root2}`
        container.appendChild(description2)
        container.appendChild(img2)
        container.appendChild(equation)
    }

    // if roots are not real
    else {
        var realPart = (-b / (2 * a)).toFixed(2)
        var imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2)
        const description2 = document.createElement('p')
        description2.textContent = 'In this case, the discriminant was less than 0, therefore, the roots are complex and different. The equation we used was: '
        const equation = document.createElement('p')
        equation.innerHTML = `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        container.appendChild(description2)
        container.appendChild(img3)
        container.appendChild(equation)
    }
}