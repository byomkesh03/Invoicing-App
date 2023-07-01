// Global array to store invoices
let invoices = [];

// Function to create a new invoice
function createInvoice() {
    // Get the input values from the form
  const lineItems = document.getElementById('line-items').value;
  const notes = document.getElementById('notes').value;
  const dueDate = document.getElementById('due-date').value;

   // Create a new invoice object
   const invoice = {
    lineItems: lineItems,
    notes: notes,
    dueDate: dueDate,
    status: 'outstanding' // Default status is set to 'outstanding'
};

// Add the invoice to the invoices array
invoices.push(invoice);

  // Clear the form fields
  document.getElementById('line-items').value = '';
  document.getElementById('notes').value = '';
  document.getElementById('due-date').value = '';

  // Call a function to display the newly created invoice
  displayInvoices();
}

// Function to display invoices
function displayInvoices() {
    // Get the 'view-invoices' section element
    const viewInvoicesSection = document.getElementById('view-invoices');
  
    // Clear the existing content
    viewInvoicesSection.innerHTML = '';
  
    // Loop through the invoices array
    invoices.forEach((invoice, index) => {
      // Create HTML elements to display each invoice
      const invoiceContainer = document.createElement('div');
      invoiceContainer.classList.add('invoice');

      const invoiceLineItems = document.createElement('p');
    invoiceLineItems.textContent = `Line Items: ${invoice.lineItems}`;

    const invoiceNotes = document.createElement('p');
    invoiceNotes.textContent = `Notes: ${invoice.notes}`;

    const invoiceDueDate = document.createElement('p');
    invoiceDueDate.textContent = `Due Date: ${invoice.dueDate}`;

    const invoiceStatus = document.createElement('p');
    invoiceStatus.textContent = `Status: ${invoice.status}`;

    const invoiceDeleteBtn = document.createElement('button');
    invoiceDeleteBtn.textContent = 'Delete';
    invoiceDeleteBtn.addEventListener('click', () => {
      deleteInvoice(index);
    });

     // Append the HTML elements to the 'view-invoices' section
     invoiceContainer.appendChild(invoiceLineItems);
     invoiceContainer.appendChild(invoiceNotes);
     invoiceContainer.appendChild(invoiceDueDate);
     invoiceContainer.appendChild(invoiceStatus);
     invoiceContainer.appendChild(invoiceDeleteBtn);
 
     viewInvoicesSection.appendChild(invoiceContainer);
   });
 }

 // Function to delete an invoice
function deleteInvoice(index) {
    // Remove the invoice from the invoices array
    invoices.splice(index, 1);
  
    // Call the displayInvoices() function to update the UI
    displayInvoices();
  }

  // Function to initialize the app
function initApp() {
  // Add event listener to the form submit button
  const createInvoiceForm = document.getElementById('create-invoice-form');
  createInvoiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createInvoice();
  });

  // Call the displayInvoices() function to show existing invoices
  displayInvoices();
}

// Call the initApp() function when the page is loaded
window.onload = initApp;
  