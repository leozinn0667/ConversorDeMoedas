function getAPI(url) {
  let request = new XMLHttpRequest();
  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function obterMoeda() {
  let radioMoedas = document.getElementsByName("moeda");
  for (let i = 0; i < radioMoedas.length; i++) {
  if (radioMoedas[i].checked == true) {
    return radioMoedas[i].value;
    }
  }
}

function converter() {
  let valorReal = document.getElementById("real").value;
  let exibir = document.getElementById("resultado")
  let valorConvertido;
  let obj;
  let dadosJSON;
  let dadosUrl;

  if (valorReal != "") {
    switch (obterMoeda()) {
      case "dolar":
        dadosJSON = 'BRLUSD'
        dadosUrl = 'BRL-USD' 
        obj = JSON.parse(getAPI(`https://economia.awesomeapi.com.br/last/${dadosUrl}`))
        valorConvertido = valorReal * parseFloat(obj[dadosJSON].bid)
        exibir.innerHTML = `R$${valorReal} equivale a EXATAMENTE <strong>U$ ${valorConvertido.toFixed(4)}</strong>  <br><br><br> 
        Cotação BRL-USD atual: ${obj[dadosJSON].bid}<br>
        Dados atualizados em: ${obj[dadosJSON].create_date}<br>
        Alta: ${obj[dadosJSON].high}<br>
        Baixa: ${obj[dadosJSON].low}<br>
        `
        break;
  
        case "euro":
        dadosJSON = 'BRLEUR'
        dadosUrl = 'BRL-EUR'
        obj = JSON.parse(getAPI(`https://economia.awesomeapi.com.br/last/${dadosUrl}`))
        valorConvertido = valorReal * parseFloat(obj[dadosJSON].bid)
        exibir.innerHTML = `R$${valorReal} equivale a EXATAMENTE <strong>€ ${valorConvertido.toFixed(4)}</strong>  <br><br><br> 
        Cotação ${dadosUrl} atual: ${obj[dadosJSON].bid}<br>
        Dados atualizados em: ${obj[dadosJSON].create_date}<br>
        Alta: ${obj[dadosJSON].high}<br>
        Baixa: ${obj[dadosJSON].low}<br>
        `
        break;
  
        case "pesoarg":
        dadosJSON = 'BRLARS'
        dadosUrl = 'BRL-ARS'
        obj = JSON.parse(getAPI(`https://economia.awesomeapi.com.br/last/${dadosUrl}`))
        valorConvertido = valorReal * parseFloat(obj[dadosJSON].bid)
        exibir.innerHTML = `R$${valorReal} equivale a EXATAMENTE <strong>$ ${valorConvertido.toFixed(4)}</strong>  <br><br><br> 
        Cotação ${dadosUrl} atual: ${obj[dadosJSON].bid}<br>
        Dados atualizados em: ${obj[dadosJSON].create_date}<br>
        Alta: ${obj[dadosJSON].high}<br>
        Baixa: ${obj[dadosJSON].low}<br>
        `
        break;
  
        case "rublo":
        dadosJSON = 'BRLRUB'
        dadosUrl = 'BRL-RUB'
        obj = JSON.parse(getAPI(`https://economia.awesomeapi.com.br/last/${dadosUrl}`))
        valorConvertido = valorReal * parseFloat(obj[dadosJSON].bid)
        exibir.innerHTML = `R$${valorReal} equivale a EXATAMENTE <strong>₽ ${valorConvertido.toFixed(2)}</strong>  <br><br><br> 
        Cotação ${dadosUrl} atual: ${obj[dadosJSON].bid}<br>
        Dados atualizados em: ${obj[dadosJSON].create_date}<br>
        Alta: ${obj[dadosJSON].high}<br>
        Baixa: ${obj[dadosJSON].low}<br>
        `
        break;
  
        case "yuan":
        dadosJSON = 'BRLCNY'
        dadosUrl = 'BRL-CNY'
        obj = JSON.parse(getAPI(`https://economia.awesomeapi.com.br/last/${dadosUrl}`))
        valorConvertido = valorReal * parseFloat(obj[dadosJSON].bid)
        exibir.innerHTML = `R$${valorReal} equivale a EXATAMENTE <strong>¥ ${valorConvertido.toFixed(4)}</strong>  <br><br><br> 
        Cotação ${dadosUrl} atual: ${obj[dadosJSON].bid}<br>
        Dados atualizados em: ${obj[dadosJSON].create_date}<br>
        Alta: ${obj[dadosJSON].high}<br>
        Baixa: ${obj[dadosJSON].low}<br>
        `
        break;
    
      default:
        alert("Selecione uma moeda")
        break;
  
    }
    
  } else {
    alert("Insira um valor para converter")
  }

}