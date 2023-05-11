document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    const params = new URL(document.location).searchParams;
    const start = params.get("start");

    console.log("the start param is", start);
  }
};
