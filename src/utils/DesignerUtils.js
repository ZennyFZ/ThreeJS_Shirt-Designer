const downloadCanvasToImage = () => {
    const canvas = document.querySelector("canvas");
    const dataURL = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = dataURL;
    link.download = "canvas.png";
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const reader = (file) =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
});

const urlToBase64 = (url, callback) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => new FileReader())
      .then(reader => {
        reader.readAsDataURL(blob);
        reader.onloadend = () => callback(reader.result);
      })
      .catch(error => console.error(error));
}

export { downloadCanvasToImage, reader, urlToBase64 };