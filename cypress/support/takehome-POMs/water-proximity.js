const waterProximity = {
  yesRadioButton() {
    return cy.get('[value="true"]');
  },

  noRadioButton() {
    return cy.get('[value="false"]');
  },

  nextCTA() {
    return cy.get('span').contains('Next');
  },
  verifyPartialUrl(partialUrl) {
    cy.url().should('include', partialUrl);
  },
};
export default waterProximity;
