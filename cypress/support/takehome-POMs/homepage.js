const homepage = {
  postalCodeField() {
    return cy.getBySel('postalCode');
  },

  getQuoteCTA() {
    return cy.get('span').contains('Get a quote');
  },

  errorMessage() {
    return cy.get('.MuiFormHelperText-root.Mui-error');
  },

  enterZipCode(zipCode) {
    return cy.get('input[name="postalCode"]').type(zipCode);
  },
};

export default homepage;
