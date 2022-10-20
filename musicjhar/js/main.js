class musicPlayer {
  dirAudio = "audio/";

  songs = ["escandalosos.mp3" , "lymsong.mp3", "cancion.mp3"];

  constructor() {
    this.play = this.play.bind(this);
    this.playBtn = document.getElementById("play");
    this.playBtn.addEventListener("click", this.play);
    this.controlPanel = document.getElementById("control-panel");
    this.infoBar = document.getElementById("info");
    this.status = false;
    this.audio = document.getElementById("Music");

    // Nuestra canción predeterminada
    this.mysong = document.getElementById("mysong");
    this.mysong.src = `${this.dirAudio}lymsong.mp3`;
    this.audio.load();

    // Botón next | evento de click
    this.next = this.next.bind(this);
    this.nextBtn = document.getElementById("next");
    this.nextBtn.addEventListener("click", this.next);

    // Botón prev | evento de click
    this.prev = this.prev.bind(this);
    this.prevtBtn = document.getElementById("prev");
    this.prevtBtn.addEventListener("click", this.prev);

  }

  play() {
    let controlPanelObj = this.controlPanel,
      infoBarObj = this.infoBar;

    Array.from(controlPanelObj.classList).find(function (element) {
      return element !== "active"
        ? controlPanelObj.classList.add("active")
        : controlPanelObj.classList.remove("active");
    });

    Array.from(infoBarObj.classList).find(function (element) {
      return element !== "active"
        ? infoBarObj.classList.add("active")
        : infoBarObj.classList.remove("active");
    });

    this.status = !this.status;

    if (this.status == true) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  next() {
    // Obtener canción actual
    const currentSong = this.mysong.src.split("/")[5];
    console.log(currentSong);
    let flag = false;

    this.songs.forEach((song, index) => {
      if (currentSong == song && this.songs[index + 1]) {
        this.mysong.src = `${this.dirAudio}${this.songs[index + 1]}`;
        flag = true
      }
    });

    if(flag){
        this.audio.load();
        this.play();
        this.play();
    }
  }

  prev() {
    // Obtener canción actual
    const currentSong = this.mysong.src.split("/")[5];
    console.log(currentSong);

    let flag = false;

    this.songs.forEach((song, index) => {
      if (currentSong == song && this.songs[index - 1]) {
        this.mysong.src = `${this.dirAudio}${this.songs[index - 1]}`;
        flag = true
      }
    });

    if(flag){
        this.audio.load();
        this.play();
        this.play();
    }
  }

}

const newMusicPlayer = new musicPlayer();
