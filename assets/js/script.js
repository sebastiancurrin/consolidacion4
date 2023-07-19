const gastos = [] // array con arrays [nombre, cantidad]
const resumen = {
    presupuesto: 0,
    totalGastos: 0,
    saldo: 0,
    gastos:[], // array de [nombre,cantGasto] 

    agregarPresupuesto(numero){
        this.presupuesto = numero
        this.saldo += this.presupuesto
    },
    agregarGasto(gasto){
        this.gastos.push(gasto)
        this.totalGastos += gasto[1]
        this.actualizarSaldo()
    },
    quitarGasto(gasto){
        this.gastos.push(gasto)
        this.totalGastos -= gasto[1]
        this.actualizarSaldo()

    },
    actualizarSaldo(){
        this.saldo = this.presupuesto - this.totalGastos
        
    }


}

const calcular = document.getElementById('calcular')
const agregar = document.getElementById('add')
//const borrar = 

let inputPresupuesto = document.getElementById('inputPresupuesto')
let inputCantGasto = document.getElementById('inputCantGasto')
let inputNombreGasto = document.getElementById('inputNombreGasto')

let vistaPresupuesto = document.getElementById('presupuesto')
let vistaGastos = document.getElementById('gastos')
let vistaSaldo = document.getElementById('saldo')

let vistaTablaGastos = document.getElementById('vistaTablaGastos')

calcular.addEventListener('click',e=>{
    e.preventDefault()
    resumen.agregarPresupuesto(Number(inputPresupuesto.value))
    actualizarTablaPresupuesto()
    console.log(resumen)

})

agregar.addEventListener('click',(e)=>{
    e.preventDefault()
    resumen.agregarGasto(
        [
            inputNombreGasto.value,
            Number(inputCantGasto.value)
        ]
    )
    actualizarTablaPresupuesto()
    actualizarTablaGastos()
    console.log(resumen)
})

function actualizarTablaPresupuesto(){
    vistaPresupuesto.innerText = resumen.presupuesto
    vistaGastos.innerText = resumen.totalGastos
    vistaSaldo.innerText = resumen.saldo
}

function actualizarTablaGastos(){
    let fila = document.createElement('tr')
    fila.innerHTML = `<td>${inputNombreGasto.value}</td>
                     <td>${inputCantGasto.value}</td>
                     <td><button>eliminar</button></td>`
    vistaTablaGastos.append(fila)
}