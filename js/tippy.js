document.querySelectorAll(".dragable:has(p)").forEach(dragable => {
  const tippyText = dragable.querySelector("p");
  if (!tippyText) return;
  tippy(dragable, {
    content: tippyText,
    placement: 'left',
    arrow: true,
    trigger: 'mouseenter'
  });
})

