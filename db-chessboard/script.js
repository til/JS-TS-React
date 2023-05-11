document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    const params = new URL(document.location).searchParams;
    const start = params.get("start");

    const col = start[0];
    const row = start[1];

    const selector = `.col-${col}.row-${row}`;

    document.querySelector(selector)?.classList.add("start");
  }
};
