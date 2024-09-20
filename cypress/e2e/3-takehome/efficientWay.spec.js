import buildingMaterials from '../../support/takehome-POMs/building-materials';
import homepage from '../../support/takehome-POMs/homepage';
import quote from '../../support/takehome-POMs/quote';
import waterProximity from '../../support/takehome-POMs/water-proximity';
import zipCodeGenerator from '../../support/takehome-POMs/zipCode';

describe('Main Page Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Given that I am on the main page', () => {
    beforeEach(() => {
      homepage.getQuoteCTA().click();
    });

    it('Then I should see a "required" message when not entering a zip code', () => {
      homepage.errorMessage().should('contain.text', 'Required');
    });

    it('Then I should see an "invalid zip code" message when entering an invalid zip code', () => {
      homepage.enterZipCode(zipCodeGenerator.generateInvalidZipCode());
      homepage.getQuoteCTA().click();
      homepage.errorMessage().should('contain.text', 'Invalid zip code');
    });

    it('Then I can select "Bricks" as building material and proceed to the water-proximity page after entering a valid zip code', () => {
      homepage.enterZipCode(zipCodeGenerator.generateValidZipCode());
      homepage.getQuoteCTA().click();
      buildingMaterials.bricksRadioBtn().click();
      buildingMaterials.nextButton().click();
      waterProximity.verifyPartialUrl('/water-proximity');
    });

    it('Then I should navigate to the quote page and see the flood protection option unchecked after answering the water proximity question', () => {
      homepage.enterZipCode(zipCodeGenerator.generateValidZipCode());
      homepage.getQuoteCTA().click();
      buildingMaterials.bricksRadioBtn().click();
      buildingMaterials.nextButton().click();
      waterProximity.yesRadioButton().click();
      waterProximity.nextCTA().click();
      quote.verifyPartialUrl('/quote');
      quote.floodProtectionButton().should('not.be.checked');
    });

    it('And I should see two plan options after answering the water proximity question', () => {
      homepage.enterZipCode(zipCodeGenerator.generateValidZipCode());
      homepage.getQuoteCTA().click();
      buildingMaterials.bricksRadioBtn().click();
      buildingMaterials.nextButton().click();
      waterProximity.yesRadioButton().click();
      waterProximity.nextCTA().click();
      quote.verifyPartialUrl('/quote');
      quote.completePlanHeader();
      quote.standardPlanHeader();
    });
  });
});
