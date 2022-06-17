const boxes = document.querySelectorAll(".boxes");
const body = document.body;

const gradients = [
  {
    direction: "135deg",
    color1: "#ea52f8",
    color2: "#0066ff",
  },
  {
    direction: "135deg",
    color1: "#799f0c",
    color2: "#ffe000",
  },
  {
    direction: "135deg",
    color1: "#191165",
    color2: "#43c6ac",
  },
  {
    direction: "135deg",
    color1: "#ff886a",
    color2: "#fcf6cf",
  },
  {
    direction: "135deg",
    color1: "#2bc0e4",
    color2: "#eaecc6",
  },
  {
    direction: "135deg",
    color1: "#8c366c",
    color2: "#6e64e7",
  },
  {
    direction: "135deg",
    color1: "#0f3443",
    color2: "#34e89e",
  },
  {
    direction: "135deg",
    color1: "#0f0c29",
    color2: "#302b63",
  },
  {
    direction: "135deg",
    color1: "#603813",
    color2: "#b29f94",
  },
];

boxes.forEach((box, idx) => {
  box.style = `
  background-image: linear-gradient(
    ${gradients[idx].direction}, 
    ${gradients[idx].color1}, 
    ${gradients[idx].color2}
    )`;
});

boxes.forEach((box, idx) => {
    box.addEventListener('click', () => {
        body.style = `
        background-image: linear-gradient(
            ${gradients[idx].direction}, 
            ${gradients[idx].color1}, 
            ${gradients[idx].color2}
            )`
    })
});