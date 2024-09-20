import buildingMats from '../../support/takehome-POMs/building-materials';
import homepage from '../../support/takehome-POMs/homepage';
import quote from '../../support/takehome-POMs/quote';
import waterProximity from '../../support/takehome-POMs/water-proximity';

describe(`As a potential customer I'm interested in receiving a quote for hurricane insurance`, () => {
  context(
    'Given that I am interested in receiving a hurricane insurance quote',
    () => {
      it('When I visit the the website', () => {
        cy.visit('/');
      });
      it('And I enter my zip code', () => {
        cy.get('[data-testid="postalCode"]').type('90210');
        // homepage.postalCodeField().type('90210');
        homepage.getQuoteCTA().click();
      });
      it('And I select my building material type', () => {
        buildingMats.sticksRadioBtn().click();
        buildingMats.submitCTA().click();
      });
      it('And I select if my home is within a mile of a body of water', () => {
        waterProximity.noRadioButton().click();
        waterProximity.nextCTA().click();
      });
      it('Then I verify that I am presented with two insurance plans', () => {
        cy.url().should('include', '/quote');

        // Important elements should be visible
        quote.availablePlansHeader().should('be.visible');
        quote.standardPlanHeader().should('be.visible');
        quote.completePlanHeader().should('be.visible');
        quote.standardPlanCost().should('be.visible');
        quote.completePlanCost().should('be.visible');
        quote.floodProtectionHeader().should('be.visible');
        // Buttons should be clickable
        quote.chooseStandardCTA().should('not.be.disabled');
        quote.chooseCompleteCTA().should('not.be.disabled');
        quote.floodProtectionButton().should('not.be.disabled');

        // Both plans should have a cost greater than $0
        // Standard plan's cost should be less than Complete's cost
        quote.standardPlanCost().then((sCost) => {
          const standardPrice = parseInt(sCost.text().match(/\d+/g), 10);

          quote.completePlanCost().then((cCost) => {
            const completePrice = parseInt(cCost.text().match(/\d+/g), 10);

            expect(standardPrice).greaterThan(0);
            expect(completePrice).greaterThan(0);
            expect(standardPrice).lessThan(completePrice);
          });
        });
      });
    }
  );
});
