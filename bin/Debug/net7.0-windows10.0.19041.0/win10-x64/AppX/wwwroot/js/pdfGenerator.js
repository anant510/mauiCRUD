window.generatePDF = (tableId) => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the table element by ID
    const table = document.getElementById(tableId);

    if (!table) {
        console.error("Table not found with id: " + tableId);
        return;
    }

    // Generate the PDF from the table
    doc.autoTable({ html: table });

    // Save the PDF
    doc.save('table.pdf');
    // Notify Blazor that the PDF has been downloaded
    DotNet.invokeMethodAsync('firstmaui', 'OnPDFDownloaded')
        .then(() => console.log('PDF download success in Download Folder'))
        .catch(error => console.error('PDF download success callback failed', error));
};
