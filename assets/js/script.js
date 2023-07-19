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
    quitarGasto(index){
        console.log('antes de borrar array ',resumen)
        console.log('gasto usado: ',this.gastos[index])
        this.totalGastos -= this.gastos[index][1]
        console.log('despues de borrar array ',resumen)
        //this.gastos.slice(index,1)
        this.actualizarSaldo()

    },
    actualizarSaldo(){
        this.saldo = this.presupuesto - this.totalGastos
        
    }


}

const calcular = document.getElementById('calcular')
const agregar = document.getElementById('add')

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
   
})

// borrar gasto 
vistaTablaGastos.addEventListener('click', function(e){
    if (e.target.tagName == 'BUTTON'){
       let id = Number(e.target.id)
       console.log('id de tabla a borrar', id)
       resumen.quitarGasto(id)
       
       e.target.parentElement.parentElement.remove()
       actualizarTablaPresupuesto()
       
    }
})

function actualizarTablaPresupuesto(){
    vistaPresupuesto.innerText = resumen.presupuesto
    vistaGastos.innerText = resumen.totalGastos
    vistaSaldo.innerText = resumen.saldo
}

function actualizarTablaGastos(){
    let position = resumen.gastos.length-1
    let fila = document.createElement('tr')
    fila.innerHTML = `<td>${inputNombreGasto.value}</td>
                     <td>${inputCantGasto.value}</td>
                     <td>
                        <button id="${position}">
                            eliminar</button></td>`
    vistaTablaGastos.append(fila)
}