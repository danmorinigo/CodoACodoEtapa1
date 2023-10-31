function calcular()
{
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categorias = document.getElementById("categoria");
    var categoriaActiva = parseInt(categorias.options[categorias.selectedIndex].value);
    const valorTicket = 200;
    const descuentoEstudiante = 0.8;
    const descuentoTrainee = 0.5;
    const descuentoJunior = 0.15;
    var totalSinDescuento = cantidad * valorTicket;
    var totalAPagar;
    switch(categoriaActiva)
    {
        case 1:
            totalAPagar = totalSinDescuento - (totalSinDescuento * descuentoEstudiante);
            break;
        case 2:
            totalAPagar = totalSinDescuento - (totalSinDescuento * descuentoTrainee);    
            break;
        case 3:
            totalAPagar = totalSinDescuento - (totalSinDescuento * descuentoJunior);        
            break;
    }
    
    document.getElementById("debePagar").value="Total a pagar: $" + totalAPagar;
}