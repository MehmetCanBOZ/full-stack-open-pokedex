describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:8080");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("detailed page can be opened", function () {
    cy.visit("http://localhost:8080/pokemon/venusaur");
    cy.contains("venusaur");
    cy.contains("100");
  });
});
