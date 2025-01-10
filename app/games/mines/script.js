document.addEventListener("DOMContentLoaded", function () {
  const cellsBoard = document.querySelector(".cells-board");
  if (!cellsBoard) {
      console.error("Element .cells-board not found.");
      return;
  }

  const presetValues = [1, 3, 5, 7];
  const presetLimits = {
      1: 7,
      3: 5,
      5: 4,
      7: 3
  };
  let currentPresetIndex = 0;

  const trapsAmountElement = document.getElementById("trapsAmount");
  const prevPresetButton = document.getElementById("prev_preset_btn");
  const nextPresetButton = document.getElementById("next_preset_btn");
  const modeButton = document.getElementById("modeButton");

  let currentMode = "nesk";

  function updateTrapsAmount() {
      if (trapsAmountElement) {
          trapsAmountElement.textContent = presetValues[currentPresetIndex];
      }
  }

  if (prevPresetButton) {
      prevPresetButton.addEventListener("click", function () {
          if (currentPresetIndex > 0) {
              currentPresetIndex--;
              updateTrapsAmount();
          }
      });
  }

  if (nextPresetButton) {
      nextPresetButton.addEventListener("click", function () {
          if (currentPresetIndex < presetValues.length - 1) {
              currentPresetIndex++;
              updateTrapsAmount();
          }
      });
  }

  if (modeButton) {
      modeButton.addEventListener("click", function () {
          currentMode = currentMode === "nesk" ? "all" : "nesk";
          modeButton.textContent = currentMode === "nesk" ? "Switch to All" : "Switch to multiple";
      });
  }

//   updateTrapsAmount();

  function addCellClickAnimation() {
      const cells = document.querySelectorAll(".cells-board .cell");
      cells.forEach(cell => {
          // Disable pointer events for the entire cell
          cell.style.pointerEvents = "none";
          // Disable text selection
          cell.style.userSelect = "none";
          cell.style.webkitUserSelect = "none";
      });
  }

  let isFirstPlay = true;
  const playButton = document.getElementById("playButton");

  if (playButton) {
      playButton.addEventListener("click", function () {
          playButton.disabled = true;

          let cells = document.querySelectorAll(".cells-board .cell");
          if (!isFirstPlay) {
              cellsBoard.innerHTML = '';
              populateBoard();
              cells = document.querySelectorAll(".cells-board .cell");
          }

          const trapsCount = parseInt(trapsAmountElement.textContent);
          const totalCells = cells.length;
          const trapIndexes = new Set();

          while (trapIndexes.size < trapsCount) {
              const randomIndex = Math.floor(Math.random() * totalCells);
              trapIndexes.add(randomIndex);
          }

          if (currentMode === "nesk") {
              const allowedTraps = presetLimits[trapsCount] || 0;
              const trapOrder = [];

              while (trapOrder.length < allowedTraps) {
                  const randomTrapIndex = Math.floor(Math.random() * cells.length);
                  if (!trapOrder.includes(randomTrapIndex)) {
                      trapOrder.push(randomTrapIndex);
                  }
              }

              let currentTrapIndex = 0;

              function revealTraps() {
                  if (currentTrapIndex < trapOrder.length) {
                      const trapCellIndex = trapOrder[currentTrapIndex];
                      const trapCell = cells[trapCellIndex];
                      trapCell.classList.add("cell-fade-out");

                      setTimeout(async () => {
                          trapCell.innerHTML = '';
                          try {
                              const response = await fetch("img/stars.svg");
                              const svgContent = await response.text();
                              const svgContainer = document.createElement("div");
                              svgContainer.style.cssText = `
                                  width: 56px;
                                  height: 56px;
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                  position: relative;
                                  pointer-events: none;
                              `;
                              svgContainer.innerHTML = svgContent;
                              trapCell.appendChild(svgContainer);

                              const svgElement = svgContainer.querySelector("svg");
                              if (svgElement) {
                                  svgElement.style.cssText = `
                                      width: 56px;
                                      height: 56px;
                                      max-width: 100%;
                                      max-height: 100%;
                                      display: block;
                                      opacity: 0;
                                      transform: scale(0);
                                      transition: opacity 0.3s, transform 0.3s;
                                  `;
                                  requestAnimationFrame(() => {
                                      svgElement.style.opacity = '1';
                                      svgElement.style.transform = "scale(1)";
                                  });
                              }
                          } catch {
                              const fallbackImage = document.createElement("img");
                              fallbackImage.style.cssText = `
                                  width: 56px;
                                  height: 56px;
                                  display: block;
                                  opacity: 0;
                                  transform: scale(0);
                                  transition: opacity 0.3s, transform 0.3s;
                                  pointer-events: none;
                              `;
                              fallbackImage.src = "img/stars.svg";
                              trapCell.appendChild(fallbackImage);
                              requestAnimationFrame(() => {
                                  fallbackImage.style.opacity = '1';
                                  fallbackImage.style.transform = "scale(1)";
                              });
                          }

                          trapCell.classList.remove("cell-fade-out");
                          currentTrapIndex++;
                          setTimeout(revealTraps, 700);
                      }, 400);
                  } else {
                      playButton.disabled = false;
                      isFirstPlay = false;
                  }
              }

              revealTraps();
          } else {
              Promise.all([...cells].map((cell, index) => {
                  return new Promise(async resolve => {
                      cell.classList.add("cell-fade-out");
                      cell.innerHTML = '';
                      try {
                          const response = await fetch(trapIndexes.has(index) ? "img/krest.svg" : "img/stars.svg");
                          const svgContent = await response.text();
                          const svgContainer = document.createElement("div");
                          svgContainer.style.cssText = `
                              width: 56px;
                              height: 56px;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              position: relative;
                              pointer-events: none;
                          `;
                          svgContainer.innerHTML = svgContent;
                          cell.appendChild(svgContainer);

                          const svgElement = svgContainer.querySelector("svg");
                          if (svgElement) {
                              svgElement.style.cssText = `
                                  width: 56px;
                                  height: 56px;
                                  max-width: 100%;
                                  max-height: 100%;
                                  display: block;
                                  opacity: 0;
                                  transform: scale(0);
                                  transition: opacity 0.3s, transform 0.3s;
                              `;
                              requestAnimationFrame(() => {
                                  svgElement.style.opacity = '1';
                                  svgElement.style.transform = "scale(1)";
                              });
                          }
                      } catch {
                          const fallbackImage = document.createElement("img");
                          fallbackImage.style.cssText = `
                              width: 56px;
                              height: 56px;
                              display: block;
                              opacity: 0;
                              transform: scale(0);
                              transition: opacity 0.3s, transform 0.3s;
                              pointer-events: none;
                          `;
                          fallbackImage.src = trapIndexes.has(index) ? "img/krest.svg" : "img/stars.svg";
                          cell.appendChild(fallbackImage);
                          requestAnimationFrame(() => {
                              fallbackImage.style.opacity = '1';
                              fallbackImage.style.transform = "scale(1)";
                          });
                      }
                      cell.classList.remove("cell-fade-out");
                      resolve();
                  });
              })).then(() => {
                  playButton.disabled = false;
                  isFirstPlay = false;
              });
          }
      });
  }

  function populateBoard() {
      const images = [
          "output_svgs/image_5450.svg", "output_svgs/image_11641.svg", "output_svgs/image_18337.svg",
          "output_svgs/image_24493.svg", "output_svgs/image_31201.svg", "output_svgs/image_37357.svg",
          "output_svgs/image_44065.svg", "output_svgs/image_50221.svg", "output_svgs/image_56929.svg",
          "output_svgs/image_63085.svg", "output_svgs/image_69793.svg", "output_svgs/image_75949.svg",
          "output_svgs/image_82645.svg", "output_svgs/image_89353.svg", "output_svgs/image_95509.svg",
          "output_svgs/image_102217.svg", "output_svgs/image_108373.svg", "output_svgs/image_115081.svg",
          "output_svgs/image_121237.svg", "output_svgs/image_127381.svg", "output_svgs/image_134077.svg",
          "output_svgs/image_140221.svg", "output_svgs/image_146917.svg", "output_svgs/image_153061.svg",
          "output_svgs/image_159757.svg"
      ];

      images.forEach(image => {
          const cell = document.createElement("div");
          cell.className = "cell";
          cell.innerHTML = `<img width="56" height="56" src="${image}" style="pointer-events: none;">`;
          cellsBoard.appendChild(cell);
      });

      addCellClickAnimation();
  }

  populateBoard();
});
