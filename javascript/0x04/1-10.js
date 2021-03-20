const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      macos: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.macos() || this.windows();
      },
    },
    isBrowser = {
      edge: () => ua.match(/edge/i),
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      any: function () {
        return (
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie()
        );
      },
    };
  $id.innerHTML = `
      <p>User Agent: <b>${ua}</b></p>
    <ul>
      <li>Device: <b>${isMobile.any() ? "Mobile" : "Desktop"}</b></li>
      <li>Platform: <b>${
        isMobile.any() ? isMobile.any() : isDesktop.any()
      }</b></li>
      <li>Browser: <b>${isBrowser.any()}</b></li>
    </ul>
    `;
}
