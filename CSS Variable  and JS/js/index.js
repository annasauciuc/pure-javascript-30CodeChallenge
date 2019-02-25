const inputs = document.querySelectorAll(".controls input");
const blurSpan = document.querySelector(".blur");
const baseSpan = document.querySelector(".base");
const spaceSpan = document.querySelector(".space");

function handleUpdate() {
  console.log("dataset", this.dataset);
  const suffix = this.dataset.sizing || "";

  console.log("suffix", suffix);
  console.log("value :", this.value);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  blurSpan.innerHTML = "";
  blurSpan.innerHTML = `${this.value}`;
  baseSpan.innerHTML = "";
  baseSpan.innerHTML = `${this.value}`;
  spaceSpan.innerHTML = "";
  spaceSpan.innerHTML = `${this.value}`;

}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
