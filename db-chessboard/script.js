document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    const params = new URL(document.location).searchParams;
    const start = params.get("start");

    const selector = `.col-${start[0]}.row-${start[1]}`;

    console.log("the selector is", selector);
  }
};
