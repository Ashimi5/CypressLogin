describe('Login functionality of Orange HRM ', () => {
  it('Valid email and Valid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
  })

  it('Invalid email and Valid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder='Username']").type("Akkdmin");
    cy.get("input[placeholder='Password']").type("admin1323");
    cy.get("button[type='submit']").click();
  })


})