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
    context('When I have not entered a zip code', () => {
      beforeEach(() => {
        homepage.getQuoteCTA().click();
      });

      it('Then I should see a "required" message', () => {
        homepage.errorMessage().should('contain.text', 'Required');
      });
    });

    context('When I enter an invalid zip code', () => {
      beforeEach(() => {
        homepage.enterZipCode(zipCodeGenerator.generateInvalidZipCode());
        homepage.getQuoteCTA().click();
      });

      it('Then I should see an "invalid zip code" message', () => {
        homepage.errorMessage().should('contain.text', 'Invalid zip code');
      });
    });

    context('When I enter a valid zip code', () => {
      beforeEach(() => {
        homepage.enterZipCode(zipCodeGenerator.generateValidZipCode());
        homepage.getQuoteCTA().click();
      });

      it('Then I can select "Bricks" as building material and proceed to the water-proximity page', () => {
        buildingMaterials.bricksRadioBtn().click();
        buildingMaterials.nextButton().click();
        waterProximity.verifyPartialUrl('/water-proximity');
      });

      context('And answered the water proximity question', () => {
        beforeEach(() => {
          buildingMaterials.bricksRadioBtn().click();
          buildingMaterials.nextButton().click();
          waterProximity.yesRadioButton().click();
          waterProximity.nextCTA().click();
        });

        it('Then I should navigate to the quote page and see the flood protection option unchecked', () => {
          quote.verifyPartialUrl('/quote');
          quote.floodProtectionButton().should('not.be.checked');
        });

        it('And I should see two plan options', () => {
          quote.completePlanHeader();
          quote.standardPlanHeader();
        });
      });
    });
  });
});
