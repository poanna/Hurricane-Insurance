const buildingMaterials = {
  // Method to return the element for the 'straw' radio button
  strawRadioBtn() {
    return cy.getBySel('straw');
  },

  // Method to return the element for the 'sticks' radio button
  sticksRadioBtn() {
    return cy.getBySel('sticks');
  },
  // Method to return the element for the 'bricks' radio button
  bricksRadioBtn() {
    return cy.getBySel('bricks');
  },
  // Method to return the element for the submit CTA
  submitCTA() {
    return cy.getBySel('submit_cta');
  },
  nextButton() {
    return cy.get('span').contains('Next');
  },
};

export default buildingMaterials;
