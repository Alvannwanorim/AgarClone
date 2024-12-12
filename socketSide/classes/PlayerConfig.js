class PlayerConfig {
  constructor(settings) {
    this.xVictor = 0;
    this.yVictor = 0;
    this.speed = settings.defaultSpeed;
    this.zoom = settings.defaultZoom;
  }
}

module.exports = PlayerConfig;
