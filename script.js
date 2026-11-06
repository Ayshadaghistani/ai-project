// Highlight one type of claim (fact, interpretation or prediction) at a time.
// Without JavaScript the page still works: every claim is simply shown normally.

const buttons = document.querySelectorAll(".filter");
const claims = document.querySelectorAll(".claim");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.filter;

    buttons.forEach((b) => {
      const active = b === button;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });

    claims.forEach((claim) => {
      const match = type === "all" || claim.dataset.type === type;
      claim.classList.toggle("is-dim", !match);
    });

    // Open every case study so highlighted claims inside them are visible.
    if (type !== "all") {
      document.querySelectorAll("details.case").forEach((d) => (d.open = true));
    }
  });
});
