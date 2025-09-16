document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('riassunto-container');
  let riassuntoElement = null;

  const htmlContent = `
    <section class="d-lg-none pb-5 riassunto-section">
      <div id="list-example"
        class="list-group px-3 pb-5 pt-4 rounded-3 sezioni-aside shadow riassunto-lista-mobile">
        <p class="h5 text-cpo fw-bold mb-4">Sezioni riassuntive:</p>
        <a class="list-group-item list-group-item-action mb-3 rounded-3" href="#list-smart">La
          segreteria è più SMART con Quaderno Elettronico</a>
        <a class="list-group-item list-group-item-action mb-3 rounded-3" href="#list-vantaggi">I
          Vantaggi di avere una segreteria più SMART</a>
        <a class="list-group-item list-group-item-action mb-3 rounded-3" href="#list-prenotazione">Come
          funziona la Prenotazione Online</a>
        <a class="list-group-item list-group-item-action mb-3 rounded-3" href="#list-guida">Piccola
          Guida</a>
        <a class="list-group-item list-group-item-action rounded-3" href="#list-prova">Richiedi ora una
          Prova Gratuita</a>
      </div>
    </section>
  `;

  function createElementFromHTML(htmlString) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString.trim();
    return tempDiv.firstElementChild;
  }

  function handleResize() {
    const isMobile = window.innerWidth < 992;

    if (isMobile && !riassuntoElement) {
      // Crea e aggiungi l'elemento al container
      riassuntoElement = createElementFromHTML(htmlContent);
      container.appendChild(riassuntoElement);
    } else if (!isMobile && riassuntoElement) {
      // Rimuovi l'elemento dal container
      riassuntoElement.remove();
      riassuntoElement = null;
    }
  }

  // Esegui subito il controllo iniziale
  handleResize();

  // Aggiungi il listener per il resize
  window.addEventListener('resize', handleResize);
});