const quote = {
  availablePlansHeader() {
    return cy.get('h1').contains('available');
  },

  standardPlanHeader() {
    return cy.get('h3').contains('Standard');
  },

  standardPlanCost() {
    return cy
      .get('h3')
      .contains('Standard')
      .parent('div')
      .siblings('div')
      .find('h3')
      .contains('$');
  },

  completePlanHeader() {
    return cy.get('h3').contains('Complete');
  },

  completePlanCost() {
    return cy
      .get('h3')
      .contains('Complete')
      .parent('div')
      .siblings('div')
      .find('h3')
      .contains('$');
  },

  chooseStandardCTA() {
    return cy.get('span').contains('Choose Standard');
  },

  floodProtectionHeader() {
    return cy.get('span').contains('Flood Protection');
  },

  floodProtectionButton() {
    return cy.get('[name="includeFloodProtection"]');
  },

  chooseCompleteCTA() {
    return cy.get('span').contains('Choose Complete');
  },

  verifyPartialUrl(partialUrl) {
    return cy.url().should('include', partialUrl);
  },
};

export default quote;
