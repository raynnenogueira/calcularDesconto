function calcularParcelas() {
    
    const valor = Number(document.getElementById("valor").value);
    const parcelas = Number(document.getElementById("parcelas").value);
  
    const valorParcela = valor / parcelas;
  
    document.getElementById("valor-parcela").value = valorParcela.toFixed(2);
  }
  