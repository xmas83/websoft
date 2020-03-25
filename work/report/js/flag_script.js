function display(flagContainer, value) {
  flagContainer.style.display = "block";
  window.setTimeout(function() {
    flagContainer.style.opacity = 1;
    flagContainer.style.transform = "scale(1)";
    flagContainer.innerHTML = value;
  }, 300);
}
document.getElementById("flag-container").addEventListener("click", () => {
  let flagContainer = document.getElementById("flag-container");
  flagContainer.style.opacity = 0;
  flagContainer.style.transform = "scale(0)";
  window.setTimeout(function() {
    flagContainer.style.display = "none";
  }, 700);
});

document.getElementById("cmr").addEventListener("click", () => {
  console.log("Cameroon flag");
  let flag = "";
  flag += `
    <div style="width: ${600}px; height: ${200}px; display:flex; border: ${1}px solid; margin: 0 auto;">
        <div style="width: ${200}px; height: ${200}px; background:green"></div>
        <div style="width: ${200}px; height: ${200}px; background:red">
        <div id="star-five"></div>
        </div>
        <div style="width: ${200}px; height: ${200}px; background:yellow"></div>
    </div>    
    `;
  let flagContainer = document.getElementById("flag-container");
  display(flagContainer, flag);
});

document.getElementById("swe").addEventListener("click", async () => {
  console.log("Swedish flag");
  let flag = "";
  flag += `
        <div style="width: ${600}px; height: ${200}px; border: ${1}px solid; background:yellow; display:flex; justify-content:space-between;margin: 0 auto;">
            <div style="width: ${30}%; height: ${200}px; display:flex; flex-direction:column; justify-content:space-between">
                <div style="width: ${100}%; height: ${40}%; background:blue"></div>
                <div style="width: ${100}%; height: ${40}%; background:blue"></div>
            </div>
            <div style="width: ${60}%; height: ${200}px; display:flex; flex-direction:column; justify-content:space-between">
                <div style="width: ${100}%; height: ${40}%; background:blue"></div>
                <div style="width: ${100}%; height: ${40}%; background:blue"></div>
            </div>
        </div>
    `;
  let flagContainer = document.getElementById("flag-container");
  display(flagContainer, flag);
});

document.getElementById("gr").addEventListener("click", async () => {
  let flag = "";
  flag += `
          <div style="display:flex; flex-direction:column;width: ${600}px; height: ${180}px;border: ${1}px solid; justify-content:space-between;margin: 0 auto;background:white">
              <div style="display:flex; width: ${100}%; height: ${100}px">
                  <div style="width: ${40}%; height: ${100}px; display:flex;">
                      <div style="width: ${50}%; height: ${100}%; display:flex; flex-direction:column; justify-content:space-between">
                          <div style="width: ${90}%; height: ${40}%; background:blue"></div>
                          <div style="width: ${90}%; height: ${40}%; background:blue"></div>
                      </div>
                      <div style="width: ${50}%; height: ${100}%; display:flex; flex-direction:column; justify-content:space-between">
                          <div style="width: ${100}%; height: ${40}%; background:blue"></div>
                          <div style="width: ${100}%; height: ${40}%; background:blue"></div>
                      </div>
                  </div>
                  <div style="display:flex; flex-direction:column;width: ${60}%; height: ${100}px;justify-content:space-between">
                      <div style="width: ${100}%; height: ${20}%; background:blue"></div>
                      <div style="width: ${100}%; height: ${20}%; background:blue"></div>
                      <div style="width: ${100}%; height: ${20}%; background:blue"></div>
                  </div>
              </div>
              <div style="width: ${100}%; height: ${20}px; background:white"></div>
              <div style="display:flex; flex-direction:column;width: ${100}%; height: ${60}px;justify-content:space-between">
                 <div style="width: ${100}%; height: ${20}px; background:blue"></div>
                 <div style="width: ${100}%; height: ${20}px; background:blue"></div>
              </div>
          </div>
      `;
  let flagContainer = document.getElementById("flag-container");
  display(flagContainer, flag);
});
