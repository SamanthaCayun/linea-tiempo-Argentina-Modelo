function scrollTimeline(direction) {
  const timeline = document.getElementById("timeline");
  const scrollAmount = 300; // podés ajustar este valor

  timeline.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
