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