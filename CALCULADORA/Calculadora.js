function calcular(operacion) {
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);
    let resultado;

    if (isNaN(v1) || isNaN(v2)) {
        alert('Por favor ingrese números válidos');
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = v1 + v2;
            break;
        case 'resta':
            resultado = v1 - v2;
            break;
        case 'multiplicacion':
            resultado = v1 * v2;
            break;
        case 'division':
            if (v2 === 0) {
                alert('No se puede dividir por cero');
                return;
            }
            resultado = v1 / v2;
            break;
        default:
            alert('Operación no válida');
            return;
    }

    document.getElementById('res').textContent = `${resultado}`;
}

function limpiarResultado() {
    document.getElementById('res').textContent = '';
}
