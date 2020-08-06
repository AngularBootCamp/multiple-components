export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });
  it('should have both feature headings', () => {
    cy.get('.card-title').then(elements => {
      expect(elements).to.have.length(2);
      expect(
        elements.toArray().map(item => item.innerText)
      ).to.deep.equal(['Payroll Functionality', 'HR Functionality']);
    });
  });
});
