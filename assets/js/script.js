const gastos = [] // array con arrays [nombre, cantidad]
const resumen = {
    presupuesto: 0,
    gastos: 0,
    saldo: this.presupuesto - this.gastos,

    agregarGastos(gasto){
        this.gastos += gasto
    },
    quitarGasto(gasto){
        this.gastos -= gasto
    },
    actualizarPresupuesto(){
        this.presupuesto -= this.gastos
    }


}

