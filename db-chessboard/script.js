document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const start = params.get("start");

    console.log("the start param is", start);
  }
};
