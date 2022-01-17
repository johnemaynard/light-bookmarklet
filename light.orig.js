javascript: (() => {
  const containerId = "make-me-pretty";
  if (document.getElementById(containerId)) {
    return;
  }
  const closeIconB64 =
    "PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4K";
  const colors = [
    { name: "Candle", kelvin: 1900, color: "rgba(255,147,41,1)" },
    { name: "40W Tungsten", kelvin: 2600, color: "rgba(255,197,143,1)" },
    { name: "100W Tungsten", kelvin: 2850, color: "rgba(255,214,170,1)" },
    { name: "Halogen", kelvin: 3200, color: "rgba(255,241,224,1)" },
    { name: "Carbon Arc", kelvin: 5200, color: "rgba(255,250,244,1)" },
    { name: "High Noon Sun", kelvin: 5400, color: "rgba(255,250,251,1)" },
    { name: "Direct Sunlight", kelvin: 6000, color: "rgba(255,255,255,1)" },
    { name: "Overcast Sky", kelvin: 7000, color: "rgba(201,226,255,1)" },
    { name: "Clear Blue Sky", kelvin: 20000, color: "rgba(64,156,255,1)" },
  ];
  const uninstall = () => {
    csp.remove();
    container.remove();
  };
  const csp = document.createElement("meta");
  csp.httpEquiv = "Content-Security-Policy";
  csp.content = `img-src 'self' data:;`;
  document.getElementsByTagName("head")[0].appendChild(csp);
  const container = document.createElement("div");
  container.id = containerId;
  container.style.position = "fixed";
  container.style.backgroundColor = "transparent";
  container.style.top = "0px";
  container.style.zIndex = "99999";
  container.style.top = "0";
  container.style.bottom = "0";
  container.style.left = "0";
  container.style.right = "0";
  container.style.transition = "background 300ms";
  container.onclick = () => {
    uninstall();
  };
  const toolbarWrapper = document.createElement("div");
  toolbarWrapper.style.background = "white";
  const toolbar = document.createElement("div");
  const s = toolbar.style;
  s.fontSize = "13px";
  s.boxShadow = "0 0 8px 0px rgba(0,0,0,0.18)";
  s.padding = "6px";
  s.display = "flex";
  s.alignItems = "center";
  s.backgroundColor = "rgba(255,255,255,0.41";
  colors.forEach((color) => {
    const item = document.createElement("div");
    const s = item.style;
    s.flex = "1 1 auto";
    s.color = "rgba(0,0,0,0.8)";
    s.fontWeight = "500";
    s.padding = "6px";
    s.marginRight = "6px";
    s.minHeight = "24px";
    s.display = "flex";
    s.alignItems = "flex-end";
    s.backgroundColor = color.color;
    item.innerText = color.kelvin + "K";
    item.onmouseenter = (e) => {
      e.target.style.textDecoration = "underline";
      e.target.style.cursor = "pointer";
    };
    item.onmouseleave = (e) => {
      e.target.style.textDecoration = "none";
      e.target.style.cursor = "none";
    };
    item.onclick = (e) => {
      e.stopPropagation();
      toolbar.childNodes.forEach((c) => (c.style.fontWeight = "normal"));
      e.target.style.fontWeight = "bold";
      container.style.backgroundColor = color.color;
      toolbarWrapper.style.backgroundColor = color.color;
    };
    toolbar.appendChild(item);
  });
  const close = document.createElement("div");
  const cs = close.style;
  cs.fontWeight = "500";
  cs.display = "flex";
  cs.alignItems = "center";
  cs.justifyContent = "center";
  cs.height = "24px";
  cs.width = "24px";
  cs.borderRadius = "23px";
  cs.padding = "6px";
  cs.margin = "0px 6px";
  cs.transition = "background 300ms, border 300ms";
  close.onclick = () => {
    uninstall();
  };
  close.onmouseenter = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.backgroundColor = "rgba(255,255,255,0.4)";
    e.target.animate([{ transform: "rotate(-90deg)" }], 200);
  };
  close.onmouseleave = (e) => {
    e.target.style.cursor = "none";
    e.target.style.backgroundColor = "transparent";
    e.target.animate([{ transform: "rotate(90deg)" }], 200);
  };
  const closeIcon = document.createElement("img");
  closeIcon.src = "data:image/svg+xml;base64," + closeIconB64;
  close.appendChild(closeIcon);
  toolbar.appendChild(close);
  toolbarWrapper.append(toolbar);
  container.appendChild(toolbarWrapper);
  document.body.appendChild(container);
})();
