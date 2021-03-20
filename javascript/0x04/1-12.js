const d = document,
  n = navigator,
  $boxWebcam = d.getElementById("boxWebcam");
export default function webcamDetection() {
  //console.log(n.mediaDevices.getUserMedia);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $boxWebcam.srcObject = stream;
        $boxWebcam.play();
      })
      .catch((err) => {
        $boxWebcam.insertAdjacentHTML(
          "beforebegin",
          `<p>Oops: <mark>${err}</mark></p>`
        );
        console.error(err);
      });
  }
}
