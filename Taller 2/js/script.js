fetch("https://api.coincap.io/v2/assets/")
  .then((response) => response.json())
  .then((data) => {
    const bitcoinArray = data.data;
    // // Crear tabla
    const table = document.createElement("table");
    // // Crear cabezera
    const tableHeader = document.createElement("tr");
    // Crear  las columnas a la cabecera
    const idHeader = document.createElement("th");
    const nameHeader = document.createElement("th");
    const symbolHeader = document.createElement("th");
    const urlHeader = document.createElement("th");

    // // Agrehar texto a las columnas
    idHeader.innerText = "ID";
    nameHeader.innerText = "Name";
    symbolHeader.innerText = "Price (USD)";
    urlHeader.innerText = "Explorar";
    // // Agregar columnas a la cabecera
    tableHeader.appendChild(idHeader);
    tableHeader.appendChild(nameHeader);
    tableHeader.appendChild(symbolHeader);
    tableHeader.appendChild(urlHeader);
    // // Agregar la cabecera a la tabla
    table.appendChild(tableHeader);
    for (let i = 0; i < bitcoinArray.length; i++) {
      // Crear una fila
      const bitcoinRow = document.createElement("tr");
      // Crear columnas
      const idData = document.createElement("td");
      const nameData = document.createElement("td");
      const symbolData = document.createElement("td");
      const urlData = document.createElement("td");
      // Agregar datos a las columnas
      idData.innerHTML = i + 1;
      nameData.innerHTML = bitcoinArray[i].name;
      symbolData.innerHTML = bitcoinArray[i].priceUsd;
      urlData.innerHTML = `<a href="${bitcoinArray[i].explorer} target="_blanck">Detalles</a>`;
      // Agregar las columnas a las filas
      bitcoinRow.appendChild(idData);
      bitcoinRow.appendChild(nameData);
      bitcoinRow.appendChild(symbolData);
      bitcoinRow.appendChild(urlData);
      // Agregar tala a la fila
      table.appendChild(bitcoinRow);
    }
    // Agregar la tabla al body

    document.body.appendChild(table);
  });
